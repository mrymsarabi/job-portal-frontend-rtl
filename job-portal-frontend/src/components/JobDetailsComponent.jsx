import React, { useState } from 'react';

// Components:
import Icon from "/src/icons/Icon";

// CSS:
import styles from "/src/styles/JobDetailsApplicants.module.css";

const JobDetailsComponent = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className={`${styles.jobDetailsContainer} rounded`}>
            <div className={styles.gridContainer}>
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
                <div>User (Posted by:)</div>
                <div>...</div>
            </div>
            <div className={styles.iconContainer} onClick={toggleDropdown}>
                {
                    isOpen ? 
                     <Icon icon="arrow-drop-up" color="#000000" width="24px" height="24px" />
                    : <Icon icon="arrow-drop-down" color="#000000" width="24px" height="24px" />
                }
            </div>
            {isOpen && (
                <div className={styles.dropdownContent}>
                    <div>Requirements</div>
                    <div>{data.requirements}</div>
                    <div>Description</div>
                    <div>{data.description}</div>
                    <div>Benefits</div>
                    <div>{data.benefits}</div>
                </div>
            )}
        </div>
    );
};

export default JobDetailsComponent;
