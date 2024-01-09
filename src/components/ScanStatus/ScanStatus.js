/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./ScanStatus.css"
import pause from "../../pages/Taskbar/assets/pause.svg"
export default function ScanStatus(props) {
    const { progress } = props;
    const [percentage, setPercentage] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [storedPercentage, setStoredPercentage] = useState(0);

    useEffect(() => {
        const targetPercentage = 65;
        const increment = 1;
        let currentPercentage = storedPercentage;
        let intervalId;

        const updatePercentage = () => {
            currentPercentage += increment;
            setPercentage(Math.min(currentPercentage, targetPercentage));

            if (currentPercentage >= targetPercentage) {
                clearInterval(intervalId);
            }
        };

        if (!isPaused) {
            intervalId = setInterval(updatePercentage, 50);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isPaused, storedPercentage]);

    const handlePauseToggle = () => {
        setIsPaused((prevIsPaused) => {
            if (!prevIsPaused) {
                setStoredPercentage(percentage);
            }
            return !prevIsPaused;
        });
    };


    return (
        <div className="progress_bar_container">
            <CircularProgressbar
                value={percentage}

                strokeWidth={20}
                styles={buildStyles({
                    pathColor: `#CEB11B`,
                    trailColor: `#f8e71c30`
                })}
            />;
            <div className="percentage">
                {percentage}<span className="symbol">%</span>
            </div>
            <img className="pause" src={pause} onClick={handlePauseToggle} alt="pause" title="pause" />
        </div>
    )
}