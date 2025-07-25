import './about.css'
import CSS from '../../assets/css.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import VSCode from '../../assets/vscode.png';
import GitHub from '../../assets/github.png';
import ReactIcon from '../../assets/react.png';

function About () {

    return(
        <div id="about">
            <h3> About Me </h3> 
            <div className="about-content">
                    <p>I'm a computer science student at Boston University with a strong foundation in object-oriented programming, backend development, and systems-level debugging, complemented by a business minor that gives me a broader perspective on technology's real-world impact. Through my internship with the Seminole Tribe of Florida’s IT Department and personal projects in both backend and frontend development, I've developed practical skills in Python, Java, C, Assembly, and ServiceNow. I'm passionate about building reliable, user-centered software and excited to contribute to innovative engineering teams while continuing to grow in areas like mobile development, distributed systems, and UI design.</p>
                    <div className="skills">
                        <img src={CSS} alt="CSS" />
                        <img src={JS} alt="JavaScript" />
                        <img src={PY} alt="Python" />
                        <img src={VSCode} alt="Visual Studio Code" />
                        <img src={GitHub} alt="GitHub" />
                        <img src={ReactIcon} alt="React" />
                    </div>
                </div>
        </div>
    )
}

export default About



