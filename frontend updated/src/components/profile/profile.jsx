import './profile.css'
import ProfileIcon from '../../assets/profile-icon.png'
import LinkedinImage from '../../assets/linkedin1.png'
import GitHubIcon from '../../assets/github-icon1.png'


function Profile() {
    return (
        <div id="profile">
            <div><img width="250" src={ProfileIcon} /></div>
            <div id="profile-text">
                <p>Hello, I am</p>
                <h2>Perla Ruiz</h2>
                <p>Boston University Student</p>
                <div className="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/perla-ruiz-3a546b328//"><img id="linkedin-img" width="60" src={LinkedinImage} /></a>
                    <a target="_blank" href="https://github.com/perlards"><img id="github-img" width="60" src={GitHubIcon} /></a>
                </div>
            </div>
        </div>
    )
}

export default Profile