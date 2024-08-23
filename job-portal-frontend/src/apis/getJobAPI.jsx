import axios from "axios";

export const getJobAPI = async(id) => {
    try {
        const response = await axios.get(`http://localhost:5000/jobs/jobs/${id}`);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        return { status: "error", error: error.response };
    };
};