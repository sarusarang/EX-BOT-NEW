import { useState, useEffect } from "react";
import { Menu, X, User, LogIn, Tag, Home, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../../Context/ThemeContext";
import { useIsMobile } from "../../Hooks/use-mobile";
import { Link } from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isMobile = useIsMobile();
    const { theme, toggleTheme } = useTheme();


    const navItems = [
        {
            label: "About",
            href: "#about",
            icon: <Home className="w-4 h-4" />
        },
        {
            label: "Pricing",
            href: "#pricing",
            icon: <Tag className="w-4 h-4" />
        },
        {
            label: "Login",
            href: "#login",
            icon: <LogIn className="w-4 h-4" />
        },
        {
            label: "My Account",
            href: "#account",
            icon: <User className="w-4 h-4" />
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (

        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 py-3">

            <div
                className={`transition-all duration-500 ease-in-out ${isScrolled
                    ? "w-[85%] rounded-full bg-white/80 dark:bg-black/5 backdrop-blur-lg border border-white/10 shadow-lg transform-gpu"
                    : "w-full bg-transparent transform-gpu"
                    }`}
            >
                <div className="container mx-auto px-4">

                    <div className="flex items-center justify-between py-2">


                        {/* Company Logo */}
                        <div className="flex items-center justify-center">
                            <Link to={'/'} className="group">
                                <img
                                    src={"/logo-white.svg"}
                                    alt="Exbot Logo"
                                    loading="lazy"
                                    className="w-36 h-12  mb-1 object-contain transition-all duration-300 group-hover:scale-110 dark:hidden"
                                />
                                <img
                                    src="/dark_logo.png"
                                    alt="Exbot Logo"
                                    loading="lazy"
                                    className="w-36 h-12 mb-1 object-contain transition-all duration-300 group-hover:scale-110 hidden dark:block"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`font-semibold hover:text-black  dark:hover:text-white transition-colors flex items-center space-x-1 relative group text-primary`}
                                >
                                    <span className="ml-1">{item.label}</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}

                        </nav>


                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="text-gray-800 dark:text-white/80 hover:text-green-600 dark:hover:text-green-500 hover:bg-transparent transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>


                        {/* Mobile Navigation Toggle */}
                        <div className="flex items-center md:hidden">

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                className="text-gray-800 dark:text-white/80 hover:text-green-600 dark:hover:text-green-500 hover:bg-transparent transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </Button>


                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(!isOpen)}
                                className="ml-2 text-white relative z-50"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="animate-fade-in" /> : <Menu className="animate-fade-in" />}
                            </Button>


                        </div>

                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMobile && (
                        <div
                            className={`fixed inset-0 bg-black/90 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-500 ease-in-out z-40 ${isOpen
                                ? "opacity-100 pointer-events-auto"
                                : "opacity-0 pointer-events-none"
                                }`}
                        >
                            <nav className="flex flex-col space-y-8 w-full max-w-xs">
                                {navItems.map((item, index) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        style={{
                                            transitionDelay: `${100 + index * 50}ms`
                                        }}
                                        className={`text-white/90 hover:text-white transition-all duration-300 py-2 flex items-center justify-center space-x-3 text-lg transform ${isOpen
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-8 opacity-0"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className="p-2 rounded-full bg-white/5 border border-white/10">
                                            {item.icon}
                                        </div>
                                        <span>{item.label}</span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
