import axios from "axios";

export const myCompanyAPI = async(token) => {
    try {
        const response = await axios.get(`http://localhost:5000/companies/companies/mine`,
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Assuming you store the token in localStorage
                },
            }
        );
        return response.data;
    } catch (error) {

    }
}