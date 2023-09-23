import "./index.css";
import LinkButton from "../LinkButton";
import ToDoImg from "/assets/projectimg-notes.jpg";
import SpotifyImg from "/assets/projectimg-music.jpg";
// import CNNImg from "/assets/projectimg-bino.jpeg";
import MTGImg from "/assets/stonks-without-stonks.jpg";
import ai from "/assets/ai.jpg";

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
                        title="SaaS AI Companion"
                        description="Full-stack customizable AI companion app built with Next13, TypeScript, React, Prisma, MySQL, and Tailwind CSS."
                        image={ai}
                        visit="https://ai-companion-ku0c6fke7-wjiadarola-coxnet.vercel.app/"
                        repo=" https://github.com/wiadarola/ai-companion"
                    />
                    <ProjectBox
                        title="Spotify Clone"
                        description="Full-stack Spotify clone web app built using Next13, TypeScript, React, Supabase, PostgreSQL, and Tailwind CSS."
                        image={SpotifyImg}
                        visit="https://spotify-clone-htmm04u15-wjiadarola-coxnet.vercel.app/"
                        repo="https://github.com/wiadarola/spotify-clone"
                    />
                </div>
                <div>

                    <ProjectBox
                        title="React ToDo App"
                        description="React TypeScript project completed to gain familiarity with the tools."
                        image={ToDoImg}
                        visit="https://wiadarola.github.io/react-ts-todo/"
                        repo="https://github.com/wiadarola/react-ts-todo"
                    />
                    <ProjectBox
                        title="MTG Price Predictor"
                        description="Utilizes regression techniques to estimate Magic the Gathering card prices (USD) on online marketplaces."
                        image={MTGImg}
                        repo=" https://github.com/wiadarola/mtg-price-predictor"
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
    visit?: string;
    repo: string;
}

function ProjectBox(props: ProjectBoxProps) {
    function handleClick() {
        window.open(props.visit || props.repo, "_blank");
    }

    return (
        <div onClick={handleClick} className="project-box" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="project-box-content">
                <header>{props.title}</header>
                <span>{props.description}</span>
                <div>
                    <a href={props.repo} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>LEARN MORE</a>
                    <a href={props.visit} target="_blank" rel="noreferrer" style={{ display: `${props.visit ? 'block' : 'none'}` }} onClick={e => e.stopPropagation()}>VISIT</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;