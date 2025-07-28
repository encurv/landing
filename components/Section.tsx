"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
        <Image src="/info-pixel_Build_AI_applications_assistants_and_Gen_AI_tools_with_Encurv_platform.jpg" alt="Gen AI apps, assistants, and scalable memory engine for AI applications and businesses" width={1} height={1} />
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 lg:px-32 w-screen lg:max-w-7xl">
            {children}
        </div>
    </motion.section>
);
};

export default Section;
