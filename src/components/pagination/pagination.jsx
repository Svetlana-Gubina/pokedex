import React from 'react';
import './pagination.scss';

const Pagination = ({isLastPage, pageNumber, goToNextPage, goToPrevPage}) => {
    return (
        <div className="pagination">
            <button className="pagination__btn" onClick={goToPrevPage} disabled={pageNumber === 1 ? true : false}>Prev</button>
            <button className="pagination__btn" onClick={goToNextPage} disabled={isLastPage}>Next</button>
        </div>
    )
};

export default Pagination;
