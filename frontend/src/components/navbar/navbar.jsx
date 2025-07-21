import './navbar.css'

function Navbar() {
    return (
        <div id="navbar">
            <h1>Perla Ruiz del Solar</h1>
            <a className="nav-about" href="#about">About </a>
            <a className="nav-projects" href="#projects">Projects </a>
            <a className="nav-experience" href="#exp">Experiences</a>
        </div>
    )
}

export default Navbar