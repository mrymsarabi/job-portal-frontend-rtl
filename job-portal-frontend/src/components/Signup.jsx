import React, { useState } from 'react';

//APIs:
import { signupAPI } from '/src/apis/signupAPI';

//Components:
import SubmitButton from "/src/components/SubmitButton";

//CSS:
import styles from "/src/styles/Signup.module.css";
import { Link } from 'react-router-dom';

const Signup = () => {
    //Statess:
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        birth_date: "",
    });

    //Handling input changes:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling form submit:
    const submitHandler = async(e) => {
        e.preventDefault();
        const response = await signupAPI(data);
    };
    
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <form onSubmit={submitHandler} className={styles.form_container}>
                    <h1>Sign Up</h1>
                    <div>
                        <div className={styles.fields}>
                            <div className={`${styles.field_container} ${styles.first}`}>
                                <input type='text' placeholder='First Name' name='first_name' value={data.first_name} onChange={changeHandler} />
                            </div>
                            <div className={styles.field_container}>
                                <input type='text' placeholder='Last Name' name='last_name' value={data.last_name} onChange={changeHandler} />
                            </div>
                        </div>
                        <div className={styles.fields}>
                            <div className={`${styles.field_container} ${styles.first}`}>
                                <input type='text' placeholder='Username' name='username' value={data.username} onChange={changeHandler} />
                            </div>
                            <div className={styles.field_container}>
                                <input type='password' placeholder='Password' name='password' value={data.password} onChange={changeHandler} />
                            </div>
                        </div>
                        <div className={styles.field_container}>
                            <input type='email' placeholder='Email' name='email' value={data.email} onChange={changeHandler} />
                        </div>
                        <div className={styles.field_container}>
                            <input type='date' placeholder='Birth Date' name='birth_date' value={data.birth_date} onChange={changeHandler} />
                        </div>
                        <div className={styles.buttonContainer}>
                            <SubmitButton text="Sign Up" />
                        </div>
                        <div>
                            <Link to="/login">If you already have an account, please login!</Link>
                        </div>
                    </div>
                </form>
                <div className={styles.img_container}>
                    <img src='/src/assets/Hiring-amico.svg' />
                </div>
            </div>
        </div>
    );
};

export default Signup;