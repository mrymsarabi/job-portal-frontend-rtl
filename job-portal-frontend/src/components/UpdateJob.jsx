import React, { useEffect, useState } from 'react';

//Modules and Library:
import Cookies from "js-cookie";
import { useParams, useNavigate } from 'react-router-dom';

//APIs:
import { getJobAPI } from '/src/apis/getJobAPI';
import { updateJobAPI } from '/src/apis/updateJobAPI';

//Components:
import Navbar from "/src/components/Navbar";
import SelectComponent from "/src/components/Inputs/SelectComponent";
import SubmitButton from "/src/components/SubmitButton";
//Modals:
import SuccessModal from "/src/components/Modals/SuccessModal";
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

//CSS:
import styles from "/src/styles/UpdateJob.module.css";

const UpdateJob = () => {
    const token = Cookies.get("token");
    const id = useParams().id;
    const navigate = useNavigate();

    //States:
    const [job, setJob] = useState({});

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

    const defaultSector = sectors.find((sector) => sector.value === job.sector);
    const defaultJobType = jobTypes.find((jobType) => jobType.value === job.job_type);


    //Functions:
    useEffect(() => {
        fetchJob();
    }, []);

    //Fetching the job details:
    const fetchJob = async() => {
        try {
            const response = await getJobAPI(id);
            setJob(response.data);
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    //Handling form input changes:
    const changeHandler = (event) => {
        setJob({ ...job, [event.target.name]: event.target.value });
    };

    //Submit updated job:
    const submitHandler = async (event) => {
        event.preventDefault();
       const response = await updateJobAPI(id, job, token);
       if(response.status === "success") {
            openSuccesModal();
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
                <h2 className={styles.title}>Update Job</h2>
                <div>
                    <form className={styles.form} onSubmit={submitHandler}>
                        <div className={styles.fieldContainer}>
                            <label className={styles.label}>Job Title</label>
                            <input
                                type="text"
                                name="title"
                                value={job.title || ''}
                                onChange={changeHandler}
                                className={styles.input}
                            />
                        </div>
                        
                        <div className={styles.fieldContainer}>
                            <label className={styles.label}>Company Name</label>
                            <input
                                type="text"
                                name="company_name"
                                value={job.company_name || ''}
                                onChange={changeHandler}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.fieldContainer}>
                            <label className={styles.label}>Location</label>
                            <input
                                type="text"
                                name="location"
                                value={job.location || ''}
                                onChange={changeHandler}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.fieldContainer}>
                            <label className={styles.label}>Salary</label>
                            <input
                                type="text"
                                name="salary"
                                value={job.salary || ''}
                                onChange={changeHandler}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.fieldContainer}>
                            <label className={styles.label}>Description</label>
                            <textarea
                                name="description"
                                value={job.description || ''}
                                onChange={changeHandler}
                                className={styles.textarea}
                            />
                        </div>

                        <div className={styles.fieldContainer}>
                            <label className={styles.label}>Benefits</label>
                            <textarea
                                name="benefits"
                                value={job.benefits || ''}
                                onChange={changeHandler}
                                className={styles.textarea}
                            />
                        </div>

                        <div className={styles.fieldContainer}>
                            <label className={styles.label}>Requirements</label>
                            <textarea
                                name="requirements"
                                value={job.requirements || ''}
                                onChange={changeHandler}
                                className={styles.textarea}
                            />
                        </div>

                        <div className={styles.fieldContainer}>
                            <label>Job Type</label>
                            <SelectComponent options={jobTypes} handleChange={handleJobTypeChange} defaultOption={defaultJobType} width="720px" height="40px" />
                        </div>

                        <div className={styles.fieldContainer}>
                            <label>Sector</label>
                            <SelectComponent options={sectors} handleChange={handleSectorChange} defaultOption={defaultSector} width="720px" height="40px" />
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

export default UpdateJob;
