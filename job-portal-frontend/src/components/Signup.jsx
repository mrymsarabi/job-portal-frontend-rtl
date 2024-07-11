import React, { useState } from 'react';

//Components:
import SubmitButton from "/src/components/SubmitButton";

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
                            <input type='text' placeholder='User Name' name='user_name' value={data.user_name} onChange={changeHandler} />
                        </div>
                        <div className={styles.field_container}>
                            <label>Password</label>
                            <input type='password' placeholder='Password' name='password' value={data.password} onChange={changeHandler} />
                        </div>
                        <div>
                            <SubmitButton text="Sign Up" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;