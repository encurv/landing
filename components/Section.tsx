"use client";

import { motion } from "framer-motion";

interface IProps {
  children: React.ReactNode;
}

const Section: React.FC<IProps> = ({ children }) => {
return (
    <motion.section
        className="w-screen bg-black text-start text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 lg:px-32 w-screen lg:max-w-7xl">
            {children}
        </div>
    </motion.section>
);
};

export default Section;
