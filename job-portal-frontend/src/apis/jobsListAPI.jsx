import axios from "axios";

export const jobsListAPI = async() => {
    const response = await axios.get('http://localhost:5000/jobs/jobs',
        {
            params: {
                page_size: 20,
                current_page: 1,
              },
        }
    );
    console.log(response)
    return response;
};