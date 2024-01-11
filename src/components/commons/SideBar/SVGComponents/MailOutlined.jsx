import React from 'react'

const MailOutlined = ({ custFill }) => {
    return (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
            <g clipPath="url(#clip0_707_3305)">
                <path d="M17.3571 2.42847H0.642857C0.287277 2.42847 0 2.71574 0 3.07132V15.9285C0 16.284 0.287277 16.5713 0.642857 16.5713H17.3571C17.7127 16.5713 18 16.284 18 15.9285V3.07132C18 2.71574 17.7127 2.42847 17.3571 2.42847ZM16.5536 4.65436V15.1249H1.44643V4.65436L0.891964 4.22244L1.68147 3.20793L2.54129 3.8769H15.4607L16.3205 3.20793L17.11 4.22244L16.5536 4.65436ZM15.4607 3.8749L9 8.89722L2.53929 3.8749L1.67946 3.20592L0.889955 4.22043L1.44442 4.65235L8.30692 9.98806C8.50428 10.1414 8.74707 10.2246 8.99699 10.2246C9.2469 10.2246 9.4897 10.1414 9.68705 9.98806L16.5536 4.65436L17.108 4.22244L16.3185 3.20793L15.4607 3.8749Z" fill={custFill || "#676A84"} />
            </g>
            <defs>
                <clipPath id="clip0_707_3305">
                    <rect width="18" height="18" fill={custFill || "white"} transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default MailOutlined