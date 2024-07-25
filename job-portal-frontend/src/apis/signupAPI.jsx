import axios from "axios";

export const signupAPI = async(data) => {
    await  axios.post('http://localhost:5000/users/signup', data)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error.response ? error.response.data : error.message);
    });
}