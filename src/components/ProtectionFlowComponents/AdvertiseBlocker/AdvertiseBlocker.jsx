import React from 'react'
import InputSwitchWithLabel from '../../commons/InputSwitchWithLabel/InputSwitchWithLabel'
import { setProtectionEnabled } from '../../../redux/actions/protectionFeatureActions'
import StopOutlined from '../../commons/SideBar/SVGComponents/StopOutlined'
import "./advertiseBlocker.scss"
import { useDispatch } from 'react-redux'
import InputSwitch from '../../commons/InputSwitch'

const ListItemDataArr = [
    "Social Sites Ads Blocker",
    "UTorrent Video Ads Blocker",
    "YouTube Video Ads Blocker"
]

const ListItem = (props) => {
    return (
        <div className="list_item">
            <div className='list_item_nm'>{props.name}</div>
            <div className='list_flex_auto'></div>
            <InputSwitch isToggled={props.idx !== 0} defaultCheck/>
        </div>
    )
}

const AdvertiseBlocker = (props) => {
    const dispatch = useDispatch()
    const switchToggleHandler = (event, idx) => {
        event.preventDefault();
        dispatch(setProtectionEnabled(idx))
    }
    return (
        <div className='ads__main_container'>
            <div className='ads_contents_container'>
                <div className='contents_title_card'>
                    <div className='top_widget_left'>
                        <StopOutlined />
                        <div className='top_widget_text_con'>
                            <div className='text_con_texthead'>Advertise Blocker</div>
                            <div className='text_con_textdesc'>Blocks unwanted Advertises</div>
                        </div>
                    </div>
                    <div className="top_widget_switch">
                        <InputSwitchWithLabel label={"Enable"} isToggled={props.selected} onToggle={(event) => switchToggleHandler(event, props.enabledIdx)} />
                    </div>
                </div>
                <div className='contents_list'>
                    <div className='list_title'>Advance Settings</div>
                    <div className='list'>
                        {ListItemDataArr.map((item, idx) => <ListItem key={idx} name={item} idx={idx} />)}
                    </div>
                </div>
            </div>
            <div className='ads_footer_con'>
                <div className="footer_flex_auto"></div>
                <div className="footer_cncl_bth"><button>CANCEL</button></div>
                <div className="footer_apply_bth"><button>APPLY</button></div>
            </div>
        </div>
    )
}

export default AdvertiseBlocker