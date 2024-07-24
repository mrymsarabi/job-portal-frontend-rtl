import React, { useState } from 'react';

//Modules and Libraries:
import axios from 'axios';

//Components:
import styles from "/src/styles/Login.module.css";

//CSS:
import SubmitButton from '/src/components/SubmitButton';
import { Link } from 'react-router-dom';

const Login = () => {
    //States:
    const[data, setData] = useState({
        username: "",
        password: "",
    });

    //Handling input change:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling form submit:
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users/login', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error.response ? error.response.data : error.message);
            });
    };

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <form onSubmit={submitHandler} className={styles.form_container}>
                    <h1>Login</h1>
                    <div>
                        <div className={styles.field_container}>
                            <label>User Name</label>
                            <input type='text' placeholder='User Name' name='username' value={data.username} onChange={changeHandler} />
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
                <div className={styles.img_container}>
                    <img src='/src/assets/Login.jpg' />
                </div>
            </div>
        </div>
    );
};

export default Login;