import { useState } from 'react';
import { BlurFade } from '../magicui/blur-fade';




export default function List() {



    const [hoveredIndex, setHoveredIndex] = useState<Number>();



    //  Pricing Data 
    const pricingPlans = [
        // {
        //     name: "Signal",
        //     price: "₹15,000",
        //     period: "/Year",
        //     gst: "+ GST",
        //     setupFee: "₹499",
        //     monthlyCharge: "Minimum ₹500",
        //     features: [
        //         "Limited Access",
        //         "Unlimited WhatsApp-Flows",
        //         "1 Connected Account",
        //         "5000 Subscribers",
        //         "Bot Conditional Reply",
        //         "Broadcast",
        //         "Live chat",
        //         "Input Flow Campaign",
        //         "1000 Sequence Campaign",
        //         "3 WhatsApp Catalogues"
        //     ],
        //     popular: false,
        //     icon: "📲"
        // },
        // {
        //     name: "Light",
        //     price: "₹20,000",
        //     period: "/Year",
        //     gst: "+ GST",
        //     setupFee: "₹499",
        //     monthlyCharge: "Minimum ₹500",
        //     features: [
        //         "Limited Feature Access",
        //         "Unlimited WhatsApp-Flows",
        //         "3 Connect Account",
        //         "Bot AI Reply(Limited)",
        //         "10000 Subscribers",
        //         "Bot Conditional Reply",
        //         "Broadcast",
        //         "Input Flow Campaign",
        //         "Live Chat",
        //         "Live Chat Advanced",
        //         "5000 Sequence Campaign",
        //         "WhatsApp Embedded Signup",
        //         "05 WhatsApp Carousel Templates",
        //         "5 WhatsApp-Catalogs",
        //         "Integration Telegram"
        //     ],
        //     popular: true,
        //     icon: "💡"
        // },
        {
            name: "Bright",
            price: "₹25,000",
            period: "/Year",
            gst: "+ GST",
            setupFee: "₹499",
            monthlyCharge: "Minimum ₹500",
            features: [
                { text: "Access to all features", available: true },
                { text: "Limited WhatsApp-Flows", available: true },
                { text: "02 Connect Account", available: true },
                { text: "Bot AI Reply (Limited)", available: false },
                { text: "25000 Subscribers", available: true },
                { text: "Bot Conditional Reply", available: true },
                { text: "Broadcast", available: true },
                { text: "10 Input-Flow Campaign", available: true },
                { text: "Live Chat", available: true },
                { text: "Live Chat-Advanced", available: false },
                { text: "Live Chat-Translator", available: false },
                { text: "100 Sequence Campaign", available: true },
                { text: "WhatsApp Embedded Signup", available: true },
                { text: "10 WhatsApp Carousel Templates", available: true },
                { text: "10 WhatsApp-Catalogs", available: true },
                { text: "Integration Telegram/Facebook/Instagram", available: false },
                { text: "Integration-Google Account", available: true },
                { text: "Shopify Integration", available: false },
                { text: "API Developer", available: false }
            ],
            popular: true,
            icon: "✨"
        },
        {
            name: "Business",
            price: "Custom",
            period: "",
            gst: "",
            setupFee: "",
            monthlyCharge: "",
            features: [
                { text: "Access to all features", available: true },
                { text: "Limited WhatsApp-Flows", available: true },
                { text: "Connect Account", available: true },
                { text: "Bot AI Reply (Limited)", available: true },
                { text: "Manage Subscribers", available: true },
                { text: "Bot Conditional Reply", available: true },
                { text: "Broadcast", available: true },
                { text: "Input-Flow Campaign", available: true },
                { text: "Live Chat", available: true },
                { text: "Live Chat-Advanced", available: true },
                { text: "Live Chat-Translator", available: true },
                { text: "Sequence Campaign", available: true },
                { text: "WhatsApp Embedded Signup", available: true },
                { text: "WhatsApp Carousel Templates", available: true },
                { text: "WhatsApp-Catalogs", available: true },
                { text: "Integration Telegram/Facebook/Instagram", available: true },
                { text: "Integration-Google Account", available: true },
                { text: "Shopify Integration", available: true },
                { text: "API Developer", available: true }
            ],
            popular: false,
            icon: "🚀"
        }
    ];



    return (



        <div className="min-h-screen pt-12 sm:pt-24 px-4 transition-all duration-500 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-black text-gray-800 dark:text-white">



            <BlurFade delay={0.75} inView>



                <div className="max-w-7xl mx-auto">



                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 lg:gap-12">



                        {pricingPlans.map((plan, index) => (



                            <div
                                key={index}
                                className={`relative transition-all duration-500 ${hoveredIndex === index ? 'lg:-translate-y-4' : ''}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(undefined)}
                            >


                                {/* Popular badge (Moved outside to prevent clipping) */}
                                {plan.popular && (
                                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                                        <div className="relative">
                                            {/* Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 blur-md opacity-60 rounded-full animate-pulse"></div>
                                            {/* Badge */}
                                            <div className="relative flex items-center justify-center gap-1.5 bg-gradient-to-r from-green-950 to-black border border-green-500/40 text-emerald-300 text-center py-1.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl whitespace-nowrap">
                                                Most Popular
                                            </div>
                                        </div>
                                    </div>
                                )}


                                {/* Card */}
                                <div className={`relative h-full rounded-[2.5rem] overflow-hidden transition-all duration-300 ${plan.popular
                                    ? 'bg-gradient-to-b from-white to-green-50/50 dark:from-green-950/40 dark:to-black shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)] ring-green-500/50 relative z-10'
                                    : 'bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black shadow-gray-200/50 dark:shadow-green-500/5 ring-gray-200 dark:ring-gray-800'
                                    } shadow-2xl ring-1`}>

                                    {/* Core glow effects inside popular card */}
                                    {plan.popular && (
                                        <>
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-500/10 to-transparent pointer-events-none"></div>
                                            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full h-64 bg-green-500 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                                        </>
                                    )}


                                    <div className="p-8 md:p-10">


                                        {/* Plan name & icon */}
                                        <div className="flex items-center justify-between mb-6">

                                            <h3 className={`text-3xl lg:text-4xl pt-1 pb-2 leading-relaxed font-extrabold ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent' : 'text-gray-900 dark:text-white'}`}>
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
                                        {plan.name !== "Business" && (
                                            <div className="flex items-baseline mb-8">
                                                <span className={`text-4xl md:text-5xl font-extrabold ${plan.popular ? 'text-green-500' : ''}`}>
                                                    {plan.price}
                                                </span>
                                                <span className="ml-1 text-lg md:text-xl font-medium">+GST{plan.period}</span>
                                            </div>
                                        )}


                                        {/* <div className="text-sm text-gray-600 dark:text-gray-400 mb-8">{plan.gst}</div> */}



                                        {/* Features */}
                                        <div className="mb-8 space-y-3">


                                            {plan.features.map((feature, featureIndex) => {


                                                const isAvailable = typeof feature === 'string' ? true : feature.available;
                                                const featureText = typeof feature === 'string' ? feature : feature.text;


                                                return (


                                                    <div
                                                        key={featureIndex}
                                                        className={`flex items-start gap-3 py-1 px-2 rounded-lg transition-colors ${hoveredIndex === index && featureIndex % 2 === 0
                                                            ? 'bg-green-100 dark:bg-green-700/70'
                                                            : ''
                                                            } ${!isAvailable ? 'opacity-70' : ''}`}
                                                    >

                                                        <div className={`flex-shrink-0 w-4 h-4 mt-0.5 rounded-full flex items-center justify-center ${isAvailable
                                                            ? (plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-green-500')
                                                            : 'bg-gradient-to-r from-red-400 to-red-500 dark:from-red-500 dark:to-red-600'
                                                            }`}>

                                                            {isAvailable ? (

                                                                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                                                                    <path d="M2.5 6L5 8.5L9.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>

                                                            ) : (

                                                                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                                                                    <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            )}

                                                        </div>


                                                        <span className={`text-sm ${isAvailable ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400 line-through decoration-red-500/30'} ${plan.features.length > 15 ? 'leading-tight' : ''
                                                            }`}>
                                                            {featureText}
                                                        </span>


                                                    </div>


                                                );


                                            })}


                                        </div>



                                        {/* Additional info */}
                                        {plan.name !== "Business" && (

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

                                        )}



                                        {/* Button */}
                                        <a href={plan.name === "Business" ? "https://api.whatsapp.com/send?phone=+918606123466&text=Let's%20Talk" : "https://app.exapi.in/login"} target={plan.name === "Business" ? "_blank" : "_self"} rel="noreferrer">

                                            <button
                                                className={`w-full relative group overflow-hidden hover:cursor-pointer ${plan.popular || plan.name === "Business"
                                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                                                    : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700'
                                                    } rounded-xl py-4 font-medium transition-all duration-300`}
                                            >

                                                {/* Animated circle effect */}
                                                <div className="absolute inset-0 w-full h-full">
                                                    <div className="absolute -left-4 w-16 h-16 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-150"></div>
                                                </div>

                                                <div className="relative flex items-center justify-center gap-2">

                                                    {plan.name === "Business" ? (

                                                        <>
                                                            <span>Let's Talk</span>
                                                            <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                            </svg>
                                                        </>

                                                    ) : (

                                                        <>
                                                            <span>Sign Up Now</span>

                                                            <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg>

                                                        </>
                                                    )}

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