import axios from "axios";

export const updateResumeAPI = async(data, token) => {
    try {
        const response = await axios.post(`http://localhost:5000/resume/resume`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Include the token in the headers for authentication
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