/* eslint-disable no-unused-vars */

/**
 * @param { Object } props
 * @param { Object } props.value { name: '', value: '' }
 * @param { Array } props.options [{ name: '', value: '' }]
 * @param { Boolean } props.loading
 * @param { String } props.placeholder
 * @param { Function } props.onChange
 * 
 */
import { forwardRef, useEffect, useState } from 'react';
import './Dropdown.css';
import arrow_dropdown from '../../assets/arrow_dropdown.svg';

const Dropdown = forwardRef(function(props, ref) {
    const { value, options, loading, placeholder, selectOption } = props;

    const [open, setOpen] = useState(false);
    const [availableOptions, setAvailableOptions] = useState([]);
    const [dropdownDisplayValue, setDropdownDisplayValue] = useState('');

    useEffect(() => {
        setDropdownDisplayValue(value ? value.name : '');
    }, [value])

    useEffect(() => {
        setAvailableOptions([...options]);
    }, [options])

    const toggleMenu = () => setOpen(prev => !prev);

    const openMenu = () => setOpen(true);

    const clickOption = (opt) => {
        setOpen(false);
        selectOption(opt);
    }

    const searchOption = (e) => {
        let inputVal = e.target.value;
        setDropdownDisplayValue(inputVal);
        if (inputVal.length) {
            let filteredOptions = options.filter(opt => opt.name.toLowerCase().includes(inputVal.toLowerCase()));
            setAvailableOptions(filteredOptions);
        }
        else {
            setAvailableOptions(options);
        }
    }

    const getOptions = (options, loading) => {
        if (options.length) {
            return options.map(opt => (
                <div
                    className="menu__option"
                    onClick={() => clickOption(opt)}
                    key={opt.value}
                >
                    {opt.name}
                </div>
            ))
        }
        else {
            if(loading) {
                return (
                    <div className='menu__option no-match'>
                        Loading...
                    </div>
                )
            }

            return (
                <div className='menu__option no-match'>
                    Not Available
                </div>
            )
        }
    }

    return (
        <div className="npav-dropdown">
            <input
                value={dropdownDisplayValue}
                onChange={searchOption}
                onClick={openMenu}
                className="npav-dropdown__input"
                placeholder={placeholder}
                ref={ref}
            />
            <img
                onClick={toggleMenu}
                className={`npav-dropdown__arrow ${open ? 'open' : 'close'}`}
                src={arrow_dropdown}
                alt={'arrow down'}
            />
            {
                open && (
                    <div className="npav-dropdown__menu">
                        {getOptions(availableOptions, loading)}
                    </div>
                )
            }
        </div>
    )
})

export default Dropdown;
