import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//APIs:
import { getUserAPI } from "/src/apis/getUserAPI";
import { updateUserInfoAPI } from '/src/apis/updateUserInfoAPI';

//Components:
import Navbar from "/src/components/Navbar";
import SubmitButton from "/src/components/SubmitButton";
//Modals:
import SuccessModal from "/src/components/Modals/SuccessModal";
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

//CSS:
import styles from "/src/styles/UpdateUserInfo.module.css";

const UpdateUserInfo = () => {
    const token = Cookies.get("token");

    //States:
    const [data, setData] = useState({});

    //States for Unsucces Message Modal:
    const [isOpenUnsuccess, setIsOpenUnsuccess] = useState(false);

    //States for Succes Message Modal:
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);

    //Functions:
    useEffect(() => {
        fetchData();
    }, []);

    //Getting the user's data:
    const fetchData = async() => {
        const response = await getUserAPI(token);
        setData(response.data.user);
    };

    //Handling input's changes:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling form's submition:
    const submitHandler = async(event) => {
        event.preventDefault();
        const response = await updateUserInfoAPI(data, token);
        if(response.status === "success") {
            openSuccesModal();
        } else {
            openUnsuccesModal();
        };
    };

    //Opening Unsuccess Mesage Modal:
    const openUnsuccesModal = () => {
        setIsOpenUnsuccess(true);
    };

    //Opening Success Mesage Modal:
    const openSuccesModal = () => {
        setIsOpenSuccess(true);
    };

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <h1>ویرایش پروفایل</h1>
                <div>
                    <form onSubmit={submitHandler} className={styles.form}>
                        <div className={styles.gridContainer}>
                            <div className={styles.field}>
                                <label>نام</label>
                                <input type='text' name='first_name' value={data.first_name} onChange={changeHandler} />
                            </div>
                            <div className={styles.field}>
                                <label>نام خانوادگی</label>
                                <input type='text' name='last_name' value={data.last_name} onChange={changeHandler} />
                            </div>
                            <div className={styles.field}>
                                <label>نام کاربری</label>
                                <input type='text' name='username' value={data.username} onChange={changeHandler} />
                            </div>
                            <div className={styles.field}>
                                <label>ایمیل</label>
                                <input type='email' name='email' value={data.email} onChange={changeHandler} />
                            </div>
                            <div className={styles.field}>
                                <label>تاریخ تولد</label>
                                <input type='date' name='birth_date' value={data.birth_date} onChange={changeHandler} />
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <SubmitButton text="ویرایش" />
                        </div>
                    </form>
                </div>
            </div>
            <SuccessModal isOpenSuccess={isOpenSuccess} setIsOpenSuccess={setIsOpenSuccess} type="update" />
            <UnsuccessModal isOpenUnsuccess={isOpenUnsuccess} setIsOpenUnsuccess={setIsOpenUnsuccess} />
        </div>
    );
};

export default UpdateUserInfo;