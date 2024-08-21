import React from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//Components:
import Navbar from "/src/components/Navbar";

//CSS:
import styles from "/src/styles/JobDetailsPage.module.css";

const JobDetailsPage = () => {
    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <div>
                    {/* Job Details: 2/3 width of the parent div */}
                </div>
                <div>
                    {/* 1/3 width of the parent div */}
                    <div>
                        {/* Employer's Profile */}
                    </div>
                    <div>
                        {/* Apply for the position */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;