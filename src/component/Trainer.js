import React from "react";
import { motion } from "framer-motion";

const Trainer = () => {
    return (
        <div id="team" className="bg-gray-900 min-h-screen"> {/* Dark background */}
            <div className="py-10 max-w-screen-lg mx-auto">
                {/* Team Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }} // Set 'once' to false so animation can trigger again
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <p className="mt-4 text-sm leading-7 text-white font-regular">
                        THE TEAM
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
                        Meet Our <span className="text-go" style={{ color: '#FCCB06' }}>
                            Fitness Trainer
                        </span>
                    </h3>
                </motion.div>

                {/* Trainer Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Trainer 1 */}
                    <motion.div
                        className="relative text-center shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }} // Set 'once' to false for reset behavior
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <img
                            className="w-full h-full object-cover"
                            src="https://static.vecteezy.com/system/resources/thumbnails/041/640/658/small_2x/ai-generated-fitness-trainer-man-cut-out-happy-fitness-trainer-on-transparent-background-png.png"
                            alt="Trainer 1"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                            <div className="text-white text-center">
                                <h4 className="text-xl font-semibold">Jinno</h4>
                                <div className="mt-2">
                                    <h5 className="font-semibold" style={{ color: '#FCCB06' }}>Body building</h5>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Trainer 2 */}
                    <motion.div
                        className="relative text-center shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }} // Set 'once' to false for reset behavior
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <img
                            className="w-full h-full object-cover"
                            src="https://file.aiquickdraw.com/imgcompressed/img/compressed_b1d0e3ed6a75bc30cee45118c13d671b.webp"
                            alt="Trainer 2"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                            <div className="text-white text-center">
                                <h4 className="text-xl font-semibold">Christine</h4>
                                <div className="mt-2">
                                    <h5 className="font-semibold" style={{ color: '#FCCB06' }}>Cardio</h5>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Trainer 3 */}
                    <motion.div
                        className="relative text-center shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }} // Set 'once' to false for reset behavior
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <img
                            className="w-full h-full object-cover"
                            src="https://purepng.com/public/uploads/large/the-rock-dwayne-johnson-wwe-wtu.png"
                            alt="Trainer 3"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                            <div className="text-white text-center">
                                <h4 className="text-xl font-semibold">Joey</h4>
                                <div className="mt-2">
                                    <h5 className="font-semibold" style={{ color: '#FCCB06' }}>Weight Lifting</h5>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Impressive Results Section */}
                <motion.div
                    className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }} // Set 'once' to false for reset behavior
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-3xl font-bold leading-9 sm:text-4xl sm:leading-tight text-white">
                            Impressive Results in 1 Year
                        </h2>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4">
                        {/* Great Achievements */}
                        <motion.div
                            className="relative overflow-hidden bg-gray-600 shadow"
                            style={{ borderTop: '4px solid #FCCB06' }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }} // Set 'once' to false for reset behavior
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <div className="px-6 py-10">
                                <div className="flex items-center">
                                    <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none text-white">10+</h3>
                                    <span className="ml-3 text-base font-medium capitalize text-white">YEARS OF EXPERIENCE</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Graduations Sponsored */}
                        <motion.div
                            className="relative overflow-hidden bg-gray-600 shadow"
                            style={{ borderTop: '4px solid #FCCB06' }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }} // Set 'once' to false for reset behavior
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <div className="px-6 py-10">
                                <div className="flex items-center">
                                    <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none text-white">50+</h3>
                                    <span className="ml-3 text-base font-medium capitalize text-white">FITNESS TRAINERS</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Jobs Created */}
                        <motion.div
                            className="relative overflow-hidden bg-gray-600 shadow"
                            style={{ borderTop: '4px solid #FCCB06' }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }} // Set 'once' to false for reset behavior
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <div className="px-6 py-10">
                                <div className="flex items-center">
                                    <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none text-white">5k+</h3>
                                    <span className="ml-3 text-base font-medium capitalize text-white">SATISFIED CLIENTS</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative overflow-hidden bg-gray-600 shadow"
                            style={{ borderTop: '4px solid #FCCB06' }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }} // Set 'once' to false for reset behavior
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <div className="px-6 py-10">
                                <div className="flex items-center">
                                    <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none text-white">200+</h3>
                                    <span className="ml-3 text-base font-medium capitalize text-white">WORKOUT TOOLS</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Trainer;
