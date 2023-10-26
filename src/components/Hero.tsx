import React, { ReactNode } from 'react'
import type { IconType } from 'react-icons';
import { FaChevronDown, FaFileDownload, FaGit, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { BiArrowToBottom } from "react-icons/bi";
import { VscArrowRight } from "react-icons/vsc";
import Link from 'next/link';
import ChevronDown from './svgs/ChevronDown';
import Image from 'next/image';
import BlackCat from './svgs/BlackCat';
import Arrow from './svgs/Arrow';

type ActionItem = {
  href: string, 
  icon: IconType,
  download?: boolean,
  text?: string
}

const links: ActionItem[] = [
  {
    href: "mailto:reyaznyc@gmail.com",
    icon: VscArrowRight,
    text: "Contact me"
  },
  {
    href: "/RyanMohamedCV.pdf",
    icon: BiArrowToBottom,
    download: true, 
    text: "Download my CV"
  },  
  {
    href: "https://www.linkedin.com/in/ryan-mohamed-41a253189/",
    icon: FaLinkedin
  },
  {
    href: "https://github.com/ryanmohamed",
    icon: FaGithub
  },
]

const ActionItem = ({ href, icon, download, text, ...props }: ActionItem) => {
  const Icon: IconType = icon;
  return (
    <Link 
      href={href} 
      target={!href.startsWith("/#") ? "_blank" : undefined}
      rel={download ? "noopener noreferrer" : !href.startsWith("/#") ? "noreferrer" : undefined}
      download={download}
      {...props}
    >
      <div className={`mb-4 mr-2 ${ text ? "px-8" : "md:w-12 w-10"} cta-btn group transition ${ text === "Download my CV" ? "bg-stone-800 hover:bg-stone-700 dark:bg-stone-300 dark:hover:bg-stone-200" : "bg-transparent"}`}>
        { text && <span className={`transition font-semibold mr-2 whitespace-nowrap  ${ text === "Download my CV" ? " text-stone-300 group-hover:text-stone-200 dark:text-stone-800 dark:group-hover:text-black" : "text-stone-800 group-hover:text-stone-800 dark:text-stone-300 dark:group-hover:text-stone-200"} `}>{text}</span> }
        <Icon className={`transition ${ text === "Download my CV" ? " text-stone-300 group-hover:text-stone-200 dark:text-stone-800 dark:group-hover:text-stone-600" : "text-stone-800 group-hover:text-stone-600 dark:text-stone-300 dark:group-hover:text-stone-200"} ${!text ? "w-3/5 h-auto" : "max-w-[200%] h-auto"}`}/>
      </div>
    </Link>
  );
}

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-between default-p-x md:py-20 py-10 w-full">
        
      { /* begin main text + links */}
      <div className="relative">
        {/* <BlackCat className="md:block hidden self-start w-1/2 h-auto fill-stone-950 dark:fill-stone-50 md:mt-0" /> */}
        
        {/* main text */}
        <div className="md:w-3/4 md:mb-0 mb-6">
          <h1 className="mb-2 font-bold w-full">Hi 👋, I&apos;m Ryan.</h1>
          <h4 className="mb-8 w-3/4">I&apos;m a <span className="text-accent-500 dark:text-accent-10">Software Engineer 🚀</span>.</h4>
          <p className="mb-4 tracking-tight text-base col-start-2 col-span-full">This is a collection of my <b>work, project</b>, and <b>academic experience</b>, spanning over <b>6 years</b>. </p>
          <p className="w-3/4 mb-4 tracking-tight text-base col-start-2 col-span-full">My <b>strongest</b> technical skills include <b>JavaScript</b>, <b>SQL</b>, <b>Google Cloud Platform </b> & <b>Next.js</b>.</p>
        </div>

        <div className="mt-6 flex flex-wrap">
          { links.map((link, idx) => <ActionItem key={idx} {...link} /> ) }
        </div>
     </div>

    </section>
  )
}

export default Hero;