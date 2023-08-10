
import PropTypes from 'prop-types'; // Importa PropTypes desde la biblioteca prop-types
import style from './Search.module.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/action";

export default function SearchBar() {
    const dispatch = useDispatch()
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
   dispatch(getCountriesByName(name))
 setName('');
  };

 

  return (
    <div className={style.divInput}>
      <input className={style.input} type="search" onChange={handleChange} value={name} />
      <button className={style.button} onClick={handleClick}>
        Agregar
      </button>
    </div>
  );
}

// Agrega la validación de propiedades utilizando PropTypes
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
