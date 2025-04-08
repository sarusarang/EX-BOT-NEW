import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Bot, Settings, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';



const CustomChatbots = () => {


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




    // List of features
    const features = [
        {
            icon: <MessageSquare className="h-6 w-6" />,
            title: "Automated Responses",
            description: "Handle customer inquiries 24/7 with intelligent automated responses"
        },
        {
            icon: <Bot className="h-6 w-6" />,
            title: "Smart Integration",
            description: "Seamlessly integrate with your existing business systems"
        },
        {
            icon: <Settings className="h-6 w-6" />,
            title: "Custom Solutions",
            description: "Tailored chatbot solutions for your specific business needs"
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "Personal Touch",
            description: "Maintain brand identity with personalized communication"
        }
    ];




    return (


        <section
            ref={sectionRef}
            className="relative min-h-screen w-full py-20 overflow-hidden bg-gray-50 dark:bg-black dark:via-black dark:to-background"
            id="features"
        >


            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">


                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2
                        className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-400 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        Your Customized Chatbots

                    </h2>

                    <p
                        className={`text-lg text-gray-700 dark:text-gray-300 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        Our Custom WhatsApp chatbot features are designed to automate and personalize your business communications
                    </p>
                    <div className={`mt-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        <p className="text-base">
                            These chat bots are tailored to meet specific business needs, such as answering customer inquiries, providing product recommendations,
                            handling bookings, and processing orders. By integrating with existing systems, they can deliver real-time,
                            context-aware responses, making communication more efficient and engaging for users.
                        </p>
                    </div>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`group p-8 rounded-2xl relative transition-all duration-700 delay-[${index * 200
                                }ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                            }}
                        >
                            {/* Background and border effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white dark:from-green-950/40 dark:to-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 border border-green-200 dark:border-green-500/20 rounded-2xl group-hover:border-green-300 dark:group-hover:border-green-500/40 transition-all duration-500"></div>
                            <div className="absolute inset-0 backdrop-blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-500/10 flex items-center justify-center mb-6 text-green-600 dark:text-green-500 group-hover:scale-110 group-hover:bg-green-200 dark:group-hover:bg-green-500/20 transition-all duration-500">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white/90 transition-colors duration-300 mb-6">
                                    {feature.description}
                                </p>

                                {/* Hidden learn more link that appears on hover */}
                                <div className="flex items-center text-green-600 dark:text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-sm font-medium">Learn more</span>
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>

                            {/* Animated corner accent */}
                            <div className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] border-r-[24px] border-t-green-400 dark:border-t-green-500/40 border-r-transparent rounded-tr-md"></div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Added CTA section with animation */}
                <div className={`mt-16 text-center transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>

                        <Link to={'/pricing'}>
                            <Button
                                className="group hover:cursor-pointer relative rounded-lg px-6 py-3 text-lg overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 border-none transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%)] bg-[length:250%_250%] hover:bg-[position:100%_100%] transition-[background-position] duration-1000"></div>
                                <div className="relative flex items-center">
                                    <CheckCircle className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                                    <span>Get Started with Customized Solutions</span>
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </Button>
                        </Link>

                    </div>
                </div>


            </div>
        </section>
    );
};

export default CustomChatbots;
