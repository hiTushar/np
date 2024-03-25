import { getTime, set } from 'date-fns';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import './ScanScheduleModal.css';
import { xPng } from '../../assets/assets';

const occursData = [
    {
        name: 'Daily',
        value: 'daily'
    },
    {
        name: 'Weekly',
        value: 'weekly'
    },
    {
        name: 'Fortnightly',
        value: 'fortnightly'
    },
    {
        name: 'Monthly',
        value: 'monthly'
    },
];

const timeData = [
    {
        name: '09:30 AM',
        value: getTimestampForToday(9, 30)
    },
    {
        name: '10:30 AM',
        value: getTimestampForToday(10, 30)
    },
    {
        name: '12:00 PM',
        value: getTimestampForToday(12, 0)
    }
]

const dayData = [
    {
        name: 'Sun',
        value: 0
    },
    {
        name: 'Mon',
        value: 1
    },
    {
        name: 'Tue',
        value: 2
    },
    {
        name: 'Wed',
        value: 3
    },
    {
        name: 'Thu',
        value: 4
    },
    {
        name: 'Fri',
        value: 5
    },
    {
        name: 'Sat',
        value: 0
    },
]

function getTimestampForToday(hh, mm) {
    let today = Date.now();
    if(hh) {
        let scheduledTime = set(today, { hours: hh, minutes: mm })
        return getTime(scheduledTime);
    }
    return getTime(today);
}

export default function ScanScheduleModal({ setScheduleModal }) {
    

    return (
        <div className='scan-schedule'>
            <div className='scan-schedule__model'>
                <div className='modal__title'>Schedule Scan</div>
                <div className='modal__options'>
                    <div className='options__item'>
                        <div className='item__title'>Occurs<span>*</span></div>
                        <div className='item__dropdown'>
                            <Dropdown 
                                value={null}
                                options={occursData}
                                placeholder='Select Frequency'
                            />
                        </div>
                    </div>
                    <div className='options__item'>
                        <div className='item__title'>At<span>*</span></div>
                        <div className='item__dropdown'>
                            <Dropdown 
                                value={null}
                                options={timeData}
                                placeholder='Select Time'
                            />
                        </div>
                    </div>
                    <div className='options__item'>
                        <div className='item__title'>Occur on these days<span>*</span></div>
                        <div className='item__days'>
                            {
                                dayData.map(item => <div className='days__block' key={item.value}>{item.name}</div>)
                            }
                        </div>
                    </div>
                </div>
                <div className='modal__actions'>
                    <div className='actions__item'>
                        <Button 
                            text='CANCEL'
                            type='secondary'
                            onClick={() => setScheduleModal(false)}
                        />
                    </div>
                    <div className='actions__item'>
                        <Button 
                            text='SCHEDULE'
                            type='primary'
                            onClick={() => setScheduleModal(false)}
                            customStyle={{
                                color: '#CEE6FE',
                                background: '#566E86'
                            }}
                        />
                    </div>
                </div>
                <div className='modal__close' onClick={() => setScheduleModal(false)}>
                    <img src={xPng} alt='x icon' />
                </div>
            </div>
        </div>
    )
}
