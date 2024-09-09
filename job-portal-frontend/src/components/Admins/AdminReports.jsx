import React, { useState, useEffect } from 'react';

//Modules and Libraries:
import Cookies from 'js-cookie';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

//Functions:
import { getDateRange } from '/src/helper/getDateRange';

//APIs:
import { getUserReport } from '/src/apis/admins/getUserReport';

//CSS:
import styles from "/src/styles/Admins/AdminReports.module.css";

Chart.register(...registerables);

const AdminReports = () => {
    const admin_token = Cookies.get("admin_token");

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
          {
            label: 'Users Registered',
            data: [],
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        settingLabels();
    }, []);

    const settingLabels = async () => {
        const dateLabels = getDateRange();
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

        await fetchUserReport(dates);
    };

    const fetchUserReport = async (dates) => {
        try {
            const userCounts = await Promise.all(
                dates.map(async (date) => {
                    const response = await getUserReport(date.start, date.end, admin_token);
                    return response.user_count; // Collect user counts
                })
            );
            // Once all user counts are collected, update the chart data
            setChartData(prevData => ({
                ...prevData,
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: userCounts
                    }
                ]
            }));
            setLoading(false); // Done loading
        } catch (err) {
            console.error(err);
            setError('Failed to fetch user report');
            setLoading(false);
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.chart}>
                <h2>نمودار</h2>
                <div>
                    {loading ? <p>Loading...</p> : <Line data={chartData} />}
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default AdminReports;
