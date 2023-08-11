import PropTypes from 'prop-types';
import style from './Pagination.module.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const nextPagina = currentPage < totalPages ? currentPage + 1 : null;
  const prevPagina = currentPage > 1 ? currentPage - 1 : null;

  return (
    <div className={style.pagination}>
      {prevPagina !== null && (
        <button onClick={() => onPageChange(prevPagina)}>Anterior</button>
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

      {nextPagina !== null && (
        <button onClick={() => onPageChange(nextPagina)}>Siguiente</button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
