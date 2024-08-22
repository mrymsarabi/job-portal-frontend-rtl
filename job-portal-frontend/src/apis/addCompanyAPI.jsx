import axios from "axios";

export const AddCompanyAPI = async(data, token) => {
    try {
        const response = await axios.post('http://localhost:5000/companies', data, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log('Company added successfully:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error adding company:', error.response ? error.response.data : error.message);
        throw error;
      }
}