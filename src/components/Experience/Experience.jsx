import { motion } from "framer-motion";

const experiences = [
    {
        role: "Software Developer Intern",
        company: "Internship",
        duration: "2025 - Present",
        description:
            "Worked on AI and Full Stack Development projects using Python, Flask, React, Machine Learning, and NLP."
    },
    {
        role: "AI/ML Projects",
        company: "Personal Projects",
        duration: "2024 - Present",
        description:
            "Developed Emotion Detection using BERT, File Automation System, and modern React applications."
    }
];

function Experience() {
    return (
        <section
            id="experience"
            className="min-h-screen bg-slate-900 py-24 px-8"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold text-white text-center mb-16">
                    Experience
                </h2>

                {experiences.map((exp, index) => (

                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        className="glass-card p-8 mb-8"
                    >

                        <h3 className="text-3xl text-cyan-400 font-bold">

                            {exp.role}

                        </h3>

                        <p className="text-gray-300 mt-2">

                            {exp.company} • {exp.duration}

                        </p>

                        <p className="text-gray-400 mt-5 leading-8">

                            {exp.description}

                        </p>

                    </motion.div>

                ))}

            </div>
        </section>
    );
}

export default Experience;