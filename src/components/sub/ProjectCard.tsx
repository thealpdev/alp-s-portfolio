import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    link: string;
    tags?: string[];
}

const ProjectCard = ({ src, title, description, link, tags }: Props) => {
    return (
        <Link href={link} target="_blank" rel="noreferrer" className="block relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#1a1a2e]/60 backdrop-blur-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 z-30 cursor-pointer flex flex-col h-full">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-cover max-h-[250px] opacity-80 hover:opacity-100 transition-opacity duration-300"
            />

            <div className="relative p-4 flex flex-col flex-grow justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-white">{title}</h1>
                    <p className="mt-2 text-gray-300 text-sm leading-relaxed">{description}</p>
                </div>

                <div className="mt-4 flex flex-col gap-4">
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 text-xs font-medium text-purple-300 bg-purple-900/40 rounded-full border border-purple-500/30">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold text-sm uppercase tracking-wider hover:text-cyan-400 transition-colors pt-2">
                        Visit Project &rarr;
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
