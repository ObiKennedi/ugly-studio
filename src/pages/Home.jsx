import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import ValueProposition from "../components/ValueProposition"
import GallerySection from "../components/GallerySection"
import ContactForm from "../components/ContactForm"

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutSection showButton={true} />
            <ValueProposition />
            <ServicesSection />
            <GallerySection display={6} folder="/Gallery" ext="jpg" />
            <ContactForm />
        </main>
    )
}