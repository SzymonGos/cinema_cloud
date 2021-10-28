import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";

const useSingleMovieFetch = (movieId) => {
    const [state, setState] = useState({});

    useEffect( async() => {
        try{
            const url = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
            const resp = await fetch(url);
            const data = await resp.json(); 
            setState(data);
        }
        catch (e) {
            console.error(e);
        }
    },[movieId])

    return {state}
}

export default useSingleMovieFetch;