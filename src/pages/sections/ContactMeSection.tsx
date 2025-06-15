import React from "react";

export const ContactMeSection = () => {
    return (
        <section id="contact" className="w-full bg-surface py-16">
            <div className="max-w-xl mx-auto text-center px-4">
                <h2 className="text-3xl font-heading text-primary mb-4">Contact Me</h2>
                <p className="text-text mb-6">I'd love to connect with you!</p>
                <div className="flex justify-center space-x-6">
                    <a href="mailto:franciscocalveyra24@gmail.com" className="opacity-75 hover:opacity-100">
                        <img src="https://skillicons.dev/icons?i=gmail" alt="Email" className="w-8 h-8" />
                    </a>
                    <a href="https://linkedin.com/in/francisco-calveyra" className="opacity-75 hover:opacity-100">
                        <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="w-8 h-8" />
                    </a>
                    <a href="https://github.com/FranCalveyra" className="opacity-75 hover:opacity-100">
                        <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </section>
    );
};