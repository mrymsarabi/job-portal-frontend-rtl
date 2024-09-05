import axios from "axios";

export const getJobsUploadedAPI = async (token, pageSize, currentPage) => {
    try {
        const response = await axios.get('http://localhost:5000/jobs/jobs/mine', {
            headers: {
                'Authorization': `Bearer ${token}`, // Send the token in the Authorization header
            },
            params: {
                page_size: pageSize,
                current_page: currentPage,
            },
        });
        console.log(response);
        return response;

    } catch (error) {
        console.error('Error fetching jobs:', error);
        return { status: "error", error: error.response }; 
    }
}
