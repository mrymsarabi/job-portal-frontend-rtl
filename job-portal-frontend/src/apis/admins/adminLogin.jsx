import axios from "axios";

export const adminLogin = async(data) => {
    try {
        const response = await axios.post(`http://localhost:5000/admins/login`, 
            data
        );
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        return {status: "error"};
    };
}