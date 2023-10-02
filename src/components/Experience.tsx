import React, { ReactNode, SVGAttributes, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MotionConfig, motion, useInView } from 'framer-motion';
import ResizeablePanel from './ResizeablePanel';
import Section from './Section';
import { FaArrowAltCircleDown, FaArrowDown } from 'react-icons/fa';

type Experience = {
    place: string,
    assoc: string, 
    role: string, 
    startDate: Date,
    endDate?: Date,
    desc: string,
    children?: ReactNode | JSX.Element
}

const experiences: Experience[] = [
    {
        place: "Queens College",
        assoc: "/queenscollege.png",
        role: "Student",
        startDate: new Date(1566884405000),
        endDate: new Date(1566884405000),
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi, ipsa rem provident impedit ipsum quasi recusandae blanditiis consequatur neque minus soluta doloribus facilis non tempora eligendi quia illum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi, ipsa rem provident impedit ipsum quasi recusandae blanditiis consequatur neque minus soluta doloribus facilis non tempora eligendi quia illum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi, ipsa rem provident impedit ipsum quasi recusandae blanditiis consequatur neque minus soluta doloribus facilis non tempora eligendi quia illum nobis.",
        children: (<>
            <ul className="list-inside">
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
            </ul>
        </>) 
    },
    {
        place: "theCoderSchool",
        assoc: "/thecoderschool.png",
        role: "Programming Instructor",
        startDate: new Date(1566884405000),
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi, ipsa rem provident impedit ipsum quasi recusandae blanditiis consequatur neque minus soluta doloribus facilis non tempora eligendi quia illum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi, ipsa rem provident impedit ipsum quasi recusandae blanditiis consequatur neque minus soluta doloribus facilis non tempora eligendi quia illum nobis.",
        children: (<>
            <ul className="list-inside">
                <li>Spearheaded a team of 23 software engineer interns as Technical Lead, employing Agile methodologies to accelerate the development and deployment of 39 AI-powered mobile applications within a one-week deadline.</li>
                <li>Architected end-to-end system infrastructure, troubleshooted and resolved complex issues, managed CI/CD pipelines and version control, and performed code reviews to ensure best practices and maintainable codebase, utilizing Next.js, TypeScript, and Google Cloud Platform.</li>
                <li>Engineered secure, scalable server-side components for handling sensitive business logic, payment processing via Stripe, RevenueCat, and PayPal, and analytics, leveraging REST APIs, middleware, Firebase and Supabase for back-end development.</li>
                <li>Facilitated quick turnarounds in development cycles by articulating component requirements in Agile standups and implementing features across the stack, including RESTful APIs, CRUD operations on SQL/NoSQL databases, and middleware.</li>
                <li>Demonstrated proficiency in a wide range of technologies for versatile application development including Next.js, TypeScript, Google Cloud Platform, Firebase, Supabase, OpenAI, Flutter, Swift, and SwiftUI.</li>
                <li>Acted as key liason between cross-functional teams and senior management, effectively coordinating deliverables and aligning them with strategic objectives. Utilized tools like Slack and GitHub for seamless cross-time-zone communication.</li>
            </ul>
        </>) 
    },
    {
        place: "theCoderSchool",
        assoc: "/thecoderschool.png",
        role: "Code Coordinator",
        startDate: new Date(1566884405000),
        desc: "As a Code Coordinator at TheCoderSchool, I excel in translating intricate technical challenges and ideas into clear, accessible terms for a diverse array of stakeholders and peers, a skill that significantly contributed to an 18% surge in trial class retention rates. My ability to bridge technical and non-technical realms facilitates a conducive learning and collaborative environment, fostering a shared understanding and cohesive team dynamics.",
        children: (<>
            <ul className="list-inside">
                <li>Spearheaded a team of 23 software engineer interns as Technical Lead, employing Agile methodologies to accelerate the development and deployment of 39 AI-powered mobile applications within a one-week deadline.</li>
                <li>Architected end-to-end system infrastructure, troubleshooted and resolved complex issues, managed CI/CD pipelines and version control, and performed code reviews to ensure best practices and maintainable codebase, utilizing Next.js, TypeScript, and Google Cloud Platform.</li>
                <li>Engineered secure, scalable server-side components for handling sensitive business logic, payment processing via Stripe, RevenueCat, and PayPal, and analytics, leveraging REST APIs, middleware, Firebase and Supabase for back-end development.</li>
                <li>Facilitated quick turnarounds in development cycles by articulating component requirements in Agile standups and implementing features across the stack, including RESTful APIs, CRUD operations on SQL/NoSQL databases, and middleware.</li>
                <li>Demonstrated proficiency in a wide range of technologies for versatile application development including Next.js, TypeScript, Google Cloud Platform, Firebase, Supabase, OpenAI, Flutter, Swift, and SwiftUI.</li>
                <li>Acted as key liason between cross-functional teams and senior management, effectively coordinating deliverables and aligning them with strategic objectives. Utilized tools like Slack and GitHub for seamless cross-time-zone communication.</li>
            </ul>
        </>) 
    },
    {
        place: "i4software",
        assoc: "/i4software.png",
        role: "Software Engineer Intern",
        startDate: new Date(1566884405000),
        endDate: new Date(1566884405000),
        desc: "In my tenure as a Software Engineer Intern at i4software, I took on the role of Technical Lead among a cohort of 23 interns, leveraging Agile frameworks to expedite the creation and delivery of 39 AI-centric mobile applications within a stringent one-week timeframe. My endeavor in architecting a robust end-to-end system infrastructure, managing Continuous Integration/Continuous Deployment pipelines, and conducting thorough code reviews ensured the adherence to best coding practices, which was pivotal in maintaining a high-quality, sustainable codebase. Moreover, my contributions spanned engineering secure server-side elements crucial for executing sensitive business logic and payment processing, as well as fostering rapid development cycles by effectively delineating component requisites during Agile standups, thus facilitating seamless feature implementation across various layers of the tech stack.",
        children: (<>
            <ul className="mt-4 list-inside list-disc">
                <p className="font-bold mb-2">Responsibilites</p>
                <li className="exp-item">Spearheaded a team of 23 software engineer interns as Technical Lead, employing Agile methodologies to accelerate the development and deployment of 39 AI-powered mobile applications within a one-week deadline.</li>
                <li className="exp-item">Architected end-to-end system infrastructure, troubleshooted and resolved complex issues, managed CI/CD pipelines and version control, and performed code reviews to ensure best practices and maintainable codebase, utilizing Next.js, TypeScript, and Google Cloud Platform.</li>
                <li className="exp-item">Engineered secure, scalable server-side components for handling sensitive business logic, payment processing via Stripe, RevenueCat, and PayPal, and analytics, leveraging REST APIs, middleware, Firebase and Supabase for back-end development.</li>
                <li className="exp-item">Facilitated quick turnarounds in development cycles by articulating component requirements in Agile standups and implementing features across the stack, including RESTful APIs, CRUD operations on SQL/NoSQL databases, and middleware.</li>
                <li className="exp-item">Demonstrated proficiency in a wide range of technologies for versatile application development including Next.js, TypeScript, Google Cloud Platform, Firebase, Supabase, OpenAI, Flutter, Swift, and SwiftUI.</li>
                <li className="exp-item">Acted as key liason between cross-functional teams and senior management, effectively coordinating deliverables and aligning them with strategic objectives. Utilized tools like Slack and GitHub for seamless cross-time-zone communication.</li>
            </ul>
        </>) 
    }
];

