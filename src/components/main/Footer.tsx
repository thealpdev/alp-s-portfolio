import React from "react";
import {
    Github,
    Instagram,
    Linkedin,
    Twitter,
    Youtube
} from "lucide-react";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20] relative">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-col sm:flex-row items-center justify-around flex-wrap gap-6 sm:gap-4 px-4 sm:px-0">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-sm sm:text-base">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer text-sm">
                            <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="ml-[6px]">Youtube</span>
                        </p>
                        <a href="https://github.com/thealpdev" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer text-sm">
                            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="ml-[6px]">Github</span>
                        </a>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer text-sm">
                            <span className="ml-[6px]">Discord</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-sm sm:text-base">Social Media</div>
                        <a href="https://www.linkedin.com/in/kemal-alp-801074305/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer text-sm">
                            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="ml-[6px]">Linkedin</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-sm sm:text-base">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer text-sm">
                            <span className="ml-[6px]">Learning about me</span>
                        </p>
                        <a href="mailto:thealpdev@gmail.com" className="flex flex-row items-center my-[15px] cursor-pointer text-sm">
                            <span className="ml-[6px]">thealpdev@gmail.com</span>
                        </a>
                    </div>
                </div>

                <div className="mb-[20px] text-xs sm:text-sm text-center px-4">
                    &copy; Alp Dev 2025 Inc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
