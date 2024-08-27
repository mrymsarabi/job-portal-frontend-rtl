import axios from "axios";

export const signupAPI = async(data) => {
    try {
        const response = await axios.post('http://localhost:5000/users/signup', data);
        console.log(response);
        return response.data;

    } catch (error) {
        console.log(error)
        if(error.response.status === 400) {
            return error.response.data;
        } 
        else if(error.response.status === 500) {
            return {status: "error", error: 500, response: error.response};
        }
        else {
            return {status: "error", error: error}
        };
    };
}