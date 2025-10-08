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
import Contact from './components/contact/contact';
import websiteSS from './assets/website-ss.png';
import websiteSS2 from './assets/website-ss2.png';

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
            title="BostonHacks"
            info="Marketing Organizer"
            dates="Jan 2025 - Current"
            bullets={['Manage social media campaigns and promotional content', 'Collaborate with team','Build partnerships with on and off-campus organizations and tech clubs', 'Create unique and creative content']}
            />
        <Experiences
            title="Seminole Tribe of Florida"
            info="I.T. Department Summer Internship"
            dates="Jun 2024 - Aug 2024"
            bullets={['Optimized queries in ServiceNow', 'Collaborated with IT staff across hardware, software, and network teams','Observed departmental operations including system upgrades, asset management, and customer service']}
            />
        <Experiences
            title="Tele-fund at Boston University "
            info="Caller"
            dates="Jan 2024 - May 2024"
            bullets={['Engaged with Boston University alumni to help raise fundrasing', 'Managed Fostered meaningful conversations with diverse individuals','Worked in fast-paced, high-volume calling environment while maintaing professionalism and demonstrating adaptability']}
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
                description="This website is my personal space to showcase my projects, skills, and experiences as an aspiring software engineer working towards my computer science degree. Built using React, my website utilizes JSX to create dynamic, interactive pages while leveraging mutiple programming languages such as, HTML, CSS, and JavaScript. Developing this site helped me deepen my understanding of modern web development while challenging me to continuously improve my coding skills. This site will keep evolving as I take on new challenges and grow my skills."
                imageSrcs={[websiteSS,websiteSS2]} /* add more images of project one here*/
                github="https://github.com/perlards/website"

            />
            <Projects
                name="Panther Crossing Coffee "
                description="I’m currently working on building a website for Panther Crossing Coffee, a small business looking to establish a strong online presence. Drawing inspiration from other successful sites, I’m designing and developing a user-friendly, visually appealing platform that reflects the brand’s unique vibe. This project allows me to apply and expand the skills I’ve used in my own portfolio site, while learning new techniques to create a polished, professional web experience."
                imageSrc={websiteSS2}
                github="" /* add link here */

            />
            </>
        }
        />
    

        <Route path="/classes" element={<Classes />} />
        <Route path="/chat" element={<Chat />} /> 

    </Routes>

    {/* Chat appears at the bottom of every page 
    {(location.pathname === '/' || location.pathname === '/chat') && <Chat />}*/}
    {/* always show contact on each page*/}
    <Contact />
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