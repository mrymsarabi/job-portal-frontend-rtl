import React, { useState, useEffect } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//APIs:
import { getJobAPI } from '/src/apis/getJobAPI';

//Components:
import Navbar from "/src/components/Navbar";

//CSS:
import styles from "/src/styles/JobDetailsPage.module.css";
import { useParams } from 'react-router-dom';

const JobDetailsPage = () => {
    const id = useParams().id;

    //States:
    const [data, setData] = useState({});

    //Functions:
    useEffect(() => {
        fetchData();
    }, []);

    //Getting the item's data:
    const fetchData = async() => {
        const response = await getJobAPI(id);
        setData(response.data);
    };

    //Handling apply for the position:
    const applyHandler = async() => {
        
    }

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <div className={`${styles.job_details} border rounded`}>
                    {/* Job Details: 2/3 width of the parent div */}
                    <div>{data.title}</div>
                    <div>{data.sector}</div>
                    <div>{data.location}</div>
                    <div>{data.date_posted}</div>
                    <div>{data.job_type}</div>
                    <div>{data.location}</div>
                    <div>{data.company_name}</div>
                    <hr />
                    <div>
                        <div>Description: </div>
                        <div>{data.description}</div>
                    </div>
                    <div>
                        <div>Benefits: </div>
                        <div>{data.benefits}</div>
                    </div>
                    <div>
                        <div>Requirements: </div>
                        <div>{data.requirements}</div>
                    </div>
                </div>
                <div>
                    {/* 1/3 width of the parent div */}
                    <div className={`${styles.profile_container} border rounded`}>
                        {/* Employer's Profile */}
                        <div>{data.company_name}</div>
                        <div>
                            {/* User_name */}
                        </div>
                    </div>
                    <div className={`${styles.apply_container} border rounded`}>
                        {/* Apply for the position */}
                        <h2>Apply Here</h2>
                        <div>
                            <div>If you want to make changes to your resume, click here.</div>
                            <div>Click on Apply button to send your resume for this postion</div>
                        </div>
                        <div onClick={applyHandler} className={`${styles.buttonContainer} rounded`}>
                            Apply
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;