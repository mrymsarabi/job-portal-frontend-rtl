import React from 'react';

//CSS:
import styles from "/src/styles/JobsList.module.css";
import Navbar from '/src/components/Navbar';

const JobsList = () => {
    return (
        <div className={styles.page}>
            <Navbar />
        </div>
    );
};

export default JobsList;