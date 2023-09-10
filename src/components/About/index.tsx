import "./index.css";
import LinkButton from "../LinkButton";

function About() {
    return (
        <section id="about" className="page-section">
            <div>
                <header className="header">ABOUT</header>
                <LinkButton href="https://www.linkedin.com/in/wiadarola/" text="LinkedIn" newTab={true} />
            </div>
            <div>
                <span>I like dogs</span>
                <span>I like cats</span>
                <span>I love new york</span>
            </div>
        </section>
    );
}

export default About;