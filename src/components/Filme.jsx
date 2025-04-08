import { useState, useEffect, use } from "react"
import { useParams } from "react-router-dom"
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'

import CardFilme from "./CardFilme"
import Formulario from "./Formulario"

import './Filme.css'

const moviesURL = import.meta.env.VITE_API
const API_KEY = import.meta.env.VITE_API_KEY

const Filme = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setMovie(data)
    }

    useEffect(() => {
        const movieURL = `${moviesURL}${id}?${API_KEY}`
        getMovie(movieURL)
    }, [id])

    return (
        <div className="movie-page">
            {movie && (
                <>
                    <CardFilme movie={movie} showLink={false} /> {/* interpolação dp objeto (o objeto é passado inteiro para o componente) */}
                    <p className="tagline">{movie.tagline}</p>
                        <div className="info">
                            <h3>
                                <BsWallet2 /> Orçamento:
                            </h3>
                            <p>{movie.budget.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                        </div>
                        
                        <div className="info">
                            <h3>
                                <BsGraphUp /> Receita:
                            </h3>
                            <p className={movie.revenue > movie.budget ? "green-text" : "red-text"}>
                            {movie.revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </p>
                        </div>
                        
                        <div className="info">
                            <h3>
                                <BsHourglassSplit /> Duração:
                            </h3>
                            <p>{movie.runtime} minutos</p>
                        </div>

                        <div className="info">
                            <h3>
                                <BsFillFileEarmarkTextFill /> Sinopse:
                            </h3>
                            <p>{movie.overview}</p>
                        </div>
                        <Formulario 
                        onSubmit={(data) => console.log(data)} // Função
                        modoEdicao={false} // Booleano
                        estilos={{ color: 'red' }} // Objeto
                        />
                </>
            )}
        </div>
    )
}

export default Filme