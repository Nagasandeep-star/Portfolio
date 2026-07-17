function Button({ children, href, primary = false }) {
    return (
        <a
            href={href}
            className={`px-6 py-3 rounded-xl transition ${primary
                    ? "bg-cyan-500 hover:bg-cyan-600"
                    : "border border-cyan-500 hover:bg-cyan-500"
                }`}
        >
            {children}
        </a>
    );
}

export default Button;
<Button href="/resume.pdf" primary>
    Download Resume
</Button>