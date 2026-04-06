import "../styles/VisionStatement.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VisionStatement() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic"
        });
    }, []);

    return (
        <section className="vision-statement">
            <div className="vision-container">
                <div
                    className="vision-image"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <img
                        src="/vision.jpeg"
                        alt="Ugly Studios Vision"
                        className="breathing"
                    />
                </div>

                <div
                    className="vision-text"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <h1 data-aos="fade-right" data-aos-delay="400">
                        Why we do what we do
                    </h1>

                    <div className="vision-content">
                        <p data-aos="fade-up" data-aos-delay="500">
                            Ugly Studios envisions a world where brands are not just seen,
                            but truly experienced. We combine creativity, technology, and strategy
                            to build identities that are bold, authentic, and unforgettable.
                        </p>

                        <p data-aos="fade-up" data-aos-delay="600">
                            At the core of our vision is the commitment to becoming a trusted
                            creative and digital partner for businesses across industries.
                            We simplify the complexities of branding, content creation, and
                            digital marketing so our clients can focus on growth and innovation.
                        </p>

                        <p data-aos="fade-up" data-aos-delay="700">
                            Through continuous evolution and a deep understanding of modern
                            digital culture, we aspire to lead in shaping how stories are told —
                            creating impactful visuals, meaningful connections, and lasting
                            impressions that drive real results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}