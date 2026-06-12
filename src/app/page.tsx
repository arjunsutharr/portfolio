import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Highlights } from "@/components/highlights";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Experience />
        <Divider />
        <Projects />
        <Skills />
        <Divider />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
