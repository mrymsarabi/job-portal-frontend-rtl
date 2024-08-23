import React from 'react';

//Libraries and Modules:
import Modal from "react-modal";

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from "/src/styles/Modals.module.css";

const DeleteModal = ({ isOpen, setIsOpen, deleteHandler, selectedInfo, setSelectedInfo }) => {
    //Closing Delete Modal
    const closeModal = () => {
        setSelectedInfo(null);
        setIsOpen(false);
    };

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className={styles.dialogBox}
        >
            <div className={styles.closeModal}>
                <Icon icon="close-circle" color="#6A6A6A" onClick={closeModal} />
            </div>
            <h2>Are you sure you want to delete this item?</h2>
            <div>
                <button className={styles.yes} onClick={() => deleteHandler(selectedInfo)}>Yes</button>
                <button className={styles.no} onClick={closeModal}>No</button>
            </div>
        </Modal>
    );
};

export default DeleteModal;