import "../styles/Plans.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    Rocket,
    TrendingUp,
    Zap
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Plans() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic"
        });
    }, []);

    const plans = [
        {
            id: "launch",
            title: "Ugly Launch",
            subtitle: "Pre-Launch Essentials",
            price: "₦1,800,000",
            period: "one-time",
            icon: Rocket,
            popular: false,
            includes: [
                "Full Brand Identity + Logo",
                "Complete Website Development",
                "Professional Photography Session",
                "Basic Video Intro/Edit",
                "Social Media Assets Pack"
            ],
            description: "Everything you need to launch your brand online with impact."
        },
        {
            id: "momentum",
            title: "Ugly Momentum",
            subtitle: "Monthly Content Engine",
            price: "₦650,000",
            period: "/month",
            icon: TrendingUp,
            popular: true,
            includes: [
                "Social Media Management (All platforms)",
                "20 Posts + Reels per month",
                "Weekly Graphics & Visuals",
                "Campaign Planning & Execution",
                "Performance Reports + Strategy Calls"
            ],
            description: "Keep your brand loud and consistent every single week."
        },
        {
            id: "domination",
            title: "Ugly Domination",
            subtitle: "Full Brand Takeover",
            price: "₦1,200,000",
            period: "/month",
            icon: Zap,
            popular: false,
            includes: [
                "Everything in Momentum",
                "Monthly Video Editing Package",
                "Quarterly Photography Refresh",
                "Website Maintenance & Updates",
                "Full Brand Strategy Sessions",
                "Custom Campaign Production"
            ],
            description: "We run your entire digital presence like it’s our own."
        }
    ];

    return (
        <section className="plans-section">
            <div className="plans-container">
                <div className="section-header" data-aos="fade-up">
                    <h1>Plans &amp; Combos</h1>
                    <p className="subtitle">
                        Pick a ready-made Ugly package. Or we build you something even crazier.
                    </p>
                </div>

                <div className="plans-grid">
                    {plans.map((plan, index) => {
                        const IconComponent = plan.icon;
                        return (
                            <div
                                key={plan.id}
                                className={`plan-card ${plan.popular ? "popular" : ""}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                            >
                                {plan.popular && <div className="popular-badge">MOST POPULAR</div>}

                                <div className="plan-icon">
                                    <IconComponent
                                        size={72}
                                        strokeWidth={1.5}
                                        className="plan-icon-svg"
                                    />
                                </div>

                                <h3>{plan.title}</h3>
                                <p className="subtitle">{plan.subtitle}</p>

                                <div className="price">
                                    <span className="amount">{plan.price}</span>
                                    <span className="period">{plan.period}</span>
                                </div>

                                <p className="description">{plan.description}</p>

                                <ul className="includes">
                                    {plan.includes.map((item, i) => (
                                        <li key={i}>✓ {item}</li>
                                    ))}
                                </ul>

                                <NavLink to="/contact" className="plan-btn">
                                    Get This Package
                                </NavLink>
                            </div>
                        );
                    })}
                </div>

                <div className="custom-note" data-aos="fade-up">
                    <p>Need something custom? <NavLink to="/contact">Talk to us</NavLink> — we love building weird and wonderful combos.</p>
                </div>
            </div>
        </section>
    );
}