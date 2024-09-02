import axios from "axios";

export const jobApplicationsAPI = async(jobId, token, currentPage = 1, pageSize = 10) => {
    try {
        const response = await axios.get(`http://localhost:5000/job-applications/applications/${jobId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    current_page: currentPage,
                    page_size: pageSize,
                }
            }
        );
        console.log(response)
        return response.data;
    } catch (error) {
        console.log("hbgnj,dm", error)
        return {status: "error", error: "There was an error getting the list."};
    };

}