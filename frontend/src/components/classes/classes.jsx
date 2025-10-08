import './classes.css';

function Classes() {
    return (
    <div id="classes">
    <h2>Classes</h2>
    <div className="class-columns">
        <div className="class-column">
    <h3>Computer Science Courses Taken</h3>
    <ul>
        <li>CS 111 - Introduction to Computer Science 1</li>
        <li>CS 112 - Introduction to Computer Science 2</li>
        <li>CS 210 - Computer Systems</li>
    </ul>
    </div>
    <div className = "class-column">
    <h3>Computer Science Math Courses Taken</h3>
    <ul>
    <li> CS 131 -  Combinatoric Structures</li>
        <li>CS 132 - Geometric Algorithms</li>
        <li>CS 237 - Probability In Computing</li>
    </ul>
    </div>

    <div className="class-column">
    <h3>Business & Administration Courses Taken</h3>
    <ul>
        <li>SM 131 - Business, Ethics, Value</li>
        <li>QM 221 - Prob/Stat Decision Making</li>
        <li>LA 245 - Introduction to Law</li>
        <li>SM 132 - Measuring Financial Value</li>
        <li>LA 245 - Introduction to Law</li>
    </ul>
    </div>

    <div className="class-column">
    <h3>Taking This Semester</h3>
    <ul>
        <li>CS 330 - Analysis of Algorithms</li>
        <li>CS 391 A1 - Topics in Computer Science - Web Application Development</li>
        <li>SM 275 - Critical/Analytic Thinking Business</li>
    </ul>
    </div>
    </div>
    </div>
);
}

export default Classes;