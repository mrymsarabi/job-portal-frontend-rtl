import React from 'react';

//Components:
import Navbar from "/src/components/Navbar";

//CSS:
import styles from "/src/styles/AboutUs.module.css";

const AboutUs = () => {
    return (
        <div className={styles.page}>
            <Navbar name="about_us" />
        </div>
    );
};

export default AboutUs;