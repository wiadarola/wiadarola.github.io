import "./index.css";
import LinkButton from "../LinkButton";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
    return (
        <section id="hero" className="page-section">
            <header id="hero-header">
                <p id="name">WILLIAM IADAROLA</p>
                <TypeAnimation
                    sequence={['Full-Stack Software Engineer.']}
                    speed={1}
                    style={{
                        fontSize: '50px',
                        fontWeight: '800',
                        wordWrap: 'break-word',
                        cursor: 'default'
                    }}
                    cursor={true}
                />
            </header >
            <div id="hero-body">
                <LinkButton href="https://github.com/wiadarola/" text="Github" newTab={true} />
                <LinkButton href="https://www.linkedin.com/in/wiadarola/" text="LinkedIn" newTab={true} />
                <LinkButton href="/src/assets/resume.pdf" text="Resume" newTab={true} />
                <LinkButton href="#contact" text="Contact Me" newTab={false} />
            </div >
        </section>
    );
}

export default Hero;