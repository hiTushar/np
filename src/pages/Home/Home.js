import { Link } from "react-router-dom";
import './Home.css';

function Home(props) {
    return (
        <div className="home">
            <div>
                <Link to='/new'>New User</Link>
            </div>
        </div>
    )
}

export default Home;
