import React, { useState } from 'react';

//Modules andLibraries:
import axios from 'axios';

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
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users/signup', data)
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
                    <h1>Sign Up</h1>
                    <div>
                        <div className={styles.field_container}>
                            <label>First Name</label>
                            <input type='text' placeholder='First Name' name='first_name' value={data.first_name} onChange={changeHandler} />
                        </div>
                        <div className={styles.field_container}>
                            <label>Last Name</label>
                            <input type='text' placeholder='Last Name' name='last_name' value={data.last_name} onChange={changeHandler} />
                        </div>
                        <div className={styles.field_container}>
                            <label>Email</label>
                            <input type='email' placeholder='Email' name='email' value={data.email} onChange={changeHandler} />
                        </div>
                        <div className={styles.field_container}>
                            <label>User Name</label>
                            <input type='text' placeholder='User Name' name='username' value={data.username} onChange={changeHandler} />
                        </div>
                        <div className={styles.field_container}>
                            <label>Password</label>
                            <input type='password' placeholder='Password' name='password' value={data.password} onChange={changeHandler} />
                        </div>
                        <div className={styles.field_container}>
                            <label>Birth Date</label>
                            <input type='date' placeholder='Birth Date' name='birth_date' value={data.birth_date} onChange={changeHandler} />
                        </div>
                        <div>
                            <SubmitButton text="Sign Up" />
                        </div>
                        <div>
                            <Link to="/login">If you already have an account, please login!</Link>
                        </div>
                    </div>
                </form>
                <div className={styles.img_container}>
                    <img src='/src/assets/Login.jpg' />
                </div>
            </div>
        </div>
    );
};

export default Signup;