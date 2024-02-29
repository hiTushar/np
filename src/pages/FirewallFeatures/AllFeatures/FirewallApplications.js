import { useState } from "react";
import './FirewallApplication.css';
import { outboundData } from './OutboundTableData'; 
import Table from "../../../components/Table/Table";
import Edit from '../../Firewall/assets/Edit.png';
import Delete from '../../Firewall/assets/Delete.png';
import PlusIcon from '../../Firewall/assets/PlusOutlined.png';

const APPLICATIONS_TYPE = {
    TYPE_1: 'Allow List',
    TYPE_2: 'Outbound'
}

const ActionsComponent = () => {
    return (
        <div className="actions">
            <div className="actions__edit">
                <img src={Edit} alt={'edit icon'} />
            </div>
            <div className="actions__delete">
                <img src={Delete} alt={'delete icon'} />
            </div>
        </div>
    )
}

function FirewallApplications() {
    const [currentType, setCurrentType] = useState('TYPE_2');
    
    const changeCurrentType = (type) => setCurrentType(type);

    return (
        <div className="firewall-applications">
            <div className="firewall-applications__selector">
                {
                    Object.keys(APPLICATIONS_TYPE).map(type => (
                        <div 
                            className={`selector__title ${currentType === type ? 'active' : ''}`}
                            onClick={() => changeCurrentType(type)}
                            key={type}
                        >
                            {APPLICATIONS_TYPE[type]}
                        </div>
                    ))
                }
            </div>
            <div className="firewall-applications__table">
                <div className="table__title">
                    Add application for internet block
                </div>
                <div className="table__data">
                    <Table 
                        data={outboundData} 
                        rowHighlight={true}
                        elementsForAllRows={[
                            {
                                title: 'Actions',
                                element: <ActionsComponent />,
                                columnPosition: 3
                            }
                        ]}
                        colSpanArray={[3, 2, 1]} 
                    />
                </div>
            </div>
            <div className='firewall-applications__input'>
                <div className="input__icon">
                    <img src={PlusIcon} alt='plus icon' />
                </div>
                <div className="input__title">
                    Add New
                </div>
            </div>
        </div>
    )
}

export default FirewallApplications;
