import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from "js-cookie";

//APIs:
import { getJobsUploadedAPI } from '/src/apis/getJobsUploadedAPI';

//Compoennts:
import Navbar from "/src/components/Navbar";

//CSS:
import styles from "/src/styles/JobsUploaded.module.css";

const JobsUploaded = () => {
    const token = Cookies.get("token");

    //States:
    const [data, setData] = useState([]);

    //Functions:
    useEffect(() => {
        fetchData();
    }, []);

    //Getting list's data:
    const fetchData = async() => {
        const response = await getJobsUploadedAPI(token);
        if(response.status === 200) {
            setData(response.data);
        } else {
            
        }
    };

    return (
        <div>
            <Navbar />
        </div>
    );
};

export default JobsUploaded;