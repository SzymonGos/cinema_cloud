import { createState, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence';
import { auth, userRef } from '../config/firebase-config';
import {
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import {
    query,
    where,
    addDoc,
    getDocs
} from "@firebase/firestore";



const initialState = {
    favouriteMovieIds: [],
    isOpen: false,
    isMenuOpen: false,
    user: null,
}

const store = createState(initialState);

export function useStore() {
    const withState = useState(store);
    withState.attach(Persistence('state'))

    return {
        get state() {
            return withState.get();
        },

        toggleFavouriteMovieId(movieId) {
            let result = [...this.state.favouriteMovieIds];

            const index = result.indexOf(movieId);
            if (index === -1) {
                result.push(movieId);
            } else {
                result.splice(index, 1);
            }
            store.favouriteMovieIds.set(result);
        },

        toggleSearchModal(toggle) {
            store.isOpen.set(toggle);
        },

        toggleMobileMenu(toggleSideMenu) {
            store.isMenuOpen.set(toggleSideMenu);
        },

        async signInWithProvider(provider) {
            try {
                const res = await signInWithPopup(auth, provider);
                const user = res.user;

                // send the query to check if there is a doc with user ID.
                const userQuery = await getDocs(query(userRef, where("userId", "==", user.uid)));

                if (userQuery.docs.length === 0) {
                    addDoc(userRef, {
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

                addDoc(userRef, {
                    userId: user.uid,
                    name,
                    email,
                    movies: [],
                })
            }
            catch (err) {
                console.error(err);
                alert(err.message);
            }
        },

        async signInUser(email, password) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
              } catch (err) {
                console.error(err);
                alert(err.message);
              }
        },

        logout(){
            signOut(auth);
        }
    }
}