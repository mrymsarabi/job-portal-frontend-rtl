import React from 'react';

//CSS:
import styles from "/src/styles/SubmitButton.module.css";

const SubmitButton = ({ text }) => {
    return (
        <div className={styles.button_container}>
            <button>{text}</button>
        </div>
    );
};

export default SubmitButton;