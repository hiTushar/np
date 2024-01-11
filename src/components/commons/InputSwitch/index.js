import * as React from 'react';
import './inputswitch.scss'

const InputSwitch = React.forwardRef(({isToggled, onToggle, inputRef,...props}) => {
  return (
    <label className="toggle-switch" {...props}>
      <input type="checkbox" ref={inputRef} checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
});

export default InputSwitch