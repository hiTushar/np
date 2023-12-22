import { useEffect, useState } from 'react';
import './Radio.css';
import radio_active from '../../assets/radio_active.svg';
import radio_inactive from '../../assets/radio_inactive.svg';

const Option = (props) => {
    const { data, selected, setSelected, style } = props;
    return (
        <div className='npav-radio__option' onClick={() => setSelected(data)} style={{ ...style }}>
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
    const { options, defaultValue, customStyle, onChange } = props;
    const { container, option } = customStyle;

    const [selected, setSelected] = useState(defaultValue);

    useEffect(() => {
        onChange(selected);
    }, [selected, onChange])

    return (
        <div className='npav-radio' style={{ ...container }}>
            {options.map(optionData => <Option selected={optionData.value === selected.value} data={optionData} setSelected={setSelected} style={{ ...option }} key={optionData.value} />)}
        </div>
    )
}

export default Radio;
