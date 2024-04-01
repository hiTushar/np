import { bugPng, heatmapPng, medicineBoxPng } from '../../../assets/assets';
import DonutChart from '../../../components/DonutChart_/DonutChart';
import './AllTypes.css';
import SettingsBanner from './SettingsBanner';

const CLOUD_PROTECTION_DATA = [
    {
        key: 'good',
        title: 'Good Items',
        percent: '65',
        color: '#27D077',
        icon: medicineBoxPng
    },
    {
        key: 'malicious',
        title: 'Malicious Items',
        percent: '20',
        color: '#EB4E50',
        icon: bugPng
    },
    {
        key: 'suspicious',
        title: 'Suspicious Items',
        percent: '15',
        color: '#E15D27',
        icon: heatmapPng
    },
]

export default function CloudProtection({ sectionData, toggleProtection }) {
    return (
        <div className='cloud-protection'>
            <div className='cloud-protection__banner'>
                <SettingsBanner sectionData={sectionData} toggleProtection={toggleProtection} />
            </div>
            <div className='cloud-protection__data'>
                <div className='data__chart'>
                    <DonutChart 
                        data={CLOUD_PROTECTION_DATA}
                        thickness={20}
                        radius={40}
                    />
                    <div className='data__max'>65<span className='percent'>%</span></div>
                </div>
                <div className='data__values'>
                    {
                        CLOUD_PROTECTION_DATA.map(dataPt => (
                            <div className='data__item'>
                                <div className='item__viz'>
                                    <div className='viz__icon'>
                                        <img src={dataPt.icon} alt='icon' />
                                    </div>
                                    <div className='viz__value' style={{ '--font-color': dataPt.color }}>
                                        {dataPt.percent}%
                                    </div>
                                </div>
                                <div className='item__title'>
                                    {dataPt.title}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
