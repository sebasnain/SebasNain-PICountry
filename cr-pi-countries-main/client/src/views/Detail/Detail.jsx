import style from "./Detail.module.css"
import {  getCountriesById } from '../../redux/action.js'
import { useParams } from "react-router-dom"
import { useDispatch , useSelector } from 'react-redux'
import { useEffect } from "react"

const Detail = ()=> {
    const dispatch = useDispatch()
    const { id } = useParams();
    console.log(useParams())
    const idPais = id.substring(1)
  console.log("mi id es: " + idPais)
    const countryDetail = useSelector((state) => {
        return state.countryDetail;
});

    useEffect( ()=>{
        console.log("id desde useEffecr" +idPais)
        dispatch(getCountriesById(idPais))
    }, [dispatch, idPais]
     
    )
     
    return(
        <div className={style.containerDetail}>
              <h1>pais </h1>
            <h1> Pais: {countryDetail.name} </h1>

        </div>
    )
}

export default Detail;
/* 
{
    "countryid": "KEN",
    "name": "Kenya",
    "image": "https://flagcdn.com/ke.svg",
    "continent": "Africa",
    "capital": "",
    "subregion": "Eastern Africa",
    "area": 580367,
    "population": 53771300,
    "Activities": []
  } */