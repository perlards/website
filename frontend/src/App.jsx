import { Routes, Route, useLocation } from 'react-router-dom';
/* using this instead of { BrowserRouter} since i want to make chat not on all page hook usage? */
/*useLocation() only works when the component is inside a <Router>, and you're using it in App(), the <Router> must already be applied in index.js, not in App.jsx.*/
import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import About from './components/about/about';
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import Classes from './components/classes/classes';
import Chat from './components/chat/chat'

import './App.css'

    function App() {
        const location = useLocation();

        return (
            <>
        <Navbar/>
        <Profile/>
        
        <Routes>
            <Route path="/" element={<About />} />

        <Route
        path="/experiences"
        element={
            <>
        <h2>Experiences</h2>
        <Experiences
            title="Experience 1"
            info="Experience 1 Description"
            dates="Date 1 - Date 2"
            bullets={['Worked on frontend', 'Collaborated with team']}
            />
        <Experiences
            title="Experience 2"
            info="Experience 2 Description"
            dates="Date 3 - Date 4"
            bullets={['Built backend API', 'Managed deployment']}
            />
            </>
        }
        />

        <Route
            path="/projects"
            element={
            <>
            <h2>Projects</h2>
            <Projects
                name="Personal Portfolio"
                description="personal website built from scratch using react,css, jsx"
                github="https://github.com"
            />
            <Projects
                name="Project 2"
                description="Project 2 Description"
                github="https://github.com"
            />
            </>
        }
        />

        <Route path="/classes" element={<Classes />} />
    </Routes>

      {/* Chat appears at the bottom of every page */}
    {(location.pathname === '/' || location.pathname === '/chat') && <Chat />}
    </>
)
}

export default App;

    {/*
    <div id ="exp">
        <h2>Experiences</h2>
        <Experiences title="Experience 1" info="Experience 1 Description" dates="Date 1 - Date 2" bullets={['']}></Experiences>
        <Experiences title="Experience 2" info="Experience 2 Description" dates="Date 1 - Date 2" bullets={['']}></Experiences>
    </div>

    <div id="projects">
        <h2>Projects</h2>
        <Projects name="Project 1" description="Project 1 Description" github="https://github.com"></Projects>
        <Projects name="Project 2" description="Proejct 2 Description" github="https://github.com"></Projects>
    </div>

        <Classes/>
        <Chat/>

    
    </>
    )
}

export default App */}