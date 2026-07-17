function Card({ children, className = "" }) {
    return (
        <div
            className={`glass-card p-6 rounded-2xl shadow-lg ${className}`}
        >
            {children}
        </div>
    );
}

export default Card;