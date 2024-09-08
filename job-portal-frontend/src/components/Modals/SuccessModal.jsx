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
            case "signup":
                return "ثبت نام با موفقیت انجام شد.";
            case "login":
                return "ورود با موفقیت انجام شد.";
            case "add":
                return "آیتم با موفقیت اضافه شد.";
            case "update":
                return "آیتم با موفقیت به روزرسانی شد.";
            case "delete":
                return "آیتم با موفقیت حذف شد.";
            default:
                return "عملیات با موفقیت انجام شد.";
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