import axios from "axios";

export const getResumeAPI = async (token) => {
    try {
        const response = await axios.get('http://localhost:5000/resume', {
            headers: {
            'Authorization': `Bearer ${token}` // Send the token in the Authorization header
            }
        });
    
        if (response.status === 200) {
            console.log('Resume Data:', response.data.resume);
            // The resume data can now be used in your component
            return response.data.resume;
        } else {
            console.error('Failed to fetch resume:', response.data.error);
            return null;
        }
    } catch (error) {
        console.error('Error fetching resume:', error);
        return null;
    }
};