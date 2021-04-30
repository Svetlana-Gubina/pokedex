import React from 'react';
import './pagination.scss';

export default function Pagination({goToNextPage, goToPrevPage}) {
    return (
        <div className="pagination">
            {goToPrevPage && <button className="pagination__btn" onClick={goToPrevPage}>Prev</button>}
            {goToNextPage && <button className="pagination__btn" onClick={goToNextPage}>Next</button>}
        </div>
    )
}
