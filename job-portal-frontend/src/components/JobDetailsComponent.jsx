import React, { useState } from 'react';

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from "/src/styles/JobDetailsApplicants.module.css";

const JobDetailsComponent = ({ data }) => {
    const [show, setShow] = useState(false);

    const showHandler = () => {
        setShow(prev => !prev);
    };

    return (
        <div className={`${styles.jobDetailsContainer} rounded`}>
            <div className={`${styles.gridContainer}`}>
                <div>Title</div>
                <div>{data.title}</div>
                <div>Company</div>
                <div>{data.company_name}</div>
                <div>Location</div>
                <div>{data.location}</div>
                <div>Job Type</div>
                <div>{data.job_type}</div>
                <div>Sector</div>
                <div>{data.sector}</div>
                <div>Salary</div>
                <div>{data.salary}</div>
                <div>Reqirements</div>
                <div>{data.requirements}</div>
                <div>Description</div>
                <div>{data.description}</div>
                <div>Benefits</div>
                <div>{data.benefits}</div>
                <div>User (Poted by:)</div>
                <div>...</div>
            </div>
            <div className={`${styles.iconContainer}`} onClick={showHandler}>
                <Icon icon="arrow-drop-down" color="#000000" width="24px" height="24px" />
            </div>
        </div>
    );
};

export default JobDetailsComponent;