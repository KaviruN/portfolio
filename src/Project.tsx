

type ProjectProps = {
    title: string;
    description: string;
    img: string;
    link: string;
};

function Project({ title, description, img, link }: ProjectProps) {
    return (
        <div className="projects__project">
            <div className="projects__header">
                <h2 className="projects__title">{title}</h2>
                <div className="projects__description">
                    <p className="projects__text">{description}</p>
                </div>
            </div>
            <div className="projects__view">
                <div className="projects__img">
                    <a href={link} target="_blank"><img src={img} alt="nexcent" /></a>
                </div>
            </div>
        </div>
        
    );
}

export default Project;