export const ContactMeSection = () =>{
    return (
        <div className="w-screen px-[293px] pt-[120px] pb-[313px] bg-[#454860] flex flex-col items-center gap-16">
            <h1 className="text-center text-white text-[64px] font-normal font-['Martian Mono']">
                Contact Me
            </h1>
            <p className="text-center text-white text-2xl font-normal font-['Martian Mono']">
                I’d love to hear from you! Feel free to reach out to me via email at{' '}
                <a href="mailto:franciscocalveyra24@gmail.com" className="font-bold underline">
                    francisco@example.com
                </a>
                , or connect with me on{' '}
                <a href="https://linkedin.com/in/francisco-calveyra" className="font-bold underline">
                    LinkedIn
                </a>
                .
            </p>
        </div>
    )
}