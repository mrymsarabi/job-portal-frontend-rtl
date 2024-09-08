import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';
import { useLocation, useParams } from 'react-router-dom';

//APIs:
import { jobApplicationAnswerAPI } from '/src/apis/jobApplicationAnswerAPI';
import { getResumeByUserId } from '/src/apis/getResumeByUserId';
import { getUserByIdAPI } from '/src/apis/getUserByIdAPI';

//Components:
import Navbar from "/src/components/Navbar";
import SubmitButton from "/src/components/SubmitButton";
//Modals:
import SuccessModal from "/src/components/Modals/SuccessModal";
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

//CSS:
import styles from "/src/styles/AnswerJobApplications.module.css";

const AnswerJobApplications = () => {
    const token = Cookies.get("token");

    const applicationId = useParams().id;
    const location = useLocation();
    const applicant = location.state;
    
    //States:
    const [user, setUser] = useState({});
    const [resume, setResume] = useState({});
    const [data, setData] = useState({
        status: applicant.status,
        message: "",
    });

    //States for Unsucces Message Modal:
    const [isOpenUnsuccess, setIsOpenUnsuccess] = useState(false);

    //States for Succes Message Modal:
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);

    //Functions: 
    useEffect(() => {
        getResume();
        getUser();
    }, []);

    //Getting the applicants resume:
    const getResume = async() => {
        const response= await getResumeByUserId(applicant.user_id, token);
        if(response.status === "success") {
            setResume(response.resume);
        } else {

        };
    };

    //Getting the user by user_id:
    const getUser = async() => {
        const response = await getUserByIdAPI(applicant.user_id, token);
        if(response.status === "success") {
            setUser(response.user);
            console.log(response.user)
        } else {

        }
    }

    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    const submitHandler = async(event) => {
        event.preventDefault();
        const response = await jobApplicationAnswerAPI(data, applicant.application_id, token);
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
                <div className={`${styles.userContainer}`}>
                    <h1>پروفایل کاربر</h1>
                    {
                        user &&
                        <div className={styles.gridContainer}>
                            <div>نام:</div>
                            <div>{user.first_name}</div>
                            <div>نام خانوادگی:</div>
                            <div>{user.last_name}</div>
                            <div>نام کاربری:</div>
                            <div>{user.username}</div>
                            <div>ایمیل:</div>
                            <div>{user.email}</div>
                            <div>تاریخ تولد:</div>
                            <div>{user.birth_date}</div>
                        </div>
                    }
                </div>

                <div className={`${styles.resumeContainer} rounded`}>
                    <h1>رزومه</h1>
                    <section className={`${styles.resumeSection}`}>
                        <h2>درباره من</h2>
                        <p className={`m-2`}>{resume.about}</p>
                    </section>
                    <section className={`${styles.resumeSection}`}>
                        <h2>تحصیلات و آموزش</h2>
                        {resume.education && resume.education.length > 0 ? (
                            <ul>
                                {resume.education.map((edu, index) => (
                                    <li key={index} className={`m-2`}>
                                        <strong>{edu.degree}</strong> - {edu.institution} {edu.year && `(${edu.year})`}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>اطلاعاتی درباره تحصیلات در دسترس نیست.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>تجربه ها</h2>
                        {resume.experience && resume.experience.length > 0 ? (
                            <ul>
                                {resume.experience.map((exp, index) => (
                                    <li key={index} className={`m-2`}>
                                        <strong>{exp.title}</strong> - {exp.company}
                                        {exp.start_date && exp.end_date && (
                                            <span>{` (${exp.start_date} - ${exp.end_date})`}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>اطلاعاتی درباره تجربه ها در دسترس نیست.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>مهارت ها</h2>
                        {resume.skills && resume.skills.length > 0 ? (
                            <ul>
                                {resume.skills.map((skill, index) => (
                                    <li key={index} className={`m-2`}>{skill}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>مهارتی لیست نشده است.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>زبان ها</h2>
                        {resume.languages && resume.languages.length > 0 ? (
                            <ul>
                                {resume.languages.map((language, index) => (
                                    <li key={index} className={`m-2`}>
                                        <strong>{language.name}</strong> - {language.proficiency}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>زبانی لیست نشده است.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>پروژه ها</h2>
                        {resume.projects && resume.projects.length > 0 ? (
                            <ul>
                                {resume.projects.map((project, index) => (
                                    <li key={index} className={`m-2`}>
                                        <strong>{project.title}</strong>
                                        <p>{project.description}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>پروژه ای لیست نشده است.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>تفریحات و سرگرمی ها</h2>
                        {resume.hobbies && resume.hobbies.length > 0 ? (
                            <ul>
                                {resume.hobbies.map((hobby, index) => (
                                    <li key={index} className={`m-2`}>{hobby}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>سرگرمی ای لیست نشده است.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>مدارک و گواهینامه ها</h2>
                        {resume.licenses_and_certificates && resume.licenses_and_certificates.length > 0 ? (
                            <ul>
                                {resume.licenses_and_certificates.map((cert, index) => (
                                    <li key={index} className={`m-2`}>
                                        <p><strong>{cert.institution}</strong></p>
                                        <p>{cert.title}</p>
                                        <p>{cert.year}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>گواهی و مدرکی لیست نشده است.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>معرف ها</h2>
                        {resume.references && resume.references.length > 0 ? (
                            <ul>
                                {resume.references.map((reference, index) => (
                                    <li key={index} className={`m-2`}>
                                        <p><strong>{reference.name}</strong></p>
                                        <p>{reference.company}</p>
                                        <p>{reference.position}</p>
                                        <p>{reference.relationship}</p>
                                        <p>{reference.email}</p>
                                        <p>{reference.phone}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>معرف ای لیست نشده است.</p>
                        )}
                    </section>
                </div>
                <form onSubmit={submitHandler} className={styles.formContainer}>
                    <div className="form-group">
                        <label htmlFor="status">وضعیت درخواست:</label>
                        <div className={styles.radioContainer}>
                            <input type='radio' name='status' value={"pending"} checked={data.status === "pending"} onChange={changeHandler} />
                            <label>در انتظار</label>
                            <input type='radio' name='status' value={"accepted"} checked={data.status === "accepted"} onChange={changeHandler} />
                            <label>پذیرفته شده</label>
                            <input type='radio' name='status' value={"rejected"} checked={data.status === "rejected"} onChange={changeHandler} />
                            <label>رد شده</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">پیام</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            value={data.message}
                            onChange={changeHandler}
                            rows="5"
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <SubmitButton text="ثبت" />
                    </div>
                </form>
            </div>
            <SuccessModal isOpenSuccess={isOpenSuccess} setIsOpenSuccess={setIsOpenSuccess} type="answer" />
            <UnsuccessModal isOpenUnsuccess={isOpenUnsuccess} setIsOpenUnsuccess={setIsOpenUnsuccess} />
        </div>
    );
};

export default AnswerJobApplications;