import { Socials } from "@/constants";
import { Github, Linkedin } from "lucide-react";
import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full max-w-7xl h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a
                    href="#about-me"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        Alp's Portfolio
                    </span>
                </a>

                <div className="w-auto h-full flex flex-row items-center justify-between ml-4 md:ml-20">
                    <div className="hidden md:flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 text-sm lg:text-base">
                        <a href="#about-me" className="cursor-pointer hover:text-purple-400 transition-colors">
                            About me
                        </a>
                        <a href="#skills" className="cursor-pointer ml-[15px] lg:ml-[20px] hover:text-purple-400 transition-colors">
                            Skills
                        </a>
                        <a href="#services" className="cursor-pointer ml-[15px] lg:ml-[20px] hover:text-purple-400 transition-colors">
                            Services
                        </a>
                        <a href="#projects" className="cursor-pointer ml-[15px] lg:ml-[20px] hover:text-purple-400 transition-colors">
                            Projects
                        </a>
                        <a href="#experience" className="cursor-pointer ml-[15px] lg:ml-[20px] hover:text-purple-400 transition-colors">
                            Experience
                        </a>
                        <a href="#contact" className="cursor-pointer ml-[15px] lg:ml-[20px] hover:text-purple-400 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    <a href="https://github.com/thealpdev" target="_blank" rel="noopener noreferrer">
                        <Github className="text-white cursor-pointer hover:text-[#b49bff]" />
                    </a>
                    <a href="https://www.linkedin.com/in/kemal-alp-801074305/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="text-white cursor-pointer hover:text-[#b49bff]" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
