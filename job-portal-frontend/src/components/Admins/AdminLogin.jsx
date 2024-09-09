import React, { useState } from 'react';

//APIs:
import { adminLogin } from "/src/apis/admins/adminLogin";

//Componetns:
import SubmitButton from "/src/components/SubmitButton";
//Modals:
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

//CSS:
import styles from "/src/styles/Admins/AdminLogin.module.css";

const AdminLogin = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({
        username: false,
        password: false,
    });

    //States for Unsucces Message Modal:
    const [isOpenUnsuccess, setIsOpenUnsuccess] = useState(false);

    //Handling an item's changes:
    const changeHandler = () => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling an item's focus:
    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name]: true});
    };

    //Handling form's submission:
    const submitHandler = async(event) => {
        event.preventDefault();
        const response = await adminLogin(data);
        if(response.status === "success") {

        } else {
            openUnsuccesModal();
        };
    };

    //Opening Unsuccess Mesage Modal:
    const openUnsuccesModal = () => {
        setIsOpenUnsuccess(true);
    };

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <form onSubmit={submitHandler} className={styles.form_container}>
                    <h1>ورود ادمین</h1>
                    <div className={styles.fields_wrapper}>
                        <div className={styles.field_container}>
                            <input
                                type='text'
                                placeholder='نام کاربری'
                                name='username'
                                value={data.username}
                                onChange={changeHandler}
                                onFocus={focusHandler}
                            />
                        </div>
                        <div className={styles.field_container}>
                            <input
                                type='password'
                                placeholder='رمز عبور'
                                name='password'
                                value={data.password}
                                onChange={changeHandler}
                                onFocus={focusHandler}
                            />
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <SubmitButton text="ورود" />
                    </div>
                </form>
            </div>
            <UnsuccessModal isOpenUnsuccess={isOpenUnsuccess} setIsOpenUnsuccess={setIsOpenUnsuccess} />
        </div>
    );    
};

export default AdminLogin;