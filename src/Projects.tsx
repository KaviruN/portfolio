import Project from './Project';
import nexcent from './assets/nexcent.png';


function Projects( ) {
    return (
        <section className="projects">
            <Project demo='https://projects.kaviru.me/nexcent/' githublink='https://github.com/KaviruN/nexcent' img={nexcent} title="nexcent" sub="Frontend Focuse" description="The Nexcent project is a front-end application built using React and TypeScript, inspired by a free Figma template. It aims to transform design concepts into a functional and user-friendly interface." />
            <Project demo='https://kavirun.github.io/nexcent/'  githublink='https://github.com/KaviruN/nexcent' img={nexcent} title="nexcent" sub="Frontend Focuse" description="The Nexcent project is a front-end application built using React and TypeScript, inspired by a free Figma template. It aims to transform design concepts into a functional and user-friendly interface." />
            <Project demo='https://kavirun.github.io/nexcent/' githublink='https://github.com/KaviruN/nexcent' img={nexcent} title="nexcent" sub="Frontend Focuse" description="The Nexcent project is a front-end application built using React and TypeScript, inspired by a free Figma template. It aims to transform design concepts into a functional and user-friendly interface." />
        </section>
    )
}

export default Projects;