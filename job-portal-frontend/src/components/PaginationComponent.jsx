// src/components/PaginationComponent.js
import React from 'react';
import { Pagination } from 'antd';

const PaginationComponent = ({ currentPage, pageSize, total, onPageChange }) => {
    return (
        <Pagination
            current={currentPage ? currentPage : 1}
            pageSize={pageSize  ?pageSize : 20}
            total={total ? total : 200}
            onChange={(page, size) => onPageChange(page, size)}
            showSizeChanger
            showQuickJumper
        />
    );
};

export default PaginationComponent;
