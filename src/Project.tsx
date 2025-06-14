type ProjectProps = {
    title: string;
    description: string;
};

function Project({ title, description }: ProjectProps) {
    return (
        <div className="projects__project">
            <h2 className="projects__title">{title}</h2>
            <div className="projects__description">
                <p className="projects__text">{description}</p>
            </div>
        </div>
    );
}

export default Project;