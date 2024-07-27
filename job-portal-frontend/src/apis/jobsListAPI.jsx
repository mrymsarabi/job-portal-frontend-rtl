import axios from "axios";

export const jobsListAPI = async() => {
    const response = await axios.get('http://localhost:5000/jobs/jobs');
    console.log(response)
    return response;
};