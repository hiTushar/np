import { useDispatch } from "react-redux";
import './ProtectionModal.css';
import { warningPng, xPng } from "../../assets/assets";
import data from './data.jsx';
import Button from "../../components/Button/Button";
import protectionChange from "../../redux/actions/protectionActions.jsx";

export default function ProtectionModal({ section, setProtectionModalVisible }) {
    const dispatch = useDispatch();

    const getTitle = (section) => data.filter(item => item.key === section)[0].title;

    const disableSetting = () => {
        dispatch(protectionChange({ [section]: false }));
        setProtectionModalVisible(false);
    }

    return (
        <div className="protection-modal">
            <div className="protection-modal__container">
                <div className="container__interface">
                    <div className="container__icon">
                        <img src={warningPng} alt='warning icon' />
                    </div>
                    <div className="container__title">Disable {getTitle(section)}?</div>
                    <div className="container__desc">
                        Your security score will drop if you disable {getTitle(section).toLowerCase()}, and you won't be able to utilize all of the benefits.
                    </div>
                    <div className="container__action">
                        <Button
                            text='DISABLE'
                            type='secondary'
                            onClick={disableSetting}
                        />
                        <Button
                            text='CANCEL'
                            type='primary'
                            onClick={() => setProtectionModalVisible(false)}
                        />
                    </div>
                </div>
                <div className="container__close" onClick={() => setProtectionModalVisible(false)}>
                    <img src={xPng} alt='close icon' />
                </div>
                <div className="container__gradient"></div>
            </div>
        </div>
    )
}
