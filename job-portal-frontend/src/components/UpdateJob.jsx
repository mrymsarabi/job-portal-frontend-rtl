import React, { useEffect, useState } from 'react';

//Modules and Library:
import Cookies from "js-cookie";
import { useParams, useNavigate } from 'react-router-dom';

//APIs:
import { getJobAPI } from '/src/apis/getJobAPI';
import { updateJobAPI } from '/src/apis/updateJobAPI';

//Components:
import Navbar from "/src/components/Navbar";
import SelectComponent from "/src/components/Inputs/SelectComponent";
import SubmitButton from "/src/components/SubmitButton";
//Modals:
import SuccessModal from "/src/components/Modals/SuccessModal";
import UnsuccessModal from "/src/components/Modals/UnsuccessModal";

//CSS:
import styles from "/src/styles/UpdateJob.module.css";

const UpdateJob = () => {
    const token = Cookies.get("token");
    const id = useParams().id;
    const navigate = useNavigate();

    //States:
    const [data, setData] = useState({});

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

    //HandleJob Type Select:
    const handleJobTypeChange = (selectedOption) => {
        setData({...data, job_type: selectedOption});
    };

    const defaultSector = sectors.find((sector) => sector.value === data.sector);
    const defaultJobType = jobTypes.find((jobType) => jobType.value === data.job_type);


    //Functions:
    useEffect(() => {
        fetchJob();
    }, []);

    //Fetching the data details:
    const fetchJob = async() => {
        try {
            const response = await getJobAPI(id);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    //Handling form input changes:
    const changeHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    //Submit updated data:
    const submitHandler = async (event) => {
        event.preventDefault();
       const response = await updateJobAPI(id, data, token);
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
                <div>

                    <h1 className={styles.title}>ویرایش شغل</h1>
                    <form className={styles.form} onSubmit={submitHandler}>
                        <div className={styles.gridContainer}>
                            <div className={styles.fieldContainer}>
                                <label>عنوان</label>
                                <input type='text' name='title' value={data.title} onChange={changeHandler} />
                            </div>
                            <div className={styles.fieldContainer}>                                
                                <label>حقوق</label>
                                <input type='text' name='salary' value={data.salary} onChange={changeHandler} />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>بخش</label>
                                <SelectComponent options={sectors} handleChange={handleSectorChange} defaultOption={defaultSector} width="350px" height="40px" />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>نوع شغل</label>
                                <SelectComponent options={jobTypes} handleChange={handleJobTypeChange} defaultOption={defaultJobType} width="350px" height="40px" />
                            </div>
                            <div className={styles.fieldContainer}>
                                <label>شهر</label>
                                <input type='text' name='location' value={data.location} onChange={changeHandler} />
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
            <SuccessModal isOpenSuccess={isOpenSuccess} setIsOpenSuccess={setIsOpenSuccess} type="update" />
            <UnsuccessModal isOpenUnsuccess={isOpenUnsuccess} setIsOpenUnsuccess={setIsOpenUnsuccess} />
        </div>
    );
};

export default UpdateJob;
