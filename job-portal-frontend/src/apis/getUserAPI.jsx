import axios from "axios";

export const getUserAPI = async(token) => {
    try{
        const response = await axios.get('http://localhost:5000/users/profile', {
            headers: {
                'Authorization': `Bearer ${token}` // Send the token in the Authorization header
            }
        });

        if (response.status === 200) {
            console.log('User Data:', response.data.user);
            // You can now display this data in your component
        } else {
            console.error('Failed to fetch profile:', response.data.error);
        }
        return response;
    } catch (error) {
        console.error('Error fetching profile:', error);
    }

}