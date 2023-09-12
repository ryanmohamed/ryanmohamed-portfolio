import { useEffect, useState } from "react";
import { FaBars, FaLightbulb, FaMoon } from "react-icons/fa"

export default function LightSwitch () {
    const [ toggle, setToggle ] = useState<boolean>(false);
    const flipToggle = () => setToggle(!toggle);
    useEffect(() => {
        if (window) {
            if (toggle === true) document.documentElement.classList.add("dark");
            else document.documentElement.classList.remove("dark");
        }
    }, [toggle])
    return (
        <button onClick={flipToggle} className="w-fit h-fit rounded-full overflow-hidden tabable">
            <div className="centered dark:bg-stone-800 bg-stone-200 dark:text-stone-200 text-stone-800 w-[30px] h-[30px]">
                { toggle ? <FaMoon size={20} /> : <FaLightbulb size={20} /> }
            </div>
        </button>
    );
}