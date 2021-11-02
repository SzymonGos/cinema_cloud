import { createState, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence';

const initialState = {
    favouriteMovieIds: [],
    isOpen: false,
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

        toggleModal(toggle) {
            store.isOpen.set(toggle);
        }
    }
}