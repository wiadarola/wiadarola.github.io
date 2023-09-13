import "./index.css";
import LinkButton from "../LinkButton";
import ToDoImg from "/assets/projectimg-notes.jpg";
import SpotifyImg from "/assets/projectimg-music.jpg";
import CNNImg from "/assets/projectimg-bino.jpeg";
import MTGImg from "/assets/projectimg-stock.webp";

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-header">
                <header className="projects-title">PROJECTS</header>
                < LinkButton href="https://github.com/wiadarola/" text="GitHub" newTab={true} />
            </div>
            <div className="projects-content">
                <div>
                    <ProjectBox
                        title="React ToDo App"
                        description="React TypeScript project completed to gain familiarity with the tools."
                        image={ToDoImg}
                        link="https://wiadarola.github.io/react-ts-todo/"
                    />
                    <ProjectBox
                        title="Spotify Clone"
                        description="TBD."
                        image={SpotifyImg}
                        link="https://wiadarola.github.io/spotify-clone/"
                    />
                </div>
                <div>
                    <ProjectBox
                        title="CNN Depth Estimator"
                        description="A convolutional NN that can perform monocular depth estimation. Created using Numpy, scikit-learn, & PyTorch."
                        image={CNNImg}
                        link="https://github.com/wiadarola/CV-Monocular-Depth-Estimator"
                    />
                    <ProjectBox
                        title="MTG Price Predictor"
                        description="Utilizes regression techniques to estimate a Magic the Gathering card's price (USD) on online marketplaces."
                        image={MTGImg}
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