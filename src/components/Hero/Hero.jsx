import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDownload,
    FaEye
} from "react-icons/fa";

import { motion } from "framer-motion";
function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-xl mb-3">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-6xl font-extrabold leading-tight">
                        Thiruveedula
                        <br />
                        Naga Sandeep
                    </h1>

                    <div className="text-2xl mt-6 text-cyan-400 font-semibold">
                        AI Engineer • Machine Learning Developer • Full Stack Developer
                    </div>

                    <p className="mt-8 text-lg text-gray-400 leading-8">
                        Passionate about Artificial Intelligence,
                        Machine Learning and building modern
                        web applications that solve real-world problems.
                    </p>

                    <div className="flex gap-4 mt-10">

                        <a
                            href="/resume.pdf"
                            download
                            className="btn-primary flex items-center gap-2"
                        >
                            <FaDownload />
                            Download Resume
                        </a>

                        <a
                            href="#projects"
                            className="btn-secondary flex items-center gap-2"
                        >
                            <FaEye />
                            View Projects
                        </a>

                    </div>

                    <div className="flex gap-6 mt-10 text-3xl">

                        <a
                            href="https://github.com/Nagasandeep-star"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/thiruveedula-naga-sandeep"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>

                        <a href="mailto:nagasandeepthiru@gmail.com">
                            <FaEnvelope />
                        </a>

                    </div>

                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    <img
                        src="/profile.jpg"
                        alt="Naga Sandeep"
                        className="w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-2xl hover:scale-105 transition duration-500"
                    />
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;