import axios from "axios";

export const updateUserInfoAPI = async(data, token) => {
    try {
        const response = await axios.put(`http://localhost:5000/users/profile`,
            data, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error updating resume section:', error);
        return { status: "error", message: error.message };
    }
}