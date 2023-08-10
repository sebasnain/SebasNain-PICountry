// Pagination.jsx
//import React from "react";
import PropTypes from "prop-types";
import style from './Pagination.module.css'

const Pagination = ({ totalProducts, productsPorPagina, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalProducts / productsPorPagina);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
   
    pageNumbers.push(i);
  }

  const siguienteNumeroPagina = currentPage < totalPages ? currentPage + 1 : null;
  const numeroPaginaAnterior = currentPage > 1 ? currentPage - 1 : null;


  return (
    <div className={style.pagination}>


{numeroPaginaAnterior !== null && (
        <button onClick={() => onPageChange(numeroPaginaAnterior)}>anterior</button>
      )}

      {pageNumbers.map((pageNumber) => (
        
        <button
          
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? style.active : style.noActive}
        >
         
          {pageNumber}
        </button>
        
      ))}
      {siguienteNumeroPagina !== null && (
        <button onClick={() => onPageChange(siguienteNumeroPagina)}>Siguiente</button>
      )}


    </div>
  );
};

Pagination.propTypes = {
  totalProducts: PropTypes.number.isRequired,
  productsPorPagina: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};


export default Pagination;