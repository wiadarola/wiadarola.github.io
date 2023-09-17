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
                <span>Originally from Southern California, I <span className="highlight">discovered my passion</span> for programming in my senior year of highschool after joining the <span className="highlight">FIRST robotics team.</span></span>
                <span>At <span className="highlight">New York University</span>, I developed my skills in <span className="highlight">Computer Science</span> and grew fond of the city's charm while delving into the intricacies of software engineering.</span>
                <span>Outside coding, I enjoy <span className="highlight">staying active</span>,&nbsp;
                    attending <span className="highlight">jazz and comedy</span> shows, and&nbsp;
                    {/* <span className="highlight">cherishing the many parks the city has to offer</span> */}
                    playing<span className="highlight"> Magic the Gathering</span> with friends
                    .</span>
            </div>
        </section>
    );
}

export default About;