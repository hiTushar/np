import { Link } from "react-router-dom";
import './Dashboard.css';

export default function Dashboard({ props }) {
    return (
        <>
            <div>Dashboard</div>
            <Link to='/user/scan?type=quick'>Quick Scan</Link><br />
            <Link to='/user/scan?type=cloud'>Cloud Scan</Link><br />
            <Link to='/user/scan-options'>Scan Options</Link><br />
            <Link to='/user/junk-cleaner'>Junk Cleaner</Link><br />
            <Link to='/user/firewall'>Firewall</Link><br />
        </>
    )
}
