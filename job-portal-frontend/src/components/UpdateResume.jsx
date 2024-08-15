import React, { useState, useEffect } from 'react';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import LanguagesSection from './LanguagesSection';
import ProjectsSection from './ProjectsSection';
import ReferencesSection from './ReferencesSection';
import HobbiesSection from './HobbiesSection';
import Navbar from './Navbar';
import styles from '/src/styles/UpdateResume.module.css';
import { getResumeAPI } from '/src/apis/getResumeAPI'; // Adjust this import based on your API functions
import Cookies from 'js-cookie';

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

    const changeHandler = (e) => {
        const { name, value } = e.target;
        const [section, index, key] = name.split('.');
        setData((prevState) => {
            const updatedSection = [...prevState[section]];
            updatedSection[index][key] = value;
            return { ...prevState, [section]: updatedSection };
        });
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

        // try {
        //     const response = await submitResumeAPI(data, token); // Submit the full data object
        //     console.log('Submit Response:', response);

        //     if (response.status === "success") {
        //         alert('Resume updated successfully!');
        //     } else {
        //         alert('Failed to update resume. Please try again.');
        //     }
        // } catch (error) {
        //     console.error('Error submitting resume:', error);
        //     alert('An error occurred while submitting your resume.');
        // }
    };

    return (
        <div>
            <Navbar />
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
                        editItem={editItem}
                    />
                    <button type="submit" className={styles.submitButton}>Submit</button>  {/* Submit button */}
                </form>
            </div>
        </div>
    );
};

export default UpdateResume;
