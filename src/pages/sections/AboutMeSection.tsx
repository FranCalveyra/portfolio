import React from "react";
import { TechIcon, AltTechIcon } from "../../components/TechIcon/TechIcon.tsx";
import { calculateAge } from "../../utils/ageCalculator.ts";

export const AboutMeSection = () => {
    const age = calculateAge(new Date('2003-07-24'));
    const technologies = [
        "python", "go", "rust", "java", "kotlin", "dart", "typescript",
        "react", "express", "spring", "flutter", "nodejs",
        "docker", "nginx", "redis", "git", "github", "gitlab", "bash", "gradle",
        "postgresql", "mysql", "firebase",
        "neovim", "vscode", "idea", "androidstudio", "arduino",
        "tailwind", "figma",
        "azure", "aws",
        "cypress",

    ];

    const altTechnologies = [
        "https://user-images.githubusercontent.com/6718144/101553774-3bc7b000-39ad-11eb-8a6a-de2daa31bd64.png",
        "https://framerusercontent.com/images/5WNUOLDFjvpqT7O9s67mXZ8Kv3o.png?scale-down-to=512"
    ];

    return (
        <section id="about" className="w-full bg-bg py-16">
            <div className="max-w-3xl mx-auto text-center px-4">
                <h2 className="text-3xl sm:text-4xl font-heading text-primary mb-4">About Me</h2>
                <p className="text-text text-lg leading-relaxed mb-8">
                    I'm a {age}-year-old Software Engineering student at{' '}
                    <a href="https://www.austral.edu.ar/" className="font-semibold text-accent underline">
                        Universidad Austral
                    </a>
                    , passionate about programming and scalable systems. I specialize in backend development but enjoy full-stack challenges.
                </p>
                <h3 className="text-2xl font-heading text-primary mb-4">Technologies</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                    {technologies.map((tech) => (
                        <TechIcon key={tech} technology={tech} size={48} />
                    ))}
                    {altTechnologies.map((src, idx) => (
                        <AltTechIcon key={idx} technology={src} size={48} />
                    ))}
                </div>
            </div>
        </section>
    )
}