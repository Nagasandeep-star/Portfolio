import { motion } from "framer-motion";

import emotion from "../../assets/projects/emotion.png";
import automation from "../../assets/projects/automation.png";
import portfolio from "../../assets/projects/portfolio.png";

const projects = [
    {
        title: "Emotion Detection Using BERT",
        image: emotion,
        description:
            "Built an NLP-based emotion classification system using BERT and Flask for accurate text emotion prediction.",
        tech: ["Python", "BERT", "Flask", "PyTorch"],
        github: "https://github.com/Nagasandeep-star/Emotion-Detection-BERT",
        demo: "#",
    },
    {
        title: "File Automation System",
        image: automation,
        description:
            "Python automation project for organizing, moving, renaming, and managing files efficiently.",
        tech: ["Python", "Automation"],
        github: "https://github.com/Nagasandeep-star/file-automation-system-python",
        demo: "#",
    },
    {
        title: "AI Portfolio Website",
        image: portfolio,
        description:
            "Modern responsive portfolio built using React, Vite, Tailwind CSS, and Framer Motion.",
        tech: ["React", "Vite", "CSS"],
        github: "https://github.com/Nagasandeep-star",
        demo: "#",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-slate-950 py-24 px-8"
        >
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold text-center text-white mb-20">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-10">

                    {projects.map((project, index) => (

                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card overflow-hidden"
                        >

                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 leading-7">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-6">

                                    {project.tech.map((item) => (

                                        <span
                                            key={item}
                                            className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm"
                                        >
                                            {item}
                                        </span>

                                    ))}

                                </div>

                                <div className="flex gap-4 mt-8">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-cyan-500 px-4 py-2 rounded-lg"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        className="border border-cyan-500 px-4 py-2 rounded-lg"
                                    >
                                        Demo
                                    </a>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;