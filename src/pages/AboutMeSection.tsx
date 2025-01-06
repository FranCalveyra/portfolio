import {ItemCarousel} from "../stories/ItemCarousel/index.tsx";
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
        <div className="w-full h-full relative">
            <div className="w-full h-full left-0 top-0 absolute">
                <div className="w-screen px-[293px] pt-[120px] pb-[313px] left-0 top-0 absolute bg-[#454860] justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-16 inline-flex">
                        <div className="self-stretch h-[464px] flex-col justify-start items-start gap-16 flex">
                            <div className="self-stretch text-center text-white text-[64px] font-normal font-['Martian Mono']">
                                About Me
                            </div>
                            <div className="self-stretch text-center text-white text-2xl font-normal font-['Martian Mono']">
                                I’m a 21-year-old Software Engineering student at <a href={"https://www.austral.edu.ar/"} className="font-bold">Universidad Austral</a>, currently entering my 4th year of studies. I’m passionate about programming and video games, and I thrive on creating efficient and scalable systems.<br/><br/>
                                While I specialize in backend development, I’m versatile enough to handle frontend work when needed.<br/><br/>
                                Currently, I’m an Intern at <a href={"https://www.globant.com/es"} className="font-bold">Globant</a> , where I’m honing my skills and exploring cutting-edge technologies. Recently, I’ve been diving deep into Golang and Rust, two languages that fuel my curiosity and passion for robust software development.
                            </div>
                        </div>
                        <div className="self-stretch text-center text-white text-[64px] font-normal font-['Martian Mono']">
                            Technologies I’m into
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-[164px] px-8 py-[39px] left-0 top-[856px] absolute bg-[#3a3e59] justify-start items-center gap-[34px] inline-flex">
                <ItemCarousel technologies={technologies} iconSize={86}></ItemCarousel>
            </div>
        </div>)
}