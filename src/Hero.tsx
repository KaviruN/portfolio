function Hero() {
    return (
        <section className="hero">
            <div className="hero__badge">Available for internships and freelance work</div>
            <p className="hero__intro">Hello, I am <span>Kaviru Nethsara</span></p>
            <h1>Building modern web products with a <span className="hero__highlight">security-first</span> mindset.</h1>
            <h2>Full Stack Developer and Cybersecurity Enthusiast</h2>
            <p className="hero__description">
                I create fast, scalable web experiences using React and Django while keeping security and maintainability at the center of every project.
            </p>
            <div className="hero__meta">
                <div className="hero__meta-item">
                    <strong>12+</strong>
                    <span>Projects built</span>
                </div>
                <div className="hero__meta-item">
                    <strong>CTF</strong>
                    <span>Security challenge focused</span>
                </div>
                <div className="hero__meta-item">
                    <strong>React + Django</strong>
                    <span>Primary stack</span>
                </div>
            </div>
            <div className="hero__buttons">
                <a href="#projects" className="btn">View Projects</a>
                <a href="#about" className="btn btn--secondary">About Me</a>
                <a href="https://blog.kaviru.me/" target="_blank" rel="noreferrer" className="btn btn--secondary">Read Blog</a>
                <a href="#contact" className="btn btn--secondary">Contact</a>
            </div>
        </section>
    )
}
export default Hero