import axios from "axios";

export const getResumeAPI = async (token) => {
    try {
        const response = await axios.get('http://localhost:5000/resume/resume', {
            headers: {
                'Authorization': `Bearer ${token}` // Send the token in the Authorization header
            }
        });

        if (response.data.status === "success") {
            console.log('Resume Data:', response.data.resume);
            return response.data.resume;
        } else if (response.data.status === "error") {
            console.error('Error fetching resume:', response.data.error);
            return null; // or some other indication of an error
        }
    } catch (error) {
        console.error('Error fetching resume:', error);
        return {status: "error", error: error.response}; // or some other indication of an error
    }
};
