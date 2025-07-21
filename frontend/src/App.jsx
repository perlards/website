import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import About from './components/about/about';
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import Classes from './components/classes/classes';
import Chat from './components/chat/chat'

import './App.css'

    function App() {
        return (
        <>
        <Navbar/>
        <Profile/>
        <About/>
        <Classes/>
        <Chat/>

        



    <div id="projects">
        <h2>Projects</h2>
        <Projects name="Project 1" description="Project 1 Description" github="https://github.com"></Projects>
        <Projects name="Project 2" description="Proejct 2 Description" github="https://github.com"></Projects>
    </div>

    <div id ="exp">
        <h2>Experiences</h2>
        <Experiences title="Experience 1" info="Experience 1 Description" dates="Date 1 - Date 2" bullets={['']}></Experiences>
        <Experiences title="Experience 2" info="Experience 2 Description" dates="Date 1 - Date 2" bullets={['']}></Experiences>
    </div>
    </>
    )
}

export default App