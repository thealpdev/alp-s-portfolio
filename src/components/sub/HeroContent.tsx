"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/lib/motion";
import { SparklesIcon } from "lucide-react";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] rounded-full flex items-center justify-center bg-[#0d0d1f]/50 shadow-lg shadow-[#2a0e61]/50 backdrop-blur-md w-fit"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px] text-gray-300 font-medium">
                        Frontend Developer Portfolio
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto leading-tight"
                >
                    <span>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            the best{" "}
                        </span>
                        project experience
                    </span>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m Kemal Alp, a specialized Frontend Developer with over 6 years of experience.
                    Working as a freelancer, I craft responsive, high-performance web applications
                    and deliver seamless digital experiences using the latest technologies.
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 border border-white/20 hover:border-white/40 shadow-lg shadow-purple-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 active:scale-95 z-50"
                >
                    <a href="#skills" className="w-full h-full block">
                        Learn More!
                    </a>
                </motion.div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/alp-s-portfolio/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
