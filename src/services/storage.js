import { createState, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence';
import { addDoc, arrayUnion } from '@firebase/firestore';
import { db, favColectionRef } from '../config/firebase-config'; 


const initialState = {
    favouriteMovieIds: [],
    isOpen: false,
    isMenuOpen: false,
}

const store = createState(initialState);
 
export function useStore() {
    const withState = useState(store);
    withState.attach(Persistence('movies'))

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
        }
    }
}