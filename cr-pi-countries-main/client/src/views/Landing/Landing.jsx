import style from "./Landing.module.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

const Landing = ()=> {
    return (
      <div className={style.containerLanding}>
        <div className={style.forma}>
          <div>
            <img src={logo} alt="Logo" className={style.logo} />
          </div>
        </div>
       
        <div className={style.boxTitulo}>
          <h1 className={style.titulo}> Country </h1>
         <Link to="/home">
         <button className={style.button}>Inicio</button>
         </Link>
          
        </div>
      </div>
    );
}

export default Landing;