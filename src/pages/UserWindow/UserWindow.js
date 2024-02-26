import { Route, Routes } from "react-router-dom";
import './UserWindow.css';
import logo from './assets/npav-logo.png';
import support from './assets/npav-support.png';
import settings from './assets/npav-settings.png';
import user from './assets/npav-user.png';
import Dashboard from "../Dashboard/Dashboard";
import Scan from "../Scan/Scan";
import ScanOptions from "../ScanOptions/ScanOptions";
import JunkCleaner from "../JunkCleaner/JunkCleaner";
import StartupProgram from "../StartupProgram/StartupProgram";
import Firewall from "../Firewall/Firewall";
import FirewallSettings from "../FirewallSettings/FirewallSettings";

export default function UserWindow({ props }) {
    return (
        <div className="window">
            <div className="window__head">
                <div className="head__title">
                    <div className="title__logo">
                        <img src={logo} alt='npav logo' />
                    </div>
                    <div className="title__text">
                        Net Protector Antivirus 2025
                    </div>
                </div>
                <div className="head__options">
                    <div className="option">
                        <img src={support} alt='support icon' />
                    </div>
                    <div className="option">
                        <img src={settings} alt='settings icon' />
                    </div>
                    <div className="option">
                        <img src={user} alt='user icon' />
                    </div>
                </div>
            </div>
            <div className="window__body">
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/scan' element={<Scan />} />
                    <Route path='/scan-options' element={<ScanOptions />} />
                    <Route path='/junk-cleaner' element={<JunkCleaner />} />
                    <Route path='/junk-cleaner/startup' element={<StartupProgram />} />
                    <Route path='/firewall' element={<Firewall />} />
                    <Route path='/firewall/settings' element={<FirewallSettings />} />
                </Routes>
            </div>
        </div>
    )
}
