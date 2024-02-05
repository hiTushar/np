import { Link } from "react-router-dom";
import './Dashboard.css';

export default function Dashboard({ props }) {
    return (
        <>
            <div>Dashboard</div>
            <Link to='/user/scan'>Quick Scan</Link>
        </>
    )
}
