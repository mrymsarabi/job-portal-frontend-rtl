import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//APIs:
import { getMyApplicatiosAPI } from '/src/apis/getMyApplicationsAPI';

//Components:
import Navbar from "/src/components/Navbar";

//CSS:
import styles from "/src/styles/MyApplicationsPage.module.css";

const MyApplicationsPage = () => {
    const token = Cookies.get("token");

    //States:
    const [data, setData] = useState([]);

    //Functions:
    useEffect(() => {
        fetchData();
    }, []);

    //Getting the application's list (applied by the logged-in user):
    const fetchData = async() => {
        const response = await getMyApplicatiosAPI(token);
        setData(response.data.applied_jobs);
    };

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.topContent}>
                    <h1>My Applications</h1>
                </div>
                {
                    data.length > 0 &&
                    <div className={styles.listContainer}>
                        <table className={styles.listHead}>
                            <colgroup>
                                <col className={styles.col1} />
                                <col className={styles.col2} />
                                <col className={styles.col3} />
                                <col className={styles.col4} />
                                <col className={styles.col5} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Position</th>
                                    <th>Company</th>
                                    <th>Location</th>
                                    <th>Applied date</th>
                                </tr>
                            </thead>
                        </table>
                        <table className={styles.listBody}>
                            <colgroup>
                                <col className={styles.col1} />
                                <col className={styles.col2} />
                                <col className={styles.col3} />
                                <col className={styles.col4} />
                                <col className={styles.col5} />
                            </colgroup>
                            <tbody>
                                {
                                    data && data.map((item, index) => (
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyApplicationsPage;