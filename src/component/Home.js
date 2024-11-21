import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/images/homebg.jpg";

const Home = () => {
    return (
        <div
            id="home"
            className="h-screen w-full bg-cover bg-center flex items-end justify-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <motion.div
                className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
                initial={{ opacity: 0, x: -100 }}  // Start position off-screen and transparent
                whileInView={{ opacity: 1, x: 0 }}  // Animate to full opacity and on-screen position
                viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is in view
                transition={{ duration: 1, ease: "easeOut" }} // Duration and easing
                key="home-animation" // Ensure animation is reset when the page is revisited
            >
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    Unleash Your Potential, One Rep at a Time.
                </h1>
                <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
                    "Every step, every drop of sweat, brings you closer to your best self.
                    Fitness is about pushing limits, building resilience, and embracing the
                    process. Celebrate your progress, break through your limits, and keep
                    striving for greatness!"
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="#"
                        className="m-2 inline-flex items-center justify-center rounded-xl border border-transparent bg-[#FCCB06] px-5 py-3 font-medium text-black hover:bg-[#D4A905] transition w-full sm:w-auto"
                    >
                        Train with Us
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
