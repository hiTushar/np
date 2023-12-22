import { forwardRef } from 'react';
import './Input.css';

/**
 * value, placeholder, childeren, ref, styling, max length, type, disabled, onchange, status
 */
const Input = forwardRef(function Input(props, ref) {
    const { children, value, placeholder, max, type, disabled, onChange, customStyle } = props;

    return (
        <div className={'npav-input'} style={{...customStyle}}>
            <input
                ref={ref}
                value={value} 
                placeholder={placeholder} 
                maxLength={max} 
                type={type} 
                disabled={disabled} 
                onChange={onChange}
            />
            {children}
        </div>
    )
})

export default Input;
