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


const sideBarDataArr = [
    {
        SVGComponent: AppStoreOutlined,
        itemNm: "Application Control",
        enabled: false,
        selected:false,
    },
    {
        SVGComponent: GoldOutlined,
        itemNm: "ZV Fort Protection",
        enabled: false,
        selected:false,
    },
    {
        SVGComponent: CloudOutlined,
        itemNm: "Cloud Protection",
        enabled: true,
        selected:true,
    },
    {
        SVGComponent: DownCircleOutlined,
        itemNm: "OS Protection",
        enabled: false,
        selected:false,
    },
    {
        SVGComponent: StopOutlined,
        itemNm: "Advertise Blocker",
        enabled: false,
        selected:false,
    },
    {
        SVGComponent: SecurityScanOutlined,
        itemNm: "Online Protection",
        enabled: false,
        selected:false,
    },
    {
        SVGComponent: MailOutlined,
        itemNm: "Email Protection",
        enabled: true,
        selected:false,
    },
    {
        SVGComponent: PartitionOutlined,
        itemNm: "LAN Protection",
        enabled: false,
        selected:false,
    },
    {
        SVGComponent: ThunderBoltOutlined,
        itemNm: "IDS",
        enabled: false,
        selected:false,
    },
    {
        SVGComponent: UnGroupOutlined,
        itemNm: "Data Protection & Backup",
        enabled: false,
        selected:false,
    }
]

const SideBar = () => {
    return (
        <div className='sidebar__main_container'>
            {sideBarDataArr.map((item, idx) => {
                const { SVGComponent, itemNm, enabled ,selected} = item
                return (<div key={idx} className={`sec_left_item ${selected && "enabled"}`}>
                    <div className={`sec_left_item_lftgrp `}>
                        <SVGComponent custFill={selected ? "#C3E3E9" : "#676A84"} />
                        <div className={`sec_left_item_text ${selected && "enabled"}`}>{itemNm}</div>
                    </div>
                    {!selected ?
                        <InputSwitch isToggled={enabled}/> : ""
                    }
                </div>)
            }
            )}
        </div>
    )
}

export default SideBar