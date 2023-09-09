import './index.css';

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
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.link} target="_blank" rel="noreferrer">LEARN MORE</a>
            </div>
        </div>
    );
}

export default ProjectBox;
