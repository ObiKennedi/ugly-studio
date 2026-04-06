import "../styles/AboutSection.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutSection({ showButton }) {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const navigate = useNavigate();

    return (
        <section data-aos="fade-up" className="about-section">
            <div className="about-text">
                <h1>What is Ugly Studios?</h1>
                <div>
                    <p>Ugly Studios is a full-service creative and digital solutions company dedicated to helping brands build, grow, and maintain a strong visual and online presence.</p>
                    <p>With expertise in videography and photography, Ugly Studios captures compelling visuals that communicate brand stories with clarity and impact. Beyond production, the company provides a wide range of services including graphic design, brand identity development, web development, and social media management.</p>
                    <p>Ugly Studios works closely with businesses to handle the creative and marketing side of their operations — from content creation to digital campaigns — allowing clients to focus fully on their core production and business activities.</p>
                    <p>By combining creativity, strategy, and technology, Ugly Studios delivers solutions that not only look good but also drive engagement, visibility, and growth.</p>
                </div>
                {showButton && (
                    <button
                        className="read-more-btn"
                        onClick={() => navigate("/about")}
                    >Read More</button>
                )}
            </div>
            <div className="about-image">
                <img src="/logo.png" alt="about" />
            </div>
        </section>
    )
}