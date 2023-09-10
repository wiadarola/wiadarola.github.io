import "./index.css";
import LinkButton from "../LinkButton";

function Projects() {
    return (
        <section className="projects">
            <div className="projects-header">
                <header className="projects-title">PROJECTS</header>
                < LinkButton href="https://github.com/wiadarola/" text="GitHub" newTab={true} />
            </div>
            <div className="projects-content">
                <div>
                    <ProjectBox
                        title="React ToDo App"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="/assets/projectimg-notes.jpg"
                        link="https://wiadarola.github.io/react-ts-todo/"
                    />
                    <ProjectBox
                        title="Spotify Clone"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="/assets/projectimg-music.jpg"
                        link="https://wiadarola.github.io/spotify-clone/"
                    />
                </div>
                <div>
                    <ProjectBox
                        title="CNN Depth Estimator"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="/assets/projectimg-bino.jpeg"
                        link="https://github.com/wiadarola/CV-Monocular-Depth-Estimator"
                    />
                    <ProjectBox
                        title="MTG Price Predictor"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="/assets/projectimg-stock.webp"
                        link=" https://github.com/wiadarola/mtg-price-predictor"
                    />
                </div>
            </div>
        </section>
    );
}

interface ProjectBoxProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

function ProjectBox(props: ProjectBoxProps) {
    function handleClick() {
        window.open(props.link, "_blank");
    }

    return (
        <div onClick={handleClick} className="project-box" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="project-box-content">
                <header>{props.title}</header>
                <span>{props.description}</span>
                <a href={props.link} target="_blank" rel="noreferrer">LEARN MORE</a>
                <a href={props.link} target="_blank" rel="noreferrer" style={{ display: 'none' }}>Click to learn more!</a>
            </div>
        </div>
    );
}

export default Projects;