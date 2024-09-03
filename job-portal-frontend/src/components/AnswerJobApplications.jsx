import React, { useEffect } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

//APIs:
import { jobApplicationAnswerAPI } from '/src/apis/jobApplicationAnswerAPI';
import { getApplicationById } from "/src/apis/getApplicationById";

//Components:
import Navbar from "/src/components/Navbar";

//CSS:
import styles from "/src/styles/AnswerJobApplications.module.css";

const AnswerJobApplications = () => {
    const token = Cookies.get("token");

    console.log("nfmekd.", useParams())
    const applicationId = useParams().id;

    //Functions: 
    useEffect(() => {
        getApplication();
    }, []);

    //Getting the application based on the id:
    const getApplication = async() => {
        const response = await getApplicationById(applicationId, token);
        console.log(response)
        if(response.status === "success") {

        } else {

        }
    }
    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>

            </div>
        </div>
    );
};

export default AnswerJobApplications;