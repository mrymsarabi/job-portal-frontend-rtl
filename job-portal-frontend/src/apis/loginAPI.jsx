import axios from "axios";

export const loginAPI = async(data) => {
    await axios.post('http://localhost:5000/users/login', data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
        console.error(error.response ? error.response.data : error.message);
    });
}