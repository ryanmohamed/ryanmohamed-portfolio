import React from 'react'
import { IconType } from 'react-icons';
import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import ChevronDown from './svgs/ChevronDown';
import Image from 'next/image';
import BlackCat from './svgs/BlackCat';

const links = [
  {
    href: "https://github.com/ryanmohamed",
    logo: FaGithub
  },
  {
    href: "https://www.linkedin.com/in/ryan-mohamed-41a253189/",
    logo: FaLinkedin
  },
]

const sectionLinks = [
  {
    href: "/#projects",
    name: "Projects"
  },
  {
    href: "/#experience",
    name: "Experience"
  },
  {
    href: "/#about",
    name: "About"
  }
]

const Hero = () => {
  return (
    <section className="flex flex-col justify-between default-p-x md:py-20 py-10 w-full">
        
      { /* begin main text + links */}
      <div className="w-full flex flex-row-reverse md:justify-between items-center">
        <BlackCat className="self-start w-1/2 h-auto fill-stone-950 dark:fill-stone-50 md:mt-0" />
        
        {/* main text */}
        <div className="w-1/2 md:mt-0">
          <h1 className="font-bebas font-normal text-8xl text-stone-950 w-full">Hi, I&apos;m Ryan</h1>
          <h4 className="w-3/4 font-bebas font-normal text-3xl text-stone-950/90">I&apos;m a <b className="text-accent-500 dark:text-accent-50">Software Engineer.</b></h4>
          <div className="mt-6 w-3/4">
            <p className="text-stone-950/90 font-space">I love 🐈‍⬛ cats, 🌵 nature and 🍕 food.</p>
            <p className="text-stone-950/90 font-space">Let&apos;s create the 🔮 future together.</p>
          </div>
          <Link href="/">
            <div className="cta">
              <span className="text-stone-50 font-space font-bold text-lg">Explore</span>
            </div>
          </Link>
        </div>
     </div>

    </section>
  )
}

export default Hero;