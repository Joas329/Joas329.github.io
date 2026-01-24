import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", to: "/#home" },
    { name: "Skills", to: "/#skills" },
    { name: "Experience", to: "/#experience" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (location.pathname !== "/") return;

        const hash = location.hash?.replace("#", "");
        if (!hash) return;

        requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        });
    }, [location.pathname, location.hash]);

    const handleNavClick = (to) => (e) => {
        // If it's a normal route like /projects, let <Link> handle it
        if (!to.includes("#")) {
        setIsMenuOpen(false);
        return;
        }

        e.preventDefault();
        setIsMenuOpen(false);

        const [path, hash] = to.split("#");
        const id = hash;

        // If we're not on Home, navigate to it with hash
        if (location.pathname !== "/") {
        navigate(`/${id ? `#${id}` : ""}`);
        return;
        }

        // Already on Home => scroll directly
        if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        // keep URL hash in sync
        window.history.replaceState(null, "", `#${id}`);
        }
    };

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <Link
                    to="/#home"
                    className="text-xl font-bold text-primary flex items-center"
                    onClick={handleNavClick("/#home")}
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Joaquin Philco</span>{" "}
                        Portfolio
                    </span>
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex space-x-8">
                {navItems.map((item) =>
                    item.to.startsWith("/") ? (
                    <Link
                        key={item.name}
                        to={item.to}
                        onClick={handleNavClick(item.to)}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                        {item.name}
                    </Link>
                    ) : null
                )}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile menu */}
                <div
                className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                >
                <div className="flex flex-col items-center space-y-8 text-xl">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.to}
                        onClick={handleNavClick(item.to)}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                        {item.name}
                    </Link>
                    ))}
                </div>
                    </div>
            </div>
        </nav>
    );
};
