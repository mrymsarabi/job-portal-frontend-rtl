import axios from 'axios';

export const getJobReport = async (startDate, endDate, token) => {
  try {
    const response = await axios.get(`http://localhost:5000/reports/report/jobs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(error);
    return { status: 'error' };
  }
};