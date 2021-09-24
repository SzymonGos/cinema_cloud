import {createState} from '@hookstate/core'

const starCount = createState(5);

const increaseStarCount = () => {
    starCount.set(p => p + 1);
}

export {starCount, increaseStarCount};