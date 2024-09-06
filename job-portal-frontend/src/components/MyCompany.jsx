import React, { useState, useEffect } from 'react';

//Modules and Library:
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

//APIs:
import { myCompanyAPI } from '/src/apis/myCompanyAPI';

//Components:
import Navbar from "/src/components/Navbar";
import Icon from "/src/icons/Icon";

//CSS:
import styles from "/src/styles/MyCompany.module.css";

const MyCompany = () => {
    const token = Cookies.get("token");

    const navigate = useNavigate();

    //States:
    const [company, setCompany] = useState({});

    //Functions:
    useEffect(() => {
        fetchCompany();
    }, []);

    //Getting the company data:
    const fetchCompany = async () => {
        const response = await myCompanyAPI(token);
        if (response.status === "success") {
            setCompany(response.company);
            console.log(response.company)
        } else {
            setCompany({});
        }
    };

    //Handle sending to the edit page (if a company already existed created by the user):
    const editHandler = (event, id) => {
        event.preventDefault();
        navigate(`/update-company/${id}`);
    };

    //Handle adding a company (if no company was added by the user):
    const addHandler = () => {
        navigate('/add-company');
    };

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <h1 className={styles.title}>{company.title || "My Company"}</h1>
                <div className={styles.companyBox}>
                    {Object.keys(company).length > 0 ? (
                        <>
                            <p className={styles.about}>{company.about_us}</p>
                            <div className={styles.details}>
                                <div className={styles.detailItem}>
                                    <strong>Number of Employees:</strong> {company.number_of_employees}
                                </div>
                                <div className={styles.detailItem}>
                                    <strong>Founded Date:</strong> {company.founded_date}
                                </div>
                                <div className={styles.detailItem}>
                                    <strong>Created At:</strong>{" "}
                                    {new Date(company.created_at).toLocaleString()}
                                </div>
                            </div>
                            <div className={styles.iconContainer} onClick={event => editHandler(event, company._id)}>
                                <Icon icon="pencil" width="30px" height="30px" color="#000000" />
                            </div>
                        </>
                    ) : (
                        <div>
                            <p>There is nothing to show.</p>
                            <div onClick={addHandler} className={styles.iconContainer}>
                                <Icon icon="plus" width="30px" height="30px" color="#000000" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyCompany;
