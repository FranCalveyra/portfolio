import React from "react";
import { TechIcon } from "../../stories/TechIcon/TechIcon.tsx";

export const ContactMeSection = () =>{
    return (
        <div id="contact"
             className="w-screen px-4 sm:px-8 lg:px-16 pt-16 pb-32 bg-[#454860] flex flex-col items-center gap-8 sm:gap-16">
            <h1 className="text-center text-white text-4xl sm:text-5xl lg:text-6xl font-normal font-['Martian Mono']">
                Contact Me
            </h1>
            <p className="text-center text-white text-lg sm:text-xl lg:text-2xl font-normal font-['Martian Mono'] flex flex-wrap justify-center items-center gap-2">
                I’d love to hear from you! Feel free to reach out to me via email at{' '}
                <a href="mailto:franciscocalveyra24@gmail.com"
                   className="inline-flex items-center font-bold underline gap-2">
                    <TechIcon technology="gmail" size={64}/>
                </a>or connect with me on{' '}
                <a href="https://linkedin.com/in/francisco-calveyra"
                   className="inline-flex items-center font-bold underline gap-2">
                    <TechIcon technology="linkedin" size={64}/>
                </a>
            </p>
            <p className="text-center text-white text-lg sm:text-xl lg:text-2xl font-normal font-['Martian Mono'] flex flex-wrap justify-center items-center gap-2">
                You can also check my{' '}
                <a href="https://www.github.com/FranCalveyra"
                   className="inline-flex items-center font-bold underline gap-2">
                    <TechIcon technology="github" size={64}/>
                </a> to see what I’ve been up to lately!
            </p>
        </div>
    )
}