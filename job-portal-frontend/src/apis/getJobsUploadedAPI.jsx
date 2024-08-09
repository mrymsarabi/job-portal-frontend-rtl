import axios from "axios";

export const getJobsUploadedAPI = async(token) => {
    try {
        const response = await axios.get('http://localhost:5000/jobs/jobs/mine', {
            headers: {
                'Authorization': `Bearer ${token}` // Send the token in the Authorization header
            }
        });
        console.log(response);
        return response

    } catch (error) {
        console.error('Error fetching resume:', error);
        return {status: "error", error: error.response}; // or some other indication of an error
    }
}