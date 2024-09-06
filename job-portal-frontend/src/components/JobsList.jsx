import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import { useNavigate } from 'react-router-dom';

//APIs:
import { jobsListAPI } from '/src/apis/jobsListAPI';

//Components:
import Navbar from '/src/components/Navbar';
import JobDetails from '/src/components/JobDetails';
import PaginationComponent from '/src/components/PaginationComponent';

//CSS:
import styles from "/src/styles/JobsList.module.css";

const JobsList = () => {
    const navigate = useNavigate();

    //States:
    const [data, setData] = useState([]);
    const [show, setShow] = useState({});
    const [chosenItem, setChoseItem] = useState({});

    //Pagination:
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    //Functions:
    useEffect(() => {
        fetchData();
    }, []);

    //Getting data from API:
    const fetchData = async() => {
        const response = await jobsListAPI(pageSize, currentPage);
        if(response.status === 200) {
            setData(response.data.jobs);
            setTotalCount(response.data.total_count)
            let showing = {};
            showing[0] = true;
            for(let i = 1; i < response.data.length; i++) {
                showing[i] = false;
            }
            setChoseItem(response.data.jobs[0]);
            setShow(showing);
        }
    };

    //Handling which item to show:
    const showHandler = (index) => {
        let showing = {};
        for(let i = 0; i < data.length; i++) {
            showing[i] = false;
        };
        showing[index] = true;
        setShow(showing);
        setChoseItem(data[index]);
    };

    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
    };

    //Handle clicking on a company name:
    const companyHandler = (event, companyId) => {
        event.preventDefault();
        navigate(`/company/${companyId}`)
    };

    return (
        <div className={styles.page}>
            <Navbar name="home" />
            <div className={styles.content}>
                <h1>Jobs List</h1>
                <div className={styles.listContainer}>
                    <div>
                        {
                            data.length > 0 && data.map((item, index) => (
                                <div onClick={() => showHandler(index)} className={show[index] ? styles.activeItem : styles.itemContainer}>
                                    <h3>{item.title}</h3>
                                    <div>{item.company_name ? <span className={styles.company} onClick={event => companyHandler(event, item.posted_by.company_id)}>{item.company_name}</span> : "-"}</div>
                                    <div>{item.sector}</div>
                                    <div>{item.location}</div>
                                    <div>{item.salary}</div>
                                    <div>{item.job_type}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        {data.length > 0 &&
                            <JobDetails data={chosenItem} companyHandler={companyHandler} />
                        }
                    </div>
                </div>
                <div className={styles.pagination}>
                    <PaginationComponent currentPage={currentPage} pageSize={pageSize} total={totalCount} onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
    );
};

export default JobsList;