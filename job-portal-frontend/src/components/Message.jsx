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
        if(response.status === "success") {
            console.log(response)
        } else {
            const response = await updateMessageStatusAPI(messageId, token);
        }
    }

    //Getting message by the message id:
    const fetchMessage = async() => {
        const response = await getMessageByIdAPI(messageId, token);
        console.log(response);
        if(response.status === "success") {
            setMessage(response.message);
            console.log(response.message)
        } else {

        }
    };

    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.messageContainer}>
                    <h2 className={styles.title}>Message Details</h2>
                    <p><strong>Job Name:</strong> {message.job_name}</p>
                    <p><strong>Company Name:</strong> {message.company_name}</p>
                    <p><strong>Sender:</strong> {message.sender_username}</p>
                    <p><strong>Message:</strong> {message.message}</p>
                    <p><strong>Status:</strong> <span className={message.status === "accepted" ? styles.greenStatus : styles.redStatus}>{message.status}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Message;