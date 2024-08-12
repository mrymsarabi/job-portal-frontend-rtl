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
            setData(response.data.jobs);
        } else {
            
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
      };

      return (
        <div>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.listContainer}>
                    <table className={`${styles.listHead} rounded`}>
                        <colgroup>
                            <col className={styles.col1} />
                            <col className={styles.col2} />
                            <col className={styles.col3} />
                            <col className={styles.col4} />
                            <col className={styles.col5} />
                            <col className={styles.col6} />
                            <col className={styles.col7} />
                        </colgroup>
                        <thead className={`${styles.thead} rounded`}>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Job Type</th>
                                <th>Sector</th>
                                <th>Location</th>
                                <th>Date Posted</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                    </table>
                    <table className={`${styles.listBody} rounded`}>
                        <colgroup>
                            <col className={styles.col1} />
                            <col className={styles.col2} />
                            <col className={styles.col3} />
                            <col className={styles.col4} />
                            <col className={styles.col5} />
                            <col className={styles.col6} />
                            <col className={styles.col7} />
                        </colgroup>
                        <tbody className={`${styles.tbody}`}>
                            {data && data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.counter}</td>
                                    <td>{item.title}</td>
                                    <td>{item.job_type}</td>
                                    <td>{item.sector}</td>
                                    <td>{item.location}</td>
                                    <td>{formatDate(item.date_posted)}</td>
                                    <td>{item.salary}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );        
};

export default JobsUploaded;