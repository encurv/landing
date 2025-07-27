import Link from "next/link";
import Logo from "./icons/logo";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="mt-16 flex flex-col items-center justify-center py-8 text-white"
    >
      <div className="flex w-screen items-center justify-between px-8">
        <Logo />
        <div className="flex gap-8">
          <Link
            href="https://github.com/encurv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:underline"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/company/encurv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:underline"
          >
            LinkedIn
          </Link>
        </div>

        <div className="hidden max-w-32 text-sm text-gray-400 sm:block">
          2025 © encurv.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
