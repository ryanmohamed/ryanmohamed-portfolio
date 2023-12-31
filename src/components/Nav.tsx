import { useEffect, useState } from "react";
import LightSwitch from "./LightSwitch";
import Link from "next/link";

export default function Nav () {
    const [scrolled, setScrolled] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 10;
          if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
          }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
          document.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);
    return (
        <div className="fixed top-0 left-0 w-full z-[200]">
            <div className="centered text-center w-full min-h-[50px] bg-accent-700">
                <p className="p-2 text-stone-300">This portfolio is <b>in progress</b>. Please await some awesome features 🦄</p>
            </div>
            <nav className={`default-p-x flex items-center justify-between w-full h-[70px] transition-all duration-300  ${
                scrolled ? "bg-white dark:bg-stone-900 shadow-md" : "bg-transparent"
            }`}>

                <Link href="/" className="tabable">
                    <h6>Home</h6>
                </Link>

                <div>
                    <LightSwitch />
                </div>

            </nav>
        </div>
    );
}