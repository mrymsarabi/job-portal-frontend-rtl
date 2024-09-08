import React, { useEffect, useState } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

//API:
import { getMessageByIdAPI } from '/src/apis/getMessageByIdAPI';
import { updateMessageStatusAPI } from '/src/apis/updateMessageStatusAPI';

//Components:
import Navbar from '/src/components/Navbar';

//CSS:
import styles from "/src/styles/Message.module.css"

const Message = () => {
    const token = Cookies.get("token");

    const messageId = useParams().id;

    //States:
    const [message, setMessage] = useState({});

    //Functions:
    useEffect(() => {
        updateMessageStatus();
        fetchMessage();
    }, []);

    //Updating the message status from unread to read:
    const updateMessageStatus = async() => {
        const response = await updateMessageStatusAPI(messageId, token);
        console.log(response);
    };

    //Getting message by the message id:
    const fetchMessage = async() => {
        const response = await getMessageByIdAPI(messageId, token);
        console.log(response);
        if(response.status === "success") {
            setMessage(response.message);
            console.log(response.message)
        } else {
            setMessage({});
        };
    };

    //Handling status:
    const statusHandler = (status) => {
        if(status === "accepted") {
            return "پذیرفته شد.";
        } else if(status === "rejected") {
            return "رد شد";
        } else {
            return "در انتظار";
        };
    };

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.messageContainer}>
                    <h2 className={styles.title}>جزئیات پیام</h2>
                    <p><strong>نام شغل:</strong> {message.job_name}</p>
                    <p><strong>نام شرکت:</strong> {message.company_name}</p>
                    <p><strong>فرستنده:</strong> {message.sender_username}</p>
                    <p><strong>پیام:</strong> {message.message}</p>
                    <p><strong>وضعیت:</strong> <span className={message.status === "accepted" ? styles.greenStatus : styles.redStatus}>{statusHandler(message.status)}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Message;