import { ReactNode } from "react";
import Projects from "../../lib/Projects";
import Slider from "./Slider";

// replace this with server side props in a page component at some point
const projectsArray = Object.entries(Projects);
type CategoryProps = { 
    id: string; 
    terms: string[];
    reverse?: boolean;
    children?: ReactNode;
}

export default function Category ({ id, terms, reverse, children }: CategoryProps ) {
    
    const projects = projectsArray.filter(([name, project], idx) => {
        const allSkills = project.skills.concat(project?.additionalSkills ||[]);
        const intersection = terms.filter(term => allSkills.includes(term));
        if (intersection.length > 0) return [name, project];
    });

    if (reverse) projects.reverse();
    
    return (
        <section id={id} className="project-category">
            {children}
            <Slider 
                array={projects} 
                className="mt-4 w-full" 
            />
        </section>
    );

}