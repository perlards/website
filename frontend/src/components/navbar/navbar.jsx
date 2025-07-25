import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div id="navbar">
            {/* name on header bar
            <h1>Perla Ruiz del Solar</h1> */}
            <Link className="nav-about" to="/">About</Link>
            <Link className="nav-experience" to="/experiences">Experiences</Link>
            <Link className="nav-projects" to="/projects">Projects</Link>
            <Link className="nav-classes" to="/classes">Classes</Link>
            <Link className="nav-chat" to="/chat">Chat</Link>
        </div>
    )
}

export default Navbar