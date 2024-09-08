import React from 'react';

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from '/src/styles/Section.module.css';

const SkillsSection = ({ title, items, onChange, addItem, deleteItem }) => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            {items.map((item, index) => (
                <div key={index} className={styles.itemContainer}>
                    <input
                        className={styles.input}
                        type="text"
                        name={`skills.${index}`}
                        value={item}
                        onChange={onChange}
                        placeholder="مهارت"
                    />
                    <div className={styles.iconContainer}>
                        <Icon icon="delete" width="24px" height="24px" color="#000000" onClick={() => deleteItem('skills', index)} /> {/* Delete Icon */}
                    </div>
                </div>
            ))}
            <button className={styles.addButton} type="button" onClick={addItem}>افزودن مهارت</button>
        </div>
    );
};

export default SkillsSection;
