import activation_success from '../assets/activation_success.svg';

export default function Step3() {
    return (
        <div className="user-formpanel__step3">
            <div className="user-formpanel__step3-success">
                <div className="user-formpanel__step3-success-banner">
                    <img src={activation_success} alt={'activation success'} />
                    <p>Activation Successful</p>
                    <p>Your system is protected now!</p>
                </div>
                <div className="user-formpanel__step3-success-loader">

                </div>
            </div>
        </div>
    )
}
