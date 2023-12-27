import { useEffect, useState } from 'react';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import activation_success from '../assets/activation_success.svg';

let timer = null;
export default function Step3() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if(!timer) {
            timer = setInterval(() => {
                console.log('*')
                setProgress(prev => prev + .25);
            }, 10)
        }
        return () => {
            if(progress >= 100) {
                clearInterval(timer);
            }
        }
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
