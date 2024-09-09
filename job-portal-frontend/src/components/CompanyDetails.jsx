import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import { useParams } from 'react-router-dom';

//APIs:
import { getCompanyById } from '/src/apis/getCompanyById';

//Components:
import Navbar from "/src/components/Navbar";

//CSS:
import styles from "/src/styles/CompanyDetails.module.css";

const CompanyDetails = () => {
    const id = useParams().id;

    //States:
    const [company, setCompany] = useState({});

    //Functions:
    useEffect(() => {
        fetchCompany();
    }, []);

    //Get the Company based on the company id:
    const fetchCompany = async() => {
        const response = await getCompanyById(id);
        console.log(response.company);
        if(response.status === "success") {
            setCompany(response.company);
        } else {

        }
    };
    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.companyContainer}>
                    <h1 className={styles.title}>{company.title}</h1>
                    <p className={styles.about}>{company.about_us}</p>
                    <div className={styles.details}>
                        <p><strong>تاریخ تاسیس:</strong> {company.founded_date}</p>
                        <p><strong>تعداد کارکنان</strong> {company.number_of_employees}</p>
                        <p><strong>زمان ثبت شرکت در سایت:</strong> {new Date(company.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDetails;