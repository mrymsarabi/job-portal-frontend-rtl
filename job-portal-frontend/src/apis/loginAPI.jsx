import axios from "axios";

export const loginAPI = async(data) => {
    try {
        const response = await axios.post('http://localhost:5000/users/login', data);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        if(error.response.status === 401) {
            return error.response.data;
        } 
        else {
            return {status: "error", error: error}
        };
    };
}