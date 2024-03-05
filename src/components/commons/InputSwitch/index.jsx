import * as React from 'react';
import './inputswitch.scss'

const InputSwitch = React.forwardRef(({ isToggled, inputRef, onToggle, ...props }) => {
  const switchClass = isToggled ? 'switch active' : 'switch';
  return (
    <label className="toggle-switch" {...props}>
      <input type="checkbox" ref={inputRef} checked={isToggled} onChange={onToggle} />
      <span className={switchClass}>
        <div className="circle"></div>
      </span>
    </label>
  );
});

export default InputSwitch
