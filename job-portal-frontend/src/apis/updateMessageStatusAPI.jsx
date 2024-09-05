import axios from "axios";

export const updateMessageStatusAPI = async(messageId, token) => {
    try {
        const response = await axios.patch(`http://localhost:5000/messages/${messageId}/read`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error)
        return { status: "error", error: error.response }; 
    };
};