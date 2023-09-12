import Hero from '@/components/Hero';
import Projects from '../../lib/Projects';
import Thumbnail from '@/components/Thumbnail';
import { useEffect, useState, useRef } from 'react';
import Project, { ProjectType } from '@/components/Project';

import { AnimatePresence, motion } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Home() {

  const [ selectedProject, setSelectedProject ] = useState<ProjectType | null>(null); 
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setSelectedProject(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (selectedProject !== null) {
  //       document.body.style.overflow = 'hidden';
  //     } else {
  //       document.body.style.overflow = 'auto';
  //     }
  //   };
  
  //   handleScroll();
  
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [selectedProject]);  

  return (
    <main className="min-screen-h w-full">
      <Hero />

      <section id="projects" className="default-p-x w-full">
        <div className="mb-10">
          <h1 className="font-bebas text-stone-900">Projects</h1>
        </div>
        
        {/* grid */}
        <div className="w-full grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Object.entries(Projects).map(([key, project], index) => {
            let classes = "transition row-span-1 col-span-1";
            if (index % 9 === 0 || index % 7 === 0) {
              classes = "lg:row-span-2 col-span-2";
            }
            return (
              <Thumbnail
                idx={index}
                key={key}
                project={project}
                className={`${classes} min-h-[100px]`}
                toggler={setSelectedProject}
              />
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {
            selectedProject && (
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1  }}
                exit={{ opacity: 0 }}
                className="z-[201] centered fixed top-0 left-0 w-screen h-screen bg-black/50"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1  }}
                  exit={{ opacity: 0 }}
                  ref={popupRef} 
                  className="overflow-y-scroll md:p-20 p-4 flex flex-col lg:flex-row z-[201] w-[95vw] h-[95vh] bg-white dark:bg-stone-950 border-2 shadow-md shadow-black/30"
                >
                  <Project project={selectedProject} />
                </motion.div>

              </motion.div>
            )
          }
        </AnimatePresence>

      </section>

    </main>
  )
}


{
  // Object.entries(Projects).map(([name, data], idx) => {
  //   return (
  //     <div key={idx} className={`p-2 ${idx===0||idx===50?"lg:col-span-2" : "lg:col-span-1 lg:row-span-1"} ${idx%2===0?"bg-blue-100":"bg-red-100"}`}>
  //       <button className="aspect-square w-full bg-purple-500/10">
  //         {/* <h4>{name}</h4> */}
  //       </button>
  //     </div>
  //   );
  // })

  // [1,2,3,4,5,6,7,8,9].map((num, idx) => {
  //   return (
  //     <div key={idx} className={`p-2 ${idx===0||idx===5?"lg:col-span-2 lg:row-span-2" : "lg:col-span-1 lg:row-span-1"} ${idx%2===0?"bg-blue-100":"bg-red-100"}`}>
  //       <button className="aspect-square w-full bg-purple-700 transition">
  //         <h4>Hello</h4>
  //       </button>
  //     </div>
  //   );
  // })
}