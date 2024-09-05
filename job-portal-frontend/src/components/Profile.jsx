import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

//APIs:
import { getUserAPI } from '/src/apis/getUserAPI';

//Components:
import Navbar from "/src/components/Navbar";
import ResumeComponent from '/src/components/ResumeComponent';
import Icon from "/src/icons/Icon";

//CSS:
import styles from "/src/styles/Profile.module.css";

const Profile = () => {
    const token = Cookies.get("token");

    const navigate = useNavigate();

    //States:
    const [pInfo, setPInfo] = useState({});

    //useEffect:
    useEffect(() =>{
        getPersonalInfo();
    }, []);

    //Getting User's Personal Data:
    const getPersonalInfo = async() => {
        const response = await getUserAPI(token);
        setPInfo(response.data.user);
    };

    const editHandler = () => {
        navigate("/update-user-info");
    };
    
    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <div>
                    <h1 className={styles.heading}>Profile</h1>
                    <div className={styles.personalInfo}>
                        <div>
                            <div className={styles.username}>{pInfo.username}</div>
                            <div className={styles.names}>
                                <div>{pInfo.first_name}</div>
                                <div>{pInfo.last_name}</div>
                            </div>
                            <div>{pInfo.email}</div>
                            <div>{pInfo.birth_date}</div>
                            <div className={styles.iconContainer} onClick={editHandler}>
                                <Link to="/update-user-info">
                                    <Icon icon="account-edit" color="#000" width="60px" height="60px" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Resume Container */}
                    <ResumeComponent />
                </div>
            </div>
        </div>

    );
};

export default Profile;