import React, { useState } from 'react';

import axios from 'axios';

//Modules and Libraries:
import Cookies from 'js-cookie';

//Components:
import Navbar from "/src/components/Navbar";
import SubmitButton from '/src/components/SubmitButton';

//CSS:
import styles from "/src/styles/AddJob.module.css";

const AddJob = () => {
    const token = Cookies.get("token");
    const user_id = Cookies.get("user_id");

    console.log(token)

    //States:
    const [data, setData] = useState({
        title: "",
        sector: "",
        salary: "",
        location: "",
        job_type: "",
        description: "",
        requirements: "",
        benefits: "",
    });

    //Functions:
    //Handling input changes:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling form's submit:
    const submitHandler = async(event) => {
        event.preventDefault();
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            const response = await axios.post('http://localhost:5000/jobs/jobs', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Job posted successfully');
        } catch (error) {
            console.error(error);
            console.log('Failed to post job');
        }
    };

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <div>
                    <h1>Add Job</h1>
                    <form className={styles.form} onSubmit={submitHandler}>
                        <div className={styles.gridContainer}>
                            <div className={styles.fieldContainer}>
                                <label>Title</label>
                                <input type='text' name='title' value={data.title} onChange={changeHandler} />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>Salary</label>
                                <input type='text' name='salary' value={data.salary} onChange={changeHandler} />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>Desctiption</label>
                                <textarea name='description' value={data.description} onChange={changeHandler} />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>Benefits</label>
                                <textarea name='benefits' value={data.benefits} onChange={changeHandler} />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>Reuirements</label>
                                <textarea name='requirements' value={data.requirements} onChange={changeHandler} />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>Sector</label>
                                <input type='text' name='sector' value={data.sector} onChange={changeHandler} />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>Job Type</label>
                                <input type='text' name='job_type' value={data.job_type} onChange={changeHandler} />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>Country, City</label>
                                <input type='text' name='location' value={data.location} onChange={changeHandler} />
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <SubmitButton text="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;