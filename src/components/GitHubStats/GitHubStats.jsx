function GitHubStats() {
    return (
        <section
            id="github"
            className="min-h-screen bg-slate-950 py-24 px-8"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold text-center text-white mb-16">
                    GitHub Statistics
                </h2>

                <div className="grid md:grid-cols-2 gap-10">

                    <img
                        src="https://github-readme-stats.vercel.app/api?username=Nagasandeep-star&show_icons=true&theme=tokyonight"
                        alt="GitHub Stats"
                    />

                    <img
                        src="https://github-readme-streak-stats.herokuapp.com/?user=Nagasandeep-star&theme=tokyonight"
                        alt="GitHub Streak"
                    />

                </div>

            </div>
        </section>
    );
}

export default GitHubStats;