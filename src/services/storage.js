import { createState, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence';
import { auth, userRef, db } from '../config/firebase-config';
import {
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    deleteUser,
} from 'firebase/auth';
import {
    query,
    where,
    setDoc,
    getDocs,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
    arrayUnion,
    arrayRemove,
} from "@firebase/firestore";

const initialState = {
    favouriteMovieIds: [],
    isOpen: false,
    isMenuOpen: false,
    uid: '',
    storageUser: {},
}

const store = createState(initialState);

export function useStore() {
    const withState = useState(store);
    withState.attach(Persistence('state'))

    return {
        get state() {
            return withState.get();
        },

        async toggleFavouriteMovieId(movieId) {
            let result = [...this.state.favouriteMovieIds];
            const updateUserDoc = doc(db, 'users', this.state.uid);

            console.log(store.storageUser.movies.length);

            const index = result.indexOf(movieId);
            if (index === -1) {
                result.push(movieId);
                await updateDoc(updateUserDoc, {
                    movies: arrayUnion(movieId)
                })
            } else {
                result.splice(index, 1);
                await updateDoc(updateUserDoc, {
                    movies: arrayRemove(movieId)
                })
            }
            store.favouriteMovieIds.set(result);
        },

        toggleSearchModal(toggle) {
            store.isOpen.set(toggle);
        },

        toggleMobileMenu(toggleSideMenu) {
            store.isMenuOpen.set(toggleSideMenu);
        },

        getUserData(user) {
            store.uid.set(user.uid);

            const q = query(userRef, where("userId", "==", user.uid));
            onSnapshot(q, (snapshot) => {
                snapshot.docs.forEach(doc => {
                    store.storageUser.set({ ...doc.data() })
                    store.favouriteMovieIds.set(doc.data().movies)
                })
            })
        },

        async signInWithProvider(provider) {
            try {
                const res = await signInWithPopup(auth, provider);
                const user = res.user;
                console.log(user);
                store.uid.set(user.uid);
                const createUserRef = doc(db, 'users', user.uid);

                // send the query to check if there is a doc with user ID.
                const userQuery = await getDocs(query(userRef, where("userId", "==", user.uid)));
                this.getUserData(user);

                if (userQuery.docs.length === 0) {
                    setDoc(createUserRef, {
                        userId: user.uid,
                        name: user.displayName,
                        email: user.email,
                        movies: [],
                    })
                }
            }
            catch (err) {
                console.error(err);
                alert(err.message);
            }
        },

        async registerNewUser(name, email, password) {
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password)
                const user = res.user;
                const createUserRef = doc(db, 'users', user.uid);

                setDoc(createUserRef, {
                    userId: user.uid,
                    name,
                    email,
                    movies: [],
                })
                this.getUserData(user);
            }
            catch (err) {
                console.error(err);
                alert(err.message);
            }
        },

        async signInUser(email, password) {
            try {
                const res = await signInWithEmailAndPassword(auth, email, password);
                const user = res.user;
                this.getUserData(user);

            } catch (err) {
                console.error(err);
                alert(err.message);
            }
        },

        logout() {
            signOut(auth);
            store.storageUser.set(null);
            store.favouriteMovieIds.set([]);
        },

        async deleteAccount() {
            const user = auth.currentUser;
            console.log(user.providerData[0]);
            try {
                deleteUser(user).then(() => {
                    deleteDoc(doc(db, 'users', user.uid));                    
                    store.storageUser.set(null);
                    store.favouriteMovieIds.set([]);                
                })
            }
            catch (err) {
                console.log(err.message);
            }
        }

    }
}