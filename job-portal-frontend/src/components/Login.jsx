import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from "js-cookie"
import { Link, useNavigate } from 'react-router-dom';

//APIs:
import { loginAPI } from "/src/apis/loginAPI";

//Components:
import SubmitButton from '/src/components/SubmitButton';

//Functions:
import { validation } from "/src/helper/validation";

//CSS:
import styles from "/src/styles/Login.module.css";

const Login = () => {
    //States:
    const[data, setData] = useState({
        username: "",
        password: "",
    });

    //Erros handling states:
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({
        username: false,
        password: false,
    });

    const navigate = useNavigate();

    //Functions:
    useEffect(() => {
        setErrors(validation(data, "login"));
    }, [data]);

    //Handling input change:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling an item's focus:
    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name]: true});
    };

    //Handling form submit:
    const submitHandler = async(e) => {
        e.preventDefault();
        if(Object.keys(errors).length === 0) {
            const response = await loginAPI(data);
            navigate("/add-job")
            Cookies.set("token", response.data.token);
            Cookies.set("user_id", response.data.user_id)
        } else {
            setTouched({
                username: true,
                password: true,
            });
        };
    };

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <form onSubmit={submitHandler} className={styles.form_container}>
                    <h1>Login</h1>
                    <div>
                        <div className={styles.field_container}>
                            <input type='text' placeholder='Username' name='username' value={data.username} onChange={changeHandler} onFocus={focusHandler} />
                            {
                                (touched.username && errors.username) && <span className={styles.error}>{errors.username}</span>
                            }
                        </div>
                        <div className={styles.field_container}>
                            <input type='password' placeholder='Password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                            {
                                (touched.password && errors.password) && <span className={styles.error}>{errors.password}</span>
                            }
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