import React from 'react'
import NpavSVG from '../../components/SvgComponents/NpavSVG';
import HeadPhoneSVG from '../../components/SvgComponents/HeadPhoneSVG';
import SettingsSVG from '../../components/SvgComponents/SettingsSVG';
import UserSVG from '../../components/SvgComponents/UserSVG';
import ArrowSVG from '../../components/SvgComponents/ArrowSVG';
import CloudOutlinedSVG from '../../components/SvgComponents/CloudOutlinedSVG';
import InputSwitchWithLabel from '../../components/commons/InputSwitchWithLabel/InputSwitchWithLabel';
import "./protection.scss"
import BugFilledSVG from '../../components/SvgComponents/BugFilledSVG';
import MedicineBoxFilled from '../../components/SvgComponents/MedicineBoxFilled';
import HeatMapOutlinned from '../../components/SvgComponents/HeatMapOutlinned';
import { DonutChart } from '../../components/DonutChart';
import SideBar from '../../components/commons/SideBar/SideBar';


/**
 * 
 * @param { Object } props
 * @param { SVGAElement } props.SVGComponent - SVGComponent for rendering svg
 * @param { String } props.desc - title of the item
 * @param { Number } props.percentage - percentage for the item
 * @param { String } props.colorClass - className for custom color of text
 * @returns JSX component 
 */
export const PercItem = ({ SVGComponent, desc, percentage, colorClass, ...props }) => {
  return (
    <div className='perc_item'>
      <div className='perc_item_top'>
        <SVGComponent />
        <div className={`perc_item_top_perc ${colorClass}`}>{percentage}%</div>
      </div>
      <div className='perc_item_bot'>
        {`${desc} Items`}
      </div>
    </div>
  )
}

const PercDataArr = [
  {
    SVGComponent: BugFilledSVG,
    colorClass: "red",
    percentage: "20",
    desc: "Malicious"
  },
  {
    SVGComponent: MedicineBoxFilled,
    colorClass: "green",
    percentage: "65",
    desc: "Good"
  },
  {
    SVGComponent: HeatMapOutlinned,
    colorClass: "orange",
    percentage: "15",
    desc: "Suspicious"
  },
]

const data = [
  { name: "Good", value: 65 },
  { name: "Malicious", value: 20 },
  { name: "Suspicious", value: 15 },
];

const Protection = () => {
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
            <div className='botsec_top_widget'>
              <div className='top_widget_left'>
                <CloudOutlinedSVG />
                <div className='top_widget_text_con'>
                  <div className='text_con_texthead'>Cloud Protection</div>
                  <div className='text_con_textdesc'>Scans processes on the cloud to check for the file safety rating</div>
                </div>
              </div>
              <div className="top_widget_switch">
                <InputSwitchWithLabel label={"Enable"} />
              </div>
            </div>
            <div className='botsec_bot_widget'>
              <div className="bot_widget_donut">
                <DonutChart data={data} width={295} height={295} />
                <div className='bot_widget_donut_'>{data[0].value}<span className='perc_sym'>%</span></div>
              </div>
              <div className="bot_widget_perc_items">
                {PercDataArr.map((percItem, index) => {
                  return <PercItem key={index} SVGComponent={percItem.SVGComponent} desc={percItem.desc} percentage={percItem.percentage} colorClass={percItem.colorClass} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Protection