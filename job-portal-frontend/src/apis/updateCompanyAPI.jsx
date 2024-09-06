import axios from "axios";

export const updateCompanyAPI = async(data, companyId, token) => {
    try {
        const response = await axios.put(`http://localhost:5000/companies/companies/${companyId}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return {status: "error", error: error.message}
    };
};