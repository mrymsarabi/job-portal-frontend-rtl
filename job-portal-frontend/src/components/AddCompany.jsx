import React, { useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

//APIs:
import { addCompanyAPI } from '/src/apis/addCompanyAPI';

//Components:
import Navbar from "/src/components/Navbar";
import SubmitButton from "/src/components/SubmitButton";
//Modals:
import SuccessModal from "/src/components/Modals/SuccessModal";
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

//CSS:
import styles from "/src/styles/AddCompany.module.css";

const AddCompany = () => {
    const token = Cookies.get("token");

    const navigate = useNavigate();

    //States:
    const [data, setData] = useState({
        title: "",
        about_us: "",
        number_of_employees: 0,
        founded_date: "",
    });

    //States for Unsucces Message Modal:
    const [isOpenUnsuccess, setIsOpenUnsuccess] = useState(false);

    //States for Succes Message Modal:
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);

    //Handling a field's changes:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling form's submission:
    const submitHandler = async(event) => {
        event.preventDefault();
        const response = await addCompanyAPI(data, token);
        if(response.status === "success") {
            openSuccesModal();
            navigate('/my-company');
        } else {
            openUnsuccesModal();
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
            <Navbar />
            <div className={styles.content}>

                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1>افزودن شرکت</h1>
                    </div>
                    <form onSubmit={submitHandler} className={styles.form}>
                        <div className={styles.gridContainer}>
                            <div className={styles.field}>
                                <label htmlFor="title">عنوان شرکت</label>
                                <input 
                                    type='text' 
                                    name='title' 
                                    value={data.title} 
                                    onChange={changeHandler} 
                                    className={styles.input} 
                                />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="about_us">درباره ما</label>
                                <textarea 
                                    name='about_us' 
                                    value={data.about_us} 
                                    onChange={changeHandler} 
                                    className={styles.textarea} 
                                />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="number_of_employees">تعداد کارکنان</label> 
                                <input 
                                    type='number' 
                                    name='number_of_employees' 
                                    value={data.number_of_employees} 
                                    onChange={changeHandler} 
                                    className={styles.input} 
                                /> 
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="founded_date">تاریخ تاسیس</label>
                                <input 
                                    type='date' 
                                    name='founded_date' 
                                    value={data.founded_date} 
                                    onChange={changeHandler} 
                                    className={styles.input} 
                                />
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <SubmitButton text="افزودن" />
                        </div>
                    </form>
                </div>
            </div>
            <SuccessModal isOpenSuccess={isOpenSuccess} setIsOpenSuccess={setIsOpenSuccess} type="add" />
            <UnsuccessModal isOpenUnsuccess={isOpenUnsuccess} setIsOpenUnsuccess={setIsOpenUnsuccess} />
        </div>
    );
};

export default AddCompany;
