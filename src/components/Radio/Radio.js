import { useEffect, useState } from 'react';
import './Radio.css';
import radio_active from '../../assets/radio_active.svg';
import radio_inactive from '../../assets/radio_inactive.svg';

const Option = (props) => {
    const { data, selected, setSelected } = props;
    return (
        <div className='npav-radio__option' onClick={() => setSelected(data)}>
            {
                selected ? (
                    <div>
                        <img src={radio_active} alt={'active option'} />
                    </div>
                ) : (
                    <div>
                        <img src={radio_inactive} alt={'inactive option'} />
                    </div>
                )
            }
            <div>
                {data.name}
            </div>
        </div>
    )
}

function Radio(props) {
    const { options, defaultValue, customStyling, onChange } = props;

    const [selected, setSelected] = useState(defaultValue);

    useEffect(() => {
        onChange(selected);
    }, [selected, onChange])

    return (
        <div className='npav-radio'>
            {options.map(optionData => <Option selected={optionData.value === selected.value} data={optionData} setSelected={setSelected} key={optionData.value} />)}
        </div>
    )
}

export default Radio;
