import axios from "axios";

export const getMyMessagesAPI = async(token, pageSize = 10, currentPage = 1) => {
    try {
        const response = await axios.get('http://localhost:5000/messages/user/messages', {
            params: {
                page_size: pageSize,
                current_page: currentPage,
            },
            headers: {
              Authorization: `Bearer ${token}`, // Assuming you're using Bearer token for auth
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return {status: "error", error: error.response?.data?.error || 'Something went wrong'}
    };
};