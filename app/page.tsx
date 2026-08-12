import { Navbar } from "@/components/Navbar";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline/Timeline";
import { ProjectsSection } from "@/components/Projects/ProjectsSection";
import { SkillsGrid } from "@/components/Skills/SkillsGrid";
import { ContactSection } from "@/components/Contact/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <Timeline />
      <ProjectsSection />
      <SkillsGrid />
      <ContactSection />
      <Footer />
    </main>
  );
}
