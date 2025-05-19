import { MessageSquareText, CheckCircle } from 'lucide-react';
import { BlurFade } from '../magicui/blur-fade';
import { useState } from 'react';
import PdfModal from '../Common/PriceModal';


export default function PriceFoot() {



    // State to manage modal visibility
    const [isOpen, setIsOpen] = useState<Boolean>(false);



    return (


        <div className="w-full flex items-center justify-center p-4 md:py-36">


            <div className="w-full max-w-5xl relative">

                <BlurFade delay={0.75} inView>


                    {/* Blurred background circles */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-800 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-900 rounded-full opacity-30 blur-3xl"></div>


                    <div className="relative backdrop-blur-md dark:bg-black bg-white  rounded-2xl overflow-hidden ring-1 ring-green-300/50 shadow-xl shadow-green-600/20">


                        <div className="flex flex-col md:flex-row">


                            {/* Pay as per usage card */}
                            <div className={`flex-1 p-8 transition-all duration-300 `}>

                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-green-100 rounded-lg mr-4">
                                        <MessageSquareText className="text-green-600" size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold dark:text-white text-gray-800">Whatsapp API Pricing</h2>
                                </div>

                                <h3 className="text-xl font-semibold text-green-600 mb-4">Pay as per usage</h3>

                                <button onClick={() => setIsOpen(true)} className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group">
                                    <span>Country wise price list</span>
                                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>

                            </div>


                            {/* Setup card */}
                            <div className={`flex-1 p-8 border-t md:border-t-0 md:border-l border-green-300 transition-all duration-300`}>


                                <div className="mb-6">
                                    <h2 className="text-xl font-bold text-green-600 mb-2">Let us setup Everything For you</h2>
                                    <h3 className="text-2xl font-bold dark:text-gray-200 text-gray-800">Custom Chatbot</h3>
                                </div>


                                <ul className="mb-6 space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                                        <span className="text-gray-700 dark:text-gray-300">Full setup for a Number</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                                        <span className="text-gray-700 dark:text-gray-300">Content for bot</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                                        <span className="text-gray-700 dark:text-gray-300">Upto 5 templates</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                                        <span className="text-gray-700 dark:text-gray-300">One year support</span>
                                    </li>
                                </ul>


                                <a href="https://wa.me/918606123466?text=Hello%20there!" target='_blank' className='hover:cursor-pointer'>
                                    <button className="w-full py-3 hover:cursor-pointer px-6 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group">
                                        <span>Order Now</span>
                                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </a>

                            </div>

                        </div>

                    </div>

                </BlurFade>

            </div>


            <PdfModal isOpen={isOpen} setIsOpen={setIsOpen} />


        </div >

    );
}