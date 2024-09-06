import axios from "axios";

export const applyForJobAPI = async(id, token) => {
    console.log(id, token)
    try {
        const response = await axios.post(`http://localhost:5000/job-applications/apply`,
            {
                job_id: id
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log('Application submitted successfully:', response);
        return response.data;
    } catch (error) {
        console.error('Error applying for job:', error);
        return { status: "error", error: error.message };
    }
}