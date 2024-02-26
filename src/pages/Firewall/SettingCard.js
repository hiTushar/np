import Card from "../../components/Card/Card";
import ArrowLeft from '../../assets/arrow-left.png';
import { useNavigate } from "react-router-dom";

export default function SettingCard({ data }) {
    const { title, icon, desc, navUrl } = data;
    const navigate = useNavigate();

    const goto = (url) => navigate(url);

    return (
        <Card>
            <div className="setting-card" onClick={() => goto(navUrl)}>
                <div className="setting-card__title">
                    <div className="title__icon">
                        <img src={icon} alt='icon' />
                    </div>
                    <div className="title__name">{title}</div>
                </div>
                <div className="setting-card__desc">{desc}</div>
                <div className="setting-card__action">
                    <div className="action__name">Manage</div>
                    <div className="action__icon">
                        <img src={ArrowLeft} alt='arrow left' />
                    </div>
                </div>
            </div>
        </Card>
    )
}
