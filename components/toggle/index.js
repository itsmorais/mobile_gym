import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark-theme", savedTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark-theme", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            style={{
                
                padding: "5px 10px",
                color: "var(primary-color)",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                zIndex: 1100,
            }}
        >
            {theme === "light" ? <FiMoon/> : <FiSun/>}
        </button>
    );
}
