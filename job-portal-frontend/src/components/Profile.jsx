import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//APIs:
import { getUserAPI } from '/src/apis/getUserAPI';

//Components:
import Navbar from "/src/components/Navbar";

//CSS:
import styles from "/src/styles/Profile.module.css";

const Profile = () => {
    const token = Cookies.get("token");

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
    
    return (
        <div className={styles.component}>
            <Navbar />
            <div className={styles.content}>
                <h1 className={styles.heading}>Profile</h1>
                <div className={styles.personalInfo}>
                    <div>
                        <div>{pInfo.username}</div>
                        <div className={styles.names}>
                            <div>{pInfo.first_name}</div>
                            <div>{pInfo.last_name}</div>
                        </div>
                        <div>{pInfo.email}</div>
                        <div>{pInfo.birth_date}</div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;