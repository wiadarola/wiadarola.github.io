import './index.css';
import LinkButton from '../LinkButton';

function Contact() {
    return (
        <section id="contact" className='page-section'>
            <div>
                <header className='header'>CONTACT</header>
            </div>
            <div className='contact-container'>
                <div>
                    <span className='contact-tag'>Interested in working together?<LinkButton href="https://www.linkedin.com/in/wiadarola/" text="Let's Connect" newTab={true} /></span>
                    <span className='contact-tag'>Want to see my resume?<LinkButton href="/assets/resume.pdf" text="Take a Look" newTab={true} /></span>
                    <span className='contact-tag'>Want to see more?<LinkButton href="https://github.com/wiadarola/" text="Visit my GitHub" newTab={true} /></span>
                    <span className='contact-tag'>Have a question?<LinkButton href="mailto:wiadarola0@gmail.com" text="Send an Email" newTab={true} /></span>
                </div >
                <span>Thanks for visiting my portfolio</span >
            </div >
        </section >
    );
}

export default Contact;