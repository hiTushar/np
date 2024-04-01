import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Protection.css';
import Switch from '../../components/Switch/Switch';
import data from './data';

export default function ProtectionSidePanel({ sectionSelected }) {
    const navigate = useNavigate();
    const goto = (sectionSelected) => navigate(`/user/protection?section=${sectionSelected}`);

    const protectionReducer = useSelector(state => state.protectionReducer);

    return (
        <div className='protection__side-panel'>
            {
                data.map(sectionData => {
                    const { key, title, SvgIcon } = sectionData;

                    return (
                        <div className={`side-panel__section ${sectionSelected === key ? 'highlight' : ''}`} onClick={() => goto(key)} key={key}>
                            <div className='section__icon'>
                                <SvgIcon fillColor={sectionSelected === key ? '#C3E3E9' : '#676A84'} />
                            </div>
                            <div className={`section__title ${sectionSelected === key ? 'highlight' : ''}`}>{title}</div>
                            {
                                sectionSelected !== key && (
                                    <div className='section__status'>
                                        <Switch
                                            disabled={true}
                                            checked={protectionReducer[key]}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
