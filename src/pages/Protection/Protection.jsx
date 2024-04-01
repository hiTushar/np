import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FoldedPanel from '../../components/FoldedPanel/FoldedPanel';
import ScreenHead from '../../components/ScreenHead/ScreenHead';
import './Protection.css';
import ProtectionMainPanel from './ProtectionMainPanel';
import ProtectionSidePanel from './ProtectionSidePanel';
import ProtectionModal from './ProtectionModal';
import protectionChange from '../../redux/actions/protectionActions';

export default function Protection() {
    const navigate = useNavigate();

    // eslint-disable-next-line no-unused-vars
    let [searchParams, setSearchParams] = useSearchParams();
    const section = searchParams.get('section');

    const [protectionModalVisible, setProtectionModalVisible] = useState(false);

    const dispatch = useDispatch();

    const toggleProtection = (section, enabled) => {
        if (enabled) {
            setProtectionModalVisible(true);
        }
        else {
            dispatch(protectionChange({ [section]: true }))
        }
    }

    return (
        <div className='protection'>
            {
                protectionModalVisible ? (
                    <ProtectionModal section={section} />
                ) : (
                    <>
                        <ScreenHead
                            titleBreadcrumbs={['Protection Type']}
                            onClick={() => navigate('/user')}
                            desc='Protect your computer from Internet as well as other threats with advanced NPAV features'
                        />
                        <div className='protection__content'>
                            <FoldedPanel
                                SidePanelComponent={() => (
                                    <ProtectionSidePanel 
                                        sectionSelected={section}
                                    />)}
                                MainPanelComponent={() => (
                                    <ProtectionMainPanel
                                        sectionSelected={section}
                                        toggleProtection={toggleProtection}
                                    />)}
                                sidePanelWidth={'25%'}
                                mainPanelWidth={'75%'}
                            />
                        </div>
                    </>
                )
            }
        </div>
    )
}
