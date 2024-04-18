import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { arrowLeftPng } from "../../assets/assets";

export default function FeatureCard({ data }) {
    const { key, title, icons, desc } = data;
    const navigate = useNavigate();

    return (
        <Card>
            <div className="feature-card" onClick={() => navigate(`/user/web-security/firewall/features?section=${key}`)}>
                <div className="feature-card__title">
                    <div className="title__icon">
                        <img src={icons[0]} alt='icon' />
                    </div>
                    <div className="title__name">{title}</div>
                </div>
                <div className="feature-card__desc">{desc}</div>
                <div className="feature-card__action">
                    <div className="action__name">Manage</div>
                    <div className="action__icon">
                        <img src={arrowLeftPng} alt='arrow left' />
                    </div>
                </div>
            </div>
        </Card>
    )
}
