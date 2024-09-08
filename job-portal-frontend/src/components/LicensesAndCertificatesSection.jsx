import React from 'react';

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from '/src/styles/Section.module.css';

const LicensesAndCertificatesSection = ({ title, items, onChange, addItem, deleteItem }) => {
    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            {items.map((item, index) => (
                <div key={index} className={styles.itemContainer}>
                    <input
                        className={styles.input}
                        type="text"
                        name={`licenses_and_certificates.${index}.institution`}
                        value={item.institution}
                        onChange={onChange}
                        placeholder="موسسه"
                    />
                    <input
                        className={styles.input}
                        type="text"
                        name={`licenses_and_certificates.${index}.title`}
                        value={item.title}
                        onChange={onChange}
                        placeholder="عنوان"
                    />
                    <input
                        className={styles.input}
                        type="text"
                        name={`licenses_and_certificates.${index}.year`}
                        value={item.year}
                        onChange={onChange}
                        placeholder="سال صدور"
                    />
                    <div className={styles.iconContainer}>
                        <Icon icon="delete" width="24px" height="24px" color="#000000" onClick={() => deleteItem('licenses_and_certificates', index)} /> {/* Delete Icon */}
                    </div>
                </div>
            ))}
            <button className={styles.addButton} type="button" onClick={addItem}>افزودن مدرک</button>
        </div>
    );
};

export default LicensesAndCertificatesSection;