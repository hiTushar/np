import React from 'react'
import "./protection.scss"
import { ReactComponent as NPAVSVG } from "../../assets/npav.svg";
import { ReactComponent as HEADPHONESVG } from "../../assets/headphone.svg";
import { ReactComponent as SETTINGSSVG } from "../../assets/settings.svg";
import { ReactComponent as USERSVG } from "../../assets/user.svg";

const Protection = () => {
  return (
    <div className="protection_main_container">
      <div className="protection_header">
        <div className='npav__svg'>
          <NPAVSVG />
        </div>
        <div className='heading_txt'>Net Protector Antivirus 2025</div>
        <div className='header_ctas'>
          <HEADPHONESVG/>
          <SETTINGSSVG/>
          <USERSVG/>
        </div>
      </div>
      <div className="protection_child_container">

      </div>
    </div>
  )
}

export default Protection