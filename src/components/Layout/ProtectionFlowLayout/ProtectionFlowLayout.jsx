import React from 'react'
import "./protectionFlowLayout.scss"
import NpavSVG from '../../SvgComponents/NpavSVG'
import HeadPhoneSVG from '../../SvgComponents/HeadPhoneSVG'
import SettingsSVG from '../../SvgComponents/SettingsSVG'
import UserSVG from '../../SvgComponents/UserSVG'
import ArrowSVG from '../../SvgComponents/ArrowSVG'
import SideBar from '../../commons/SideBar/SideBar'

const ProtectionFlowLayout = (props) => {
  return (
    <div className="protection_main_container">
      <div className="protection_header">
        <div className='npav__svg'>
          <NpavSVG />
        </div>
        <div className='heading_txt'>Net Protector Antivirus 2025</div>
        <div className='header_ctas'>
          <HeadPhoneSVG />
          <SettingsSVG />
          <UserSVG />
        </div>
      </div>
      <div className="protection_child_container">
        <div className="protection_child_top_sec">
          <div className="back_n_heading">
            <ArrowSVG />
            <div className="protection_child_heading_text">Protection Type</div>
          </div>
          <div className="protection_child_desc">Protect your computer from Internet as well as other threats with advanced NPAV features.</div>
        </div>
        <div className="protection_child_bot_sec">
          <div className="bot_sec_left">
            <SideBar/>
          </div>
          <div className="bot_sec_right">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProtectionFlowLayout