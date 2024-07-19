import React, { useState } from 'react';
import './Pagination.css';
function Pagination({ setPage, initialPage = 1 }) {
    const [page, setPageNumber] = useState(initialPage);

    let next = (e) => {
        e.preventDefault();
        const nextPage = page + 1;
        setPageNumber(nextPage);
        setPage(nextPage);
    };

    let prev = (e) => {
        e.preventDefault();
        const prevPage = Math.max(1, page - 1);
        setPageNumber(prevPage);
        setPage(prevPage);
    };

    return (
        <div className="pagination">
            <a onClick={prev} className="pagination-link">Previous</a>......
            <a onClick={next} className="pagination-link">Next</a>
        </div>
    );
}

export default Pagination;