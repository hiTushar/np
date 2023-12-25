/**
 * 
 * @param { Object } props
 * @param { String } props.text - button text
 * @param { String } props.type - type of button (primary, secondary, text-only)
 * @param { Function } props.onClick - click event handler
 * @param { Boolean } props.disabled - disabled boolean
 * @param { Object } props.customStyle - custom style for button
 * @returns JSX component 
 */

import './Button.css';

export default function Button(props) {
    const { text, type, onClick, disabled, customStyle } = props;
    return (
        <button className={`npav-button npav-button--${type}`} onClick={onClick} disabled={disabled}>{text}</button>
    )
}
