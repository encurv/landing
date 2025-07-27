"use client";

import { FC, useEffect, useState } from "react";
import Logo from "./icons/logo";
import { Button } from "./ui/button";
import At from "./icons/at";
import { motion } from "motion/react";
import { main, nav } from "motion/react-client";

interface IProps {
  title: string;
}

const Navbar: FC<IProps> = ({ title }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex h-24 items-center justify-between px-4 sm:px-8">
      <motion.div
        className="flex items-center w-40"
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Logo />
      </motion.div>

      <motion.div
        className="hidden gap-8 rounded-full border border-solid px-4 py-2 sm:flex"
        initial={{ opacity: 0, y: -20, backgroundColor: "rgba(24, 24, 27, 0)" }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundColor: scrolled
            ? "rgba(24, 24, 27, 1)" // bg-card color (adjust as needed)
            : "rgba(24, 24, 27, 0)", // transparent
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <a>
          <Button
            variant="link"
            className="hidden sm:flex"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-sm sm:text-base">Home</span>
          </Button>
        </a>
        <a>
          <Button
            variant="link"
            className="hidden sm:flex"
            onClick={() => {
              const features = document.getElementById("features");
              if (features) {
                const yOffset = -80; // adjust offset as needed
                const y = features.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            <span className="text-sm sm:text-base">Features</span>
          </Button>
        </a>
        <a>
          <Button
            variant="link"
            className="hidden sm:flex"
            onClick={() => {
              const pricing = document.getElementById("pricing");
              if (pricing) {
                pricing.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="text-sm sm:text-base">Pricing</span>
          </Button>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-40"
      >
        <Button
          variant={"outline"}
          className="hidden items-end gap-2 sm:flex"
          onClick={() =>
            (window.location.href = "https://linkedin.com/company/encurv")
          }
        >
          <At />
          <p className="text-sm">{title}</p>
        </Button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
