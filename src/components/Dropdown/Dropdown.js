/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './Dropdown.css';
import arrow_dropdown from '../../assets/arrow_dropdown.svg';

export default function Dropdown(props) {
    const { options, placeholder, onChange } = props;

    const [selected, setSelected] = useState(null);

    return (
        <div className="npav-dropdown">
            <input placeholder={placeholder} />
            <img src={arrow_dropdown} alt={'arrow down'} />
        </div>
    )
}
