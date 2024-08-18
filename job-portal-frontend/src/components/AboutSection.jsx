import React, { useRef } from 'react';

// Components:
import Icon from "/src/icons/Icon";

// CSS:
import styles from "/src/styles/Section.module.css";

const AboutSection = ({ title, value, onChange }) => {
    const textareaRef = useRef(null);

    const handleEditClick = () => {
        // Focus the textarea when the pencil icon is clicked
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };

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
            <Icon icon="pencil" width="24px" height="24px" color="#000000" onClick={handleEditClick} /> {/* Edit Icon */}
        </div>
    );
};

export default AboutSection;
