import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
    return (
        <div id='pricing' className="mx-auto md:py-20 mb-10 w-full dark:bg-gray-800 px-5 py-10 text-black">
            <div className="mx-auto max-w-4xl lg:max-w-5xl lg:flex">
                <div className="md:flex lg:w-1/4 md:flex-col px-5">
                    <div className="w-full flex-grow text-left">
                        <motion.h1
                            className="mb-5 text-4xl font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            Pricing
                        </motion.h1>
                        <motion.h3
                            className="text-md mb-5 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            Choose from our flexible gym memberships to match your fitness goals. Enjoy full access to top-notch equipment, expert trainers, and group classes. Start your fitness journey today!
                        </motion.h3>
                    </div>
                    <div className="mb-2 w-full">
                        <p className="text-xs">*Please read the terms.</p>
                    </div>
                </div>

                <div className="lg:w-3/4">
                    <div className="mx-auto max-w-4xl md:flex">
                        {/* Personal Plan */}
                        <motion.div
                            className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-blue-100 md:my-2 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }} // `once: false` ensures it triggers again when you scroll back
                        >
                            <div className="w-full flex-grow">
                                <h2 className="mb-4 text-center font-bold uppercase">SINGLE</h2>
                                <h3 className="mb-5 text-center text-4xl font-bold">$19<span className="text-sm">/mo</span></h3>
                                <ul className="mb-8 text-sm">
                                    <li className="flex items-center leading-tight">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Premium Support
                                    </li>
                                    <li className="flex items-center leading-tight">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Template Updates
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full">
                                <button className="w-full whitespace-nowrap rounded-md bg-[#FCCB06] px-10 py-2 font-bold text-white transition-colors hover:bg-[#FCCB06]">Buy Now</button>
                            </div>
                        </motion.div>

                        {/* Team Plan */}
                        <motion.div
                            className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-blue-100 md:relative md:z-50 md:-mx-3 md:mb-0 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }} // `once: false` ensures it triggers again when you scroll back
                        >
                            <div className="w-full flex-grow">
                                <h2 className="mb-4 text-center font-bold uppercase">MEMBERSHIP</h2>
                                <h3 className="mb-5 text-center text-4xl font-bold md:text-5xl">$129<span className="text-sm">/mo</span></h3>
                                <ul className="mb-8 text-sm">
                                    <li className="flex items-center leading-tight">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Premium Support
                                    </li>
                                    <li className="flex items-center leading-tight">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Template Updates
                                    </li>
                                    <li className="flex items-center leading-tight">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Support & Updates for 1 Year
                                    </li>
                                    <li className="flex items-center leading-tight">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Access All Templates for 1 Year
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full">
                                <button className="w-full whitespace-nowrap rounded-md bg-[#FCCB06] px-10 py-2 font-bold text-white transition-colors hover:bg-[#FCCB06]">Buy Now</button>
                            </div>
                        </motion.div>

                        {/* Pro Plan */}
                        <motion.div
                            className="mx-auto mb-3 w-full rounded-md bg-white px-8 py-8 shadow-lg shadow-blue-100 md:my-2 md:flex md:w-1/3 md:max-w-none md:flex-col md:px-10 md:py-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }} // `once: false` ensures it triggers again when you scroll back
                        >
                            <div className="w-full flex-grow">
                                <h2 className="mb-4 text-center font-bold uppercase">LIFETIME</h2>
                                <h3 className="mb-5 text-center text-4xl font-bold">$250<span className="text-sm">/mo</span></h3>
                                <ul className="mb-8 text-sm">
                                    <li className="flex items-center leading-tight">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Premium Support
                                    </li>
                                    <li className="flex items-center leading-tight">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Template Updates
                                    </li>
                                    <li className="flex items-center leading-tight">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Support & Updates for 2 Years
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full">
                                <button className="w-full whitespace-nowrap rounded-md bg-[#FCCB06] px-10 py-2 font-bold text-white transition-colors hover:bg-[#FCCB06]">Buy Now</button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
