import axios from "axios";

export const signupAPI = async(data) => {
    try {
        const response = await axios.post('http://localhost:5000/users/signup', data);
        console.log(response);
        return response;

    } catch (error) {
        console.log(error)
    };
}