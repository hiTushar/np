import { Link } from "react-router-dom";
import './Home.css';

function Home(props) {
    return (
        <div className="home">
            <div className="home__all-screens">
                <Link to='/new'>New User</Link>
                <Link to='/taskbar'>Task Bar Panel</Link>
                <Link to='/protection'>Protection Flow</Link>
                <Link to='/protection2'>Protection Flow screen 2</Link>
            </div>
        </div>
    )
}

export default Home;
