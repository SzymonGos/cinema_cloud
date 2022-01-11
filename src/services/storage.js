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
};

const errState = {
    errMessage: '',
};

const store = createState(initialState);
const errorMsg = createState(errState);

export function useStore() {
    const withState = useState(store);
    const errorState = useState(errorMsg);

    withState.attach(Persistence('state'))

    return {
        get state() {
            return withState.get();
        },

        get errorState() {
            return errorState.get();
        },

        async toggleFavouriteMovieId(movieId) {
            let result = [...this.state.favouriteMovieIds];
            const updateUserDoc = doc(db, 'users', this.state.uid);            
        
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
                store.errMessage.set('');
            }
            catch (err) {
                console.error(err);
                store.errMessage.set(err.message);
                this.getErrorMessage(err.code);
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
                store.errMessage.set('');
            }
            catch (err) {
                console.error(err);
                this.getErrorMessage(err.code);
            }
        },

        async signInUser(email, password) {
            try {
                const res = await signInWithEmailAndPassword(auth, email, password);
                const user = res.user;
                this.getUserData(user);
                store.errMessage.set('');

            } catch (err) {
                console.error(err);
                this.getErrorMessage(err.code);
            }
        },

        logout() {
            signOut(auth);
            store.storageUser.set(null);
            store.favouriteMovieIds.set([]);
        },

        async deleteAccount() {
            const user = auth.currentUser;            
            try {
                deleteUser(user).then(() => {
                    deleteDoc(doc(db, 'users', user.uid));
                    store.storageUser.set(null);
                    store.favouriteMovieIds.set([]);
                })
                store.errMessage.set('');
            }
            catch (err) {
                console.log(err.message);                
            }
        },

        getErrorMessage(error) {
            switch (error) {
                case 'auth/wrong-password':
                    errorMsg.errMessage.set('The password is invalid. Please try again.');
                    break;
                case 'auth/too-many-requests':
                    errorMsg.errMessage.set('Too many login attempts. Please try again later.');
                    break;
                case 'auth/user-not-found':
                    errorMsg.errMessage.set('User not found.');
                    break;
                case 'auth/network-request-failed':
                    errorMsg.errMessage.set('Network connection failed. Please try again.');
                    break;
                case 'auth/timeout':
                    errorMsg.errMessage.set('Time out');
                    break;
                case 'auth/invalid-email':
                    errorMsg.errMessage.set('Invalid email format.');
                    break;
                case 'auth/weak-password':
                    errorMsg.errMessage.set('Password should be at least 6 characters.');
                    break;
                case 'auth/email-already-in-use':
                    errorMsg.errMessage.set('Email already in use.');
                    break;
                default:
                    errorMsg.errMessage.set('Something went wrong. Please try again.');
            }
        }
    }
}