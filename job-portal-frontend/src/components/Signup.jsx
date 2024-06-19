import React, { useState } from 'react';

//CSS:
import styles from "/src/styles/Signup.module.css";

const Signup = () => {
    //Statess:
    const [data, setData] = useState({
        id: "",
        first_name: "",
        last_name: "",
        user_name: "",
        user_role: "admin",
    });

    //Handling input changes:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling form submit:
    const submitHandler = async() => {

    };
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.img_container}>
                    <img src='/src/assets/Login.jpg' />
                </div>
                <form onSubmit={submitHandler}>

                </form>
            </div>
        </div>
    );
};

export default Signup;