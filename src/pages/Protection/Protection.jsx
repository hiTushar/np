import { useNavigate, useSearchParams } from 'react-router-dom';
import FoldedPanel from '../../components/FoldedPanel/FoldedPanel';
import ScreenHead from '../../components/ScreenHead/ScreenHead';
import './Protection.css';
import ProtectionMainPanel from './ProtectionMainPanel';
import ProtectionSidePanel from './ProtectionSidePanel';
import data from './data';

export default function Protection() {
    const navigate = useNavigate();

    // eslint-disable-next-line no-unused-vars
    let [searchParams, setSearchParams] = useSearchParams();
    const section = searchParams.get('section');

    return (
        <div className='protection'>
            <ScreenHead 
                titleBreadcrumbs={['Protection Type']}
                onClick={() => navigate('/user')}
                desc='Protect your computer from Internet as well as other threats with advanced NPAV features'
            />
            <div className='protection__content'>
                <FoldedPanel
                    SidePanelComponent={() => <ProtectionSidePanel sectionRoute={section} data={data} />}
                    MainPanelComponent={() => <ProtectionMainPanel sectionRoute={section} />}
                    sidePanelWidth={'25%'}
                    mainPanelWidth={'75%'}
                />
            </div>
        </div>
    )
}
