import './UpgradeCta.css';

export default function UpgradeCta() {
    return (
        <div className='upgrade-cta'>
            <div className="upgrade-cta__discount-text">
                <div className="discount-text__big">30% Off</div>
                <div className="discount-text__small">on upgrade</div>
            </div>
            <div className="upgrade-cta__desc">Provide enhanced premium features</div>
            <div className="upgrade-cta__action">Get Premium</div>
        </div>
    )
}
