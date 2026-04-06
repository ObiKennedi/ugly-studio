import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from "react-icons/fa";
import "../styles/SocialSection.scss";

export default function SocialSection() {
    return (
        <section className="social">
            <div className="container">
                <h2>Follow Us</h2>
                <p>Follow us on social media to stay updated with our latest work.</p>
                <div className="socials">
                    <a href="#"><FaFacebook size={20} /></a>
                    <a href="#"><FaInstagram size={20} /></a>
                    <a href="#"><FaTwitter size={20} /></a>
                    <a href="#"><FaLinkedin size={20} /></a>
                </div>
            </div>
        </section>
    );
}