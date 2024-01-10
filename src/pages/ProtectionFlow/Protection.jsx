import React from 'react'
import "./protection.scss"
import NpavSVG from '../../components/SvgComponents/NpavSVG';
import HeadPhoneSVG from '../../components/SvgComponents/HeadPhoneSVG';
import SettingsSVG from '../../components/SvgComponents/SettingsSVG';
import UserSVG from '../../components/SvgComponents/UserSVG';
import ArrowSVG from '../../components/SvgComponents/ArrowSVG';

const Protection = () => {
  return (
    <div className="protection_main_container">
      <div className="protection_header">
        <div className='npav__svg'>
          <NpavSVG />
        </div>
        <div className='heading_txt'>Net Protector Antivirus 2025</div>
        <div className='header_ctas'>
          <HeadPhoneSVG/>
          <SettingsSVG/>
          <UserSVG/>
        </div>
      </div>
      <div className="protection_child_container">
        <div>
        <ArrowSVG/>
        </div>
        <div>
        Protection Type
        </div>
      </div>
    </div>
  )
}

export default Protection