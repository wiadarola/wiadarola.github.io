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
                        title="Spotify Clone"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="/assets/projectimg-music.jpg"
                        link="https://wiadarola.github.io/spotify-clone/"
                    />
                    <ProjectBox
                        title="React ToDo App"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="/assets/projectimg-notes.jpg"
                        link="https://wiadarola.github.io/react-ts-todo/"
                    />
                </div>
                <div className="portfolio-row2">
                    <ProjectBox
                        title="MTG Price Predictor"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="/assets/projectimg-stock.webp"
                        link=" https://github.com/wiadarola/mtg-price-predictor"
                    />
                    <ProjectBox
                        title="CNN Depth Estimator"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies."
                        image="/assets/projectimg-bino.jpeg"
                        link="https://github.com/wiadarola/CV-Monocular-Depth-Estimator"
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;