

type ProjectProps = {
    title: string;
    sub: string;
    description: React.ReactNode;
    img: string;
    demo: string;
    githublink?: string;
};

function Project({ title, description, img, demo, githublink, sub }: ProjectProps) {
    return (
        <article className="projects__project">
            <div className="projects__view">
                <div className="projects__img">
                    <img src={img} alt={title} />
                </div>
            </div>
            <div className="projects__content">
                <div className="projects__header">
                    <h4>{sub}</h4>
                    <h3 className="projects__title">{title}</h3>
                </div>
                <p className="projects__description">{description}</p>
                <div className="projects__links">
                    {githublink && (
                        <a href={githublink} target="_blank" rel="noreferrer" title="GitHub Repository">
                            <i className="ri-github-line"></i>
                            <span>Code</span>
                        </a>
                    )}
                    <a href={demo} target="_blank" rel="noreferrer" title="Live Demo">
                        <i className="ri-window-line"></i>
                        <span>Live</span>
                    </a>
                </div>
            </div>
        </article>

    );
}

export default Project;