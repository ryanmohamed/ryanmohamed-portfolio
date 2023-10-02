import React, { ReactNode } from 'react'
import type { IconType } from 'react-icons';
import { FaChevronDown, FaFileDownload, FaGit, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { BiArrowToBottom } from "react-icons/bi";
import { VscArrowRight } from "react-icons/vsc";
import Link from 'next/link';
import ChevronDown from './svgs/ChevronDown';
import Image from 'next/image';
import BlackCat from './svgs/BlackCat';

type ActionItem = {
  href: string, 
  icon: IconType,
  download?: boolean,
  text?: string
}

const links: ActionItem[] = [
  {
    href: "/#contact",
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
      <div className={`mb-2 mr-2 ${ text ? "px-8" : "md:w-12 w-10"} cta-btn group transition ${ text === "Download my CV" ? "bg-stone-950 hover:bg-stone-800 dark:bg-stone-400 dark:hover:bg-stone-200" : "bg-transparent"}`}>
        { text && <span className={`transition font-semibold mr-2 whitespace-nowrap  ${ text === "Download my CV" ? " text-stone-200 group-hover:text-white dark:text-stone-950 dark:group-hover:text-black" : "text-stone-950 group-hover:text-stone-800 dark:text-stone-400 dark:group-hover:text-stone-200"} `}>{text}</span> }
        <Icon className={`transition ${ text === "Download my CV" ? " text-stone-200 group-hover:text-white dark:text-stone-950 dark:group-hover:text-black" : "text-stone-950 group-hover:text-stone-800 dark:text-stone-400 dark:group-hover:text-stone-200"} ${!text ? "w-3/5 h-auto" : "max-w-[200%] h-auto"}`}/>
      </div>
    </Link>
  );
}

const Hero = () => {
  return (
    <section className="flex flex-col justify-between default-p-x md:py-20 py-10 w-full">
        
      { /* begin main text + links */}
      <div className="flex lg:flex-row flex-col md:justify-between md:space-x-4">
        {/* <BlackCat className="md:block hidden self-start w-1/2 h-auto fill-stone-950 dark:fill-stone-50 md:mt-0" /> */}
        
        {/* main text */}
        <div className="md:w-3/4 md:mb-0 mb-6">
          <h1 className="font-bebas font-normal text-8xl text-stone-950 w-full">Hi, I&apos;m Ryan</h1>
          <h4 className="w-3/4 font-bebas font-normal text-3xl text-stone-950/90">I&apos;m a <b className="text-accent-500 dark:text-accent-50">Software Engineer.</b></h4>
          <p className="ml-2 col-start-2 col-span-full">I specialize in <b>Full-stack</b> development, with project and work experience spanning <b>4 years</b>. While I&apos;m versatile, and learn quickly, my main focus is JavaScript, SQL, Next, and Google Cloud Platform. </p>
          <div className="mt-6 flex flex-wrap">
            { links.map((link, idx) => <ActionItem key={idx} {...link} /> ) }
          </div>
        </div>

     </div>

    </section>
  )
}

export default Hero;