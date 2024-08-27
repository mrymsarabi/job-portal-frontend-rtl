import React, { useState } from 'react';

//Modules and Libraries:
import { Link, useNavigate } from 'react-router-dom';

//APIs:
import { signupAPI } from '/src/apis/signupAPI';

//Components:
import SubmitButton from "/src/components/SubmitButton";
//Modals:
import SuccessModal from "/src/components/Modals/SuccessModal";
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

//CSS:
import styles from "/src/styles/Signup.module.css";

const Signup = () => {
    const navigate = useNavigate();

    //Statess:
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        birth_date: "",
    });

    //States for Unsucces Message Modal:
    const [isOpenUnsuccess, setIsOpenUnsuccess] = useState(false);

    //States for Succes Message Modal:
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);

    //Handling input changes:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling form submit:
    const submitHandler = async(event) => {
        event.preventDefault();
        const response = await signupAPI(data);
        if(response.status === "success") {
            openSuccesModal();
            navigate("/login");
        } else if(response.status === "error") {
            openUnsuccesModal();
        }

    };

    //Opening Unsuccess Mesage Modal:
    const openUnsuccesModal = () => {
        setIsOpenUnsuccess(true);
    };

    //Opening Success Mesage Modal:
    const openSuccesModal = () => {
        setIsOpenSuccess(true);
    };
    
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <form onSubmit={submitHandler} className={styles.form_container}>
                    <h1>Sign Up</h1>
                    <div>
                        <div className={styles.fields}>
                            <div className={`${styles.field_container} ${styles.first} mr-2`}>
                                <input type='text' placeholder='First Name' name='first_name' value={data.first_name} onChange={changeHandler} />
                            </div>
                            <div className={`${styles.field_container} ml-1`}>
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
            <SuccessModal isOpenSuccess={isOpenSuccess} setIsOpenSuccess={setIsOpenSuccess} type="signup" />
            <UnsuccessModal isOpenUnsuccess={isOpenUnsuccess} setIsOpenUnsuccess={setIsOpenUnsuccess} />
        </div>
    );
};

export default Signup;