import { useState, useEffect } from "react";

const useMoviesFetch = (url) => {

    const [state, setState] = useState([]);

    useEffect(async () => {
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setState(() => ({
                movies: [...data.results],
                heroBanner: data.results[0]
            }));
        }
        catch (e) {
            console.error(e);
        }

    }, []);

    return { state }
}

export default useMoviesFetch;