import React from 'react';

//Libraries and Modules:
import Modal from "react-modal";

//Components:
import Icon from "/src/icons/Icon";

//CSS:
import styles from "/src/styles/Modals.module.css";

const UnsuccessModal = ({ isOpenUnsuccess, setIsOpenUnsuccess, message = "عملیات ناموفق بود." }) => {
    const closeModal = () => {
        setIsOpenUnsuccess(false);
    };

    return (
        <Modal
        isOpen={isOpenUnsuccess}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className={styles.dialogBox}
        >
            <div className={styles.closeModal}>
                <Icon icon="close-circle" color="#6A6A6A" onClick={closeModal} />
            </div>
            <div className={`${styles.modalMessage} ${styles.unsuccess}`}>
                <div>
                    <Icon icon="alert-circle" />
                </div>
                <div>{message}</div>
            </div>
        </Modal>
    );
};

export default UnsuccessModal;