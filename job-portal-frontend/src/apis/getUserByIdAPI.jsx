import axios from "axios";

export const getUserByIdAPI = async(id, token) => {
    try {
        const response = await axios.get(`http://localhost:5000/users/user/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error.response ? error.response.data : error.message);
        return {
            status: "error",
            message: error.response ? error.response.data.message : "An error occurred",
        };
    }
}