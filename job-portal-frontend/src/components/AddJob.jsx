import React, { useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//APIs:
import { addJobAPI } from '/src/apis/addJobAPI';

//Components:
import Navbar from "/src/components/Navbar";
import SubmitButton from '/src/components/SubmitButton';
import SelectComponent from "/src/components/Inputs/SelectComponent";
//Modals:
import SuccessModal from "/src/components/Modals/SuccessModal";
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

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
        requirements: "",
        description: "",
        benefits: "",
    });

    //Handle Errors:
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({
        title: false,
        sector: false,
        salary: false,
        location: false,
        job_type: false,
        requirements: false,
        description: false,
        benefits: false,
    });

    //States for Unsucces Message Modal:
    const [isOpenUnsuccess, setIsOpenUnsuccess] = useState(false);

    //States for Succes Message Modal:
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);

    const sectors = [
        {
            value: "Education and training",
            label: "Education and training"
        },
        {
            value: "Construction, repair and maintenance services",
            label: "Construction, repair and maintenance services"
        },
        {
            value: "Manufacturing industry",
            label: "Manufacturing industry"
        },
        {
            value: "Transport of goods and people",
            label: "Transport of goods and people"
        }, 
        {
            value: "Health",
            label: "Health"
        },
        {
            value: "Aerospace and defence",
            label: "Aerospace and defence"
        },
        {
            value: "Real estate",
            label: "Real estate"
        },
        {
            value: "Government and public administration",
            label: "Government and public administration"
        },
        {
            value: "Human Resources and recruitment",
            label: "Human Resources and recruitment"
        },
        {
            value: "Pharmaceuticals and biotechnology",
            label: "Pharmaceuticals and biotechnology"
        },
        {
            value: "NGOs and non-profit associations",
            label: "NGOs and non-profit associations"
        },
        {
            value: "Arts, Entertainment and Recreation",
            label: "Arts, Entertainment and Recreation"
        }, 
        {
            value: "Legal",
            label: "Legal"
        },
        {
            value: "Retail and wholesale trade",
            label: "Retail and wholesale trade"
        },
        {
            value: "Energy and Exploitation of natural resources",
            label:"Energy and Exploitation of natural resources"
        },
        {
            value: "Finance",
            label: "Finance"
        },
        {
            value: "Computer Science",
            label: "Computer Science"
        },
        {
            value: "Particular services",
            label: "Particular services"
        },
        {
            value: "Management and business consulting",
            label: "Management and business consulting"
        },
        {
            value: "Insurance",
            label: "Insurance"
        },
        {
            value: "Restoration",
            label: "Restoration"
        },
        {
            value: "Media and communication",
            label: "Media and communication"
        },
        {
            value: "Telecommunications",
            label: "Telecommunications"
        },
        {
            value: "Agriculture",
            label: "Agriculture"
        },
        {
            value: "Hospitality and Tourism",
            label: "Hospitality and Tourism"
        }
    ];

    //Handle Sector Select:
    const handleSectorChange = (selectedOption) => {
        setData({...data, sector: selectedOption});
    };

    const jobTypes = [
        {
            value: "Full-time",
            label: "Full-time"
        },
        {
            value: "Permanent",
            label: "Permanent"
        },
        {
            value: "Contract",
            label: "Contract"
        },
        {
            value: "Part-time",
            label:"Part-time"
        },
        {
            value: "Temporary",
            label: "Temporary"
        },
        {
            value: "Apprenticeship",
            label: "Apprenticeship"
        },
        {
            value: "Internship",
            label: "Internship"
        },
        {
            value: "Volunteer",
            label: "Volunteer"
        }
    ];

    //HandleJob Type Select:
    const handleJobTypeChange = (selectedOption) => {
        setData({...data, job_type: selectedOption});
    };

    //Functions:
    //Handling input changes:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling form's submit:
    const submitHandler = async(event) => {
        event.preventDefault();
        const response = await addJobAPI(data, token);
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
                                <SelectComponent options={sectors} handleChange={handleSectorChange} width="350px" height="40px" />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>Job Type</label>
                                <SelectComponent options={jobTypes} handleChange={handleJobTypeChange} width="350px" height="40px" />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>City</label>
                                <input type='text' name='location' value={data.location} onChange={changeHandler} />
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <SubmitButton text="Add" />
                        </div>
                    </form>
                </div>
            </div>
            <SuccessModal isOpenSuccess={isOpenSuccess} setIsOpenSuccess={setIsOpenSuccess} type="add" />
            <UnsuccessModal isOpenUnsuccess={isOpenUnsuccess} setIsOpenUnsuccess={setIsOpenUnsuccess} />
        </div>
    );
};

export default AddJob;