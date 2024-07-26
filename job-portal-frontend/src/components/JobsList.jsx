import React from 'react';

//Components:
import Navbar from '/src/components/Navbar';

//CSS:
import styles from "/src/styles/JobsList.module.css";

const JobsList = () => {
    return (
        <div className={styles.page}>
            <Navbar />

        </div>
    );
};

export default JobsList;