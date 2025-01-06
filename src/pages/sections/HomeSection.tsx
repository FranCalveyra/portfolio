import {TypeAnimation} from "react-type-animation";
import React from "react";

export const HomeSection = () => {
    const imagePath = require("../../stories/assets/Desktop.png");
    return (
        <div
            className="relative w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center gap-2.5"
            style={{ backgroundImage: `url(${imagePath})` }}
        >
            {/* Cover */}
            <div className="absolute inset-0 bg-[#454961] opacity-65"></div>
            <h1 className="relative text-center text-white text-[64px] font-normal font-['Martian Mono']">
                Hi, I’m Francisco Calveyra,
                <TypeAnimation
                    sequence={[
                        "a Software Engineering Student",
                        "a Software Developer",
                        "a passionate learner",
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