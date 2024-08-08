import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from "js-cookie";

//APIs:
import { getResumeAPI } from '/src/apis/getResumeAPI';

//Components:
import Navbar from "/src/components/Navbar";
import SubmitButton from "/src/components/SubmitButton";
import Icon from "/src/icons/Icon";

//CSS:
import styles from "/src/styles/UpdateResume.module.css";
import axios from 'axios';

const UpdateResume = () => {
    const token = Cookies.get("token");

    //States:
    const [data, setData] = useState({
        about: "",
        experience: [],
        education: [],
        licenses_and_certificates: [],
        skills: [],
        languages: [],
        projects: [],
        references: [],
        hobbies: [],
    });

    //Functions:
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const response = await getResumeAPI(token);
        console.log(response)
        if(response.status === "error") {
            if(response.error.status === 404) {
                console.log("no data");
                setData({
                    about: "",
                    experience: [],
                    education: [],
                    licenses_and_certificates: [],
                    skills: [],
                    languages: [],
                    projects: [],
                    references: [],
                    hobbies: [],
                });
            }
        } else {
            const resume = response.resume;
            setData({
                about: resume.about,
                experience: resume.experience,
                education: resume.education,
                licenses_and_certificates: resume.licenses_and_certificates,
                skills: resume.skills,
                languages: resume.languages,
                projects: resume.projects,
                references: resume.references,
                hobbies: resume.hobbies
            });
        };
    };

    //Submitting form's data:
    const submitHandler = async(event) => {
        event.preventDefault();
        const response = await axios.post(`http://localhost:5000/resume/resume`, {
            about: "Motivated software engineer with 5+ years of experience in full-stack web development, specializing in React and Node.js.",

    experience: [
        {
            title: "Senior Software Engineer",
            company: "Tech Innovators Inc.",
            start_date: "2020-01-01",
            end_date: "Present",
            description: "Leading a team of developers in designing and implementing scalable web applications. Key achievements include reducing page load time by 30% and improving overall system architecture."
        },
        {
            title: "Software Engineer",
            company: "Web Solutions Ltd.",
            start_date: "2017-06-01",
            end_date: "2019-12-31",
            description: "Developed and maintained several client-facing applications, collaborating with cross-functional teams to deliver high-quality products. Increased customer satisfaction by 20% through enhanced UI/UX designs."
        }
    ],

    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Technology",
            year: "2017",
            description: "Focused on software engineering, algorithms, and data structures. Graduated with honors."
        },
        {
            degree: "Master of Science in Software Engineering",
            institution: "Global Tech University",
            year: "2020",
            description: "Specialized in advanced software development methodologies and cloud computing."
        }
    ],

    licenses_and_certificates: [
        {
            title: "Certified ScrumMaster (CSM)",
            institution: "Scrum Alliance",
            year: "2019"
        },
        {
            title: "AWS Certified Solutions Architect – Associate",
            institution: "Amazon Web Services",
            year: "2021"
        }
    ],

    skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "Django",
        "SQL",
        "AWS",
        "Docker"
    ],

    languages: [
        {
            name: "English",
            proficiency: "Native"
        },
        {
            name: "Spanish",
            proficiency: "Intermediate"
        }
    ],

    projects: [
        {
            title: "E-commerce Platform",
            description: "Developed a full-featured e-commerce platform using React, Node.js, and MongoDB, handling over 10,000 daily active users."
        },
        {
            title: "Real-time Chat Application",
            description: "Built a real-time chat application using WebSockets and React, supporting group chats, media sharing, and notifications."
        }
    ],

    references: [
        {
            name: "John Doe",
            position: "Senior Manager",
            company: "XYZ Corporation",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            relationship: "Former Manager"
        },
        {
            name: "Jane Smith",
            position: "CTO",
            company: "Tech Innovators Inc.",
            email: "jane.smith@techinnovators.com",
            phone: "987-654-3210",
            relationship: "Direct Supervisor"
        }
    ],

    hobbies: [
        "Hiking",
        "Photography",
        "Coding Challenges",
        "Traveling"
    ]
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(response)
    }

    //Handling input's changes:
    const changeHandler = (event) => {
        console.log(event.target.value)
        setData({...data, [event.targt.name]: event.target.value});
    };

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.formContainer}>

                <form className={styles.form} onSubmit={submitHandler}>
                    <div>
                        <div className={`${styles.partContainer} ${styles.aboutContainer} rounded`}>
                            {/* About */}
                            <div className={`${styles.dataContainer}`}>
                                <label>About</label>
                                <textarea name="about" value={data.about} onChange={changeHandler} className={`rounded`} />
                            </div>
                        </div>
                        <div className={`${styles.partContainer} ${styles.experienceContainer} rounded`}>
                            {/* Experience */}
                            <div className={`${styles.dataContainer}`}>
                                <label>Experience</label>
                                {
                                    data.experience && data.experience.map((experience, index) => (
                                        <div className={styles.detailsContainer}>
                                            <div>{index + 1}</div>
                                            <div>{experience.title}</div>
                                            <div>{experience.company}</div>
                                            <div>{experience.start_date}</div>
                                            <div>{experience.end_date}</div>
                                            <div>{experience.description}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.iconContainer}>
                                <Icon icon="plus" width="24px" height="24px" color="#000000" />
                            </div>
                        </div>
                        <div className={`${styles.partContainer} ${styles.educationContainer} rounded`}>
                            {/* Education */}
                            <div className={`${styles.dataContainer}`}>
                                <label>Education</label>
                                {
                                    data.education && data.education.map((education, index) => (
                                        <div className={styles.detailsContainer}>
                                            <div>{index + 1}</div>
                                            <div>{education.degree}</div>
                                            <div>{education.institution}</div>
                                            <div>{education.year}</div>
                                            <div>{education.description}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.iconContainer}>
                                <Icon icon="plus" width="24px" height="24px" color="#000000" />
                            </div>
                        </div>
                        <div className={`${styles.partContainer} ${styles.licensesContainer} rounded`}>
                            {/* Licenses and Cerifications */}
                            <div className={`${styles.dataContainer}`}>
                                <label>Licenses and Certifications</label>
                                {
                                    data.licenses_and_certificates && data.licenses_and_certificates.map((item, index) => (
                                        <div className={styles.detailsContainer}>
                                            <div>{index + 1}</div>
                                            <div>{item.title}</div>
                                            <div>{item.institution}</div>
                                            <div>{item.year}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.iconContainer}>
                                <Icon icon="plus" width="24px" height="24px" color="#000000" />
                            </div>
                        </div>
                        <div className={`${styles.partContainer} ${styles.projectsContainer} rounded`}>
                            {/* Projects */}
                            <div className={`${styles.dataContainer}`}>
                                <label>Projects</label>
                                {
                                    data.projects && data.projects.map((project, index) => (
                                        <div className={styles.detailsContainer}>
                                            <div>{index + 1}</div>
                                            <div>{project.title}</div>
                                            <div>{project.description}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.iconContainer}>
                                <Icon icon="plus" width="24px" height="24px" color="#000000" />
                            </div>
                        </div>
                        <div className={`${styles.partContainer} ${styles.referencesContainer} rounded`}>
                            {/* References: */}
                            <div className={`${styles.dataContainer}`}>
                                <label>References</label>
                                {
                                    data.references && data.references.map((reference, index) => (
                                        <div className={styles.detailsContainer}>
                                            <div>{index + 1}</div>
                                            <div>{reference.name}</div>
                                            <div>{reference.position}</div>
                                            <div>{reference.company}</div>
                                            <div>{reference.email}</div>
                                            <div>{reference.phone}</div>
                                            <div>{reference.relationship}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.iconContainer}>
                                <Icon icon="plus" width="24px" height="24px" color="#000000" />
                            </div>
                        </div>
                        <div className={`${styles.partContainer} ${styles.skillsContainer} rounded`}>
                            {/* Skills */}
                            <div className={`${styles.dataContainer}`}>
                                <label>Skills</label>
                                {
                                    data.skills && data.skills.map((skill, index) => (
                                        <div className={styles.detailsContainer}>
                                            <div>{index + 1}</div>
                                            <div>{skill}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.iconContainer}>
                                <Icon icon="plus" width="24px" height="24px" color="#000000" />
                            </div>
                        </div>
                        <div className={`${styles.partContainer} ${styles.languagesContainer} rounded`}>
                            {/* Languages */}
                            <div className={`${styles.dataContainer}`}>
                                <label>Languages</label>
                                {
                                    data.languages && data.languages.map((language, index) => (
                                        <div className={styles.detailsContainer}>
                                            <div>{index + 1}</div>
                                            <div>{language.name}</div>
                                            <div>{language.proficiency}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.iconContainer}>
                                <Icon icon="plus" width="24px" height="24px" color="#000000" />
                            </div>
                        </div>
                        <div className={`${styles.buttonContainer} rounded`}>
                            {/* Button Container */}
                            <SubmitButton text="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateResume;