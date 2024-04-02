import { getTime, set } from 'date-fns';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ScanScheduleModal.css';
import { xPng } from '../../assets/assets';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import { setScheduleScan } from '../../redux/actions/scanStatusActions';

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
        name: 'Monthly',
        value: 'monthly'
    },
];

const timeData = [
    {
        name: '09:30 AM',
        value: JSON.stringify({ hh: 9, mm: 30 })
    },
    {
        name: '10:30 AM',
        value: JSON.stringify({ hh: 10, mm: 30 })
    },
    {
        name: '12:00 PM',
        value: JSON.stringify({ hh: 12, mm: 0 })
    },
    {
        name: 'Custom',
        value: null
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
        value: 6
    },
]

// function getTimestampForToday(hh, mm) {
//     let today = Date.now();
//     if(hh) {
//         let scheduledTime = set(today, { hours: hh, minutes: mm })
//         return getTime(scheduledTime);
//     }
//     return getTime(today);
// }

export default function ScanScheduleModal({ setScheduleModal }) {
    const { next_scan_frequency, next_scan_time, next_scan_day, next_date_of_month } = useSelector(state => state.scanStatusReducer);
    const dispatch = useDispatch();
    const [scanFrequency, setScanFrequency] = useState(next_scan_frequency || {});
    const [scanTime, setScanTime] = useState(next_scan_time || {});
    const [scanDay, setScanDay] = useState(next_scan_day || []);
    const [scanDate, setScanDate] = useState(next_date_of_month || {})

    const saveData = () => {
        dispatch(setScheduleScan({
            next_scan_frequency: scanFrequency,
            next_scan_time: scanTime,
            next_scan_day: scanDay,
            next_date_of_month: scanDate
        }));
        setScheduleModal(false);
    }

    const saveFrequency = (option) => {
        if(option.value === 'daily') {
            setScanDay([...dayData]);
        }
        setScanFrequency(option);
    }

    const saveDay = (option) => {
        let temp = [...scanDay];
        let index = scanDay.findIndex(item => item.value === option.value);
        if(index >= 0) { // if selected option is clicked again
            temp.splice(index, 1);
        }
        else {
            temp.push(option);
        }
        setScanDay(temp);
    }

    const saveScanTime = (option) => {
        if(option.value) {
            setScanTime(option);
        }
        else {
            console.log(option);
        }
    }

    const saveDate = option => {
        setScanDate(option);
    }

    const checkSelected = (item) => {
        let index = scanDay.findIndex(day => day.value === item.value);
        if(index >= 0) {
            return 'selected';
        }
        return '';
    }

    const getDatesOfMonthData = () => {
        let MAX_DAYS = 31;
        let optionsArr = [];
        for(let i = 1; i <= MAX_DAYS; i++) {
            optionsArr.push({
                name: `${i}`,
                value: i
            })
        }
        return optionsArr;
    }

    return (
        <div className='scan-schedule'>
            <div className='scan-schedule__model'>
                <div className='modal__title'>Schedule Scan</div>
                <div className='modal__options'>
                    <div className='options__dropdowns'>
                        <div className='options__item'>
                            <div className='item__title'>Occurs<span>*</span></div>
                            <div className='item__dropdown'>
                                <Dropdown 
                                    value={scanFrequency}
                                    options={occursData}
                                    placeholder='Select Frequency'
                                    selectOption={saveFrequency}
                                />
                            </div>
                        </div>
                        {
                           scanFrequency.value === 'monthly' ? (
                                <div className='options__item'>
                                    <div className='item__title'>Date of the Month<span>*</span></div>
                                    <div className='item__dropdown'>
                                        <Dropdown
                                            value={scanDate}
                                            options={getDatesOfMonthData()}
                                            placeholder='Select Date'
                                            selectOption={saveDate}
                                        />
                                    </div>
                                </div>
                           ) : <></> 
                        }
                        <div className='options__item'>
                            <div className='item__title'>At<span>*</span></div>
                            <div className='item__dropdown'>
                                <Dropdown
                                    value={scanTime}
                                    options={timeData}
                                    placeholder='Select Time'
                                    selectOption={saveScanTime}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='options__days'>
                        {
                            scanFrequency.value === 'weekly' ? (
                                <div className='options__item'>
                                    <div className='item__title'>Occur on these days<span>*</span></div>
                                    <div className='item__days'>
                                        {
                                            dayData.map(item => (
                                                <div 
                                                    className={`days__block ${checkSelected(item)}`} 
                                                    key={item.name}
                                                    onClick={() => saveDay(item)}
                                                >
                                                    {item.name}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ) : <></>
                        }
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
                            onClick={saveData}
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
