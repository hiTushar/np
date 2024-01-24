import React from 'react'
import InputSwitch from '../InputSwitch'
import "./inputSwitchWithLabel.scss"

/**
 * 
 * @param { Object } props
 * @param { String } props.label - label for switch
 * @returns JSX component 
 */

const InputSwitchWithLabel = ({label,...props}) => {
  return (
    <div className={`input_switch_with_label ${props.className}`} >
        <label htmlFor='switch_input'>{label || "Label"}</label>
        <InputSwitch id="switch_input" isToggled={props.isToggled} onToggle={props.onToggle}/>
    </div>
  )
}

export default InputSwitchWithLabel