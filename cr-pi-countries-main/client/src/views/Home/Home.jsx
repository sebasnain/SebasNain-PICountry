import CardsContainer from "../../components/Cards/CardsContainer";
import style from "./Home.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/action"
import SearchBar from "../../components/SearchBar/SearchBar";




const Home = (Props)=> {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCountries())
  },[dispatch])

  const { onSearch } = Props
    return(
        <div className={style.containerHome}>
           <div className={style.boxFilter}>
             <div className={style.tituloFiltros}> <h1>Filtros</h1></div>
             <SearchBar onSearch={onSearch}/>
           </div>
           <div className={style.boxCoutries}>
                <div className={style.tituloPaises}><h1>Paises</h1></div>
                
                <div className={style.boxPaises}>
                
                <CardsContainer/>
               
                     
                </div>
           </div>
        </div>
    )
}

export default Home;