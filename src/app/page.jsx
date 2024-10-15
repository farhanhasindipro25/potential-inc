import AboutMe from "@/_libs/components/pages/root/AboutMe";
import Contact from "@/_libs/components/pages/root/Contact";
import Footer from "@/_libs/components/pages/root/Footer";
import HeroSection from "@/_libs/components/pages/root/HeroSection";
import Navbar from "@/_libs/components/pages/root/Navbar";
import Projects from "@/_libs/components/pages/root/Projects";
import Services from "@/_libs/components/pages/root/Services";
import Testimonials from "@/_libs/components/pages/root/Testimonials";

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)] min-w-full">
            <Navbar />
            <HeroSection />
            <AboutMe />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}
