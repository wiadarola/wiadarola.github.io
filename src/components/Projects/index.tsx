import "./index.css";
import LinkButton from "../LinkButton";
import ProjectBox from "../ProjectBox";

function Projects() {
    return (
        <section id="portfolio" className="page-section">
            <div className="portfolio-header">
                <h1 className="header">PROJECTS</h1>
                < LinkButton href="https://github.com/wiadarola/" text="GitHub" newTab={true} />
            </div>
            <div className="portfolio-container">
                <div className="portfolio-row1">
                    <ProjectBox
                        title="Project 1"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="/assets/projectimg-music.jpg"
                        link=" https://www.google.com/"
                    />
                    <ProjectBox
                        title="Project 2"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="/assets/projectimg-notes.jpg"
                        link="https://www.google.com/"
                    />
                </div>
                <div className="portfolio-row2">
                    <ProjectBox
                        title="Project 3"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="https://via.placeholder.com/300"
                        link="https://www.google.com/"
                    />
                    <ProjectBox
                        title="Project 3"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="https://via.placeholder.com/300"
                        link="https://www.google.com/"
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;