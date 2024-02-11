/**
 * 
 * @param {Boolean} checked (on/off - true/false)
 * @param {Function} onClick create action on state click
 * @param {Boolean} disabled user action disabled  
 * @returns React Component
 * 
 * NOTE: maintain a 2:1, width:height ratio in its parent component
 */

import './Switch.css'

// TODO: use input-label markup instead of div
export default function Switch({ checked, onClick, disabled }) {
    return (
        <div className={`npav-switch ${checked ? 'checked' : ''} ${disabled}`} onClick={!disabled ? onClick : () => {}}>
            <div className={`npav-switch__handle ${checked ? 'checked' : ''}`}>
            </div>
        </div>
    )
}
