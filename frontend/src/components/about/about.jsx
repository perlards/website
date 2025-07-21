import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'



function About () {

    return(
        <div id="about">
            <h3> About Me </h3> 
            <div className="about-content">
                    <p>I enjoy building applications using modern web technologies.</p>
                    <div className="skills">
                        <img src={HTML} alt="HTML" />
                        <img src={CSS} alt="CSS" />
                        <img src={JS} alt="JavaScript" />
                        <img src={PY} alt="Python" />
                    </div>
                </div>
        </div>
    )
}

export default About



