import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import DatePicker from 'react-datepicker'; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // DatePicker styles

//Functions:
import { getDateRange } from '/src/helper/getDateRange';

//APIs:
import { getUserReport } from '/src/apis/admins/getUserReport';
import { getJobReport } from '/src/apis/admins/getJobReport';

//CSS:
import styles from "/src/styles/Admins/AdminReports.module.css";

Chart.register(...registerables);

const AdminReports = () => {
    const admin_token = Cookies.get("admin_token");

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
          {
            label: 'کاربران ثبت نام شده',
            data: [],
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
          },
          {
            label: 'شغل های افزوده شده',
            data: [],
            fill: false,
            borderColor: "#742774"
          },
        ],
      });

    const [selectedDate, setSelectedDate] = useState(new Date()); // Store the selected date
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        updateChart(selectedDate);
    }, [selectedDate]);

    const updateChart = async (startDate) => {
        const dateLabels = getDateRange(startDate); // Use the selected date for the range
        setChartData(prevData => ({
            ...prevData,
            labels: [
                dateLabels.day_one, 
                dateLabels.day_two, 
                dateLabels.day_three, 
                dateLabels.day_four, 
                dateLabels.day_five, 
                dateLabels.day_six, 
                dateLabels.day_seven
            ]
        }));

        const dates = [
            { start: `${dateLabels.day_one}T00:00:00`, end: `${dateLabels.day_one}T23:59:59` },
            { start: `${dateLabels.day_two}T00:00:00`, end: `${dateLabels.day_two}T23:59:59` },
            { start: `${dateLabels.day_three}T00:00:00`, end: `${dateLabels.day_three}T23:59:59` },
            { start: `${dateLabels.day_four}T00:00:00`, end: `${dateLabels.day_four}T23:59:59` },
            { start: `${dateLabels.day_five}T00:00:00`, end: `${dateLabels.day_five}T23:59:59` },
            { start: `${dateLabels.day_six}T00:00:00`, end: `${dateLabels.day_six}T23:59:59` },
            { start: `${dateLabels.day_seven}T00:00:00`, end: `${dateLabels.day_seven}T23:59:59` }
        ];

        await fetchReports(dates);
    };

    // Fetch both user and job reports in parallel:
    const fetchReports = async(dates) => {
        try {
            const [userCounts, jobCounts] = await Promise.all([
                fetchUserReport(dates),
                fetchJobsReport(dates)
            ]);

            setChartData(prevData => ({
                ...prevData,
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: userCounts
                    },
                    {
                        ...prevData.datasets[1],
                        data: jobCounts
                    }
                ]
            }));

            setLoading(false); // Done loading
        } catch (err) {
            console.error(err);
            setError('Failed to fetch reports');
            setLoading(false);
        }
    };

    // Getting the user count for the past 7 days:
    const fetchUserReport = async(dates) => {
        try {
            const userCounts = await Promise.all(
                dates.map(async (date) => {
                    const response = await getUserReport(date.start, date.end, admin_token);
                    return response.user_count;
                })
            );
            return userCounts;
        } catch (err) {
            console.error(err);
            throw new Error('User report fetching failed');
        }
    };

    // Getting the number of jobs in the week:
    const fetchJobsReport = async(dates) => {
        try {
            const jobCounts = await Promise.all(
                dates.map(async (date) => {
                    const response = await getJobReport(date.start, date.end, admin_token);
                    return response.job_count;
                })
            );
            return jobCounts;
        } catch (err) {
            console.error(err);
            throw new Error('Job report fetching failed');
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h1>گزارش ها</h1>
                <div className={styles.datePicker}>
                    <h3>انتخاب تاریخ</h3>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)} // Update the selected date
                        dateFormat="yyyy-MM-dd"
                        maxDate={new Date()} // Restrict future dates
                    />
                </div>
                <div className={styles.chart}>
                    <h2>نمودار</h2>
                    <div>
                        {loading ? <p className={styles.loadingText}>در حال بارگذاری...</p> : <Line data={chartData} />}
                        {error && <p className={styles.errorText}>{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminReports;
