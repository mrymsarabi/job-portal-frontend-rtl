import React, { useState, useEffect } from 'react';
import PaginationComponent from './PaginationComponent';

const Test = () => {
    const [jobs, setJobs] = useState([]);
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
    };
    return (
        <div>
            <PaginationComponent
                currentPage={currentPage}
                pageSize={pageSize}
                total={total}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Test;