import React from 'react';

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from "/src/styles/Section.module.css";

const AboutSection = ({ title, value, onChange, editItem }) => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <textarea
                className={styles.textarea}
                name="about"
                value={value}
                onChange={onChange}
                placeholder="Tell us about yourself"
            />
            <Icon icon="pencil" width="24px" height="24px" color="#000000" onClick={editItem} /> {/* Edit Icon */}
        </div>
    );
};

export default AboutSection;
