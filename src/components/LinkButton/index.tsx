import "./index.css";

interface LinkButtonProps {
    href: string;
    text: string;
    newTab: boolean;
}

function LinkButton(props: LinkButtonProps) {
    return (
        <a className="link-button" target={props.newTab ? "_blank" : ""} rel="noreferrer" href={props.href}><span>{props.text}</span></a>
    );
}

export default LinkButton;