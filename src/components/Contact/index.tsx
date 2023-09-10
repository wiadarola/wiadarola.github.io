import './index.css';

function Contact() {
    return (
        <section id="contact" className='page-section'>
            <div>
                <header className='header'>CONTACT</header>
            </div>
            <div className='contact-container'>
                <div>
                    <div>
                        <span><span className='contact-tag'>Interested in working together?</span><br />Let's connect.</span>
                        <div className='contact-img-container'>
                            <a href="https://www.linkedin.com/in/wiadarola/" target="_blank" rel="noopener noreferrer">
                                <img className="contact-img" src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
                            </a>

                            <a href="mailto:wiadarola0@gmail.com">
                                <img className="contact-img" src="https://img.icons8.com/ios-filled/50/ffffff/mail.png" alt="Mail" />
                            </a>
                        </div>
                    </div>
                    <form className='contact-form'>
                        <div>
                            <input type="text" placeholder='Name' className='form-input' />
                            <input type="text" placeholder='Email' className='form-input' />
                            <input type="text" placeholder='Subject' className='form-input' />
                        </div>
                        <textarea placeholder='Message' className='form-txt'></textarea>
                    </form>
                    <button>SEND</button>
                </div>
            </div >
        </section >
    );
}

export default Contact;