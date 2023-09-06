import "./index.css";
import LinkButton from "../LinkButton";
import ProjectBox from "../ProjectBox";

function Projects() {
    return (
        <section id="portfolio" className="page-section">
            <div id="portfolio-header">
                <h1 className="header">PROJECTS</h1>
                < LinkButton href="https://github.com/wiadarola/" text="GitHub" newTab={true} />
            </div>
            <div id="portfolio-content">
                <ProjectBox
                    title="Project 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl."
                    image="https://via.placeholder.com/300"
                    link="
                    https://www.google.com/"
                    linkText="Google"
                />
                <ProjectBox
                    title="Project 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl."
                    image="https://via.placeholder.com/300"
                    link="https://www.google.com/"
                    linkText="Google"
                />

                <ProjectBox
                    title="Project 3"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl."
                    image="https://via.placeholder.com/300"
                    link="https://www.google.com/"
                    linkText="Google"
                />
            </div>
        </section>
    );
}

export default Projects;