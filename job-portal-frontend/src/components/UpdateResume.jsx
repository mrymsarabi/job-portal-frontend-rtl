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
    const token = Cookies.ger("token");

    //States:
    const [data, setData] = useState();

    //Functions:
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const response = await getResumeAPI(token);
        if(response) {
            setData(response);
        }
    }

    return (
        <div>
            <Navbar />
            <form>
                <div>
                    {/* About */}
                </div>
                <div>
                    {/* Experience */}
                </div>
                <div>
                    {/* Education */}
                </div>
                <div>
                    {/* Licsences and Cerifications */}
                </div>
                <div>
                    {/* Projects */}
                </div>
                <div>
                    {/* Skills */}
                </div>
                <div>
                    {/* Languages */}
                </div>
                <div>
                    {/* Button Container */}
                </div>
            </form>
        </div>
    );
};

export default UpdateResume;