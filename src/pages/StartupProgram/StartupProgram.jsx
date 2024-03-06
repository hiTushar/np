import { useNavigate } from 'react-router-dom';
import ScreenHead from '../../components/ScreenHead/ScreenHead';
import './StartupProgram.css';
import { startupProgramData, windowsServicesData, scheduledTaskData, systemContextMenuData } from './data';
import { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';

const ALL_TABS = {
    STARTUP_PROGRAM: 'Start-up Program',
    WINDOWS_SERVICES: 'Windows Services',
    SCHEDULED_TASKS: 'Scheduled Tasks',
    SYSTEM_CONTEXT_MENU: 'System Context Menu'
}

export default function StartupProgram(props) {
    const navigate = useNavigate();

    const [currentTab, setCurrentTab] = useState(ALL_TABS.STARTUP_PROGRAM);
    const [currentData, setCurrentData] = useState(startupProgramData);

    useEffect(() => {
        switch (currentTab) {
            case ALL_TABS.STARTUP_PROGRAM:
                setCurrentData(startupProgramData);
                break;
            case ALL_TABS.WINDOWS_SERVICES:
                setCurrentData(windowsServicesData);
                break;
            case ALL_TABS.SCHEDULED_TASKS:
                setCurrentData(scheduledTaskData);
                break;
            case ALL_TABS.SYSTEM_CONTEXT_MENU:
                setCurrentData(systemContextMenuData);
                break;
            default:
                setCurrentData([]);
                break;
        }
    }, [currentTab])

    const setTab = (e) => setCurrentTab(e.target.textContent);

    return (
        <div className='startup-program'>
            <ScreenHead
                titleBreadcrumbs={['System Tuner', 'Junk Cleaner', 'Start-up Program']}
                onClick={() => navigate('/user/junk-cleaner')}
            // TODO: make goTo a common util function that takes url as parameter, query param for same page navigation
            />
            <div className='startup-program__tabs'>
                {
                    Object.keys(ALL_TABS).map(name => (
                        <div 
                            className={`tabs__name ${ALL_TABS[name] === currentTab ? 'active' : ''}`} 
                            onClick={setTab} 
                            key={name}
                        >
                            {ALL_TABS[name]}
                        </div>
                    ))
                }
            </div>
            <div className='startup-program__data'>
                {/* TODO: scroll should be inside the table itself and not on parent component */}
                { /* TODO: improve scrollbar styling */}
                <Table data={currentData} />
            </div>
        </div>
    )
}
