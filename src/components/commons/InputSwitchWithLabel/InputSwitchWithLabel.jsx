import React from 'react'
import InputSwitch from '../InputSwitch'
import "./inputSwitchWithLabel.scss"

const InputSwitchWithLabel = ({label,...props}) => {
  return (
    <div className="input_switch_with_label" {...props}>
        <label htmlfor='switch_input'>{label || "Label"}</label>
        <InputSwitch id="switch_input"/>
    </div>
  )
}

export default InputSwitchWithLabel