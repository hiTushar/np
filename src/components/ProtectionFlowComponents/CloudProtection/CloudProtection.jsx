import React, { useState } from 'react'
import "./cloudProtection.scss"
import CloudOutlinedSVG from '../../SvgComponents/CloudOutlinedSVG'
import InputSwitchWithLabel from '../../commons/InputSwitchWithLabel/InputSwitchWithLabel'
import { DonutChart } from '../../DonutChart'
import BugFilledSVG from '../../SvgComponents/BugFilledSVG'
import MedicineBoxFilled from '../../SvgComponents/MedicineBoxFilled'
import HeatMapOutlinned from '../../SvgComponents/HeatMapOutlinned'
import { setProtectionEnabled } from '../../../redux/actions/protectionFeatureActions'
import { useDispatch, useSelector } from 'react-redux'
import Protection2 from '../../../pages/ProtectionFlow/Protection2'


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

const CloudProtection = (props) => {
  const { selected, enabled } = useSelector(state => state.protectionSelReducer.allData);
  const isEnabled = enabled[props.enabledIdx];
  const [isOpen , setIsOpen] = useState(isEnabled);

  const dispatch = useDispatch()

  const switchToggleHandler = (event, idx) => {
    event.preventDefault();
    if(isEnabled){
      setIsOpen(state=>!state)
    }else{
      dispatch(setProtectionEnabled(idx))
    }
  }
  return (
    <>
      <div className='botsec_top_widget'>
        <div className='top_widget_left'>
          <CloudOutlinedSVG />
          <div className='top_widget_text_con'>
            <div className='text_con_texthead'>Cloud Protection</div>
            <div className='text_con_textdesc'>Scans processes on the cloud to check for the file safety rating</div>
          </div>
        </div>
        <div className="top_widget_switch">
          <InputSwitchWithLabel label={props.selected ? "Disable" : "Enable"} isToggled={props.selected} onToggle={(event) => switchToggleHandler(event, props.enabledIdx)} />
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
      {isOpen ? <Protection2 show={isOpen} onClick={()=>setIsOpen(state=>!state)} />:"" }
    </>
  )
}

export default CloudProtection