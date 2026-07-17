import { motion } from "framer-motion";

function About() {
    return (
        <section
            id="about"
            className="min-h-screen bg-slate-950 py-24 px-8"
        >
            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    className="text-5xl font-bold text-center text-white mb-20"
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Left Side */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        className="glass-card p-8"
                    >

                        <h3 className="text-3xl font-bold text-cyan-400 mb-6">
                            Who am I?
                        </h3>

                        <p className="text-gray-300 leading-8 text-lg">

                            I am <span className="text-cyan-400 font-bold">
                                Thiruveedula Naga Sandeep
                            </span>,
                            a final-year B.Tech Information Technology student passionate
                            about Artificial Intelligence, Machine Learning,
                            Natural Language Processing, and Full Stack Development.

                            <br /><br />

                            I enjoy solving real-world problems by building intelligent
                            applications using Python, React, Flask, PyTorch,
                            and modern web technologies.

                        </p>

                    </motion.div>

                    {/* Right Side */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        className="grid grid-cols-2 gap-6"
                    >

                        <div className="glass-card p-6 text-center">

                            <h1 className="text-5xl font-bold text-cyan-400">
                                10+
                            </h1>

                            <p className="text-gray-300 mt-3">
                                Projects
                            </p>

                        </div>

                        <div className="glass-card p-6 text-center">

                            <h1 className="text-5xl font-bold text-cyan-400">
                                8.3
                            </h1>

                            <p className="text-gray-300 mt-3">
                                CGPA
                            </p>

                        </div>

                        <div className="glass-card p-6 text-center">

                            <h1 className="text-5xl font-bold text-cyan-400">
                                AI
                            </h1>

                            <p className="text-gray-300 mt-3">
                                ML Enthusiast
                            </p>

                        </div>

                        <div className="glass-card p-6 text-center">

                            <h1 className="text-5xl font-bold text-cyan-400">
                                2027
                            </h1>

                            <p className="text-gray-300 mt-3">
                                Graduation
                            </p>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default About;