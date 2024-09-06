import axios from "axios";

export const getCompanyById = async(companyId) => {
    try {
        const response = await axios.get(`http://localhost:5000/companies/companies/${companyId}`);
        return response.data;
    } catch (error) {
        return {status: "error", message: "An error occurred while fetching company data."};
    };
};