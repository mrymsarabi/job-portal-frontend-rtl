import React, { useState } from 'react';

//Modules and Libraries:
import { useNavigate } from 'react-router-dom';

// Components:
import Icon from "/src/icons/Icon";

// CSS:
import styles from "/src/styles/JobDetailsApplicants.module.css";

const JobDetailsComponent = ({ jobInfo, applicants }) => {
    const navigate = useNavigate();

    //States:
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const formatDateApplied = (dateApplied) => {
        const date = new Date(dateApplied);
      
        // Format the date to "YYYY-MM-DD"
        const formattedDate = date.toLocaleDateString('en-GB'); // 'en-GB' for DD/MM/YYYY format, or 'en-US' for MM/DD/YYYY
      
        // Format the time to "HH:MM"
        const formattedTime = date.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
        });
      
        // Combine both parts
        return `${formattedDate} ${formattedTime}`;
    };

    //HAndling clicking on an applicant to see the details in another page:
    const applicantHandler = (event, application_id, applicant) => {
        event.preventDefault();
        navigate(`/answer-applications/${application_id}`, { state: applicant });
    };
    
    return (
        <div>
            <h1 className={styles.header}>Job Details and Applicants</h1>
            <div className={`${styles.jobDetailsContainer} rounded`}>
                <div className={styles.gridContainer}>
                    <div>Title</div>
                    <div>{jobInfo.title}</div>
                    <div>Company</div>
                    <div>{jobInfo.company_name}</div>
                    <div>Location</div>
                    <div>{jobInfo.location}</div>
                    <div>Job Type</div>
                    <div>{jobInfo.job_type}</div>
                    <div>Sector</div>
                    <div>{jobInfo.sector}</div>
                    <div>Salary</div>
                    <div>{jobInfo.salary}</div>
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
                        <div>{jobInfo.requirements}</div>
                        <div>Description</div>
                        <div>{jobInfo.description}</div>
                        <div>Benefits</div>
                        <div>{jobInfo.benefits}</div>
                    </div>
                )}
            </div>
            <div className={styles.listContainer}>
                <h2>Applicants</h2>
                {
                    applicants.length > 0 ?
                    <div className={styles.tableWrapper}>  {/* Additional wrapper div */}
                        <table className={`${styles.listHead} rounded`}>
                            <colgroup>
                                <col className={styles.col1} />
                                <col className={styles.col2} />
                                <col className={styles.col3} />
                                <col className={styles.col4} />
                                <col className={styles.col5} />
                            </colgroup>
                            <thead className={`${styles.thead} rounded`}>
                                <tr>
                                    <th>#</th>
                                    <th>Username</th>
                                    <th>Date Applied</th>
                                    <th>Status</th>
                                    <th></th>
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
                            </colgroup>
                            <tbody className={`${styles.tbody}`}>
                                {
                                    applicants.map((applicant, index) => (
                                        <tr key={index} onClick={event => applicantHandler(event, applicant.application_id, applicant)}>
                                            <td>{applicant.counter}</td>
                                            <td>{applicant.username}</td>
                                            <td>{formatDateApplied(applicant.date_applied)}</td>
                                            <td>{applicant.status}</td>
                                            <td></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className={styles.noData}>
                        <Icon icon="alert-circle" />
                        No data was found.
                    </div>
                }
            </div>
        </div>
    );
};

export default JobDetailsComponent;
