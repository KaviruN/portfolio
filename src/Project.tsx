

type ProjectProps = {
    title: string;
    sub: string;
    description: any;
    img: string;
    demo: string;
    githublink?: string;
};

function Project({ title, description, img, demo, githublink, sub }: ProjectProps) {
    return (
        <div className="projects__project">
            <div className="projects__header">
                <h4>{sub}</h4>
                <h2 className="projects__title">{title}</h2>
                <div className="projects__description">
                    <p className="projects__text">{description}</p>
                </div>
                <div className="projects__links">
                    <a href={githublink} target="_blank" title="GITHUB Link"><i className="ri-github-line"></i></a>
                    <a href={demo} target="_blank" title="Demo"><i className="ri-window-line"></i></a>
                </div>

            </div>
            <div className="projects__view">
                <div className="projects__img">
                    <img src={img} alt="nexcent" />
                </div>
            </div>
        </div>

    );
}

export default Project;