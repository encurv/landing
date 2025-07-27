"use client";

import { FC } from "react";
import Logo from "./icons/logo";
import { Button } from "./ui/button";
import At from "./icons/at";

interface IProps {
  title: string;
}

const Navbar: FC<IProps> = ({ title }) => {
  return (
    <nav className="flex h-24 items-center justify-between bg-black px-4 sm:px-8">
      <Logo />

      <div className="hidden gap-8 rounded-full border border-solid px-4 py-2 sm:flex dark:bg-white/[2%]">
        <a>
          <Button
            variant="link"
            className="hidden sm:flex"
            onClick={() => {
              const main = document.getElementById("headline");
              if (main) {
                main.scrollIntoView({ behavior: "smooth" });
              }
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
                features.scrollIntoView({ behavior: "smooth" });
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
        <a>
          <Button variant="link" className="hidden sm:flex">
            <span className="text-sm sm:text-base">Imprint</span>
          </Button>
        </a>
      </div>

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
    </nav>
  );
};

export default Navbar;
