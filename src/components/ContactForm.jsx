import { Mail, Phone, MapPin, Send } from "lucide-react";
import "../styles/ContactForm.scss";
import { useState } from "react";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult("Sending...");

        const form = e.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "84ec78c3-25cc-4144-9691-fbbcb2f13214");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("✅ Message sent successfully!");
                form.reset();
            } else {
                setResult("❌ Something went wrong. Please try again.");
            }
        } catch (error) {
            setResult("❌ Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <div className="info-links">
                    <p>
                        <a href="mailto:contact@uglystudios.org">
                            <Mail /> contact@uglystudios.org
                        </a>
                    </p>
                    <p>
                        <a href="tel:+2348031234567">
                            <Phone /> +234 803 123 4567
                        </a>
                    </p>
                    <p>
                        <a href="#">
                            <MapPin /> Tetlow Road, Owerri, Imo State, Nigeria
                        </a>
                    </p>
                </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" name="name" placeholder=" " required />
                    <label>Your Name</label>
                </div>

                <div className="input-group">
                    <input type="email" name="email" placeholder=" " required />
                    <label>Your Email</label>
                </div>

                <div className="input-group">
                    <textarea
                        name="message"
                        placeholder=" "
                        required
                        rows={5}
                    />
                    <label>Your Message</label>
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                    <Send size={18} className="btn-icon" />
                </button>
                {result && (
                    <div className={`result-message ${result.includes("✅") ? "success" : "error"}`}>
                        {result}
                    </div>
                )}
            </form>
        </section>
    )
}

export default ContactForm