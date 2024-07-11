import React, { useState } from 'react';

//Components:
import styles from "/src/styles/Login.module.css";

//CSS:
import SubmitButton from '/src/components/SubmitButton';
import { Link } from 'react-router-dom';

const Login = () => {
    //States:
    const[data, setData] = useState({
        user_name: "",
        password: "",
    });

    //Handling input change:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling submitting form:
    const submitHandler = (event) => {
        event.prevetDefault();
    };

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.img_container}>
                    <img src='/src/assets/Login.jpg' />
                </div>
                <form onSubmit={submitHandler} className={styles.form_container}>
                    <h1>Login</h1>
                    <div>
                        <div className={styles.field_container}>
                            <label>User Name</label>
                            <input type='text' placeholder='User Name' name='user_name' value={data.user_name} onChange={changeHandler} />
                        </div>
                        <div className={styles.field_container}>
                            <label>Password</label>
                            <input type='password' placeholder='Password' name='password' value={data.password} onChange={changeHandler} />
                        </div>
                    </div>
                    <div>
                        <SubmitButton text="Login" />
                    </div>
                    <div>
                        <Link to="/signup">If you don't already have an account, please sign up!</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;