import React, { useEffect, useState } from 'react';

//Modules and Library:
import Cookies from 'js-cookie';

//APIs:
import { getResumeAPI } from '/src/apis/getResumeAPI';

//Components:
import Navbar from "/src/components/Navbar";
import Icon from "/src/icons/Icon";

//CSS:
import styles from "/src/styles/Profile.module.css";
import { Link } from 'react-router-dom';

const ResumeComponent = () => {
    const token = Cookies.get("token");

    //States:
    const [resume, setResume] = useState({});

    //Functions:
    useEffect(() => {
        fetchResume();
    }, []);

    //Getting the logged in user's resume:
    const fetchResume = async() => {
        const response = await getResumeAPI(token);
        if(response.status === "success") {
            setResume(response.resume);
        } else {

        }
    };

    return (
        <div className={styles.resumeContainer}>
            {/* About Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <ul>
                    {
                        resume.about !== "" ? <li>{resume.about}</li> : <li>There is nothing to show!</li>
                    }
                </ul>
            </div>
            {/* Education Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Education</h2>
                <ul>
                    {(resume.education && resume.education.length > 0)  ? resume.education.map((edu, index) => (
                        <li key={index} className={styles.educationItem}>
                            <h3>{edu.degree}</h3>
                            <p>{edu.institution}</p>
                            <p>{edu.year}</p>
                            <p>{edu.description}</p>
                        </li>
                    ))
                    : <li>There is nothing to show!</li>
                    }
                </ul>
            </div>

            {/* Experience Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Experience</h2>
                <ul>
                    {(resume.experience && resume.experience.length > 0) ? resume.experience.map((exp, index) => (
                        <li key={index} className={styles.experienceItem}>
                            <h3>{exp.title}</h3>
                            <p>{exp.company}</p>
                            <p>{exp.start_date} - {exp.end_date}</p>
                            <p>{exp.description}</p>
                        </li>
                    ))
                    : <li>There is nothing to show!</li>
                    }
                </ul>
            </div>

            {/* Projects Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <ul>
                    {(resume.projects && resume.projects.length > 0) ? resume.projects.map((project, index) => (
                        <li key={index} className={styles.projectItem}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </li>
                    ))
                    : <li>There is nothing to show!</li>
                    }
                </ul>
            </div>

            {/* Skills Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                <ul>
                    {(resume.skills && resume.skills.length > 0) ? resume.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))
                    : <li>There is nothing to show!</li>
                }
                </ul>
            </div>

            {/* Languages Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Languages</h2>
                <ul>
                    {(resume.languages && resume.languages.length > 0) ? resume.languages.map((lang, index) => (
                        <li key={index}>
                            <p>{lang.name} - {lang.proficiency}</p>
                        </li>
                    ))
                    : <li>There is nothing to show!</li>
                    }
                </ul>
            </div>

            {/* Hobbies Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Hobbies</h2>
                <ul>
                    {(resume.hobbies && resume.hobbies.length > 0) ? resume.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))
                    : <li>There is nothing to show!</li>
                }
                </ul>
            </div>

            {/* Licenses and Certificates Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Licenses & Certificates</h2>
                <ul>
                    {(resume.licenses_and_certificates && resume.licenses_and_certificates.length > 0) ? resume.licenses_and_certificates.map((cert, index) => (
                        <li key={index} className={styles.certificateItem}>
                            <h3>{cert.title}</h3>
                            <p>{cert.institution}</p>
                            <p>{cert.year}</p>
                        </li>
                    ))
                    : <li>There is nothing to show!</li>
                }
            </ul>
            </div>

            {/* References Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>References</h2>
                <ul>
                    {(resume.references && resume.references.length > 0) ? resume.references.map((reference, index) => (
                        <li key={index} className={styles.referenceItem}>
                            <h3>{reference.name} - {reference.position}</h3>
                            <p>{reference.company}</p>
                            <p>{reference.email}</p>
                            <p>{reference.phone}</p>
                            <p>Relationship: {reference.relationship}</p>
                        </li>
                    ))
                    : <li>There is nothing to show!</li>
                    }
                </ul>
            </div>
            <div className={styles.editIcon}>
                <Link to='/update-resume'><Icon icon="pencil" width="50px" height="50px" color="#000000" /></Link>
            </div>
        </div>
    );
};

export default ResumeComponent;