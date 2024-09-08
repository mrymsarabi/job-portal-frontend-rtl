import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import { Link, useNavigate } from 'react-router-dom';

//APIs:
import { signupAPI } from '/src/apis/signupAPI';

//Components:
import SubmitButton from "/src/components/SubmitButton";
//Modals:
import SuccessModal from "/src/components/Modals/SuccessModal";
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

//functions:
import { validation } from "/src/helper/validation";

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

    //Handling Error Showing:
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({
        first_name: false,
        last_name: false,
        username: false,
        email: false,
        password: false,
        birth_date: false,
    });

    //States for Unsucces Message Modal:
    const [isOpenUnsuccess, setIsOpenUnsuccess] = useState(false);

    //States for Succes Message Modal:
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);

    //Functions:
    useEffect(() => {
        setErrors(validation(data, "signup"));
    }, [data]);

    //Handling input changes:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling an input's focus:
    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name]: true});
    };

    //Handling form submit:
    const submitHandler = async(event) => {
        event.preventDefault();
        if(Object.keys(errors).length === 0) {
            const response = await signupAPI(data);
            if(response.status === "success") {
                openSuccesModal();
                navigate("/login");
            } else if(response.status === "error") {
                openUnsuccesModal();
            };
        } else {
            setTouched({
                first_name: true,
                last_name: true,
                username: true,
                email: true,
                password: true,
                birth_date: true,
            });
        };
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
                    <h1>ثبت نام</h1>
                    <div>
                        <div className={styles.fields}>
                            <div className={`${styles.field_container} ${styles.first} mr-2`}>
                                <input type='text' placeholder='نام' name='first_name' value={data.first_name} onChange={changeHandler} onFocus={focusHandler} />
                                {
                                    (touched.first_name && errors.first_name) && <span className={styles.error}>{errors.first_name}</span>
                                }
                            </div>
                            <div className={`${styles.field_container} ${styles.second} ml-1`}>
                                <input type='text' placeholder='نام خانوادگی' name='last_name' value={data.last_name} onChange={changeHandler} onFocus={focusHandler} />
                                {
                                    (touched.last_name && errors.last_name) && <span className={styles.error}>{errors.last_name}</span>
                                }
                            </div>
                        </div>
                        <div className={styles.fields}>
                            <div className={`${styles.field_container} ${styles.first}`}>
                                <input type='text' placeholder='نام کاربری' name='username' value={data.username} onChange={changeHandler} onFocus={focusHandler} />
                                {
                                    (touched.username && errors.username) && <span className={styles.error}>{errors.username}</span>
                                }
                            </div>
                            <div className={styles.field_container}>
                                <input type='password' placeholder='رمزعبور' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                                {
                                    (touched.password && errors.password) && <span className={styles.error}>{errors.password}</span>
                                }
                            </div>
                        </div>
                        <div className={styles.field_container}>
                            <input type='email' placeholder='ایمیل' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                            {
                                (touched.email && errors.email) && <span className={styles.error}>{errors.email}</span>
                            }
                        </div>
                        <div className={styles.field_container}>
                            <input type='date' placeholder='تاریخ تولد' name='birth_date' value={data.birth_date} onChange={changeHandler} onFocus={focusHandler} />
                            {
                                (touched.birth_date && errors.birth_date) && <span className={styles.error}>{errors.birth_date}</span>
                            }
                        </div>
                        <div className={styles.buttonContainer}>
                            <SubmitButton text="ثبت نام" />
                        </div>
                        <div className={styles.link}>
                            <Link to="/login">اگر از قبل یک حساب کاربری دارید، لطفا وارد شوید.</Link>
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