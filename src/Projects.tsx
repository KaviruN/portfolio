import Project from './Project';
import nexcent from './assets/nexcent.png';


function Projects( ) {
    return (
        <section className="projects">
            <Project link='https://kavirun.github.io/nexcent/' img={nexcent} title="nexcent" description="The Nexcent project is a front-end application built using React and TypeScript, inspired by a free Figma template. It aims to transform design concepts into a functional and user-friendly interface." />
            <Project link='https://kavirun.github.io/nexcent/' img={nexcent} title="nexcent" description="The Nexcent project is a front-end application built using React and TypeScript, inspired by a free Figma template. It aims to transform design concepts into a functional and user-friendly interface." />
            <Project link='https://kavirun.github.io/nexcent/' img={nexcent} title="nexcent" description="The Nexcent project is a front-end application built using React and TypeScript, inspired by a free Figma template. It aims to transform design concepts into a functional and user-friendly interface." />
        </section>
    )
}

export default Projects;