import {TypeAnimation} from "react-type-animation";
import React from "react";

export const HomeSection =()=>{
        return (
            <div className="w-full min-h-screen px-[59px] py-[139px] bg-[#454961]/60 justify-center items-center gap-2.5 inline-flex">
                <div className="w-full text-center text-white text-[64px] font-normal font-['Martian Mono']">
                    Hi, I’m Francisco Calveyra,
                    <TypeAnimation
                        sequence={["a Software Engineering Student", "a Software Developer", "a passionate learner"]}
                        wrapper="span"
                        speed={300}
                        deletionSpeed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
            </div>
        );
    }