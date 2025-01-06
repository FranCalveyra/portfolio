import React from "react";
import Navbar from "../stories/Navbar/index.tsx";
import {HomeSection} from "./sections/HomeSection.tsx";
import {AboutMeSection} from "./sections/AboutMeSection.tsx";
import {ContactMeSection} from "./sections/ContactMeSection.tsx";
import {ProjectSection} from "./sections/ProjectSection.tsx";

export const LandingPage = () => {
    let imagePath: string = require("../stories/assets/Desktop.png");
    const technologies = [
        "python", "javascript", "typescript", "docker", "github",
        "nginx", "react", "nodejs", "express", "postgresql",
        "go", "rust", "mongodb", "redis", "linux", "mysql", "html", "css", "git", "java",
        "kotlin", "gradle", "bash", "cpp", "flutter", "dart", "maven", "spring",
        "neovim", "vscode", "idea", "webstorm", "pycharm", "r", "regex", "tailwind",
        "vite", "windows"
    ];

    const projects = [
        {
            projectTitle: "Austral Map",
            projectDescription: "Web application that allows users to view the curriculum of our degree program as a graph, displaying each course and its relationships",
            projectImage: require("../stories/assets/austral-map.png"),
            projectLink: "https://sasakiimarcos.github.io/austral-map/",
            usedTechnologies: ["react", "ts", "tailwind", "firebase"]
        },
        {
            projectTitle: "Snippet-Searcher",
            projectDescription: "Series of microservices that include services for the front, back, permissions, custom LSP, databases, etc.",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "https://github.com/Al-Fajor/printscript",
            usedTechnologies: ["react", "ts", "java", "kotlin", "gradle", "maven", "docker", "nginx", "azure", "postgresql"]
        },
        {
            projectTitle: "Chess Engine",
            projectDescription: "Chess Engine written in Java, with a GUI in JavaFX. It includes some variants like Capablanca Chess and Chess960, as well as Checkers",
            projectImage: "https://private-user-images.githubusercontent.com/121242677/369442161-69970601-915e-4351-a352-25769fa017a4.png",
            projectLink: "https://chess-engine-lk8z.onrender.com",
            usedTechnologies: ["java", "gradle", "kotlin", "maven", "github"]
        },
        {
            projectTitle: "Duck Hunt",
            projectDescription: "Duck shooting game that connects to a React application hosted on an Amazon VM via MQTT, with data persistence handled on another Amazon VM.",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "#projects",
            usedTechnologies: ["react", "js", "mongodb", "mqtt", "aws", "arduino", "cpp"]
        },
        {
            projectTitle: "RPL Clone",
            projectDescription: "Series of microservices which try to replicate the RPL page of FIUBA, including a web application, a backend, and a database",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "https://github.com/WillyTonkas/rpl-service",
            usedTechnologies: ["golang", "react", "ts", "postgresql", "docker", "github"]
        },
        {
            projectTitle: "Trippy",
            projectDescription: "Transport Application assignment for Interaction Design at Universidad Austral",
            projectImage: require("../stories/assets/trippy-logo.png"),
            projectLink: "https://francalveyra.github.io/trippy/",
            usedTechnologies: ["react", "ts", "tailwind", "figma"]
        },
        {
            projectTitle: "Home Cooking",
            projectDescription: "Recipe Sharing Web Application for Laboratory II course at Universidad Austral",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "#projects",
            usedTechnologies: ["react", "ts", "tailwind", "java", "gradle", "spring", "postgresql"]
        },
        {
            projectTitle: "Portfolio",
            projectDescription: "This current portfolio, built with React, TypeScript and Tailwind",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "https://francalveyra.github.io/",
            usedTechnologies: ["react", "ts", "tailwind", "github"]
        }
    ];

    return (
        <div className="w-screen">
            <Navbar />
            <HomeSection />
            <AboutMeSection technologies={technologies} />
            <ProjectSection projects={projects} />
            <ContactMeSection />
        </div>
    );
};
