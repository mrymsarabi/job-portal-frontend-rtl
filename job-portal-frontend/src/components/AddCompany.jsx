import React, { useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//Components:
import Navbar from "/src/components/Navbar";

//CSS:
import styles from "/src/styles/AddCompany.module.css";

const AddCompany = () => {
    const token = Cookies.get("token");

    //States:
    const [data, setData] = useState({
        title: "",
        about_us: "",
        number_of_employees: 0,
        founded_date: "",
    });

    //Funstions:
    //Handling a field's changes:
    const changeHander = (event) =>{
        setData({...data, [even.target.name]: event.target.value});
    };

    //Handling form's submission:
    const submitHandler = async(event) => {
        event.preventDefault();
    };

    return (
        <div className={styles.page}>
            <div>
                {/* Top Content */}
            </div>
            <form onSubmit={submitHandler} className={styles.form}>
                
            </form>
        </div>
    );
};

export default AddCompany;