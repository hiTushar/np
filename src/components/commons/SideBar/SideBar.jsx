import React from 'react'
import "./sideBar.scss"
import AppStoreOutlined from './SVGComponents/AppStoreOutlined'
import InputSwitch from '../InputSwitch'

const SideBar = () => {
    return (
        <div className=''>
            <div className="sec_left_item">
                <div className="sec_left_item_lftgrp">
                    <AppStoreOutlined />
                    <div className="sec_left_item_text">Application Control</div>
                </div>
                <InputSwitch />
            </div>
        </div>
    )
}

export default SideBar