import React from 'react';

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from '/src/styles/Section.module.css';

const ProjectsSection = ({ title, items, onChange, addItem, deleteItem, editItem }) => {
    return (
        <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {items.map((item, index) => (
            <div key={index} className={styles.itemContainer}>
                <input
                    className={styles.input}
                    type="text"
                    name={`projects.${index}.title`}
                    value={item.title}
                    onChange={onChange}
                    placeholder="Project Title"
                />
                <textarea
                    className={styles.textarea}
                    name={`projects.${index}.description`}
                    value={item.description}
                    onChange={onChange}
                    placeholder="Project Description"
                />
                <div className={styles.iconContainer}>
                    <Icon icon="pencil" width="24px" height="24px" color="#000000"  onClick={() => editItem('projects', index)} /> {/* Edit Icon */}
                    <Icon icon="delete" width="24px" height="24px" color="#000000" onClick={() => deleteItem('projects', index)} /> {/* Delete Icon */}
                    </div>
                </div>
            ))}
            <button className={styles.addButton} type="button" onClick={addItem}>Add Project</button>
        </div>
    );
};

export default ProjectsSection;
