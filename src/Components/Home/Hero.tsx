
import { useEffect, useState, useRef } from 'react';
import { Button } from '../ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Robot3D from '../Home/Robot3D';


const HeroSection = () => {


    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);



    // Array of industries
    const industries = [
        'E-COMMERCE', 'EDUCATION', 'MANUFACTURING', 'FINANCE', 'HOSPITALITY',
        'MEDICAL', 'ENTERTAINMENT', 'TECHNOLOGY', 'REAL ESTATE',
        'CUSTOMER MANAGEMENT', '24X7 SERVICE', 'WHATSAPP',
        'FACEBOOK ADS', 'FOLLOW-UPS'
    ];



    return (

        <section
            ref={sectionRef}
            className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-background dark:to-black flex flex-col justify-center pt-24 pb-10 px-4 sm:px-6"
        >


            {/* Enhanced background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.15),rgba(255,255,255,0))]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(240,240,240,0.7))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.7))]"></div>
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-grid-white/[0.02]"></div>
            </div>


            {/* 3D Robot as background for mobile */}
            <div className="absolute inset-0 z-0 lg:hidden overflow-hidden opacity-20">
                <div className="w-full h-full scale-150 translate-y-20">
                    <Robot3D />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent"></div>
            </div>



            <div className="relative z-10 max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


                    {/* Left Column - Text Content */}
                    <div className="space-y-8">

                        <div
                            className={`flex flex-col gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                } transition-all duration-1000 ease-out`}
                        >
                            {/* Enhanced pill UI */}
                            <div className="relative group">
                                <div className="absolute -inset-0.5  rounded-full blur opacity-30 group-hover:opacity-60 transition duration-700 group-hover:duration-200"></div>
                                <div className="relative flex items-center space-x-2 bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-green-500/20 rounded-full px-4 py-2 w-fit overflow-hidden group-hover:border-green-500/40 transition-all duration-500">
                                    <div className="flex items-center gap-2">
                                        <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-green-600 dark:text-green-500 text-sm font-medium relative z-10">WhatsApp Automation for Business</span>
                                    </div>
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:bg-[position:100%_100%] transition-[background-position] duration-700"></div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Cross the Barrier of
                                    <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent"> Business</span>
                                </h1>
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-800 dark:text-white/80">
                                    With Powerful
                                </h2>
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                                    WhatsApp Automation
                                </h2>
                            </div>
                        </div>


                        {/* Enhanced features grid */}
                        <div
                            className={`grid grid-cols-2 sm:grid-cols-3 gap-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                } transition-all duration-1000 delay-300 ease-out`}
                        >
                            {industries.map((industry, index) => (
                                <div
                                    key={industry}
                                    className="group relative px-2 py-1 transition-all duration-300"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-400/10 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 ease-in-out`}></div>
                                    <div className="relative bg-white/40 dark:bg-black/40 backdrop-blur-lg border border-green-300/30 dark:border-green-500/20 rounded-lg px-3 py-2 hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-1">
                                        <span className="text-xs font-medium text-gray-700 dark:text-white/90 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                                            {industry}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Enhanced CTA Button */}
                        <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            } transition-all duration-1000 delay-500 ease-out`}>

                            <a href="tel:+918606123466" target='_blank'>
                                <Button
                                    className="group hover:cursor-pointer relative rounded-full px-6 py-6 text-lg overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 border-none transition-all duration-500"
                                >
                                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.3)_50%,transparent_75%)] bg-[length:250%_250%] hover:bg-[position:100%_100%] transition-[background-position] duration-1000"></div>
                                    <div className="relative flex items-center">
                                        <MessageCircle className="mr-2 h-5 w-5 transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-110" />
                                        <span className="transition-transform duration-500 group-hover:translate-x-1">Let's chat to know more about exbot Automation</span>
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
                                    </div>
                                </Button>
                            </a>

                        </div>

                    </div>

                    {/* Right Column - 3D Robot - Only visible on desktop */}
                    <div
                        className={`relative h-[600px] perspective-1000 hidden lg:block ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            } transition-all duration-1000 delay-300 ease-out`}
                    >
                        <div className="w-full h-full animate-float">
                            <Robot3D />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/3 bg-green-500/20 blur-[100px] rounded-full animate-pulse-slow"></div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default HeroSection