import Project from './Project';
import nexcent from './assets/nexcent.png';
import jakeElwood from './assets/jake&elwood.png';
import scrollAnimations from './assets/scroll-animations.png';
import livingTheSimpleLife from './assets/living-the-simple-life.png';
import qrGenerator from './assets/qrgenerator.png';
import todo from './assets/todo.png';
import wifihack from './assets/wifihack.png';

function Projects() {
    return (
        <section className="projects">
            <Project demo='https://projects.kaviru.me/nexcent/' githublink='https://github.com/KaviruN/nexcent' img={nexcent} title="nexcent" sub="Frontend Focuse" description="The Nexcent project is a front-end application built using React and TypeScript, inspired by a free Figma template. It aims to transform design concepts into a functional and user-friendly interface." />
            <Project demo='https://projects.kaviru.me/Jake-Elwood/' githublink='https://github.com/KaviruN/Jake-Elwood' img={jakeElwood} title="Jake & Elwood" sub="Frontend Focuse" description="This repository contains my learning projects. It is a collection of simple projects and experiments created while learning new programming concepts and technologies." />
            <Project
                demo='https://projects.kaviru.me/scroll-animations/'
                githublink='https://github.com/KaviruN/scroll-animations'
                img={scrollAnimations}
                title="scroll-animations"
                sub="Frontend Focused"
                description={
                    <>
                        This project provides a minimal setup to get React working in Vite with HMR and some ESLint rules. It focuses on implementing smooth scroll animations using modern web technologies. Inspired by the hover animation in the famous <a href="https://huly.io/" target="_blank" rel="noopener noreferrer">huly.io</a>.
                    </>
                }
            />
            <Project demo='https://projects.kaviru.me/living-the-simple-life/' githublink='https://github.com/KaviruN/living-the-simple-life' img={livingTheSimpleLife} title="living the simple life" sub="Frontend Focuse" description="This project is an early step in my development journey, created to explore project structure and basic version control with GitHub as I begin learning best practices." />
            <Project demo='https://projects.kaviru.me/qrcode/' githublink='https://github.com/KaviruN/qrcode' img={qrGenerator} title="Qr Maker" sub="Frontend Focuse" description="I built this just for fun and as a way to experiment with UI design and QR code generation." />
            <Project demo='https://todo.kaviru.me/' githublink='https://github.com/KaviruN/toDoApp' img={todo} title="Todo App" sub="Backend Focuse" description="This is a full-stack Todo application built with Django for the backend and React with TypeScript for the frontend. In this project, I practiced combining REST framework , API for authentication and real time update." />
            <Project demo='https://github.com/EthicalHackingLK/WIFI-Hack' githublink='https://github.com/EthicalHackingLK/WIFI-Hack' img={wifihack} title="WIFI Pass" sub="Python" description="This is an old project from my early coding days. It includes a Windows tool that could retrieve saved WiFi passwords (without admin rights).Please keep in mind that the code and structure may not reflect my current skills or best practices, but I’m leaving it here for nostalgia and as a record of my learning journey.(For educational purposes only. Use responsibly.)" />
        </section>
    )
}

export default Projects;