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
                <span>Born in Southern California, I discovered my passion for programming in my senior year of highschool through the <span className="highlight">FIRST robotics team.</span></span>
                <span>At <span className="highlight">New York University</span>, I honed my skills in Computer Science and fell for the city's allure and the intricacies of software engineering.</span>
                <span>Outside coding, <span className="highlight">I enjoy staying active, </span><span className="highlight">attending jazz and comedy nights</span>, and <span className="highlight">cherishing the many parks the city has to offer.</span></span>
            </div>
        </section>
    );
}

export default About;