import "../styles/ServiceSection.scss";
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
import { NavLink } from "react-router-dom";

export default function Services() {
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
            description: "Cinematic cuts, motion graphics & full post-production"
        },
        {
            id: "photography",
            title: "Photography",
            icon: Camera,
            description: "Studio & location shoots for brands & products"
        },
        {
            id: "full-set-production",
            title: "Full Set Production",
            icon: Clapperboard,
            description: "End-to-end video production from concept to delivery"
        },
        {
            id: "social-media",
            title: "Social Media Management",
            icon: Share2,
            description: "Content strategy, posting & audience growth"
        },
        {
            id: "web-development",
            title: "Web Development",
            icon: Code2,
            description: "Modern, fast & responsive websites"
        },
        {
            id: "graphics-brand",
            title: "Graphics & Brand Identity",
            icon: Palette,
            description: "Logos, brand systems & visual identity curation"
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="services-container">
                <div className="section-header" data-aos="fade-up">
                    <h1>Services</h1>
                    <p className="subtitle">We make ugly things look good — and good things look unforgettable.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="service-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 80}
                            >
                                <div className="service-icon">
                                    <IconComponent
                                        size={68}
                                        strokeWidth={1.6}
                                        className="service-icon-svg"
                                    />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="view-all" data-aos="fade-up" data-aos-delay="400">
                    <NavLink to="/services" className="view-all-btn">
                        View All Services & Packages
                    </NavLink>
                </div>
            </div>
        </section>
    );
}