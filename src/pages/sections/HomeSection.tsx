import { TypeAnimation } from "react-type-animation";
import React from "react";

export const HomeSection = () => {
    const imagePath = require("../../stories/assets/Desktop.png");
    return (
        <div
            id="home"
            className="relative w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center gap-2.5"
            style={{ backgroundImage: `url(${imagePath})` }}
        >
            <div className="absolute inset-0 bg-[#454961] opacity-65"></div>
            <h1 className="relative text-center text-white text-4xl sm:text-5xl lg:text-6xl font-normal font-['Martian Mono']">
                Hi, I’m Francisco Calveyra,
                <TypeAnimation
                    sequence={[
                        "a Software Engineering Student",
                        "a Software Developer",
                        "a passionate learner",
                        "a Game Developer",
                        "a problem solver",
                        "a team player",
                        "a quick learner",
                        "a hard worker",
                        "a good person",
                    ]}
                    wrapper="span"
                    speed={300}
                    deletionSpeed={50}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                />
            </h1>
        </div>
    );
};