// Pagination.js
import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ dogsPerPage, totalDogs, currentPage, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  const generatePageNumbers = () => {
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta + 1;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i < right)) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const handlePaginationClick = (pageNumber) => {
    paginate(pageNumber);
  };

  return (
    <nav className={styles.paginationContainer}>
      <ul className={styles.paginationList}>
        <li className={styles.paginationItem}>
          <button
            className={styles.paginationLink}
            onClick={() => handlePaginationClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
        </li>

        {generatePageNumbers().map((number) => (
          <li key={number} className={styles.paginationItem}>
            <button
              className={`${styles.paginationLink} ${number === currentPage ? styles.active : ''}`}
              onClick={() => handlePaginationClick(number)}
            >
              {number}
            </button>
          </li>
        ))}

        <li className={styles.paginationItem}>
          <button
            className={styles.paginationLink}
            onClick={() => handlePaginationClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
