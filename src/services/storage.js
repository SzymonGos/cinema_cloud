import {createState, useState} from '@hookstate/core'

const initialState = {
    favouriteMovieIds: [],
}

const store = createState(initialState);

export function useStore() {
    const withState = useState(store);

    return {
        get state() {
            return withState.get();
        },

        toggleFavouriteMovieId(movieId) {
            let result = [...this.state.favouriteMovieIds];

            const index = result.indexOf(movieId);
            if (index === -1){
                result.push(movieId);
            } else {
                result.splice(index, 1);
            }
            
            store.favouriteMovieIds.set(result);
        }
    }

}