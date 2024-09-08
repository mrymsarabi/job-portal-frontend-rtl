import React from 'react';

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from '/src/styles/Section.module.css';

const LanguagesSection = ({ title, items, onChange, addItem, deleteItem }) => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            {items.map((item, index) => (
                <div key={index} className={styles.itemContainer}>
                    <input
                        className={styles.input}
                        type="text"
                        name={`languages.${index}.name`}
                        value={item.name}
                        onChange={onChange}
                        placeholder="زبان"
                    />
                    <input
                        className={styles.input}
                        type="text"
                        name={`languages.${index}.proficiency`}
                        value={item.proficiency}
                        onChange={onChange}
                        placeholder="سطح"
                    />
                    <div className={styles.iconContainer}>
                        <Icon icon="delete" width="24px" height="24px" color="#000000" onClick={() => deleteItem('languages', index)} /> {/* Delete Icon */}
                    </div>
                </div>
            ))}
            <button className={styles.addButton} type="button" onClick={addItem}>افزودن زبان</button>
        </div>
    );
};

export default LanguagesSection;
