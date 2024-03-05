import { useEffect, useRef, useState } from 'react';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import activation_success from '../assets/activation_success.svg';
import { useNavigate } from 'react-router-dom';

export default function Step3() {
    const [progress, setProgress] = useState(0);
    const timerId = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        if(!timerId.current) {
            timerId.current = setInterval(() => {
                console.log('*')
                setProgress(prev => prev + .25);
            }, 10)
        }
        return () => {
            if(progress >= 100) {
                clearInterval(timerId.current);
                setTimeout(() => {
                    navigate('/user'); // TODO: temporary redirect
                }, 2000)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progress])

    return (
        <div className="user-formpanel__step3">
            <div className="user-formpanel__step3-success">
                <div className="user-formpanel__step3-success-banner">
                    <img src={activation_success} alt={'activation success'} />
                    <p>Activation Successful</p>
                    <p>Your system is protected now!</p>
                </div>
                <div className="user-formpanel__step3-success-loader">
                    <ProgressBar length={progress} />
                    <p>
                        Loading Dashboard...
                    </p>
                </div>
            </div>
        </div>
    )
}
