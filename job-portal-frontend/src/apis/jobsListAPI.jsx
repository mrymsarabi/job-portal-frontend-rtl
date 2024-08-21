import axios from "axios";

export const jobsListAPI = async(pageSize = 10, currentPage = 1) => {
    try {
        const response = await axios.get('http://localhost:5000/jobs/jobs',
            {
                params: {
                    page_size: pageSize,
                    current_page: currentPage,
                  },
            }
        );
        console.log(response)
        return response;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return {status: "error", error: error.response}; // or some other indication of an error
    }
};