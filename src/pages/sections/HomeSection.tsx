import React from "react";
import { TypeAnimation } from "react-type-animation";

export const HomeSection = () => {
    return (
        <section id="home" className="w-full h-screen flex flex-col justify-center items-center bg-surface">
            <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl font-heading text-primary mb-4">
                Hi, I'm <span className="font-semibold">Francisco Calveyra</span>
            </h1>
            <div className="text-center text-2xl sm:text-3xl md:text-4xl font-mono text-accent">
                <TypeAnimation
                    sequence={[
                        'Software Engineering Student',
                        'Full-Stack Developer',
                        'Game Developer',
                        'Problem Solver',
                        'Open Source Enthusiast'
                    ]}
                    wrapper="span"
                    className="inline-block"
                    repeat={Infinity}
                />
            </div>
        </section>
    );
};