const Path = (props: SVGAttributes<SVGPathElement>) => {
    return (
        <path 
            {...props}
            d={props.d}
            strokeWidth="2" 
            strokeLinecap="round" 
        />
    );
}



const MainBullet = ({ ...props }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    const [paths, setPaths] = useState({
        path1: "M5 14.0233L5 140.767",
        path2: "M5 145L5 170.349",
        path3: "M5 176L5 181.07"
    });

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (svgRef.current) {
                const height = svgRef.current.clientHeight;
                const scaleFactor = height / 183;
                const fixedDistance = 1;
                setPaths({
                    path1: `M5 24.0233L5 ${(140.767 * scaleFactor) - fixedDistance}`,
                    path2: `M5 ${(145 * scaleFactor) + fixedDistance}L5 ${(170.349 * scaleFactor) - fixedDistance}`,
                    path3: `M5 ${(176 * scaleFactor) + (2 * fixedDistance)}L5 ${(181.07 * scaleFactor) - (2 * fixedDistance)}`
                });
            }
        });

        if (svgRef.current) {
            resizeObserver.observe(svgRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <svg ref={svgRef} {...props} height="100%" width="10px" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="5" cy="5" rx="5" ry="5" stroke="none" transform="rotate(180 5 5)" />
            <Path d={paths.path1}/>
            <Path d={paths.path2}/>
            <Path d={paths.path3}/>
        </svg>
    );

};

const MainExperience = ({ exp, left, ...props }: { exp: Experience, left?: boolean }) => {
    const [ toggle, setToggle ] = useState<boolean>(false);
    const d = 0.5;
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} {...props} className="cursor-pointer group mb-2 grid grid-cols-9 grid-rows-1">
            <motion.div onClick={() => setToggle(!toggle)} className={`lg:mb-0 mb-2 group/item tabable hoverable text-left border-2 border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 p-4 transition lg:col-span-4 col-span-full ${ left ? "" : "lg:col-start-6"}`}>
                <div className="flex justify-between">
                    <div>
                        <h4 className="">{exp.role}</h4>
                        <h6 className="text-stone-500 dark:text-stone-300">{exp.place}</h6>
                    </div>
                    <div className="ml-6 w-1/3 max-w-[100px]">
                        <Image src={`${exp.assoc}`} alt={`associated with ${exp.assoc}`} height={960} width={1280} className="max-w-full h-auto" />
                    </div>
                </div>
                <small className="text-sm block">{exp.startDate.toDateString()} {exp?.endDate ? " - " + exp.endDate.toDateString() : " - Present"}</small>
                <div className="mt-4">
                { toggle && (
                                <div>
                                    <p className="font-bold mb-2">Description</p>
                                    <p>{exp.desc}</p>
                                    {/* { exp.children && exp.children } too big for now */}
                                </div>
                            ) }
                </div>
                <div className="flex items-center justify-end w-full" >
                <button onClick={() => setToggle(!toggle)} className={`mt-4 transition flex items-center w-fit`}>
                    <span className={`text-stone-600 dark:text-stone-400 group-hover/item:text-stone-500 dark:group-hover/item:text-stone-300 transition duration-[${d}s] mr-2`}>{toggle ? "See less" : "See more"}</span>
                    <FaArrowAltCircleDown size={15} className={`transition duration-[${d}s] ${toggle ? "rotate-180" : "rotate-0"} text-stone-600 dark:text-stone-400 group-hover/item:text-stone-500 dark:group-hover/item:text-stone-300 group-hover/item:animate-pulse group-active/item:animate-pulse group-focus/item:animate-pulse`}/>
                </button>
                </div>
            </motion.div>
            <MainBullet className="transition col-span-1 col-start-5 row-start-2 lg:row-start-1 place-self-center fill-stone-800 stroke-stone-400 group-hover:fill-accent-500 group-hover:stroke-accent-500/50 dark:fill-stone-600 dark:stroke-stone-700" />
        </motion.div>
    );
}


const Experience = () => {
    return (
        <Section id="experience" name="Experience" subtitle="Take a look at some previous of my work history and accomplishments. 📁">
            <div className="mt-10">
                { experiences.map((exp, idx) => {
                    return <MainExperience key={idx} exp={exp} left={ idx%2===1 ? true : undefined} />
                })}
            </div>
        </Section>
    )
}

export default Experience;