import Container from "../Container/Container";
import project1 from "./../../images/house2.jpeg"
import project2 from "./../../images/house3.jpeg"
import project3 from "./../../images/house4.jpeg"
import project4 from "./../../images/house5.jpeg"

import "./Projects.css"

const Projects = () => {
    return(
        <Container className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project">
                    <img src={project1} alt="project" />
                    <p>Brick House</p>
                </div>
                <div className="project">
                    <img src={project2} alt="project" />
                    <p>Renovated</p>
                </div>
                <div className="project">
                    <img src={project3} alt="project" />
                    <p>Barn House</p>
                </div>
                <div className="project">
                    <img src={project4} alt="project" />
                    <p>Summer House</p>
                </div>
                <div className="project">
                    <img src={project3} alt="project" />
                    <p>Barn House</p>
                </div>
                <div className="project">
                    <img src={project1} alt="project" />
                    <p>Brick House</p>
                </div>
                <div className="project">
                    <img src={project4} alt="project" />
                    <p>Summer House</p>
                </div>
                <div className="project">
                    <img src={project2} alt="project" />
                    <p>Renovated</p>
                </div>
                
            </div>
        </Container>
    )
}

export default Projects;