import './SidePanel.css';
import npavLogo from '../assets/npav.svg';
import tutorial1 from '../assets/tutorial1.svg';
import tutorial2 from '../assets/tutorial2.svg';

function SidePanel(props) {
    return (
        <div className='user-sidepanel'>
            <div className="user-sidepanel__welcome">
                <div>
                    <p>Welcome to</p>
                    <p>Net Protector Antivirus</p>
                </div>
                <div>
                    <img src={npavLogo} alt={'npav logo'}/>
                </div>
            </div>
            <div className="user-sidepanel__tutorial">
                <div>
                    <img src={tutorial1} alt={'tutorial thumbnail'} />
                    <p>Refer the tutorial video</p>
                </div>
                <div>
                    <img src={tutorial2} alt={'tutorial thumbnail'} />
                    <p>Contact Helpdesk for Installation Assistance</p>
                </div>
            </div>
            <div className="user-sidepanel__version">
                <p>Net Protector Antivirus 2023</p>
                <p>Ver: 18.11.2023</p>
            </div>
        </div>
    )
}

export default SidePanel;
