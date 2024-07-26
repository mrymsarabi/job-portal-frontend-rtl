import axios from "axios";

export const loginAPI = async(data) => {
    try {
        const response = await axios.post('http://localhost:5000/users/login', data);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        // return error;
    };
}