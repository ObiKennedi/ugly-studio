import "../styles/Footer.scss";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscribed:", email);
        setEmail("");
    };

    return (
        <footer className="footer">
            <div className="container">
                {/* BRAND */}
                <div className="brand">
                    <img
                        src="/logo.png"
                        alt="Ugly Studios"
                    />

                    <p>
                        Let Ugly Studios give your brand the visual identity it deserves.
                    </p>

                    <div className="socials">
                        <a href="#"><FaFacebook size={20} /></a>
                        <a href="#"><FaInstagram size={20} /></a>
                        <a href="#"><FaTwitter size={20} /></a>
                        <a href="#"><FaLinkedin size={20} /></a>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div className="links">
                    <h4>Quick Links</h4>

                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/contact">Contact</a>
                </div>

                {/* SUBSCRIBE */}
                <div className="subscribe">
                    <h4>Subscribe</h4>
                    <p>Stay updated with our latest work.</p>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="bottom">
                <p>© {new Date().getFullYear()} Ugly Studios. All rights reserved.</p>
            </div>
        </footer>
    );
}