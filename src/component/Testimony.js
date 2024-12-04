import React from "react";
import { motion } from "framer-motion";

const Testimony = () => {
    return (
        <section id="review" className="py-6 text-white sm:py-16 lg:py-20 bg-gray-800">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-screen-lg lg:px-8">
                <div className="flex flex-col items-center mb-10">
                    <div className="text-center">
                        <motion.p
                            className="text-lg font-medium"
                            style={{ color: '#FCCB06' }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Testimony
                        </motion.p>
                        <motion.h2
                            className="mt-4 text-3xl font-bold sm:text-4xl xl:text-5xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Have a look at what our clients say
                        </motion.h2>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <motion.div
                        className="relative mx-auto mb-10 flex h-96 overflow-hidden rounded-xl shadow sm:mt-20 lg:h-auto lg:max-w-md lg:pt-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <img
                            className="absolute top-0 h-full w-full object-cover opacity-10"
                            src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/compress-strong-man-training-gym-min-scaled.jpg?fit=2560%2C1707&ssl=1"
                            alt="Testimonial Background"
                        />
                        <div className="relative mt-auto w-full">
                            <div className="flex flex-col p-6 lg:px-7 lg:py-8">
                                <div>
                                    <blockquote>
                                        <motion.p
                                            className="text-3xl font-bold sm:text-5xl"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.6 }}
                                        >
                                            "I cannot overstate how much this has helped our startup"
                                        </motion.p>
                                    </blockquote>
                                </div>

                                <div className="mt-10 flex items-center">
                                    <img
                                        className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                                        src="https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=500,height=500/https://cdn.cameo.com/resizer/EB2otn6YJ_avatar-1687038155759.jpg"
                                        alt="Jacob Jones"
                                    />
                                    <div className="ml-4">
                                        <p className="text-base font-bold">Jacob Jones</p>
                                        <p className="mt-0.5 text-sm">Youtube Personality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-y-14 lg:pl-20">
                        {/* Testimonial 1 */}
                        <motion.div
                            className="flex flex-col bg-gray-700 rounded-xl p-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <div>
                                <blockquote>
                                    <motion.p
                                        className="text-lg leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 1 }}
                                    >
                                        "The gym's knowledgeable trainers have helped me make incredible progress, and I feel stronger and more confident every day."
                                    </motion.p>
                                </blockquote>
                            </div>

                            <div className="mt-4 flex items-center">
                                <img
                                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                                    src="https://i.pinimg.com/236x/a5/67/94/a567940c61eb580455d8f886f55d21b1.jpg"
                                    alt="James Khawalski"
                                />
                                <div className="ml-4">
                                    <p className="text-base font-bold">James Khawalski</p>
                                    <p className="mt-0.5 text-sm">CEO, Mavoline</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial 2 */}
                        <motion.div
                            className="flex flex-col bg-gray-700 rounded-xl p-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            <div>
                                <blockquote>
                                    <motion.p
                                        className="text-lg leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 1.4 }}
                                    >
                                        "After training here for months, I've seen amazing results, and the supportive environment keeps me motivated to push harder."
                                    </motion.p>
                                </blockquote>
                            </div>

                            <div className="mt-4 flex items-center">
                                <img
                                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                                    src="https://i.pinimg.com/474x/25/3a/bf/253abf4f1f4bc16b6dc04571f8d21624.jpg"
                                    alt="Jacob Jones"
                                />
                                <div className="ml-4">
                                    <p className="text-base font-bold">Fuji Sixto</p>
                                    <p className="mt-0.5 text-sm">Youtube Personality</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial 3 */}
                        <motion.div
                            className="flex flex-col bg-gray-700 rounded-xl p-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.6 }}
                        >
                            <div>
                                <blockquote>
                                    <motion.p
                                        className="text-lg leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 1.8 }}
                                    >
                                        "The team at the gym really understands my goals and keeps me motivated with their positive energy and expert guidance."
                                    </motion.p>
                                </blockquote>
                            </div>

                            <div className="mt-4 flex items-center">
                                <img
                                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                                    src="https://yt3.googleusercontent.com/ytc/AIdro_lM0vaC5VnzxNYP-7UY9_2wBrMOSaCRC9sOHRPnsoSwJA=s900-c-k-c0x00ffffff-no-rj"
                                    alt="Lydia Bradson"
                                />
                                <div className="ml-4">
                                    <p className="text-base font-bold">Lydia Bradson</p>
                                    <p className="mt-0.5 text-sm">Fitness Enthusiast</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimony;
