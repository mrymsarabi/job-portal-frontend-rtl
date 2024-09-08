import React, { useState } from 'react';

//Modules and Libraries:
import { useNavigate } from 'react-router-dom';

// Components:
import Icon from "/src/icons/Icon";

//Functions:
import { toPersian } from "/src/helper/toPersian";

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

    //Handling status in persian:
    const statusHandler = (status) => {
        if(status === "accepted") {
            return "پذیرفته شده";
        } else if(status === "rejected") {
            return "رد شده";
        } else if(status === "pending") {
            return "در انتظار";
        };
    };
    
    return (
        <div>
            <h1 className={styles.header}>Job Details and Applicants</h1>
            <div className={`${styles.jobDetailsContainer} rounded`}>
                <div className={styles.gridContainer}>
                    <div>عنوان</div>
                    <div>{jobInfo.title}</div>
                    <div>شرکت</div>
                    <div>{jobInfo.company_name}</div>
                    <div>موقعیت</div>
                    <div>{jobInfo.location}</div>
                    <div>نوع شغل</div>
                    <div>{jobInfo.job_type}</div>
                    <div>بخش</div>
                    <div>{jobInfo.sector}</div>
                    <div>حقوق</div>
                    <div>{jobInfo.salary}</div>
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
                        <div>الزامات</div>
                        <div>{jobInfo.requirements}</div>
                        <div>توضیحات</div>
                        <div>{jobInfo.description}</div>
                        <div>مزایا</div>
                        <div>{jobInfo.benefits}</div>
                    </div>
                )}
            </div>
            <div className={styles.listContainer}>
                <h2>متقاضیان</h2>
                {
                    applicants.length > 0 ?
                    <div className={styles.tableWrapper}>
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
                                    <th>نام کاربری</th>
                                    <th>تاریخ درخواست</th>
                                    <th>وضعیت</th>
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
                                            <td>{toPersian(applicant.counter)}</td>
                                            <td>{applicant.username}</td>
                                            <td>{formatDateApplied(applicant.date_applied)}</td>
                                            <td>{statusHandler(applicant.status)}</td>
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
                        هیچ داده ای یات نشد.
                    </div>
                }
            </div>
        </div>
    );
};

export default JobDetailsComponent;
