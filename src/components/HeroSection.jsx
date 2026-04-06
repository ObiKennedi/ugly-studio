import "../styles/HeroSection.scss"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    const navigate = useNavigate();

    return (
        <section className="hero-section">
            <img src="/background.png" alt="background" />
            <div data-aos="fade-up">
                <h1>Ugly Studios</h1>
                <p>Let us visualize your dreams</p>
                <div>
                    <button
                        onClick={() => navigate("/services")}
                    >Explore</button>
                    <button
                        onClick={() => navigate("/contact")}
                    >Contact</button>
                </div>
            </div>
        </section>
    )
}