import axios from "axios";

export const jobApplicationAnswerAPI = async(data, applicationId, token) => {
    try {
        const response = await axios.patch(`http://localhost:5000/job-applications/applications/${applicationId}/status`,
            {
                status: data.status,
                message: data.message  
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log(response);
        return response.data;
    } catch(error) {
        console.log(error);
        return {status: "error", error: error.response ? error.response.data.error : 'An error occurred'};
    };
};