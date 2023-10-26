import { useEffect, useState } from "react";
import { FaBars, FaLightbulb, FaMoon } from "react-icons/fa"

export default function LightSwitch () {
    const [ toggle, setToggle ] = useState<boolean>(true);
    const flipToggle = () => {
        if (!toggle === true) window.localStorage.setItem("clr-pref", "dark");
        else window.localStorage.setItem("clr-pref", "light");
        setToggle(!toggle);
    }
    useEffect(() => {
        if (window) {
            if (toggle === true) {
                document.documentElement.classList.add("dark");
            }
            else {
                document.documentElement.classList.remove("dark");
            }
        }
    }, [toggle]);

    useEffect(() => {
        if (window) {
            const preference =  window.localStorage.getItem("clr-pref");
            console.log(preference);
            if (preference === "dark" ) setToggle(true);
            else setToggle(false);
        }
    }, []);

    return (
        <button onClick={flipToggle} className="w-fit h-fit rounded-full overflow-hidden tabable">
            <div className="centered dark:bg-stone-800 bg-stone-200 dark:text-stone-200 text-stone-800 w-[30px] h-[30px]">
                { toggle ? <FaMoon size={20} /> : <FaLightbulb size={20} /> }
            </div>
        </button>
    );
}