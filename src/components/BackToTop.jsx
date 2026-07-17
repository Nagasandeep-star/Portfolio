import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
    return (
        <a
            href="#home"
            className="fixed bottom-8 right-8 bg-cyan-500 text-white p-4 rounded-full shadow-lg hover:bg-cyan-600 transition"
        >
            <FaArrowUp />
        </a>
    );
}

export default BackToTop;