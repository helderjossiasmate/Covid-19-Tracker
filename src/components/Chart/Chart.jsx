import React, { useState,useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: {confirmed, deaths, recovered}, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());  
        }
        //console.log(dailyData)
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length 
        ? (
        <Line 
        data = {{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed),
                label: 'Infectados',
                borderColor: '#3333ff',
                fill: true,
            }, {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Mortos',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
            }],
        }}
        />) : null
    );

        const barChart = (
            confirmed 
            ? (
                <Bar 
                data={{
                    labels: ['Infectados', 'Recuperados', 'Mortos'],
                    datasets: [{
                        label: 'Pessoas',
                        backgroundColor: [
                            '#ff14147e',
                            '#14ff147e',
                            '#7c7c7c7e',
                        ],
                        data: [confirmed.value, recovered.value,  deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display:true, text:`Atual estado em ${country}` }
                }}
                />
            ) : null
        );

    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
};

export default Chart