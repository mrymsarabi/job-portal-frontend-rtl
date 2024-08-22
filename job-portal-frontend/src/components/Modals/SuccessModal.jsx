import React from 'react';

//Libraries and Modules:
import Modal from "react-modal";

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from "/src/styles/Modals.module.css";

const SuccessModal = ({ isOpenSuccess, setIsOpenSuccess, type }) => {
    const closeModal = () => {
        setIsOpenSuccess(false);
    };

    const typeHandler = () => {
        switch(type) {
            case "add":
                return "item was added successfully";
            case "update":
                return "item was updated successfully";
            case "delete":
                return "item was deleted successfully";
            default:
                return "The operation was successful";
        };
    };

    return (
        <Modal
        isOpen={isOpenSuccess}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className={styles.dialogBox}
        >
            <div className={styles.closeModal}>
                <Icon icon="close-circle" color="#6A6A6A" onClick={closeModal} />
            </div>
            <div className={`${styles.success} ${styles.modalMessage}`}>
                <div>
                    <Icon icon="check" color="#00C6A5" />
                </div>
                <div>{typeHandler()}</div>
            </div>
        </Modal>
    );
};

export default SuccessModal;