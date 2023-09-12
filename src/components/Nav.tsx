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
        <div className=" top-0 left-0 w-full z-[200]">
            <div className="w-full h-[40px] bg-accent-700">

            </div>
            <nav className={`default-p-x flex items-center justify-between w-full h-[70px] transition-all duration-300  ${
                scrolled ? "bg-white dark:bg-stone-900 shadow-md" : "bg-white dark:bg-stone-900"
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