import React from 'react';
import styles from "/src/styles/Section.module.css";
import Icon from "/src/icons/Icon";

const Section = ({ title, items, value, name, onChange, addItem }) => {
    return (
        <div className={`${styles.partContainer} rounded`}>
            <label>{title}</label>
            {value !== undefined ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`rounded`}
                />
            ) : (
                items && items.map((item, index) => (
                    <div key={index} className={styles.detailsContainer}>
                        <div>{index + 1}</div>
                        {Object.keys(item).map((key) => (
                            <div key={key}>
                                {typeof item[key] === "string" ? (
                                    <input
                                        name={`${name}[${index}].${key}`}
                                        value={item[key]}
                                        onChange={onChange}
                                        placeholder={key.replace(/_/g, " ")}
                                        className={`rounded`}
                                    />
                                ) : (
                                    <textarea
                                        name={`${name}[${index}].${key}`}
                                        value={item[key]}
                                        onChange={onChange}
                                        placeholder={key.replace(/_/g, " ")}
                                        className={`rounded`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                ))
            )}
            {addItem && (
                <div className={styles.iconContainer} onClick={addItem}>
                    <Icon icon="plus" width="24px" height="24px" color="#000000" />
                </div>
            )}
        </div>
    );
};

export default Section;
