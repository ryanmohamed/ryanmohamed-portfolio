import { useEffect, useState } from "react";
import Projects from "../../lib/Projects";
import Image from "next/image";
import { motion, useAnimation, useDragControls, useMotionValue, useMotionValueEvent } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { ProjectType } from "./Project";

interface DivProps {
    array: [string, ProjectType][]
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const totalSize: number = 14;

export default function Slider (props: DivProps) {

    const projectArr = props.array;
    const router = useRouter();
    const [ idx, setIdx ] = useState(0);
    const x = useMotionValue(0);
    const controls = useAnimation();

    const onPrevious = () => {
        setIdx(() => {
            if(idx === 0) return 0;
            endAnimation();
            const newIdx = (idx - 1)%projectArr.length;
            x.set(-totalSize*16*(newIdx));
            return newIdx;
        })
    }

    const onNext = () => {
        setIdx(() => {
            if(idx === (projectArr.length-1)) return (projectArr.length-1);
            endAnimation();
            const newIdx = (idx + 1)%projectArr.length;
            x.set(-totalSize*16*(newIdx));
            return newIdx;
        })
    }

    const dragControls = useDragControls()
    function startDrag(event: any) {
      dragControls.start(event, { snapToCursor: false })
    }

    useMotionValueEvent(x, "animationComplete", () => {
        const xRem = Math.round(x.get() / 16);
        const approxIdx = Math.abs(Math.round(xRem/totalSize));
        setIdx(approxIdx)
        x.set(-totalSize*16*approxIdx);
    })

    const endAnimation = () => {
        controls.stop();
    };

    useEffect(() => {
        const newIdx = (idx)%projectArr.length;
        x.set(-totalSize*16*(newIdx));
    }, [idx]);

    return (
        <div {...props}>
            <div id="track" className="relative centered justify-start h-64 px-[30px] w-full overflow-hidden">
                <motion.div 
                    id="slider" 
                    animate={controls}
                    drag="x" 
                    dragMomentum={true}
                    dragElastic={1}
                    dragConstraints={{ left: (-totalSize*(projectArr.length-(projectArr.length%4)))*16, right: 0}}
                    dragControls={dragControls}
                    className={`transition duration-100 flex gap-8 w-fit`}
                    style={{ x }}
                >
                    { projectArr.map(([name, project], i) => {
                        return (
                            <button
                                onClick={()=>{
                                    setIdx(i)
                                    router.push(`/${name}`);
                                }}
                                onPointerDown={startDrag} 
                                key={name} 
                                className={`${idx===i?"scale-[115%] shadow-md mr-2" : ""}  shadow-black/30 overflow-hidden rounded-lg hover:ring-4 ring-accent-400 transition cursor-pointer no-drag touch-none select-none relative aspect-square h-48`}
                            >
                                <Image onPointerDown={startDrag} src={project.images[0] || "https://placeholder.co/500/500"} alt={name} fill={true} objectFit="cover" className="pointer-events-none no-drag touch-none select-none max-w-full h-auto" />
                            </button>
                        );
                    }) }
                </motion.div>
            </div>
            <div className="mt-4 space-x-4 w-full flex centered">
                <button onClick={onPrevious} className="aspect-square h-fit p-1 rounded-full transition border-[1px] border-stone-800 hover:border-stone-600 dark:border-stone-300 hover:dark:border-stone-100">
                    <FaArrowLeft className="text-stone-800 dark:text-stone-300" />
                </button>
                <button onClick={onNext} className="aspect-square h-fit p-1 rounded-full transition border-[1px] border-stone-800 hover:border-stone-600 dark:border-stone-300 hover:dark:border-stone-100">
                    <FaArrowRight className="text-stone-800 dark:text-stone-300" />
                </button>
            </div>
        </div>
    );
}