import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const BarChart = ({ chartAmount, enteredDate, enteredAmount }) => {
    return (
        <div>
            <Line
                data={{
                    labels: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                    ],

                    datasets: [
                        {
                            data: chartAmount,
                            borderColor: '#5f0303',
                            tension: 0.5,
                            pointBackgroundColor: '#620505',
                            pointBorderColor: '#C4C4C4',
                        },
                    ],
                }}
                height={200}
                weight={300}
                options={{
                    radius: 5,
                    maintainAspectRatio: false,

                    plugins: {
                        legend: {
                            display: false,
                        },

                        // tooltip: {
                        //     mode: 'index',
                        //     intersect: false,
                        //     caretSize: 3,
                        // },
                    },

                    scales: {
                        y: {
                            ticks: {
                                display: false,
                            },
                            grid: {
                                display: false,
                            },
                        },
                        x: {
                            grid: {
                                display: false,
                            },
                        },
                    },
                }}
            />
            {/* <div>{expense.map(item => item.amount)}</div> */}
        </div>
    )
}

export default BarChart
