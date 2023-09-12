import { ReactNode } from "react";
import { ProjectType } from "./Project";
import Image from "next/image";

const getBg = (idx: number) => {
    let bgColor = "bg-stone-100 dark:bg-stone-800";
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
            <div className={`transition shadow-xl group-hover:shadow-black/100 shadow-black/10 ring-4 ring-transparent group-hover:ring-accent-500 group-focus:ring-accent-500 group-active:ring-accent-500 relative aspect-square w-full overflow-hidden rounded-xl border-2 border-stone-950 ${getBg(idx)}`}>
                <Image src={images[0]} alt="image" fill={true} objectFit="cover" className="z-[25] mt-16 absolute top-0 left-0 max-w-full h-auto" />
                <h6 className="z-[27] relative font-space box-border p-4 w-full h-16 centered justify-start bg-stone-950  text-stone-50 text-xl">{name}</h6>
                <div className="p-2 z-[26] absolute top-16 left-0 transition translate-y-full group-hover:translate-y-0 w-full h-full bg-stone-950/90">
                    <p className="text-stone-100 font-space">{project.blurb}</p>
                </div>
            </div>
        </button>
    );
}