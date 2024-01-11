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
        enabled: false
    },
    {
        SVGComponent: GoldOutlined,
        itemNm: "ZV Fort Protection",
        enabled: false
    },
    {
        SVGComponent: CloudOutlined,
        itemNm: "Cloud Protection",
        enabled: true
    },
    {
        SVGComponent: DownCircleOutlined,
        itemNm: "OS Protection",
        enabled: false
    },
    {
        SVGComponent: StopOutlined,
        itemNm: "Advertise Blocker",
        enabled: false
    },
    {
        SVGComponent: SecurityScanOutlined,
        itemNm: "Online Protection",
        enabled: false
    },
    {
        SVGComponent: MailOutlined,
        itemNm: "Email Protection",
        enabled: false
    },
    {
        SVGComponent: PartitionOutlined,
        itemNm: "LAN Protection",
        enabled: false
    },
    {
        SVGComponent: ThunderBoltOutlined,
        itemNm: "IDS",
        enabled: false
    },
    {
        SVGComponent: UnGroupOutlined,
        itemNm: "Data Protection & Backup",
        enabled: false
    }
]

const SideBar = () => {
    return (
        <div className='sidebar__main_container'>
            {sideBarDataArr.map((item, idx) => {
                const { SVGComponent, itemNm, enabled } = item
                return (<div key={idx} className={`sec_left_item ${enabled && "enabled"}`}>
                    <div className={`sec_left_item_lftgrp `}>
                        <SVGComponent custFill={enabled ? "#C3E3E9" : "#676A84"} />
                        <div className={`sec_left_item_text ${enabled && "enabled"}`}>{itemNm}</div>
                    </div>
                    {!enabled ?
                        <InputSwitch /> : ""
                    }
                </div>)
            }
            )}
        </div>
    )
}

export default SideBar