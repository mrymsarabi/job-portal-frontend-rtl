import axios from "axios";

export const deleteJobAPI = async(id, token) => {
    try {
        const response = await axios.delete(`http://localhost:5000/jobs/jobs/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        return {status: "error", error: error.response?.data?.error || 'Something went wrong'}
    };
};