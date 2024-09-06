import React from 'react';

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from '/src/styles/Section.module.css';

const ReferencesSection = ({ title, items, onChange, addItem, deleteItem }) => {
    return (
        <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {items.map((item, index) => (
            <div key={index} className={styles.itemContainer}>
                <input
                    className={styles.input}
                    type="text"
                    name={`references.${index}.name`}
                    value={item.name}
                    onChange={onChange}
                    placeholder="Name"
                />
                <input
                    className={styles.input}
                    type="text"
                    name={`references.${index}.position`}
                    value={item.position}
                    onChange={onChange}
                    placeholder="Position"
                />
                <input
                    className={styles.input}
                    type="text"
                    name={`references.${index}.company`}
                    value={item.company}
                    onChange={onChange}
                    placeholder="Company"
                />
                <input
                    className={styles.input}
                    type="email"
                    name={`references.${index}.email`}
                    value={item.email}
                    onChange={onChange}
                    placeholder="Email"
                />
                <input
                    className={styles.input}
                    type="text"
                    name={`references.${index}.phone`}
                    value={item.phone}
                    onChange={onChange}
                    placeholder="Phone"
                />
                <input
                    className={styles.input}
                    type="text"
                    name={`references.${index}.relationship`}
                    value={item.relationship}
                    onChange={onChange}
                    placeholder="Relationship"
                />
                <div className={styles.iconContainer}>
                    <Icon icon="delete" width="24px" height="24px" color="#000000" onClick={() => deleteItem('references', index)} /> {/* Delete Icon */}
                    </div>
                </div>
            ))}
            <button className={styles.addButton} type="button" onClick={addItem}>Add Reference</button>
        </div>
    );
};

export default ReferencesSection;
