import React, { useEffect, useRef, useState } from 'react';
import {
    Bot, MessageSquare, FileText, Bookmark,
    ListTodo, ArrowRightLeft, ShoppingCart, ArrowRight
} from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';


interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
    isVisible: boolean;
}

const FeatureCard = ({ icon, title, description, index, isVisible }: FeatureCardProps) => {
    return (
        <div
            className={`relative p-6 overflow-hidden transition-all duration-700 rounded-2xl group hover:scale-[1.02] hover:-translate-y-1 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Background animations & effects - adaptive for light/dark mode */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/70 to-white/70 dark:from-green-950/40 dark:to-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border border-green-300/30 dark:border-green-500/10 rounded-2xl group-hover:border-green-500/50 dark:group-hover:border-green-500/30 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]"></div>
            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-50 dark:group-hover:opacity-80 transition-opacity duration-500"></div>

            {/* Animated accent */}
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-green-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500 group-hover:scale-150"></div>

            {/* Content */}
            <div className="relative z-10">
                <div className="w-12 h-12 mb-4 rounded-xl bg-green-100 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-500 group-hover:scale-110 group-hover:bg-green-100 dark:group-hover:bg-green-500/20 group-hover:text-green-700 dark:group-hover:text-green-400 transition-all duration-500 group-hover:rotate-3">
                    {icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed mb-5">
                    {description}
                </p>

                {/* Learn more link with animation */}
                <div className="flex items-center text-green-600 dark:text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>

            {/* Animated corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500/0 rounded-tl-md opacity-0 group-hover:opacity-100 group-hover:border-green-500/40 transition-all duration-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500/0 rounded-br-md opacity-0 group-hover:opacity-100 group-hover:border-green-500/40 transition-all duration-500"></div>
        </div>
    );
};

const PowerfulFeatures = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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

    const features = [
        {
            icon: <Bot className="h-6 w-6" />,
            title: "Bot Reply",
            description: "Responses to customer inquiries, 24/7 engagement and support, customer satisfaction, customize and adaptability. Reduce response times, consistent interaction."
        },
        {
            icon: <MessageSquare className="h-6 w-6" />,
            title: "Chat Widget",
            description: "Integrates into website, enabling real-time customer interactions, enhances user experience, instant support and answers to queries, increasing satisfaction."
        },
        {
            icon: <ArrowRight className="h-6 w-6" />,
            title: "Input Flow",
            description: "Interactive conversations by guiding customers through step-by-step input sequences. Captures specific information, answers queries, and leads users to outcome seamlessly."
        },
        {
            icon: <FileText className="h-6 w-6" />,
            title: "Message Template",
            description: "Offers businesses pre-approved, customizable message formats for seamless communication. Sending notifications, alerts, or updates, these templates ensure compliance."
        },
        {
            icon: <Bookmark className="h-6 w-6" />,
            title: "Broadcast Template",
            description: "Send personalized messages to individual & groups, efficiently share updates, promotions, and important information, reach your audience effectively."
        },
        {
            icon: <ListTodo className="h-6 w-6" />,
            title: "Sequence",
            description: "Automates customer interactions by pre-schedule or timelines. Throughout communication flows, engagement and personalized follow-ups, businesses can nurture leads."
        },
        {
            icon: <ArrowRightLeft className="h-6 w-6" />,
            title: "Whatsapp Flows",
            description: "Businesses to create customized, get customers through predefined interaction paths. Onboarding, or sales, businesses can streamline processes, boost engagement."
        },
        {
            icon: <ShoppingCart className="h-6 w-6" />,
            title: "E-Commerce Store Integrations",
            description: "Connect their online stores directly, enabling customers to browse, shop, and make purchases through chat. Simplifies the shopping experience, driving sales."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen w-full py-20 overflow-hidden dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-background"
            id="features"
        >


            {/* Enhanced Arc design with glow effect for both modes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200px] rounded-[100%]  dark:bg-black border-t-2 border-green-500/30 dark:border-green-500/30"></div>

            {/* Multi-layered glowing curve effect - light & dark modes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200px] rounded-[100%] bg-gradient-to-t from-gray-50/10 to-transparent dark:from-green-700/20 dark:to-transparent blur-xl"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[180px] rounded-[100%] bg-gradient-to-b from-gray-50/10 to-transparent dark:from-green-700/15 dark:to-transparent blur-2xl animate-pulse-slow"></div>
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[180%] h-[100px] rounded-[100%] bg-gradient-to-b from-gray-50/10 to-transparent dark:from-green-700/10 dark:to-transparent blur-3xl animate-pulse"></div>


            {/* Floating animated elements - subtle for light mode */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-green-300/10 dark:bg-green-500/5 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-300/10 dark:bg-green-500/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>


            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div
                        className={`inline-block px-4 py-1.5 mb-6 rounded-full bg-green-500/20 dark:bg-green-500/10 border border-green-500/30 dark:border-green-500/20 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`}
                    >
                        <span className="text-green-500 dark:text-green-500 text-sm font-medium">Our Feature Set</span>
                    </div>

                    <h2
                        className={`text-4xl md:text-5xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400 mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        Powerful Features In Ex Bot
                    </h2>

                    <p
                        className={`text-lg text-gray-700 dark:text-gray-300 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        Our comprehensive suite of tools designed to transform your business communication
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

                {/* Animated CTA button */}
                <div className={`mt-16 text-center transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>

                    <Link to={'/pricing'}>
                        <Button
                            className="group hover:cursor-pointer  relative rounded-full px-6 py-6 text-lg overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 border-none transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.3)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:bg-[position:100%_100%] transition-[background-position] duration-1000"></div>
                            <div className="relative flex items-center">
                                <span className="transition-transform duration-500 group-hover:translate-x-1">Explore All Features</span>
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
                            </div>
                        </Button>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default PowerfulFeatures;