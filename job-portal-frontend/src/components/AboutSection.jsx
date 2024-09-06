import React, { useRef } from 'react';

// Components:
import Icon from "/src/icons/Icon";

// CSS:
import styles from "/src/styles/Section.module.css";

const AboutSection = ({ title, value, onChange }) => {
    const textareaRef = useRef(null);

    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <textarea
                ref={textareaRef}
                className={styles.textarea}
                name="about"
                value={value}
                onChange={onChange}
                placeholder="Tell us about yourself"
            />
        </div>
    );
};

export default AboutSection;
