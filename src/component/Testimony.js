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
                                        src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-1/451623888_1195850665096071_879731209377699892_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=91JsVLzpEk4Q7kNvgE88rra&_nc_zt=24&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=AWPW2sI1qkJGn_ki7abCxsX&oh=00_AYCPu8oKTa_YwflVWC_u0lJaQ3-u7HJYAmA7nfBKhUkzDA&oe=67449451"
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
                                    src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-1/449298640_2280457188958427_1314692579417369936_n.jpg?stp=c0.0.960.960a_dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=0pamUFqdYAwQ7kNvgHviZLQ&_nc_zt=24&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=A3dOjn2k90q-1AuNlR9PDv2&oh=00_AYD-YbH2SGvF8ZAUZ6xWiUL_7wa0Tv06HfipKcsR-w_8pA&oe=6744ABBE"
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
                                    src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/440120089_3693723947541977_7958484500222122525_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=eIdnA49r2LwQ7kNvgF3u1v_&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=Ax8iFfdRDxgP72ZImnFng5L&oh=00_AYBQiNqGujhTLy1TZcvGrag6GJ-GVpKAVf0ByctCRan0Pg&oe=6744AAE7"
                                    alt="Jacob Jones"
                                />
                                <div className="ml-4">
                                    <p className="text-base font-bold">Jacob Jones</p>
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
