import React, { useState, useEffect } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//APIs:
import { getResumeAPI } from '/src/apis/getResumeAPI'; // Adjust this import based on your API functions
import { updateResumeAPI } from '/src/apis/updateResumeAPI';

//Components:
import Navbar from '/src/components/Navbar';
import AboutSection from '/src/components/AboutSection';
import ExperienceSection from '/src/components/ExperienceSection';
import EducationSection from '/src/components/EducationSection';
import SkillsSection from '/src/components/SkillsSection';
import LanguagesSection from '/src/components/LanguagesSection';
import ProjectsSection from '/src/components/ProjectsSection';
import ReferencesSection from '/src/components/ReferencesSection';
import HobbiesSection from '/src/components/HobbiesSection';
import SubmitButton from "/src/components/SubmitButton";

//CSS:
import styles from '/src/styles/UpdateResume.module.css';

const UpdateResume = () => {
    const token = Cookies.get("token");

    const [data, setData] = useState({
        about: "",
        experience: [],
        education: [],
        licenses_and_certificates: [],
        skills: [],
        languages: [],
        projects: [],
        references: [],
        hobbies: []
    });

    // Fetch data from the API on component mount
    useEffect(() => {
        fetchData();
    }, [token]);

    const fetchData = async () => {
        const response = await getResumeAPI(token);
        console.log(response);

        if (response.status === "error") {
            if (response.error.status === 404) {
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
        }
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
    
        const [section, index, key] = name.split('.');

        // Check if the name is 'about' or another simple field
        if (name === "about") {
            setData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        } else if(!key) { // Handle sections that are arrays of strings (like 'skills' and 'hobbies')
            setData((prevState) => {
                const updatedSection = [...prevState[section]];
                updatedSection[index] = value;  // Directly update the string at the specific index
                return { ...prevState, [section]: updatedSection };
            });
        } else {
            // Handle complex sections (arrays of objects)
            const [section, index, key] = name.split('.');
            setData((prevState) => {
                const updatedSection = [...prevState[section]];
                updatedSection[index][key] = value;
                return { ...prevState, [section]: updatedSection };
            });
        }
    };
    
    

    const addItem = (sectionName, newItem) => {
        setData((prevState) => ({
            ...prevState,
            [sectionName]: [...prevState[sectionName], newItem]
        }));
    };

    const deleteItem = (sectionName, index) => {
        setData((prevState) => {
            const updatedSection = prevState[sectionName].filter((_, i) => i !== index);
            return { ...prevState, [sectionName]: updatedSection };
        });
    };

    const editItem = (sectionName, index) => {
        // Here, you would implement whatever logic you need to edit an item.
        // For example, you might prompt the user with a modal to edit the item.
        // As a simple example:
        console.log(`Editing ${sectionName} at index ${index}`);
    };

    const submitHandler = async (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        try {
            const response = await updateResumeAPI(data, token);
            if (response.status === 200) {
                console.log(response)
            } else {
                // return { status: "error", message: "Failed to update resume section." };
                console.log("Failed to update resume section.")
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <Navbar />
            <div className={styles.content}>
                <h1>Update Resume</h1>
                <div className={styles.container}>
                    <form onSubmit={submitHandler}>  {/* Wrap sections in a form */}
                        <AboutSection
                            title="About Me"
                            value={data.about}
                            onChange={changeHandler}
                            editItem={editItem}
                        />
                        <ExperienceSection
                            title="Experience"
                            items={data.experience}
                            onChange={changeHandler}
                            addItem={() => addItem('experience', { title: "", company: "", start_date: "", end_date: "", description: "" })}
                            deleteItem={deleteItem}
                            editItem={editItem}
                        />
                        <EducationSection
                            title="Education"
                            items={data.education}
                            onChange={changeHandler}
                            addItem={() => addItem('education', { degree: "", institution: "", year: "", description: "" })}
                            deleteItem={deleteItem}
                            editItem={editItem}
                        />
                        <SkillsSection
                            title="Skills"
                            items={data.skills}
                            onChange={changeHandler}
                            addItem={() => addItem('skills', "")}
                            deleteItem={deleteItem}
                            editItem={editItem}
                        />
                        <LanguagesSection
                            title="Languages"
                            items={data.languages}
                            onChange={changeHandler}
                            addItem={() => addItem('languages', { name: "", proficiency: "" })}
                            deleteItem={deleteItem}
                            editItem={editItem}
                        />
                        <ProjectsSection
                            title="Projects"
                            items={data.projects}
                            onChange={changeHandler}
                            addItem={() => addItem('projects', { title: "", description: "" })}
                            deleteItem={deleteItem}
                            editItem={editItem}
                        />
                        <ReferencesSection
                            title="References"
                            items={data.references}
                            onChange={changeHandler}
                            addItem={() => addItem('references', { name: "", position: "", company: "", email: "", phone: "", relationship: "" })}
                            deleteItem={deleteItem}
                            editItem={editItem}
                        />
                        <HobbiesSection
                            title="Hobbies"
                            items={data.hobbies}
                            onChange={changeHandler}
                            addItem={() => addItem('hobbies', "")}
                            deleteItem={deleteItem}
                        />
                        <div className={styles.buttonContainer}>
                            <SubmitButton text="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateResume;
