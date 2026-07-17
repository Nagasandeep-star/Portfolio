const certificates = [
    "Python Programming",
    "Machine Learning",
    "Artificial Intelligence",
    "React Development",
    "MongoDB",
    "Git & GitHub"
];

function Certificates() {
    return (
        <section
            id="certificates"
            className="min-h-screen bg-slate-950 py-24 px-8"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold text-white text-center mb-16">
                    Certifications
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {certificates.map((item) => (

                        <div
                            key={item}
                            className="glass-card p-8 text-center"
                        >

                            <h3 className="text-2xl text-cyan-400">

                                🏆

                            </h3>

                            <p className="text-white mt-5">

                                {item}

                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Certificates;