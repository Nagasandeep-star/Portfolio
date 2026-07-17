import { motion } from "framer-motion";
import {
    FaPython,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";

import {
    SiFlask,
    SiMongodb,
    SiPytorch,
    SiTensorflow,
    SiJavascript,
} from "react-icons/si";

const skills = [
    { name: "Python", icon: <FaPython />, level: 95 },
    { name: "React", icon: <FaReact />, level: 90 },
    { name: "Flask", icon: <SiFlask />, level: 90 },
    { name: "Node.js", icon: <FaNodeJs />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, level: 80 },
    { name: "PyTorch", icon: <SiPytorch />, level: 90 },
    { name: "TensorFlow", icon: <SiTensorflow />, level: 80 },
    { name: "JavaScript", icon: <SiJavascript />, level: 85 },
    { name: "HTML", icon: <FaHtml5 />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt />, level: 90 },
    { name: "Git", icon: <FaGitAlt />, level: 90 },
    { name: "GitHub", icon: <FaGithub />, level: 90 },
];

function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen bg-slate-900 py-24 px-8"
        >
            <div className="max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    className="text-5xl font-bold text-center text-white mb-20"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {skills.map((skill, index) => (

                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * .05 }}
                            className="glass-card p-6"
                        >

                            <div className="flex justify-between items-center mb-4">

                                <div className="flex items-center gap-4">

                                    <div className="text-4xl text-cyan-400">

                                        {skill.icon}

                                    </div>

                                    <h3 className="text-xl text-white">

                                        {skill.name}

                                    </h3>

                                </div>

                                <span className="text-cyan-400">

                                    {skill.level}%

                                </span>

                            </div>

                            <div className="w-full bg-slate-700 rounded-full h-3">

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1 }}
                                    className="bg-cyan-400 h-3 rounded-full"
                                />

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;

<div className="mt-20 text-center">

    <h3 className="text-4xl text-white font-bold mb-10">
        Technologies I Use
    </h3>

    <div className="flex flex-wrap justify-center gap-5">

        {[
            "Python",
            "React",
            "Flask",
            "PyTorch",
            "MongoDB",
            "Git",
            "GitHub",
            "VS Code",
            "REST API",
            "Machine Learning",
            "NLP",
            "BERT"
        ].map((tech) => (

            <span
                key={tech}
                className="glass-card px-6 py-3 text-cyan-400 font-semibold"
            >
                {tech}
            </span>

        ))}

    </div>

</div>