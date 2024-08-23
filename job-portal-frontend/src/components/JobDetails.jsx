import React from 'react';

//Modules and Libraries:
import styles from "/src/styles/JobDetails.module.css";

//CSS:
import { useNavigate } from 'react-router-dom';

const JobDetails = ({ data }) => {
    const navigate = useNavigate();

    const applyHandler = (event) => {
        event.preventDefault();
        navigate(`/job/${data._id}`)
    };
    
    console.log(data)
    return (
        <div className={styles.component}>
            <div>
                <div>
                    <div>{data.title}</div>
                    <div>{data.salary}</div>
                    <div>{data.sector}</div>
                    <div>{data.date_posted}</div>
                    <div>{data.job_type}</div>
                    <div>{data.location}</div>
                    <div>{data.company_name}</div>
                </div>
                <div className={`${styles.buttonContainer} rounded`} onClick={applyHandler}>
                    Apply now!
                </div>
            </div>
            <hr />
            <div>{data.description}</div>
            {/* <div>{data.benefits}</div>
            <div>{data.requirements}</div> */}

        </div>
    );
};

export default JobDetails;