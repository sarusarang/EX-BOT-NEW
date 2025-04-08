import { BlurFade } from "../magicui/blur-fade"


export default function PriceHead() {



    return (


        <>

            <div className="relative px-0 sm:py-5 sm:px-6 lg:px-8 bg-transparent overflow-hidden">

                <BlurFade delay={0.25} inView>

                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="relative inline-block text-4xl sm:text-5xl font-extrabold text-green-600 dark:text-green-400 leading-tight mb-6">
                            ExBot Plans & Pricing

                            {/* Modern Wavy Underline SVG */}
                            <svg
                                className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-56 h-6"
                                viewBox="0 0 300 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 15 Q75 0 150 15 T300 15"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    fill="transparent"
                                    className="text-green-400 dark:text-green-500"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </h2>

                        <p className="mt-2 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium">
                            Designed For Every Business
                        </p>
                    </div>

                </BlurFade>

                
            </div>


        </>


    )


}
