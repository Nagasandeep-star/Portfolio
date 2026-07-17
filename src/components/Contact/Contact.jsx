import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(() => {
                alert("Message sent successfully!");
                form.current.reset();
            })
            .catch(() => {
                alert("Failed to send message.");
            });
    };

    return (
        <section
            id="contact"
            className="min-h-screen bg-slate-900 py-24 px-8"
        >
            <div className="max-w-3xl mx-auto">

                <h2 className="text-5xl text-white font-bold text-center mb-16">
                    Contact Me
                </h2>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="glass-card p-10"
                >

                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="w-full p-4 rounded-lg bg-slate-800 text-white mb-6"
                    />

                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="w-full p-4 rounded-lg bg-slate-800 text-white mb-6"
                    />

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                        className="w-full p-4 rounded-lg bg-slate-800 text-white mb-6"
                    />

                    <button
                        type="submit"
                        className="btn-primary"
                    >
                        Send Message
                    </button>

                </form>

            </div>
        </section>
    );
}

export default Contact;