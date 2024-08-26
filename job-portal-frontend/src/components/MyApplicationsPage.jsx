import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//APIs:
import { getMyApplicatiosAPI } from '/src/apis/getMyApplicationsAPI';

//Components:
import Navbar from "/src/components/Navbar";
import PaginationComponent from '/src/components/PaginationComponent';

//CSS:
import styles from "/src/styles/MyApplicationsPage.module.css";

const MyApplicationsPage = () => {
    const token = Cookies.get("token");

    //States:
    const [data, setData] = useState([]);

    //Pagination States:
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    //Functions:
    useEffect(() => {
        fetchData();
    }, [totalCount, pageSize, currentPage]);

    //Getting the application's list (applied by the logged-in user):
    const fetchData = async() => {
        const response = await getMyApplicatiosAPI(pageSize, currentPage, token);
        setData(response.data.applied_jobs);
        setTotalCount(response.data.total_count);
    };

    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
    };

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.topContent}>
                    <h1>My Applications</h1>
                </div>
                {
                    data.length > 0 &&
                    <div className={styles.listContainer}>
                        <div>
                            <table className={`${styles.listHead} rounded`}>
                                <colgroup>
                                    <col className={styles.col1} />
                                    <col className={styles.col2} />
                                    <col className={styles.col3} />
                                    <col className={styles.col4} />
                                    <col className={styles.col5} />
                                    <col className={styles.col6} />
                                </colgroup>
                                <thead className={styles.thead}>
                                    <tr>
                                        <th>#</th>
                                        <th>Position</th>
                                        <th>Company</th>
                                        <th>Location</th>
                                        <th>Applied date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                            </table>
                            <table className={`${styles.listBody} rounded`}>
                                <colgroup>
                                    <col className={styles.col1} />
                                    <col className={styles.col2} />
                                    <col className={styles.col3} />
                                    <col className={styles.col4} />
                                    <col className={styles.col5} />
                                    <col className={styles.col6} />
                                </colgroup>
                                <tbody className={styles.tbody}>
                                    {
                                        data && data.map((item, index) => (
                                            <tr>
                                                <td>{item.counter}</td>
                                                <td>{item.job_title}</td>
                                                <td>{item.company_name}</td>
                                                <td>{item.location}</td>
                                                <td>{item.date_applied}</td>
                                                <td>{item.status}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.pagination}>
                            <PaginationComponent currentPage={currentPage} pageSize={pageSize} total={totalCount} onPageChange={handlePageChange} />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyApplicationsPage;