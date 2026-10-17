import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Stats from "../components/Stats";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default function Home({ showToast }) {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Blog />
      <Contact showToast={showToast} />
    </>
  );
}
