import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';
import { useLocation, useParams } from 'react-router-dom';

//APIs:
import { jobApplicationAnswerAPI } from '/src/apis/jobApplicationAnswerAPI';
import { getApplicationById } from "/src/apis/getApplicationById";
import { getResumeById } from '/src/apis/getResumeById';
import { getResumeByUserId } from '/src/apis/getResumeByUserId';
import { getUserByIdAPI } from '/src/apis/getUserByIdAPI';

//Components:
import Navbar from "/src/components/Navbar";

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

    //Getting the application based on the id:
    const getApplication = async() => {
        
    }
    return (
        <div>
            <Navbar />
            <div>
                <div className={`${styles.userContainer}`}>
                    <h1>User Profile</h1>
                    <section className={`${styles.userSection}`}>
                        <p><strong>First Name:</strong> {user.first_name}</p>
                        <p><strong>Last Name:</strong> {user.last_name}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Birth Date:</strong> {user.birth_date}</p>
                    </section>
                </div>

                <div className={`${styles.resumeContainer} rounded`}>
                    <h1>Resume</h1>

                    <section className={`${styles.resumeSection}`}>
                        <h2>About Me</h2>
                        <p>{resume.about}</p>
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>Education</h2>
                        {resume.education && resume.education.length > 0 ? (
                            <ul>
                                {resume.education.map((edu, index) => (
                                    <li key={index}>
                                        <strong>{edu.degree}</strong> at {edu.institution} {edu.year && `(${edu.year})`}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No education details available.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>Experience</h2>
                        {resume.experience && resume.experience.length > 0 ? (
                            <ul>
                                {resume.experience.map((exp, index) => (
                                    <li key={index}>
                                        <strong>{exp.title}</strong> at {exp.company}
                                        {exp.start_date && exp.end_date && (
                                            <span>{` (${exp.start_date} - ${exp.end_date})`}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No experience details available.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>Skills</h2>
                        {resume.skills && resume.skills.length > 0 ? (
                            <ul>
                                {resume.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No skills listed.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>Languages</h2>
                        {resume.languages && resume.languages.length > 0 ? (
                            <ul>
                                {resume.languages.map((language, index) => (
                                    <li key={index}>
                                        {language.name} - {language.proficiency}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No languages listed.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>Projects</h2>
                        {resume.projects && resume.projects.length > 0 ? (
                            <ul>
                                {resume.projects.map((project, index) => (
                                    <li key={index}>
                                        <strong>{project.title}</strong>
                                        <p>{project.description}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No projects listed.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>Hobbies</h2>
                        {resume.hobbies && resume.hobbies.length > 0 ? (
                            <ul>
                                {resume.hobbies.map((hobby, index) => (
                                    <li key={index}>{hobby}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No hobbies listed.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>Licenses and Certificates</h2>
                        {resume.licenses_and_certificates && resume.licenses_and_certificates.length > 0 ? (
                            <ul>
                                {resume.licenses_and_certificates.map((cert, index) => (
                                    <li key={index}>{cert}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No licenses or certificates listed.</p>
                        )}
                    </section>

                    <section className={`${styles.resumeSection}`}>
                        <h2>References</h2>
                        {resume.references && resume.references.length > 0 ? (
                            <ul>
                                {resume.references.map((reference, index) => (
                                    <li key={index}>{reference}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No references listed.</p>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AnswerJobApplications;