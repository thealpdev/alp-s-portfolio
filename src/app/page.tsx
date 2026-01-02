import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Services from "@/components/main/Services";
import Experience from "@/components/main/Experience";
import Contact from "@/components/main/Contact";
import Image from "next/image";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Services />
        <Experience />
        <Contact />
        <Footer />

      </div>
    </main>
  );
}
