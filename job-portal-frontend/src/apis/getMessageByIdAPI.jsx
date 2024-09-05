import axios from "axios";

export const getMessageByIdAPI = async(messageId, token) => {
    try {
        const response = await axios.get(`http://localhost:5000/messages/message/${messageId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return { status: "error", error: error.response };
    } ;
};