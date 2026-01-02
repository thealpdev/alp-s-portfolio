import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/canmarkt-new.png"
                    title="CanMarkt E-Commerce"
                    description="Profesyonel şef bıçakları, Japon santoku bıçakları ve mutfak ekipmanlarında kalite ve güvenin adresi."
                    link="https://www.canmarkt.de/tr"
                    tags={["Next.js", "Tailwind CSS", "i18n"]}
                />
                <ProjectCard
                    src="/growithagro-new.png"
                    title="Growith Agro"
                    description="Modern sera sistemleri, akıllı sulama ve sürdürülebilir tarım çözümleri sunan teknoloji platformu."
                    link="https://www.growithagro.com/"
                    tags={["React", "Leaflet Maps", "Node.js"]}
                />
                <ProjectCard
                    src="/solenza-new.png"
                    title="Solenza Luxury Furniture"
                    description="Eviniz için seçkin, lüks ve modern mobilya koleksiyonlarını sunan premium mobilya markası."
                    link="https://solenza-furniture.vercel.app/"
                    tags={["Next.js", "MySQL", "Prisma"]}
                />
            </div>
        </div>
    );
};

export default Projects;
