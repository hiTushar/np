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
import { forwardRef, useEffect, useRef, useState } from 'react';
import './Dropdown.css';
import arrow_dropdown from '../../assets/arrow_dropdown.svg';

const Dropdown = forwardRef(function(props, ref) {
    const { value, options, loading, placeholder, selectOption, noEdit = false, searchEnable = true, trackChange } = props;

    const [open, setOpen] = useState(false);
    const [availableOptions, setAvailableOptions] = useState([]);
    const [dropdownDisplayValue, setDropdownDisplayValue] = useState('');
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        }
    }, [])

    useEffect(() => {
        setDropdownDisplayValue(value ? value.name : '');
    }, [value])

    useEffect(() => {
        setAvailableOptions([...options]);
    }, [options])

    const handleOutsideClick = (e) => {
        // console.log(dropdownRef.current, e.target)
        if(dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
        }
    }

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

    const onChange = (e) => {
        if(searchEnable)
            searchOption(e);
        else {
            let inputVal = e.target.value;
            setDropdownDisplayValue(inputVal);
            if(trackChange) trackChange(inputVal);
        }
    }

    return (
        <div className="npav-dropdown" ref={dropdownRef}>
            <input
                value={dropdownDisplayValue}
                onChange={onChange}
                onClick={openMenu}
                className="npav-dropdown__input"
                placeholder={placeholder}
                ref={ref}
                disabled={noEdit}
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
