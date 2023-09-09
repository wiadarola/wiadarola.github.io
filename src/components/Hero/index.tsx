import "./index.css";
import LinkButton from "../LinkButton";
import { TypeAnimation } from 'react-type-animation';
import resume from '/assets/resume.pdf';

function Hero() {
    return (
        <section id="hero" className="page-section">
            <header className="hero-header">
                <p className="hero-name">WILLIAM IADAROLA</p>
                <TypeAnimation
                    sequence={['Full-Stack Software Engineer.']}
                    speed={1}
                    style={{
                        fontSize: 'clamp(23.5pt, 4vw, 70pt)',
                        fontWeight: '800',
                        wordWrap: 'break-word',
                        cursor: 'default',
                        textAlign: 'center',
                    }}
                    cursor={true}
                />
            </header >
            <div className="hero-body">
                <LinkButton href="https://github.com/wiadarola/" text="Github" newTab={true} />
                <LinkButton href="https://www.linkedin.com/in/wiadarola/" text="LinkedIn" newTab={true} />
                <LinkButton href={resume} text="Resume" newTab={true} />
                <LinkButton href="#contact" text="Contact" newTab={false} />
            </div >
        </section>
    );
}

export default Hero;