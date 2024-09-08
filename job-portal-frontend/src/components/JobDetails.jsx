import React from 'react';

//Modules and Libraries:
import styles from "/src/styles/JobDetails.module.css";

//CSS:
import { useNavigate } from 'react-router-dom';

const JobDetails = ({ data, companyHandler }) => {
    const navigate = useNavigate();

    const applyHandler = (event) => {
        event.preventDefault();
        navigate(`/job/${data._id}`)
    };
    
    console.log(data)
    return (
        <div className={styles.component}>
            <div>
                <div className={styles.details}>
                    <h2>{data.title}</h2>
                    <div>{data.company_name ? <span className={styles.company} onClick={event => companyHandler(event, data.posted_by.company_id)}>{data.company_name}</span> : "-"}</div>
                    <div>{data.salary}</div>
                    <div>{data.sector}</div>
                    <div>{data.date_posted}</div>
                    <div>{data.job_type}</div>
                    <div>{data.location}</div>
                </div>
                <div className={`${styles.buttonContainer} rounded`} onClick={applyHandler}>
                    اکنون درخواست دهید!
                </div>
            </div>
            <hr />
            <div>{data.description}</div>
        </div>
    );
};

export default JobDetails;