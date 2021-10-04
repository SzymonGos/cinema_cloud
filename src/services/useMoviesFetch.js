import { useState, useEffect } from "react";
import { POPULAR_MOVIES_URL } from "../config";

const useMoviesFetch = () => {
    const [state, setState] = useState({});

    useEffect( async () => {
        try {
            const resp = await fetch(POPULAR_MOVIES_URL);
            const data = await resp.json();
            setState({
                movies: [...data.results],
                heroBanner: data.results[0]
            });
            // setState(() => ({
            //     movies: [...data.results],
            //     heroBanner: data.results[0]
            // }));
        }
        catch (e) {
            console.error(e);
        }
    }, []);

    return { state }
}

export default useMoviesFetch;