import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from "js-cookie";

//APIs:
import { getResumeAPI } from '/src/apis/getResumeAPI';

//Components:
import Navbar from "/src/components/Navbar";

//CSS:
import styles from "/src/styles/UpdateResume.module.css";

const UpdateResume = () => {
    const token = Cookies.get("token");

    //States:
    const [data, setData] = useState();

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
            }
        } else {
            setData({})
        }
    }

    return (
        <div>
            <Navbar />
            <form>
                <div className={`${styles.aboutContainer} rounded border border-light`}>
                    {/* About */}
                </div>
                <div className={`${styles.experienceContainer} rounded`}>
                    {/* Experience */}
                </div>
                <div className={`${styles.educationContainer} rounded`}>
                    {/* Education */}
                </div>
                <div className={`${styles.licsencesCertification} rounded`}>
                    {/* Licsences and Cerifications */}
                </div>
                <div className={`${styles.projectsContainer} rounded`}>
                    {/* Projects */}
                </div>
                <div className={`${styles.skillsContainer} rounded`}>
                    {/* Skills */}
                </div>
                <div className={`${styles.languagesContainer} rounded`}>
                    {/* Languages */}
                </div>
                <div className={`${styles.buttonContainer} rounded`}>
                    {/* Button Container */}
                </div>
            </form>
        </div>
    );
};

export default UpdateResume;