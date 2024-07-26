import React, { useState } from 'react';

//Modules and Libraries:
import Cookies from "js-cookie"

//APIs:
import { loginAPI } from "/src/apis/loginAPI";

//Components:
import styles from "/src/styles/Login.module.css";

//CSS:
import SubmitButton from '/src/components/SubmitButton';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    //States:
    const[data, setData] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    //Handling input change:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling form submit:
    const submitHandler = async(e) => {
        e.preventDefault();
        const response = await loginAPI(data);
        navigate("/add-job")
        Cookies.set("token", response.data.token);
        Cookies.set("user_id", response.data.user_id)
    };

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <form onSubmit={submitHandler} className={styles.form_container}>
                    <h1>Login</h1>
                    <div>
                        <div className={styles.field_container}>
                            <input type='text' placeholder='Username' name='username' value={data.username} onChange={changeHandler} />
                        </div>
                        <div className={styles.field_container}>
                            <input type='password' placeholder='Password' name='password' value={data.password} onChange={changeHandler} />
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <SubmitButton text="Login" />
                    </div>
                    <div>
                        <Link to="/signup">If you don't already have an account, please sign up!</Link>
                    </div>
                </form>
                <div className={styles.img_container}>
                    <img src='/src/assets/Hiring-amico.svg' />
                </div>
            </div>
        </div>
    );
};

export default Login;