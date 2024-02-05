import { Link } from "react-router-dom";
import './Main.css';

function Main(props) {
    return (
        <div className="main">
            <div className="main__all-screens">
                <Link to='/new'>New User</Link>
                <Link to='/taskbar'>Task Bar Panel</Link>
                <Link to='/protection'>Protection Flow</Link>
                <Link to='/user'>User</Link>
            </div>
        </div>
    )
}

export default Main;
