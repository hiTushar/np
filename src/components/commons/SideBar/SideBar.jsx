import React from 'react'
import "./sideBar.scss"
import AppStoreOutlined from './SVGComponents/AppStoreOutlined'
import InputSwitch from '../InputSwitch'
import GoldOutlined from './SVGComponents/GoldOutlined'
import CloudOutlined from './SVGComponents/CloudOutlined'
import DownCircleOutlined from './SVGComponents/DownCircleOutlined'
import StopOutlined from './SVGComponents/StopOutlined'
import SecurityScanOutlined from './SVGComponents/SecurityScanOutlined'
import MailOutlined from './SVGComponents/MailOutlined'
import PartitionOutlined from './SVGComponents/PartitionOutlined'
import ThunderBoltOutlined from './SVGComponents/ThunderBoltOutlined'
import UnGroupOutlined from './SVGComponents/UnGroupOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { setProtectionEnabled, setProtectionSelected } from '../../../redux/actions/protectionFeatureActions'


const sideBarDataArr = [
    {
        SVGComponent: AppStoreOutlined,
        itemNm: "Application Control",
        enabled: false,
        selected: false,
    },
    {
        SVGComponent: GoldOutlined,
        itemNm: "ZV Fort Protection",
        enabled: false,
        selected: false,
    },
    {
        SVGComponent: CloudOutlined,
        itemNm: "Cloud Protection",
        enabled: true,
        selected: true,
    },
    {
        SVGComponent: DownCircleOutlined,
        itemNm: "OS Protection",
        enabled: false,
        selected: false,
    },
    {
        SVGComponent: StopOutlined,
        itemNm: "Advertise Blocker",
        enabled: false,
        selected: false,
    },
    {
        SVGComponent: SecurityScanOutlined,
        itemNm: "Online Protection",
        enabled: false,
        selected: false,
    },
    {
        SVGComponent: MailOutlined,
        itemNm: "Email Protection",
        enabled: true,
        selected: false,
    },
    {
        SVGComponent: PartitionOutlined,
        itemNm: "LAN Protection",
        enabled: false,
        selected: false,
    },
    {
        SVGComponent: ThunderBoltOutlined,
        itemNm: "IDS",
        enabled: false,
        selected: false,
    },
    {
        SVGComponent: UnGroupOutlined,
        itemNm: "Data Protection & Backup",
        enabled: false,
        selected: false,
    }
]

const SideBar = () => {
    const { selected, enabled:allEnabled } = useSelector(state => state.protectionSelReducer.allData);
    const dispatch = useDispatch()
    const sideBarFeatureSelectionHandler = (event, idx) => {
        event.preventDefault();
        dispatch(setProtectionSelected(idx))
    }
    const switchToggleHandler = (event,idx) => {
        event.preventDefault();
        dispatch(setProtectionEnabled(idx))

    }
    return (
        <div className='sidebar__main_container'>
            {sideBarDataArr.map((item, idx) => {
                const { SVGComponent, itemNm } = item
                const isSelected = selected === idx;
                const isEnabled = allEnabled[idx]
                return (<div onClick={(event) => sideBarFeatureSelectionHandler(event, idx)} key={idx} className={`sec_left_item ${isSelected && "enabled"}`}>
                    <div className={`sec_left_item_lftgrp `}>
                        <SVGComponent custFill={isSelected ? "#C3E3E9" : "#676A84"} />
                        <div className={`sec_left_item_text ${isSelected && "enabled"}`}>{itemNm}</div>
                    </div>
                    {!isSelected ?
                        <InputSwitch onToggle={event =>switchToggleHandler(event,idx) } isToggled={isEnabled} /> : ""
                    }
                </div>)
            }
            )}
        </div>
    )
}

export default SideBar