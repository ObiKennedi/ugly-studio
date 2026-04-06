import { useState, useEffect } from "react";
import "../styles/GallerySection.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GallerySection({ display = 12, folder = "/Gallery", ext = "jpg" }) {
    const [lightbox, setLightbox] = useState(null);

    const images = Array.from({ length: display }, (_, i) => i + 1);
    const src = (n) => `${folder}/${n}.${ext}`;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
            <section className="gallery" data-aos="fade-up">
                <div className="gallery-header">
                    <h2>Gallery<span>.</span></h2>
                    <span>{display} images</span>
                </div>

                <div className="gallery-grid">
                    {images.map((n) => (
                        <div key={n} className="gallery-card" onClick={() => setLightbox(n)}>
                            <img src={src(n)} alt={`Image ${n}`} loading="lazy" />
                            <span className="gallery-index">#{n}</span>
                        </div>
                    ))}
                </div>
            </section>

            {lightbox && (
                <div className="lightbox" onClick={() => setLightbox(null)}>
                    <img src={src(lightbox)} alt={`Image ${lightbox}`} onClick={(e) => e.stopPropagation()} />
                    <button className="lb-prev" onClick={(e) => { e.stopPropagation(); setLightbox(lightbox === 1 ? display : lightbox - 1); }}>‹</button>
                    <button className="lb-next" onClick={(e) => { e.stopPropagation(); setLightbox(lightbox === display ? 1 : lightbox + 1); }}>›</button>
                    <button className="lb-close" onClick={() => setLightbox(null)}>✕</button>
                    <span className="lb-count">{lightbox} / {display}</span>
                </div>
            )}
        </>
    );
}