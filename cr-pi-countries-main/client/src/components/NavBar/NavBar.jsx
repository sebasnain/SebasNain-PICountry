import style from "./NabBar.module.css"
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const NavBar = ()=> {
    return(
        <div className={style.containerNavBar}>
        <div className={style.logo}>
            <img src={logo} alt="Logo" className={style.logoImg}/>
            <h1 className="titulo">Country</h1>
        </div>
        <div className={style.buttons}>
            <Link to="/home">
                <button className={style.button}>Inicio</button>
            </Link>
            <Link to="/Form">
                <button className={style.button}>Actividad+</button>
            </Link>
            <Link to="/about">
                <button className={style.button}>About</button>
            </Link>
        </div>
            
        </div>
    )
}

export default NavBar;