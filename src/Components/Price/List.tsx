import { useState } from 'react';
import { BlurFade } from '../magicui/blur-fade';

export default function List() {


    const [hoveredIndex, setHoveredIndex] = useState<Number>();

    //  Pricing Data 
    const pricingPlans = [
        {
            name: "Signal",
            price: "₹15,000",
            period: "/Year",
            gst: "+ GST",
            setupFee: "₹499",
            monthlyCharge: "Minimum ₹500",
            features: [
                "Limited Access",
                "Unlimited WhatsApp-Flows",
                "1 Connected Account",
                "5000 Subscribers",
                "Bot Conditional Reply",
                "Broadcast",
                "Live chat",
                "Input Flow Campaign",
                "1000 Sequence Campaign",
                "3 WhatsApp Catalogues"
            ],
            popular: false,
            icon: "📲"
        },
        {
            name: "Light",
            price: "₹20,000",
            period: "/Year",
            gst: "+ GST",
            setupFee: "₹499",
            monthlyCharge: "Minimum ₹500",
            features: [
                "Limited Feature Access",
                "Unlimited WhatsApp-Flows",
                "3 Connect Account",
                "Bot AI Reply(Limited)",
                "10000 Subscribers",
                "Bot Conditional Reply",
                "Broadcast",
                "Input Flow Campaign",
                "Live Chat",
                "Live Chat Advanced",
                "5000 Sequence Campaign",
                "WhatsApp Embedded Signup",
                "05 WhatsApp Carousel Templates",
                "5 WhatsApp-Catalogs",
                "Integration Telegram"
            ],
            popular: true,
            icon: "💡"
        },
        {
            name: "Bright",
            price: "₹25,000",
            period: "/Year",
            gst: "+ GST",
            setupFee: "₹499",
            monthlyCharge: "Minimum ₹500",
            features: [
                "Access to all features",
                "Unlimited WhatsApp-Flows",
                "05 Connect Account",
                "Bot AI Reply(Limited)",
                "25000 Subscribers",
                "Bot Conditional Reply",
                "Broadcast",
                "Input-Flow Campaign",
                "Live Chat",
                "Live Chat-Advanced",
                "Live Chat-Translator",
                "10000 Sequence Campaign",
                "WhatsApp Embedded Signup",
                "10 WhatsApp Carousel Templates",
                "10 WhatsApp-Catalogs",
                "Integration Telegram/Facebook/Instagram",
                "Integration-Google Account",
                "Shopify Integration",
                "API Developer"
            ],
            popular: false,
            icon: "✨"
        }
    ];

    return (

        <div className="min-h-screen pt-12 sm:pt-24 px-4 transition-all duration-500 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-black text-gray-800 dark:text-white">

            <BlurFade delay={0.75} inView>


                <div className="max-w-7xl mx-auto">


                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">


                        {pricingPlans.map((plan, index) => (


                            <div
                                key={index}
                                className={`relative transition-all duration-500 ${hoveredIndex === index ? 'lg:-translate-y-4' : ''}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(undefined)}
                            >

                                {/* Card */}
                                <div className={`relative h-full rounded-3xl overflow-hidden transition-colors duration-300 ${plan.popular
                                    ? 'bg-white dark:bg-gradient-to-b dark:from-green-900 dark:to-black'
                                    : 'bg-white dark:bg-gradient-to-b dark:from-black dark:to-black'
                                    } shadow-xl shadow-green-500/20 ring-1 ${plan.popular ? 'ring-green-500/50' : 'ring-gray-200 dark:ring-gray-700'
                                    }`}>


                                    {/* Popular badge */}
                                    {plan.popular && (
                                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-green-500 blur-md opacity-50 rounded-full"></div>
                                                <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-1 px-4 rounded-full font-medium">
                                                    Most Popular
                                                </div>
                                            </div>
                                        </div>
                                    )}



                                    {/* Green glow effect for popular plan */}
                                    {plan.popular && (
                                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-2/3 h-40 bg-green-500 rounded-full blur-3xl opacity-20"></div>
                                    )}


                                    <div className="p-6 md:p-8">


                                        {/* Plan name & icon */}
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className={`text-2xl font-bold ${plan.popular ? 'text-green-500' : ''}`}>
                                                {plan.name}
                                            </h3>

                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${plan.popular
                                                ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white'
                                                : 'bg-green-50 dark:bg-gray-700 text-green-600 dark:text-green-500'
                                                }`}>
                                                <span className="text-xl">{plan.icon}</span>
                                            </div>
                                        </div>


                                        {/* Price */}
                                        <div className="flex items-baseline mb-8">
                                            <span className={`text-4xl md:text-5xl font-extrabold ${plan.popular ? 'text-green-500' : ''}`}>
                                                {plan.price}
                                            </span>
                                            <span className="ml-1 text-lg md:text-xl font-medium">+GST{plan.period}</span>
                                        </div>


                                        {/* <div className="text-sm text-gray-600 dark:text-gray-400 mb-8">{plan.gst}</div> */}



                                        {/* Features */}
                                        <div className="mb-8 space-y-3">
                                            {plan.features.map((feature, featureIndex) => (
                                                <div
                                                    key={featureIndex}
                                                    className={`flex items-start gap-3 py-1 px-2 rounded-lg transition-colors ${hoveredIndex === index && featureIndex % 2 === 0
                                                        ? 'bg-green-100 dark:bg-green-700/70'
                                                        : ''
                                                        }`}
                                                >
                                                    <div className={`flex-shrink-0 w-4 h-4 mt-0.5 rounded-full flex items-center justify-center ${plan.popular
                                                        ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                                                        : 'bg-green-500'
                                                        }`}>
                                                        <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                                                            <path d="M2.5 6L5 8.5L9.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <span className={`text-sm text-gray-700 dark:text-gray-300 ${plan.features.length > 15 ? 'leading-tight' : ''
                                                        }`}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>


                                        {/* Additional info */}
                                        <div className="grid grid-cols-2 gap-4 mb-8 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50">
                                            <div>
                                                <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Setup Fee</div>
                                                <div className={`font-bold ${plan.popular ? 'text-green-500' : ''}`}>{plan.setupFee}</div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">For setup One API</div>
                                            </div>
                                            <div>
                                                <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Monthly Service</div>
                                                <div className={`font-bold ${plan.popular ? 'text-green-500' : ''}`}>{plan.monthlyCharge}</div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">Based on tasks</div>
                                            </div>
                                        </div>


                                        {/* Button */}
                                        <a href="https://app.exapi.in/login" >
                                            <button
                                                className={`w-full relative group overflow-hidden hover:cursor-pointer ${plan.popular
                                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                                                    : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700'
                                                    } rounded-xl py-4 font-medium transition-all duration-300`}
                                            >
                                                {/* Animated circle effect */}
                                                <div className="absolute inset-0 w-full h-full">
                                                    <div className="absolute -left-4 w-16 h-16 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-150"></div>
                                                </div>

                                                <div className="relative flex items-center justify-center gap-2">
                                                    <span>Sign Up Now</span>
                                                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>
                                            </button>
                                        </a>


                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </BlurFade>

        </div>
    );
}