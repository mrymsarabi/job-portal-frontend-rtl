import axios from 'axios';

//Modules and Libraries:
import Cookies from 'js-cookie';

export const checkLoginStatus = async () => {
    try {
        const token = Cookies.get("token");  // Or sessionStorage.getItem('token')

        if (!token) {
            console.log("No token found. User is not logged in.");
            // Handle not logged-in state
            return {status: "error", message: "No token found, User is notlogged in."};
        };

        const response = await axios.get('http://localhost:5000/users/check_login', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.data.status === 'success') {
            // Handle logged-in state
            console.log("User is logged in:", response.data.user_id);
            return response.data;
        } else {
            // Handle not logged-in state
            console.log("User is not logged in:", response.data.message);
            Cookies.remove("token");
            return {status: "error", message: response.data.message};
        }
    } catch (error) {
        // Handle unexpected errors
        console.error("Error checking login status", error);
        return {status: "error", message: "Error checking login status"};
    }
};
