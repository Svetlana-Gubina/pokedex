import {useState, useEffect} from 'react';
import axios from 'axios';

const useScrollPagination = (pageNumber) => {
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    useEffect (() => {
        setLoading(true);
        setError(false);

        const url = `http://localhost:3004/pokemons?_page=${pageNumber}`;
        const cancelTokenSource = axios.CancelToken.source();
        axios.get(url, {
            cancelToken: cancelTokenSource.token
        })
        .then((res) => {  
            setPokemons((previousPokemons) => {
                return [...previousPokemons, ...res.data.map((p) => p)];
            });
            setHasMore(res.data.length > 0);
            setLoading(false);
        })
        .catch((error) => {
            setError(true);
            console.log(error);
        });

    }, [pageNumber]);

    return {error, hasMore, loading, pokemons};
}

export default useScrollPagination;