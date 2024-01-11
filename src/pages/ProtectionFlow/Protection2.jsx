import React from 'react'
import "./protection2.scss"
import warning from '../../components/SvgComponents/Warning.svg';
import cross from '../../components/SvgComponents/cross.svg';
import { useState } from 'react';



const Protection2 = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="protection_main_container2">
      <div className="protection_child_container2">
        <div className={`popup_container ${show ? '' : 'hide'}`}>

          <img className='cross' src={cross} alt="cross" onClick={() => setShow(false)} />
          <img className='warning' src={warning} alt="warning" />
          <div className='title'>Disable Cloud Protection?</div>
          <div className='text'>
            Your security score will drop if you disable cloud protection, and you won't be able to utilize all the benefits.
          </div>
          <div className='button_container'>
            <button className='disable'>DISABLE</button>
            <button className='cancel'>CANCEL</button>
          </div>
          <div className='gradient'></div>
        </div>
      </div>
    </div>
  )
}

export default Protection2;