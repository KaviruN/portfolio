import Project from './Project';
import nexcent from './assets/nexcent.png';
import jakeElwood from './assets/jake&elwood.png';
import scrollAnimations from './assets/scroll-animations.png';
import livingTheSimpleLife from './assets/living-the-simple-life.png';
import qrGenerator from './assets/qrgenerator.png';
import todo from './assets/todo.png';
import wifihack from './assets/wifihack.png';
import TurboStryke from './assets/turbostryke.png';

function Projects() {
    return (
        <section className="projects reveal" id='projects'>
            <div className="section-head">
                <p className="section-head__kicker">Portfolio</p>
                <h2 className="section-head__title">Featured Projects</h2>
            </div>
            <div className="projects__grid">
                <Project demo='https://turbo.kaviru.me/' githublink='https://github.com/KaviruN/TurboStryke' img={TurboStryke} title="Turbo Stryke" sub="Frontend Focus" description="A car-themed React experience with Three.js-inspired visuals, designed around speed, bold UI direction, and immersive presentation." />
                <Project demo='https://projects.kaviru.me/nexcent/' githublink='https://github.com/KaviruN/nexcent' img={nexcent} title="Nexcent" sub="Frontend Focus" description="A TypeScript React implementation of a Figma-based landing page with a clean and conversion-focused layout." />
                <Project demo='https://projects.kaviru.me/Jake-Elwood/' githublink='https://github.com/KaviruN/Jake-Elwood' img={jakeElwood} title="Jake and Elwood" sub="Frontend Focus" description="A curated set of learning experiments where I practiced layout systems, responsive design, and UI composition." />
                <Project
                    demo='https://projects.kaviru.me/scroll-animations/'
                    githublink='https://github.com/KaviruN/scroll-animations'
                    img={scrollAnimations}
                    title="Scroll Animations"
                    sub="Frontend Focus"
                    description={
                        <>
                            A motion-first interface prototype exploring smooth transitions and scroll-triggered effects inspired by <a href="https://huly.io/" target="_blank" rel="noopener noreferrer">huly.io</a>.
                        </>
                    }
                />
                <Project demo='https://projects.kaviru.me/living-the-simple-life/' githublink='https://github.com/KaviruN/living-the-simple-life' img={livingTheSimpleLife} title="Living the Simple Life" sub="Frontend Focus" description="An early project focused on structure, content flow, and practical version control workflow as part of my growth process." />
                <Project demo='https://projects.kaviru.me/qrcode/' githublink='https://github.com/KaviruN/qrcode' img={qrGenerator} title="QR Maker" sub="Frontend Focus" description="A fun utility project for generating QR codes with attention to usability and approachable interface design." />
                <Project demo='https://todo.kaviru.me/' githublink='https://github.com/KaviruN/toDoApp' img={todo} title="Todo App" sub="Full Stack" description="A full-stack todo application using Django REST APIs and React TypeScript frontend with authentication and realtime update workflows." />
                <Project demo='https://github.com/EthicalHackingLK/WIFI-Hack' githublink='https://github.com/EthicalHackingLK/WIFI-Hack' img={wifihack} title="WiFi Pass Tool" sub="Python" description="A legacy project from my early learning stage that demonstrates practical scripting and system-level experimentation." />
            </div>
        </section>
    )
}

export default Projects;