import { ReactNode } from "react";
import { ProjectType } from "./Project";
import Image from "next/image";
import { motion } from "framer-motion";

const getBg = (idx: number) => {
    let bgColor = "bg-white dark:bg-stone-800";
    // const rem = idx%6;
    // switch (rem) {
    //     case 1:
    //         bgColor = "bg-accent-20";
    //         break;
    //     case 2:
    //         bgColor = "bg-accent-800";
    //         break;
    //     case 3:
    //         bgColor = "bg-accent-40";
    //         break;
    //     case 4:
    //         bgColor = "bg-accent-600";
    //         break;  
    //     case 5:
    //         bgColor = "bg-accent-50";
    //         break;
    //     default: 
    //         bgColor = "bg-accent-500";
    //         break;
    // }
    return bgColor;
}

export default function Thumbnail ({ 
    project, 
    className,
    children, 
    idx,
    toggler,
    ...props 
}: { 
    project: ProjectType,
    className?: string,
    children?: ReactNode,
    idx: number,
    toggler: CallableFunction
}) {
    const {
        name,
        blurb,
        desc,
        date,
        skills,
        additionalSkills,
        languages,
        paradigms,
        images,
        github,
        link,
        associatedWith
    } = project;

    return (
        <button onClick={() => toggler(project)} className={`text-left outline-none group ${className}`} {...props}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`flex flex-col justify-between transition shadow-xl group-hover:shadow-black/100 shadow-black/30 ring-4 ring-transparent group-hover:ring-accent-500 group-focus:ring-accent-500 group-active:ring-accent-500 relative aspect-square w-full overflow-hidden ${getBg(idx)}`}>
                <Image src={images[0]} alt="image" fill={true} objectFit="cover" className="z-[25] absolute top-0 left-0 max-w-full h-auto" />
                <div className="p-10 text-center h-full w-full bg-gradient-to-b from-black/50 to-black/95 centered relative z-[27]"> {/*  centered justify-start z-[27] relative h-16 px-4 overflow-hidden */}
                    <h5 className="!text-stone-300 border-b-2 border-stone-300 w-fit">{name}</h5>
                </div>
                {/* <Image src={images[0]} alt="image" width={1280} height={960} className="opacity-40 rounded-md z-[25] absolute bottom-0 translate-y-[20px] right-0 translate-x-1/4 max-w-full h-auto" /> */}
                {/* <div className="p-2 z-[26] absolute top-16 left-0 transition translate-y-full group-hover:translate-y-0 w-full h-full bg-stone-950/90">
                    <p className="text-stone-100 font-space">{project.blurb}</p>
                </div> */}
            </motion.div>
        </button>
    );
}