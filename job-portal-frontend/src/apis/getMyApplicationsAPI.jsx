import axios from "axios";

export const getMyApplicatiosAPI = async(token) => {
    try {
        const response = await axios.get(`http://localhost:5000/job-applications/my-applications`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log('My job applications:', response.data.applied_jobs);
        return response;
    } catch (error) {
        console.error('Error fetching my applications:', error);
        return { status: "error", error: error.response };
    };
};