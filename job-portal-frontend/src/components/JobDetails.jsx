import React from 'react';

//CSS:
import styles from "/src/styles/JobDetails.module.css";

const JobDetails = ({ data }) => {

    const applyHandler = (event) => {
        event.preventDefault();
    }
    console.log(data)
    return (
        <div className={styles.component}>
            <div>{data.title}</div>
            <div>{data.salary}</div>
            <div>{data.sector}</div>
            <div>{data.date_posted}</div>
            <div>{data.job_type}</div>
            <div>{data.location}</div>
            <div>{data.company_name}</div>
            <div className={styles.buttonContainer} onClick={applyHandler}>
                Apply now!
            </div>
            <hr />
            <div>{data.description}</div>
            {/* <div>{data.benefits}</div>
            <div>{data.requirements}</div> */}

        </div>
    );
};

export default JobDetails;