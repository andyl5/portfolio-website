import AboutMe from "@/components/AboutMe";
import ContactFooter from "@/components/ContactFooter";
import NameHeader from "@/components/NameHeader";
import Navbar from "@/components/Navbar";
import ProfilePicture from "@/components/ProfilePicture";
import ProjectItem from "@/components/ProjectItem";
import { projects_data } from "@/data/projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <div className="m-auto w-[90%] md:w-3/4">
      <Navbar className="fixed top-0 z-10 mt-6 w-[90%] md:w-3/4" />

      <Hero className="mb-12 mt-32 flex scroll-my-32 flex-col items-center gap-4 sm:flex-row-reverse sm:items-start sm:justify-between">
        <ProfilePicture className="w-2/5" />
        <NameHeader className="w-3/5" />
      </Hero>

      <About className="mb-12 scroll-my-32">
        <AboutMe />
      </About>

      <Projects className="mb-12 scroll-my-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects_data.map((project) => (
            <div key={project.title}>
              <ProjectItem data={project} />
            </div>
          ))}
        </div>
      </Projects>

      <Contact className="mb-12 flex scroll-my-32 flex-col gap-2">
        <p>
          If you&apos;d like to discuss an opportunity or anything else, feel
          free to connect with me on LinkedIn.
        </p>
        <ContactFooter />
      </Contact>
    </div>
  );
}
