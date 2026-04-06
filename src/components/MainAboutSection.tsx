import "../styles/MainServices.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    Video,
    Camera,
    Clapperboard,
    Share2,
    Code2,
    Palette
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServicesMain() {

    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic"
        });
    }, []);

    const services = [
        {
            id: "video-editing",
            title: "Video Editing",
            icon: Video,
            description: "We turn raw footage into powerful, scroll-stopping visual stories. From quick social clips to full cinematic commercials, our editing is bold, fast, and emotionally charged.",
            details: "Our process includes color grading, motion graphics, sound design, transitions, and final mastering. We work with 4K and above to deliver broadcast-quality output."
        },
        {
            id: "photography",
            title: "Photography",
            icon: Camera,
            description: "High-impact photography that captures the soul and personality of your brand. Studio, location, product, and lifestyle shoots that make your visuals stand out.",
            details: "Professional lighting, retouching, and post-processing tailored to your brand aesthetic. Perfect for e-commerce, campaigns, social media, and corporate storytelling."
        },
        {
            id: "full-set-production",
            title: "Full Set Production",
            icon: Clapperboard,
            description: "End-to-end video production. We handle scripting, directing, shooting, sound, and editing — so you don’t have to worry about a single detail.",
            details: "From pre-production planning to final delivery, we manage everything. Ideal for brand films, commercials, documentaries, and event coverage."
        },
        {
            id: "social-media",
            title: "Social Media Management",
            icon: Share2,
            description: "We create, schedule, and manage content that grows your audience and builds real engagement across Instagram, TikTok, Twitter, LinkedIn, and more.",
            details: "Content calendar creation, daily posting, community management, analytics reporting, and growth strategies that actually move the needle."
        },
        {
            id: "web-development",
            title: "Web Development",
            icon: Code2,
            description: "Modern, fast-loading, and conversion-focused websites built with clean code and beautiful design. Your online presence should work as hard as you do.",
            details: "Responsive design, SEO optimization, CMS integration, performance tuning, and ongoing maintenance. We build sites that look good and actually convert."
        },
        {
            id: "graphics-brand",
            title: "Graphics & Brand Identity",
            icon: Palette,
            description: "From logo design to complete brand systems — we create visual identities that are memorable, consistent, and scream your brand personality in the loudest way possible.",
            details: "Logo concepts, color palettes, typography, brand guidelines, social media assets, print materials, and full visual language development."
        }
    ];

    return (
        <section className="main-services-section">
            <div className="main-services-container">
                <div className="main-section-header" data-aos="fade-up">
                    <h1>Our Services</h1>
                    <p className="subtitle">
                        We don’t just deliver work — we deliver ugly-good results that make your brand impossible to ignore.
                    </p>
                </div>

                <div className="main-services-grid">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="main-service-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="service-icon">
                                    <IconComponent
                                        size={78}
                                        strokeWidth={1.5}
                                        className="service-icon-svg"
                                    />
                                </div>

                                <h3>{service.title}</h3>
                                <p className="main-description">{service.description}</p>
                                <p className="details">{service.details}</p>

                                <button className="service-btn" onClick={() => navigate("/contact")}>
                                    Discuss This Service
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}