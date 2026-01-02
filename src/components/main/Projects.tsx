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
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
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
                <ProjectCard
                    src="/simple-v2.png"
                    title="Simple Website Builder"
                    description="Yapay zeka destekli modern web sitesi oluşturucu. Şirketlerin kullanıcı arayüzlerini birlikte oluşturma şeklini değiştirir."
                    link="https://simple-two-ruby.vercel.app/"
                    tags={["Next.js", "AI", "SaaS"]}
                />
                <ProjectCard
                    src="/moop-v2.png"
                    title="Moop Productivity"
                    description="Üretkenliğinizi artırmak ve iş akışınızı düzenlemek için tasarlanmış modern bir SaaS platformu."
                    link="https://moop-five.vercel.app/"
                    tags={["React", "SaaS", "Productivity"]}
                />
                <ProjectCard
                    src="/beast-v2.png"
                    title="The Beast Dashboard"
                    description="Kapsamlı ve özelleştirilebilir bir yönetim paneli ve dashboard çözümü. Veri analizi ve raporlama için ideal."
                    link="https://beast-rho.vercel.app/admin/default"
                    tags={["React", "Dashboard", "Admin Panel"]}
                />
            </div>
        </div>
    );
};

export default Projects;
