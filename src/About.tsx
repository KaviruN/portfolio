

const About = () => {
    return (
        <section className="about reveal" id="about">
            <div className="section-head">
                <p className="section-head__kicker">About</p>
                <h2 className="section-head__title">Who I Am</h2>
            </div>
            <div className="about__container">
                <div className="about__story">
                    <p>
                        I am a cybersecurity enthusiast and developer who enjoys building, breaking, and understanding systems from the inside out. My journey started with hands-on experimentation, from Arduino projects to CTF challenges.
                    </p>
                    <p>
                        I learn best by building. Instead of only studying theory, I create tools, ship projects, and test real-world systems to understand how they behave and fail.
                    </p>
                    <p>
                        My core interest is ethical hacking, application security, and secure full-stack product development. I am always improving through practical work and constant iteration.
                    </p>
                </div>
                <div className="about__focus">
                    <h3>Current Focus</h3>
                    <ul>
                        <li>Secure web application development</li>
                        <li>CTF challenges and penetration testing labs</li>
                        <li>Backend APIs with Django and DRF</li>
                        <li>Modern frontend interfaces with React</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;