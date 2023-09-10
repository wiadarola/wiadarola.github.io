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
                <span>Born in Southern California, I <span className="highlight">discovered my passion</span> for programming in my senior year of highschool after joining the <span className="highlight">FIRST robotics team.</span></span>
                <span>At <span className="highlight">New York University</span>, I honed my skills in <span className="highlight">Computer Science</span> and fell for the city's allure and the intricacies of software engineering.</span>
                <span>Outside coding, I enjoy <span className="highlight">staying active</span>,&nbsp;
                    <span className="highlight">attending jazz and comedy nights</span>, and&nbsp;
                    <span className="highlight">cherishing the many parks the city has to offer</span>.</span>
            </div>
        </section>
    );
}

export default About;