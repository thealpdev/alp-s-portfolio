import { Socials } from "@/constants";
import { Github, Linkedin, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { href: "#about-me", label: "About me" },
        { href: "#skills", label: "Skills" },
        { href: "#services", label: "Services" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
    ];
    return (
        <>
            <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
                <div className="w-full max-w-7xl h-full flex flex-row items-center justify-between m-auto px-[10px]">
                    <a
                        href="#about-me"
                        className="h-auto w-auto flex flex-row items-center"
                    >
                        <span className="font-bold ml-[10px] hidden sm:block text-gray-300 text-sm sm:text-base">
                            Alp's Portfolio
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center justify-center flex-1 mx-auto">
                        <div className="flex items-center justify-between h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 text-sm lg:text-base">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="cursor-pointer hover:text-purple-400 transition-colors ml-[15px] lg:ml-[20px] first:ml-0"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex items-center justify-center text-white hover:text-purple-400 transition-colors mr-4"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Social Icons */}
                    <div className="flex flex-row gap-4 sm:gap-5">
                        <a href="https://github.com/thealpdev" target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white cursor-pointer hover:text-[#b49bff]" />
                        </a>
                        <a href="https://www.linkedin.com/in/kemal-alp-801074305/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white cursor-pointer hover:text-[#b49bff]" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed top-[65px] left-0 w-full bg-[#0d0d1f] bg-opacity-95 backdrop-blur-md z-40 md:hidden border-b border-[#7042f861] animate-in fade-in duration-200">
                    <div className="flex flex-col items-center justify-center py-6 px-4 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-3 text-gray-200 hover:text-purple-400 hover:bg-[#1a1a2e] rounded-lg transition-all duration-300 text-sm sm:text-base"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
