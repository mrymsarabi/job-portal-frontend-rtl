import React from 'react';

//Components:
import Navbar from "/src/components/Navbar";

//CSS:
import styles from "/src/styles/AboutUs.module.css";

const AboutUs = () => {
    return (
        <div className={styles.page}>
            <Navbar name="about_us" />
            <div className={styles.content}>
                <div>
                    <div className={styles.textContainer}>
                        This is my final project, which is a small job-search portal.
                        You create an account, add a company and add jobs, or if you are looking for a position, you can apply for the available jobs.
                    </div>
                    <div className={styles.linksContainer}>
                        <a>Github, backend</a>
                        <a>Github, frontend</a>
                        <a>Aparat, code explanation</a>
                        <a>Aparat, UI</a>
                        <a>Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;