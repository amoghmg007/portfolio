import { Navbar } from "@/components/ui/Navbar";
import { GlobalBackgroundCanvas } from "@/components/ui/GlobalBackgroundCanvas";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { ProfileOverview } from "@/components/sections/ProfileOverview";
import { TechnicalMatrix } from "@/components/sections/TechnicalMatrix";
import { ProjectArsenal } from "@/components/sections/ProjectArsenal";
import { NeuralTimeline } from "@/components/sections/NeuralTimeline";
import { ContactProtocol } from "@/components/sections/ContactProtocol";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <GlobalBackgroundCanvas />
      <main className="relative z-10 overflow-x-hidden">
        <Hero />
        <CinematicReveal />
        <ProfileOverview />
        <TechnicalMatrix />
        <ProjectArsenal />
        <NeuralTimeline />
        <ContactProtocol />
      </main>
      <Footer />
    </>
  );
}
