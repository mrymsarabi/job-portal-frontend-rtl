// Showing Job Details, and Applicants list:
import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

//APIs:
import { getJobAPI } from '/src/apis/getJobAPI';
import { jobApplicationsAPI } from '/src/apis/jobApplicationsAPI';


//Components:
import Navbar from "/src/components/Navbar";
import JobDetailsComponent from '/src/components/JobDetailsComponent';

//CSS:
import styles from "/src/styles/JobDetailsApplicants.module.css";

const JobDetailsApplicants = () => {
    const token = Cookies.get("token");

    const id = useParams().id;

    //States:
    //Job Details:
    const [jobInfo, setJobInfo] = useState({});
    //Applicants list:
    const [applicants, setApplicants] = useState([]);

    //Functions:
    useEffect(() => {
        fetchJobInfo();
        fetchApplicants();
    }, []);

    //Getting the Job's Info and Details:
    const fetchJobInfo = async() => {
        const response = await getJobAPI(id);
        console.log(response);
        setJobInfo(response.data);
    };

    //Getting the Applicants' list:
    const fetchApplicants = async() => {
        const response = await jobApplicationsAPI(id, token, 1, 10);
        console.log(response);
        if(response.status === "success") {
            setApplicants(response.applications);
        } else {

        }
    }

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <div>
                    {/* Job Details */}
                    <JobDetailsComponent data={jobInfo} />
                </div>
                <div>
                    {/* Applicants list */}
                </div>
            </div>
        </div>
    );
};

export default JobDetailsApplicants;