import React, { useState, useEffect } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

//APIs:
import { getMyMessagesAPI } from '/src/apis/getMyMessagesAPI';

//Components:
import Navbar from "/src/components/Navbar";
import PaginationComponent from "/src/components/PaginationComponent";

//CSS:
import styles from "/src/styles/MyMessages.module.css";

const MyMessages = () => {
    const token = Cookies.get("token");

    const navigate = useNavigate();

    //States:
    const [messages, setMessages] = useState([]);

    //Pagination:
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    //Functions:
    useEffect(() => {
        fetchMessages();
    }, []);

    //Getting the messages list:
    const fetchMessages = async() => {
        const response = await getMyMessagesAPI(token, pageSize, currentPage);
        console.log(response)
        if(response.status === "success") {
            setMessages(response.messages);
            setTotalCount(response.total_count)
        } else {

        }
    };

    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
    };

    //Handle clicking on a message:
    const messageHandler = (event, messageId) => {
        event.preventDefault();
        navigate(`/message/${messageId}`);
    };

    return (
        <div className={`${styles.page}`}>
            <Navbar />
            <div className={`${styles.content}`}>
                <h1>My Messages</h1>
                {
                    messages.length > 0 ?
                    <div className={styles.listContainer}>
                        {/* Message Container */}
                        <table className={`${styles.listHead} rounded`}>
                            <colgroup>
                                <col className={styles.col1} />
                                <col className={styles.col2} />
                                <col className={styles.col3} />
                                <col className={styles.col4} />
                                <col className={styles.col5} />
                            </colgroup>
                            <thead className={styles.thead}>
                                <tr>
                                    <th>#</th>
                                    <th>Job</th>
                                    <th>Company</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                        </table>
                        <table className={`${styles.listBody} rounded`}>
                            <colgroup>
                                <col className={styles.col1} />
                                <col className={styles.col2} />
                                <col className={styles.col3} />
                                <col className={styles.col4} />
                                <col className={styles.col5} />
                            </colgroup>
                            <tbody className={styles.tbody}>
                                {
                                    messages && messages.map((message, index) => (
                                        <tr onClick={event => messageHandler(event, message.id)}>
                                            <td>{message.counter}</td>
                                            <td>{message.job_name}</td>
                                            <td>{message.company_name}</td>
                                            <td>{message.read_status}</td>
                                            <td></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    : <div></div>
                }
                <div className={styles.pagination}>
                    <PaginationComponent currentPage={currentPage} pageSize={pageSize} total={totalCount} onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
    );
};

export default MyMessages;