import React from "react";
import Navbar from "../stories/Navbar/index.tsx";
import { HomeSection } from "./HomeSection.tsx";
import { AboutMeSection } from "./AboutMeSection.tsx";
import { ProjectSection } from "./ProjectSection.tsx";

export const LandingPage = () => {
    let imagePath: string = require("../stories/assets/Desktop.png");

    return (
        <div className="min-h-screen bg-cover bg-center absolute flex-col" style={{ backgroundImage: `url(${imagePath})` }}>
            <div className="fixed top-0 left-0 w-full z-10">
                <Navbar />
            </div>
            <HomeSection />
            <AboutMeSection />
            <ProjectSection />
        </div>
    );
};