import axios from "axios";

export const getResumeById = async(id, token) => {
    try {
        const response = await axios.get(`http://localhost:5000/resume/resume/${resumeId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching resume:', error);
        return { status: "error", message: error.response ? error.response.data.message : 'An error occurred' };
    }
}