import axios from "axios";

export const updateJobAPI = async(jobId, data, token) => {
    try {
        const response = await axios.put(`http://localhost:5000/jobs/jobs/${jobId}`,
            data,
            {
                headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
                }
            }
        );
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error);
        return {status: "error", error: error.error}
    }
}