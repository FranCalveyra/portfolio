import {ItemCarousel} from "../../stories/ItemCarousel/index.tsx";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AboutMeSection = () =>{
    const technologies = [
        "python", "javascript", "typescript", "docker", "github",
        "nginx", "react", "nodejs", "express", "postgresql",
        "go", "rust", "mongodb", "redis", "linux", "mysql", "html", "css", "git", "java",
        "kotlin", "gradle", "bash", "cpp", "flutter", "dart", "maven", "spring",
        "neovim", "vscode", "idea", "webstorm", "pycharm", "r", "regex", "tailwind",
        "vite", "windows"
    ];
    return (
        <div id="aboutme"
             className="w-screen bg-[#454860] flex flex-col items-center gap-6 p-6 pt-32">
            <h1 className="text-center text-white text-4xl sm:text-5xl lg:text-6xl font-normal font-['Martian Mono'] pb-8">
                About Me
            </h1>
            <p className="text-center text-white text-lg sm:text-xl lg:text-2xl font-normal font-['Martian Mono']">
                I’m a 21-year-old Software Engineering student at{' '}
                <a href="https://www.austral.edu.ar/" className="font-bold underline">
                    Universidad Austral
                </a>
                , currently entering my 4th year of studies. I’m passionate about
                programming and video games, and I thrive on creating efficient and scalable systems.
                <br/>
                <br/>
                While I specialize in backend development, I’m versatile enough to handle frontend work when needed.
                <br/>
                <br/>
                Currently, I’m an Intern at{' '}
                <a href="https://www.globant.com/es" className="font-bold underline">
                    Globant
                </a>
                , where I’m honing my skills and exploring cutting-edge technologies. Recently, I’ve been diving deep
                into Golang and Rust, two languages that fuel my curiosity and passion for robust software development.
            </p>
            <h2 className="text-center text-white text-4xl sm:text-5xl lg:text-6xl font-normal font-['Martian Mono'] pt-32">
                Technologies I’m into
            </h2>
            <div
                className="w-screen h-40 sm:h-48 lg:h-56 px-4 sm:px-8 py-4 sm:py-8 bg-[#3a3e59] flex items-center justify-start gap-4 sm:gap-8">
                <ItemCarousel technologies={technologies} iconSize={86}/>
            </div>
        </div>
    )
}