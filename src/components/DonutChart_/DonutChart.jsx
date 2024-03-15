/**
 * 
 * @param {Object} props.data [{ title: 'asdf', percent: '23', color: '#fff' }, ...]
 * @param {Number} props.thickness 0 - 100 
 * @param {Number} props.radius 0 - 100 
 * @returns donut chart svg
 */

import './DonutChart.css';

/**
 * creates the colored strokes/arcs
 */
const getDashArray = (percent, radius) => {
    const circumference = 2 * Math.PI * radius;
    const strokeLength = circumference * percent / 100;
    const blankLength = circumference - strokeLength;
    return `${strokeLength.toFixed(2)} ${blankLength.toFixed(2)}`;
}


/**
 * shifts every arc from the origin to prevent overlap with previous arcs 
 */
const getDashOffset = (index, array, radius) => {
    let percentageCovered = 0;
    for(let i = 0; i < index; i++) {
        percentageCovered += parseInt(array[i].percent);
    }

    const circumference = 2 * Math.PI * radius;
    const offsetLength = -circumference * percentageCovered / 100;
    return offsetLength.toFixed(2);
}

export default function DonutChart(props) {
    const { data, thickness, radius } = props;
    return (
        <svg viewBox="0 0 100 100">
            <style>
                {``}
            </style>
            {
                data.map((dataPt, index, array) => (
                    <circle
                        key={dataPt.title}
                        className='donut-chart'
                        cx={50}
                        cy={50}
                        r={radius}
                        fill='transparent'
                        stroke={dataPt.color}
                        strokeWidth={thickness}
                        strokeDasharray={getDashArray(parseInt(dataPt.percent), radius)}
                        strokeDashoffset={getDashOffset(index, array, radius)}
                        // transform='rotate(-90deg)'
                        // transformOrigin='center'
                        // style={{ '--thick': thickness, '--radius': radius }}
                    ></circle>
                ))
            }
        </svg>
    )
}
