import React from 'react'
import "./dataProtection.scss"
import hardisk from "../../SvgComponents/harddisk.svg"


const DataProtection = (props) => {


    return (
        <>
            <div className='drive_container'>
                <h1 className='title'> Devices and Drives (1)</h1>
                <div className='drive_details_container'>
                    <div className='drive_img'><img src={hardisk} alt="hardisk" /></div>
                    <div className='details'>
                        <h3 className='drive_name'>Back Drive (C:)</h3>
                        <div className='range'>
                            <div className='fill' style={{ width: props.width }}></div>
                        </div>
                        <div className='storage'>454 GB free of 512 GB</div>
                    </div>
                </div>

            </div>


            <div className='subtitle'>Backup Details</div>


            <div className='backup_msg'>

                <span className='text1'>
                    Space used by backup&nbsp;
                    <span className='bold'>52.1 MB</span>
                </span>

                <span className='text2'>Backup Interval 3 Days</span>
            </div>


            <div className='buttons_container'>
                <button className='cancel'>CANCEL</button>
                <button className='apply'>APPLY</button>
            </div>

        </>
    )
}

export default DataProtection;