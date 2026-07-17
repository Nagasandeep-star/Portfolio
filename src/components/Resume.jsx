function Resume() {
    return (
        <section
            id="resume"
            className="min-h-screen bg-slate-950 py-24 px-8"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold text-center text-white mb-12">
                    Resume
                </h2>

                <div className="glass-card p-6">

                    <iframe
                        src="/resume.pdf"
                        width="100%"
                        height="700"
                        title="Resume Preview"
                        className="rounded-xl"
                    />

                </div>

            </div>
        </section>
    );
}

export default Resume;