import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';

//APIs:
import { addJobAPI } from '/src/apis/addJobAPI';

//Functions:
import { validation } from "/src/helper/validation";

//Components:
import Navbar from "/src/components/Navbar";
import SubmitButton from '/src/components/SubmitButton';
import SelectComponent from "/src/components/Inputs/SelectComponent";
//Modals:
import SuccessModal from "/src/components/Modals/SuccessModal";
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

//CSS:
import styles from "/src/styles/AddJob.module.css";

const AddJob = () => {
    const token = Cookies.get("token");
    const user_id = Cookies.get("user_id");

    console.log(token)

    //States:
    const [data, setData] = useState({
        title: "",
        sector: "",
        salary: "",
        location: "",
        job_type: "",
        requirements: "",
        description: "",
        benefits: "",
    });

    //Handle Errors:
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({
        title: false,
        sector: false,
        salary: false,
        location: false,
        job_type: false,
        requirements: false,
        description: false,
        benefits: false,
    });

    //States for Unsucces Message Modal:
    const [isOpenUnsuccess, setIsOpenUnsuccess] = useState(false);

    //States for Succes Message Modal:
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);

    const sectors = [
        {
            value: "آموزش و پرورش",
            label: "آموزش و پرورش"
        },
        {
            value: "خدمات ساخت، تعمیر و نگهداری",
            label: "خدمات ساخت، تعمیر و نگهداری"
        },
        {
            value: "صنعت تولیدی",
            label: "صنعت تولیدی"
        },
        {
            value: "حمل و نقل کالا و مردم",
            label: "حمل و نقل کالا و مردم"
        }, 
        {
            value: "سلامت و بهداشت",
            label: "سلامت و بهداشت"
        },
        {
            value: "هوا فضا و دفاع",
            label: "هوا فضا و دفاع"
        },
        {
            value: "املاک و مستغلات",
            label: "املاک و مستغلات"
        },
        {
            value: "دولت و مدیریت دولتی",
            label: "دولت و مدیریت دولتی"
        },
        {
            value: "منابع انسانی و استخدام",
            label: "منابع انسانی و استخدام"
        },
        {
            value: "داروسازی و بیوتکنولوژی",
            label: "داروسازی و بیوتکنولوژی"
        },
        {
            value: "NGO ها و انجمن های غیر انتفاعی",
            label: "NGO ها و انجمن های غیر انتفاعی"
        },
        {
            value: "هنر، سرگرمی و تفریح",
            label: "هنر، سرگرمی و تفریح"
        }, 
        {
            value: "حقوقی و قانونی",
            label: "حقوقی و قانونی"
        },
        {
            value: "تجارت خرده فروشی و عمده فروشی",
            label: "تجارت خرده فروشی و عمده فروشی"
        },
        {
            value: "انرژی و بهره برداری از منابع طبیعی",
            label:"انرژی و بهره برداری از منابع طبیعی"
        },
        {
            value: "مالی",
            label: "مالی"
        },
        {
            value: "علوم کامپیوتر",
            label: "علوم کامپیوتر"
        },
        {
            value: "خدمات خاص",
            label: "خدمات خاص"
        },
        {
            value: "مشاوره مدیریت و کسب و کار",
            label: "مشاوره مدیریت و کسب و کار"
        },
        {
            value: "بیمه",
            label: "بیمه"
        },
        {
            value: "ترمیم و مرمت",
            label: "ترمیم و مرمت"
        },
        {
            value: "رسانه و ارتباطات",
            label: "رسانه و ارتباطات"
        },
        {
            value: "مخابرات",
            label: "مخابرات"
        },
        {
            value: "کشاورزی",
            label: "کشاورزی"
        },
        {
            value: "هتلداری و گردشگری",
            label: "هتلداری و گردشگری"
        }
    ];

    //Handle Sector Select:
    const handleSectorChange = (selectedOption) => {
        setData({...data, sector: selectedOption});
    };

    const jobTypes = [
        {
            value: "تمام وقت",
            label: "تمام وقت"
        },
        {
            value: "دائمی",
            label: "دائمی"
        },
        {
            value: "قراردادی",
            label: "قراردادی"
        },
        {
            value: "پاره وقت",
            label:"پاره وقت"
        },
        {
            value: "موقت",
            label: "موقت"
        },
        {
            value: "کارآموزی",
            label: "کارآموزی"
        },
        {
            value: "داوطلب",
            label: "داوطلب"
        }
    ];

    //Handling errors with data changes:
    useEffect(() => {
        setErrors(validation(data, "jobs"))
    }, [data]);

    //HandleJob Type Select:
    const handleJobTypeChange = (selectedOption) => {
        setData({...data, job_type: selectedOption});
    };

    //Functions:
    //Handling input changes:
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    //Handling an input's focus:
    const focusHanlder = (event) => {
        setTouched({...touched, [event.target.name]: true});
    };

    //Handling form's submit:
    const submitHandler = async(event) => {
        event.preventDefault();
        if(Object.keys(errors).length === 0) {
            const response = await addJobAPI(data, token);
            if(response.status === "success") {
                openSuccesModal();
            } else {
                openUnsuccesModal();
            }
        } else {
            setTouched({
                title: true,
                sector: true,
                salary: true,
                location: true,
                job_type: true,
                requirements: true,
                description: true,
                benefits: true,
            });
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
                <div>
                    <h1>افزودن شغل</h1>
                    <form className={styles.form} onSubmit={submitHandler}>
                        <div className={styles.gridContainer}>
                            <div className={styles.fieldContainer}>
                                <label>عنوان</label>
                                <input type='text' name='title' value={data.title} onChange={changeHandler} onFocus={focusHanlder} />
                                {
                                    (touched.title && errors.title) && <span className={styles.error}>{errors.title}</span>
                                }
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>حقوق</label>
                                <input type='text' name='salary' value={data.salary} onChange={changeHandler} onFocus={focusHanlder} />
                                {
                                    (touched.salary && errors.salary) && <span className={styles.error}>{errors.salary}</span>
                                }
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>بخش</label>
                                <SelectComponent options={sectors} handleChange={handleSectorChange} width="350px" height="40px" />
                                {
                                    (touched.sector && errors.sector) && <span className={styles.error}>{errors.sector}</span>
                                }
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>نوع شغل</label>
                                <SelectComponent options={jobTypes} handleChange={handleJobTypeChange} width="350px" height="40px" />
                                {
                                    (touched.job_type && errors.job_type) && <span className={styles.error}>{errors.job_type}</span>
                                }
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>شهر</label>
                                <input type='text' name='location' value={data.location} onChange={changeHandler} onFocus={focusHanlder} />
                                {
                                    (touched.location && errors.location) && <span className={styles.error}>{errors.location}</span>
                                }
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>توضیحات</label>
                                <textarea name='description' value={data.description} onChange={changeHandler} />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>الزامات</label>
                                <textarea name='requirements' value={data.requirements} onChange={changeHandler} />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>مزایا</label>
                                <textarea name='benefits' value={data.benefits} onChange={changeHandler} />
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <SubmitButton text="افزودن" />
                        </div>
                    </form>
                </div>
            </div>
            <SuccessModal isOpenSuccess={isOpenSuccess} setIsOpenSuccess={setIsOpenSuccess} type="add" />
            <UnsuccessModal isOpenUnsuccess={isOpenUnsuccess} setIsOpenUnsuccess={setIsOpenUnsuccess} />
        </div>
    );
};

export default AddJob;