import {createState} from '@hookstate/core'

const starCount = createState(0);
const currentIndex = createState(null);
const favouriteMovies = createState([]);

const addFavourite = (movie) => {
    favouriteMovies.set([...favouriteMovies, movie]);
    console.log(favouriteMovies.get());
};

const removeFavourite = (movie) => {
    const filteredList = favouriteMovies.filter(
        item => item !== movie
      );
      favouriteMovies.set(filteredList);
}


const increaseStarCount = (id) => {
    
    if(id == currentIndex.get()){
        starCount.set(p => p - 1);
        currentIndex.set(null);
        removeFavourite(id);
    } else {
        starCount.set(p => p + 1);
        currentIndex.set(id);
        addFavourite(id);
    }
}

export {starCount, increaseStarCount};