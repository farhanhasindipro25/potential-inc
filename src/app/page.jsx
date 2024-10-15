import AboutMe from "@/_libs/components/pages/root/AboutMe";
import HeroSection from "@/_libs/components/pages/root/HeroSection";
import Navbar from "@/_libs/components/pages/root/Navbar";

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)] min-w-full">
            <Navbar />
            <HeroSection />
            <AboutMe />
        </div>
    );
}
