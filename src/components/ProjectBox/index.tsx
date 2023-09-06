import './index.css';

interface ProjectBoxProps {
    title: string;
    description: string;
    image: string;
    link: string;
    linkText: string;
}

function ProjectBox(props: ProjectBoxProps) {
    return (
        <div className="project-box">
            <div className="project-box-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="project-box-text">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.link} target="_blank" rel="noreferrer">{props.linkText}</a>
            </div>
        </div>
    );
}

export default ProjectBox;