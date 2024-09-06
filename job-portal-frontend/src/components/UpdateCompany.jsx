import React, { useState, useEffect } from 'react';

//Modules and Libraries:
import Cookies from "js-cookie";
import { useParams } from 'react-router-dom';

//APIs:
import { myCompanyAPI } from '/src/apis/myCompanyAPI';
import { updateCompanyAPI } from '/src/apis/updateCompanyAPI';

//Component:
import Navbar from "/src/components/Navbar";
import SubmitButton from "/src/components/SubmitButton";
//Modals:
import SuccessModal from "/src/components/Modals/SuccessModal";
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

//CSS:
import styles from "/src/styles/UpdateCompany.module.css";

const UpdateCompany = () => {
    const token = Cookies.get("token");

    const id = useParams().id;

    //States:
    const [company, setCompany] = useState({});

    //States for Unsucces Message Modal:
    const [isOpenUnsuccess, setIsOpenUnsuccess] = useState(false);

    //States for Succes Message Modal:
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);

    //Functions:
    useEffect(() => {
        fetchCompany();
    }, []);

    //Getting the company's data:
    const fetchCompany = async() => {
        const response = await myCompanyAPI(token);
        if (response.status === "success") {
            setCompany(response.company);
        } else {
            setCompany({});
        };
    };

    //Handle an input's changes:
    const changeHandler = (event) => {
        setCompany({...company, [event.target.name]: event.target.value});
    };

    //Handling form's submit:
    const submitHandler = async(event) => {
        event.preventDefault();
        const response = await updateCompanyAPI(company, id, token);
        if(response.status === "success") {
            openSuccesModal();
        } else {
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
            <Navbar />
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1>Add Company</h1>
                    </div>
                    <form onSubmit={submitHandler} className={styles.form}>
                        <div className={styles.gridContainer}>
                            <div className={styles.field}>
                                <label htmlFor="title">Company Title</label>
                                <input 
                                    type='text' 
                                    name='title' 
                                    value={company.title} 
                                    onChange={changeHandler} 
                                    className={styles.input} 
                                    placeholder="Enter company title" 
                                />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="about_us">About Us</label>
                                <textarea 
                                    name='about_us' 
                                    value={company.about_us} 
                                    onChange={changeHandler} 
                                    className={styles.textarea} 
                                    placeholder="Describe your company" 
                                />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="number_of_employees">Number of Employees</label> 
                                <input 
                                    type='number' 
                                    name='number_of_employees' 
                                    value={company.number_of_employees} 
                                    onChange={changeHandler} 
                                    className={styles.input} 
                                    placeholder="Enter number of employees" 
                                /> 
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="founded_date">Founded Date</label>
                                <input 
                                    type='date' 
                                    name='founded_date' 
                                    value={company.founded_date} 
                                    onChange={changeHandler} 
                                    className={styles.input} 
                                />
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <SubmitButton text="Submit" />
                        </div>
                    </form>
                </div>
            </div>
            <SuccessModal isOpenSuccess={isOpenSuccess} setIsOpenSuccess={setIsOpenSuccess} type="update" />
            <UnsuccessModal isOpenUnsuccess={isOpenUnsuccess} setIsOpenUnsuccess={setIsOpenUnsuccess} />
        </div>
    );
};

export default UpdateCompany;