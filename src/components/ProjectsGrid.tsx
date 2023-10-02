import React, { useEffect, useRef, useState } from 'react'
import Section from './Section';
import Thumbnail from './Thumbnail';
import Project, { ProjectType } from './Project';
import Projects from '../../lib/Projects';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectsGrid = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setSelectedProject(null);
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setSelectedProject(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {

        const handleScroll = () => {
            if (selectedProject !== null) {
                document.documentElement.style.overflowY = 'hidden';
            } else {
                document.documentElement.style.overflowY = 'auto';
            }
        };
        handleScroll();

        return () => {
            document.documentElement.style.overflowY = 'auto';
        };

    }, [selectedProject]);

    return (
        <Section id="projects" name="Projects" subtitle="Some of examples of my work. Click a tile to see more. 🦄">
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
                            className="z-[201] centered fixed top-0 left-0 w-screen h-screen bg-black/50"
                        >

                            <motion.div
                                key={selectedProject.name}
                                initial={{ y: 1000, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -1000, opacity: 0 }}
                                ref={popupRef}
                                className="overflow-y-scroll flex flex-col md:p-10 p-8 z-[201] w-[95vw] h-[95vh] bg-white dark:bg-stone-950 border-2 dark:border-stone-800 shadow-md shadow-black/30"
                            >
                                <button onClick={() => setSelectedProject(null)} className="lg:self-start self-end w-20 h-10 p-2 mb-10 centered border-red-400 border-2 rounded-lg group hover:border-red-700 focus:border-red-700 active:border-red-700 transition">
                                    <span className="text-red-500 text-xl group-hover:text-red-700 group-focus:text-red-700 group-active:text-red-700 transition">Esc</span>
                                </button>
                                <Project project={selectedProject} />
                            </motion.div>

                        </motion.div>
                    )
                }
            </AnimatePresence>
        </Section>
    )
}

export default ProjectsGrid;