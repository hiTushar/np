import { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import './Firewall.css';
import PulseSvg from '../../assets/PulseSvg';

const LEGEND_DATA = [
    {
        color: 'rgb(159, 88, 223)',
        title: 'Allowed Connections',
        value: 357
    },
    {
        color: 'rgb(243, 189, 51)',
        title: 'Temporarily Blocked Connections',
        value: 1000
    },
    {
        color: 'rgb(255, 74, 74)',
        title: 'Blocked Connections',
        value: 197
    },
]

export default function FirewallStatsChart(props) {
    const chartRef = useRef(null);

    const getCanvasGradient = (color) => {
        let ctx = document.createElement('canvas').getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 500);

        let [r, g, b] = color.match(/[0-9]+/g);
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
                borderColor: LEGEND_DATA[0].color,
                backgroundColor: getCanvasGradient(LEGEND_DATA[0].color),
            },
            {
                fill: true,
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                borderColor: LEGEND_DATA[1].color,
                backgroundColor: getCanvasGradient(LEGEND_DATA[1].color),
            },
            {
                fill: true,
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                borderColor: LEGEND_DATA[2].color,
                backgroundColor: getCanvasGradient(LEGEND_DATA[2].color)
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
                                <PulseSvg fillColor={legend.color} />
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
