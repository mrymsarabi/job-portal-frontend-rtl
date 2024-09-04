import axios from "axios";

export const getApplicationById = async(applicationId, token) => {
    try {
        const response = await axios.get(`http://localhost:5000/job-applications/applications/${applicationId}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data;
    } catch (error) {
        console.log(error)
        return {status: "error", message: "Error fetching application"};
    };
};