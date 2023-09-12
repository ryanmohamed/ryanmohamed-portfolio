import React from 'react'
import { IconType } from 'react-icons';
import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import ChevronDown from './svgs/ChevronDown';

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

const HeroAlt = () => {
  return (
    <section className="flex flex-col justify-between bg-[url('/gggrain.svg')] bg-cover bg-no-repeat bg-center default-p-x md:py-20 py-10 w-full">
        
      { /* begin main text + links */}
      <div className="w-full flex justify-between items-center">
        {/* main text */}
        <div className="w-3/4">
            <h1 className="font-dm font-normal text-8xl text-white w-fit">Hi, I&apos;m Ryan</h1>
            <h4 className="font-bebas font-normal text-3xl text-white/90 w-fit">I&apos;m a Software Engineer.</h4>
            <div className="mt-2">
              <p className="text-white/90 font-space">I love 🐈‍⬛ cats, 🌵 nature and 🍕 food.</p>
              <p className="text-white/90 font-space">Let&apos;s create the 🔮 future together.</p>
            </div>
        </div>

        {/* links text */}
        <div className="flex flex-col space-y-6">
          { 
            links.map((link, idx) => {
              const Logo: IconType = link.logo;
              return (
                <Link 
                  href={link.href} 
                  key={idx} 
                  className="group"
                >
                  <Logo size={30} className="transition text-white group-hover:scale-110"/>
                </Link>
              );
            }) 
          }
        </div>
      </div>
      { /* end main text + links */}

      <div className="mt-10 flex justify-between ">
        {
          sectionLinks.map((link, idx) => (
            <div key={idx} className="w-1/3 p-1">
              <Link 
                href={link.href} 
                className="p-8 group centered flex-col hover:bg-white/20 focus:bg-white/20 active:bg-white/20 border-[1px] border-white/0 hover:border-white/30 focus:border-white/30 active:border-white/30 transition duration-[500ms]"
              >
                <div className="p-4 border-[1px] border-white/0 group-hover:border-white/20 group-active:border-white/20 group-focus:border-white/20 rounded-full w-[100px] h-[100px] centered transition">
                  <ChevronDown className="mt-3 fill-white w-full h-full"/>           
                </div>
                <div className="mt-2">
                  <h4 className="font-bebas font-normal text-white/75 text-2xl">{link.name}</h4>
                </div>
              </Link>
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default HeroAlt;