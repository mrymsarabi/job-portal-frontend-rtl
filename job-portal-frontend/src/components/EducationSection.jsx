import React from 'react';

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from '/src/styles/Section.module.css';

const EducationSection = ({ title, items, onChange, addItem, deleteItem, editItem }) => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            {items.map((item, index) => (
                <div key={index} className={styles.itemContainer}>
                    <input
                        className={styles.input}
                        type="text"
                        name={`education.${index}.degree`}
                        value={item.degree}
                        onChange={onChange}
                        placeholder="Degree"
                    />
                    <input
                        className={styles.input}
                        type="text"
                        name={`education.${index}.institution`}
                        value={item.institution}
                        onChange={onChange}
                        placeholder="Institution"
                    />
                    <div className={styles.iconContainer}>
                        {/* Add more fields as necessary */}
                        <Icon icon="pencil" width="24px" height="24px" color="#000000"  onClick={() => editItem('education', index)} /> {/* Edit Icon */}
                        <Icon icon="delete" width="24px" height="24px" color="#000000" onClick={() => deleteItem('education', index)} /> {/* Delete Icon */}
                        </div>
                </div>
            ))}
            <button className={styles.addButton} type="button" onClick={addItem}>Add Education</button>
        </div>
    );
};

export default EducationSection;
