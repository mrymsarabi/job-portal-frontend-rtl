import React, { useState, useEffect } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//APIs:
import { getJobAPI } from '/src/apis/getJobAPI';
import { applyForJobAPI } from '/src/apis/applyForJobAPI';

//Components:
import Navbar from "/src/components/Navbar";
//Modals:
import SuccessModal from "/src/components/Modals/SuccessModal";
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

//CSS:
import styles from "/src/styles/JobDetailsPage.module.css";
import { Link, useParams } from 'react-router-dom';

const JobDetailsPage = () => {
    const token = Cookies.get("token");
    const id = useParams().id;
    
    //States:
    const [data, setData] = useState({});

    //States for Unsucces Message Modal:
    const [isOpenUnsuccess, setIsOpenUnsuccess] = useState(false);

    //States for Succes Message Modal:
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);

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
    const applyHandler = async(event, job_id) => {
        event.preventDefault();
        const response = await applyForJobAPI(id, token);
        if(response.status === "success") {
            openSuccesModal();
        } else {
            openUnsuccesModal();
        };
    };

    //Opening Unsuccess Mesage Modal:
    const openUnsuccesModal = () => {
        setIsOpenUnsuccess(true);
    };

    //Opening Success Mesage Modal:
    const openSuccesModal = () => {
        setIsOpenSuccess(true);
    };

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
                            <div>If you want to make changes to your resume, <Link to="/update-resume">click here</Link>.</div>
                            {
                                (token) &&
                                <div>Click on Apply button to send your resume for this postion</div>
                            }
                        </div>
                        {
                            (token) ? 
                                <div onClick={event => applyHandler(event, id)} className={`${styles.buttonContainer} rounded`}>
                                    Apply
                                </div>

                            :
                            <div>Please <Link to="/login">login</Link> first, then you'll be able to apply.</div>
                        }
                    </div>
                </div>
            </div>
            <SuccessModal isOpenSuccess={isOpenSuccess} setIsOpenSuccess={setIsOpenSuccess} type="apply" />
            <UnsuccessModal isOpenUnsuccess={isOpenUnsuccess} setIsOpenUnsuccess={setIsOpenUnsuccess} />
        </div>
    );
};

export default JobDetailsPage;