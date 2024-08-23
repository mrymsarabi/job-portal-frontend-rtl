import React, { useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//APIs:
import { addCompanyAPI } from '/src/apis/addCompanyAPI';

//Components:
import Navbar from "/src/components/Navbar";
import SubmitButton from "/src/components/SubmitButton";

//CSS:
import styles from "/src/styles/AddCompany.module.css";

const AddCompany = () => {
    const token = Cookies.get("token");

    //States:
    const [data, setData] = useState({
        title: "",
        about_us: "",
        number_of_employees: 0,
        founded_date: "",
    });

    //Funstions:
    //Handling a field's changes:
    const changeHander = (event) =>{
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling form's submission:
    const submitHandler = async(event) => {
        event.preventDefault();
        const response = await addCompanyAPI(data, token);
    };

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <div className={`${styles.topContent}`}>
                    {/* Top Content */}
                    <h1>Add Company</h1>
                </div>
                <form onSubmit={submitHandler} className={`${styles.form} rounded p-4`}>
                    <div className={styles.gridContainer}>
                        <div className={styles.field}>
                            <label>Title</label>
                            <input type='text' name='title' value={data.title} onChange={changeHander} className={`border rounded`} />
                        </div>
                        <div className={styles.field}>
                            <label>About Us</label>
                            <textarea name='about_us' value={data.about_us} onChange={changeHander} className={`border rounded`} />
                        </div>
                        <div className={styles.field}>
                            <label>Number of Employees</label> 
                            <input type='number' name='number_of_employees' value={data.number_of_employees} onChange={changeHander} className={`border rounded`} /> 
                        </div>
                        <div className={styles.field}>
                            <label>Founded date</label>
                            <input type='date' name='founded_date' value={data.founded_date} onChange={changeHander} className={`border rounded`} />
                        </div>
                    </div>
                    <div>
                        <SubmitButton text="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCompany;