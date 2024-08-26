import axios from "axios";

export const getMyApplicatiosAPI = async(pageSize, currentPage, token) => {
    try {
        const response = await axios.get(`http://localhost:5000/job-applications/my-applications`,
            {
                params: {
                    page_size: pageSize,
                    current_page: currentPage
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log('My job applications:', response);
        return response;
    } catch (error) {
        console.error('Error fetching my applications:', error);
        return { status: "error", error: error.response };
    };
};