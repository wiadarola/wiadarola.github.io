import './index.css';

function Contact() {
    return (
        <section id="contact" className='page-section'>
            <div>
                <header className='header'>CONTACT</header>
            </div>
            <div className='contact-container'>
                <div>
                    <span><span className='contact-tag'>Interested in working together?</span><br />Let's connect.</span>
                    <span><span className='contact-tag'>Want to see more?</span><br />Check out my resume.</span>
                    <span><span className='contact-tag'>Have a question?</span><br />Feel free to reach out.</span>
                </div>
            </div >
        </section >
    );
}

export default Contact;