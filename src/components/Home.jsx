import CardFilme from './CardFilme';
import customHook from './customHook';
import "./GridFilme.css"

const Home = () => {
  const moviesURL = import.meta.env.VITE_API;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const topRatedURL = `${moviesURL}top_rated?${API_KEY}`;

  const { movies, loading } = customHook(topRatedURL);

  return (
    <div className="container">
      <h2 className="title">Os Filmes Mais Bem Avaliados:</h2>
      <div className="movies-container">
        {/* Executando JS na JSX */
          loading ? <p>Carregando...</p> : movies.map((movie) => 
            <CardFilme key={movie.id} movie={movie}/>)
        } {/*interpolação de Arrays (para cada item, um componente CardFilme é criado) */}
      </div>
    </div>
  );
};


export default Home;