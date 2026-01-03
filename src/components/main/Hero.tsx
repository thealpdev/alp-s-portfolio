import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            <div className="absolute top-[-340px] left-0 z-[1] w-full h-full object-cover">
                <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover -z-20 opacity-60 mix-blend-screen absolute top-0"
                >
                    <source src="/alp-s-portfolio/blackhole.webm" type="video/webm" />
                </video>
            </div>
            <HeroContent />
        </div>
    );
};

export default Hero;
