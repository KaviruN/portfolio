function Hero() {
    return (
        <main className="hero">
            <p className="hero__intro">👋 Hello! I'm <span>Kaviru Nethsara</span></p>
            <h1>Always <span className="hero__highlight">learning.</span> Always <span className="hero__highlight">building.</span></h1>
            <h2>Full Stack Developer & Cybersecurity Enthusiast</h2>
            <p className="hero__description">
                I build <strong>secure</strong> and <strong>scalable</strong> web apps using Django & React.<br />
                Let’s create something powerful — and secure.
            </p>
            <div className="hero__buttons">
                <a href="#" className="btn">View Projects</a>
                <a href="#" className="btn btn--secondary">Contact Me</a>
            </div>
        </main>
    )
}
export default Hero