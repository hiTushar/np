import { forwardRef } from 'react';
import './Input.css';

/**
 * value, placeholder, childeren, ref, styling, max length, type, disabled, onchange, status
 */
const Input = forwardRef(function Input(props, ref) {
    const { children, value, placeholder, maxLength, type, disabled, readOnly, onChange, customStyle } = props;
    return (
        <div className={'npav-input'} style={{...customStyle}}>
            <input
                ref={ref}
                value={value} 
                placeholder={placeholder} 
                maxLength={maxLength} 
                type={type} 
                disabled={disabled} 
                readOnly={readOnly}
                onChange={onChange}
            />
            {children}
        </div>
    )
})

export default Input;
