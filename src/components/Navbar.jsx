import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import styles from "./Navbar.module.css"; // Importando CSS Module

const Navbar = () => {
    const [procura, setProcura] = useState("");


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!procura) return;
        navigate(`/search?q=${procura}`);
        setProcura("");
    };

    return (
        <nav className={styles.navbar}>
            <h2 className={styles.logo}>
                <Link to="/"><BiCameraMovie />AcervoCine</Link>
            </h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    className={styles.input}
                    type="text" 
                    placeholder="Buscar o filme" 
                    onChange={(e) => setProcura(e.target.value)} // Evento de Teclado para capturar as alteracoes 
                    value={procura} // interpolação comum (pega o nome do filme que o usuario digitar)  
                />
                <button className={styles.button} type="submit">
                    <BiSearchAlt2 />  
                </button>  
            </form>
 
        </nav>
    );
};

export default Navbar;
