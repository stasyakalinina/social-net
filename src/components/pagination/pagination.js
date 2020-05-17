import React from 'react';
import styles from './pagination.module.css';

const Pagination = (props) => {

  const {pageSize, totalUsersCount, currentPage, setCurrentPage, getPageUsers } = props;

  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for( let i = 1; i <= pageCount; i++) {
    pages.push(i);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
    getPageUsers(page);
  };

  return (
    <div className={styles.block}>
      {
        pages.map(page => {
          return (
            <button
              key={page}
              className={currentPage === page ? `${styles.selectedPage} ${styles.btn}` : `${styles.btn}` }
              onClick={() => onPageChange(page)}>
                {page}
            </button>
          )
        })
      }
    </div>
  )
};

export default Pagination;