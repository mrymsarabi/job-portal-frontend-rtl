import React, { useEffect, useState } from 'react';

//APIs:
import { jobsListAPI } from '/src/apis/jobsListAPI';

//Components:
import Navbar from '/src/components/Navbar';

//CSS:
import styles from "/src/styles/JobsList.module.css";
import JobDetails from './JobDetails';

const JobsList = () => {
    //States:
    const [data, setData] = useState([]);
    const [show, setShow] = useState({});
    const [chosenItem, setChoseItem] = useState({});

    //Functions:
    useEffect(() => {
        fetchData();
    }, []);

    //Getting data from API:
    const fetchData = async() => {
        const response = await jobsListAPI();
        if(response.status === 200) {
            setData(response.data.jobs);
            let showing = {};
            showing[0] = true;
            for(let i = 1; i < response.data.length; i++) {
                showing[i] = false;
            }
            setChoseItem(response.data.jobs[0]);
            setShow(showing);
        }
    };

    //Handling which item to show:
    const showHandler = (index) => {
        let showing = {};
        for(let i = 0; i < data.length; i++) {
            showing[i] = false;
        };
        showing[index] = true;
        setShow(showing);
        setChoseItem(data[index]);
    }

    return (
        <div className={styles.page}>
            <Navbar name="home" />
            <div className={styles.content}>
                <h1>Jobs List</h1>
                <div className={styles.listContainer}>
                    <div>
                        {
                            data.length > 0 && data.map((item, index) => (
                                <div onClick={() => showHandler(index)} className={show[index] ? styles.activeItem : styles.itemContainer}>
                                    <div>{item.title}</div>
                                    <div>{item.sector}</div>
                                    <div>{item.location}</div>
                                    <div>{item.salary}</div>
                                    <div>{item.job_type}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        {data.length > 0 &&
                            <JobDetails data={chosenItem} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsList;