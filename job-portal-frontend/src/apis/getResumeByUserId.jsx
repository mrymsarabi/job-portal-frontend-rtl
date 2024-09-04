import axios from "axios";

export const getResumeByUserId = async(userId, token) => {
    try {
        const response = await axios.get(`http://localhost:5000/resume/resume/user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching resume:', error);
        return { status: "error", message: error.response ? error.response.data.message : 'An error occurred' };
    }
}