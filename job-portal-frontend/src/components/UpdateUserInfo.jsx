import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//APIs:
import { getUserAPI } from "/src/apis/getUserAPI";

//Components:
import Navbar from "/src/components/Navbar";
import SubmitButton from "/src/components/SubmitButton";

//CSS:
import styles from "/src/styles/UpdateUserInfo.module.css";

const UpdateUserInfo = () => {
    const token = Cookies.get("token");

    //States:
    const [data, setData] = useState({});

    //Functions:
    useEffect(() => {
        fetchData();
    }, []);

    //Getting the user's data:
    const fetchData = async() => {
        const response = await getUserAPI(token);
        setData(response.data.user);
    };

    //Handling input's changes:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling form's submition:
    const submitHandler = async() => {

    }

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <h1>Edit Profile</h1>
                <form onSubmit={submitHandler} className={styles.form}>
                    <div className={styles.gridContainer}>
                        {/* Fields */}
                        <div className={styles.field}>
                            <label>First Name</label>
                            <input type='text' name='first_name' value={data.first_name} onChange={changeHandler} />
                        </div>
                        <div className={styles.field}>
                            <label>Last Name</label>
                            <input type='text' name='last_name' value={data.last_name} onChange={changeHandler} />
                        </div>
                        <div className={styles.field}>
                            <label>Username</label>
                            <input type='text' name='username' value={data.username} onChange={changeHandler} />
                        </div>
                        <div className={styles.field}>
                            <label>Password</label>
                            
                        </div>
                        <div className={styles.field}>
                            <label>Email</label>
                            <input type='text' name='email' value={data.email} onChange={changeHandler} />
                        </div>
                        <div className={styles.field}>
                            <label>Birth Date</label>
                            <input type='date' name='birth_date' value={data.birth_date} onChange={changeHandler} />
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        {/* Submit Button */}
                        <SubmitButton text="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUserInfo;