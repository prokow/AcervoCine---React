import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import CardFilme from "./CardFilme"

const searchURL = import.meta.env.VITE_SEARCH
const API_KEY = import.meta.env.VITE_API_KEY

import "./GridFilme.css"

const Search = () => {
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

const getSearchedMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();

        setMovies(data.results);
    }
    

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${API_KEY}&query=${query}`;
        getSearchedMovies(searchWithQueryURL);
    }, [query]); //garante que a função será chamada toda vez que a query mudar


    return (
       <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span> 
            </h2>
                <div className="movies-container">
                  {movies.length === 0 && <p>Carregando...</p>}  {/*se a lista de filmes estiver vazia, aparece carregando*/}
                  {movies.length > 0 &&                         
                       movies.map((movie) => <CardFilme key={movie.id} movie={movie}  />)} {/* se houver filmes na lista, exibe os filmes*/}
                </div>
        </div>
    )
}

export default Search