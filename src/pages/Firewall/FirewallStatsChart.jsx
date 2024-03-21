import { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import './Firewall.css';
import lineViolet from './assets/activityViolet.png';
import lineYellow from './assets/activityYellow.png';
import lineRed from './assets/activityRed.png';

const LEGEND_DATA = [
    {
        icon: lineViolet,
        title: 'Allowed Connections',
        value: 357
    },
    {
        icon: lineYellow,
        title: 'Temporarily Blocked Connections',
        value: 1000
    },
    {
        icon: lineRed,
        title: 'Blocked Connections',
        value: 197
    },
]

export default function FirewallStatsChart(props) {
    const chartRef = useRef(null);

    const getCanvasGradient = (r, g, b) => {
        let ctx = document.createElement('canvas').getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.5)`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        return gradient;
    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
    )

    const options = {
        responsive: true,
        // maintainAspectRatio: false,
        aspectRatio: 3 / 1,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                    padding: 15
                },
                grid: {
                    // display: false
                    drawOnChartArea: false,
                    tickColor: 'rgba(251, 251, 251, 0.5)'
                }
            },
            y: {
                ticks: {
                    padding: 5,
                    stepSize: 200
                },
                border: {
                    display: false
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.03)',
                    tickColor: 'rgba(251, 251, 251, 0.5)'
                }
            }
        },
        elements: {
            point: {
                pointStyle: false
            },
            line: {
                tension: 0.3,
            }
        }
    }

    const labels = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000']

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                borderColor: 'rgb(159, 88, 223)',
                backgroundColor: getCanvasGradient(159, 88, 223),
            },
            {
                fill: true,
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                borderColor: 'rgb(243, 189, 51)',
                backgroundColor: getCanvasGradient(243, 189, 51),
            },
            {
                fill: true,
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                borderColor: 'rgb(255, 74, 74)',
                backgroundColor: getCanvasGradient(255, 74, 74)
            },
        ]
    }

    return (
        <div className='firewall-chart'>
            <Line options={options} data={data} ref={chartRef} />
            <div className='firewall-chart__xlabel'>Seconds</div>
            <div className='firewall-chart__ylabel'>Bytes</div>
            <div className='firewall-chart__legend'>
                {
                    LEGEND_DATA.map(legend => (
                        <div className='legend__item'>
                            <div className='item__icon'>
                                <img src={legend.icon} alt='legend icon'/>
                            </div>
                            <div className='item__title'>{legend.title}</div>
                            <div className='item__value'>{legend.value}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
