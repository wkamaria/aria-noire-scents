import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-olive focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Collection />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
