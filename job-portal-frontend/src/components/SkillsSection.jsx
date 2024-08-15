import React from 'react';

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from '/src/styles/Section.module.css';

const SkillsSection = ({ title, items, onChange, addItem, deleteItem, editItem }) => {
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
                        placeholder="Skill"
                    />
                    <div className={styles.iconContainer}>
                        <Icon icon="pencil" width="24px" height="24px" color="#000000"  onClick={() => editItem('skills', index)} /> {/* Edit Icon */}
                        <Icon icon="delete" width="24px" height="24px" color="#000000" onClick={() => deleteItem('skills', index)} /> {/* Delete Icon */}
                    </div>
                </div>
            ))}
            <button className={styles.addButton} type="button" onClick={addItem}>Add Skill</button>
        </div>
    );
};

export default SkillsSection;
