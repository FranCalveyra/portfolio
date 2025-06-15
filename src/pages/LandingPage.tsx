import React from "react";
import Navbar from "../components/Navbar/index.tsx";
import {HomeSection} from "./sections/HomeSection.tsx";
import {AboutMeSection} from "./sections/AboutMeSection.tsx";
import {ContactMeSection} from "./sections/ContactMeSection.tsx";
import {ProjectSection} from "./sections/ProjectSection.tsx";

export const LandingPage = () => {
    return (
        <div className="w-full font-body">
            <Navbar />
            <HomeSection />
            <AboutMeSection />
            <ProjectSection />
            <ContactMeSection />
        </div>
    );
};
