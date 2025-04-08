import { useState, useEffect, useRef } from "react";
import { Menu, X, User, LogIn, Tag, Home, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const mobileNavRef = useRef<HTMLDivElement>(null);



    // Navigation items
    const navItems = [
        {
            label: "Home",
            href: "/",
            icon: <Home className="w-4 h-4" />
        },
        {
            label: "Pricing",
            href: "/pricing",
            icon: <Tag className="w-4 h-4" />
        },
        {
            label: "Login",
            href: "https://app.exapi.in/login",
            icon: <LogIn className="w-4 h-4" />
        },
        {
            label: "My Account",
            href: "https://app.exapi.in/login",
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



    // Handle clicks outside of the mobile nav to close it
    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            if (mobileNavRef.current instanceof HTMLElement  && !mobileNavRef.current.contains(event.target as Node | null)) {
                setIsOpen(false);
            }
        };

        // Handle resize to close mobile menu on desktop
        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };

    }, [isOpen]);




    return (

        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 py-3">

            <div
                className={`transition-all duration-500 ease-in-out ${isScrolled
                    ? "w-[85%] sm:w-[90%] md:w-[85%] rounded-full bg-white/80 dark:bg-black/5 backdrop-blur-lg border border-white/10 shadow-lg transform-gpu"
                    : "w-full bg-transparent transform-gpu"
                    }`}
            >
                <div className="container mx-auto px-2 sm:px-4">
                    <div className="flex items-center justify-between py-2">
                        {/* Company Logo */}
                        <div className="flex items-center justify-center">
                            <Link to={'/'} className="group">
                                <img
                                    src={"/logo-white.svg"}
                                    alt="Exbot Logo"
                                    loading="lazy"
                                    className="w-28 sm:w-36 h-10 sm:h-12 mb-1 object-contain transition-all duration-300 group-hover:scale-110 dark:hidden"
                                />
                                <img
                                    src="/dark_logo.png"
                                    alt="Exbot Logo"
                                    loading="lazy"
                                    className="w-28 sm:w-36 h-10 sm:h-12 mb-1 object-contain transition-all duration-300 group-hover:scale-110 hidden dark:block"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    className={`font-semibold hover:text-black dark:hover:text-white transition-colors flex items-center space-x-1 relative group text-primary`}
                                >
                                    <span className="ml-1">{item.label}</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            ))}
                        </nav>



                        {/* Theme Toggle & Mobile Menu */}
                        <div className="flex items-center space-x-1">

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
                            <div className="md:hidden relative">

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-800 dark:text-white relative z-50"
                                    aria-label="Toggle menu"
                                >
                                    {isOpen ? <X className="animate-fade-in" /> : <Menu className="animate-fade-in" />}
                                </Button>


                                {/* Mobile Navigation Dropdown */}
                                <div
                                    ref={mobileNavRef}
                                    className={`absolute right-0 top-full mt-2 w-64 bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top transform ${isOpen
                                        ? "opacity-100 scale-y-100"
                                        : "opacity-0 scale-y-0 pointer-events-none"
                                        }`}
                                >
                                    <div className="p-2">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.label}
                                                to={item.href}
                                                className="flex items-center space-x-3 px-4 py-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                                                onClick={() => setIsOpen(!isOpen)}
                                            >
                                                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-primary">
                                                    {item.icon}
                                                </div>
                                                <span>{item.label}</span>
                                            </Link>
                                        ))}
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;