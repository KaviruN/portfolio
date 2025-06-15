import Project from './Project';
import nexcent from './assets/nexcent.png';
import jakeElwood from './assets/jake&elwood.png';


function Projects( ) {
    return (
        <section className="projects">
            <Project demo='https://projects.kaviru.me/nexcent/' githublink='https://github.com/KaviruN/nexcent' img={nexcent} title="nexcent" sub="Frontend Focuse" description="The Nexcent project is a front-end application built using React and TypeScript, inspired by a free Figma template. It aims to transform design concepts into a functional and user-friendly interface." />
            <Project demo='https://projects.kaviru.me/Jake-Elwood/'  githublink='https://github.com/KaviruN/Jake-Elwood' img={jakeElwood} title="Jake & Elwood" sub="Frontend Focuse" description="This repository contains my learning projects. It is a collection of simple projects and experiments created while learning new programming concepts and technologies." />
            {/* <Project demo='' githublink='' img={} title="" sub="Frontend Focuse" description="" /> */}
        </section>
    )
}

export default Projects;