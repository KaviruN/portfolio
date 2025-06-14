import nexcent from './assets/nexcent.png';


type ProjectProps = {
    title: string;
    description: string;
};

function Project({ title, description }: ProjectProps) {
    return (
        <div className="projects__project">
            <div className="projects__header">
                <h2 className="projects__title">{title}</h2>
                <div className="projects__description">
                    <p className="projects__text">{description}</p>
                </div>
            </div>
            <div className="projects__view">
                <div className="projects__view--background"></div>
                <div className="projects__view--overlay">
                    <a href="https://kavirun.github.io/nexcent/"><img src={nexcent} alt="nexcent" /></a>
                </div>
            </div>
        </div>
    );
}

export default Project;