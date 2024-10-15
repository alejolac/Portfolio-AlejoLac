function Contact() {
    return (
        <>
            <div className='contact'>
                <h2 className='numberHeading numberHeading3'>Contact</h2>
                <div className='contact-content'>
                    <div className='titleContact'>
                        <h2>Get In Touch</h2>
                    </div>
                    <div className='contact-text'>
                        I am currently looking for my first work experience in the <span
                            style={
                                {
                                    color: '#64ffda',
                                    fontWeight: 'bold'
                                }
                            }
                        >IT market</span>, if you are interested in working together, contact me
                    </div>
                    <div className='contact-linkedin-github'>
                        <div className='contact-linkedin'>
                            <a href="https://www.linkedin.com/in/alejo-lacroix-906433252/">
                                <i className='fa-brands fa-linkedin'></i>
                            </a>
                        </div>
                        <div className='contact-github'>
                            <a href="https://github.com/alejolac">
                                <i className='fa-brands fa-github'></i>
                            </a>
                        </div>
                    </div>
                    <div className='contact-gmail'>
                        <p> alejolac2003@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact