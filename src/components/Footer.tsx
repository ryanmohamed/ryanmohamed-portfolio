import React from 'react'
import Section from './Section'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <section id="footer" className={`default-p-x w-full py-20 h-fit bg-stone-950`}>
        <div className="flex flex-row-reverse items-start justify-between">
            <div className="h-min w-full text-right flex flex-col items-end justify-start">
              <h4 className="text-white">Ryan Mohamed</h4>
              <p className="text-stone-300">Software Engineer, Cat Dad, Pizza Lover.</p>
              <div className="w-1/3">
                <Image src="/personal.png" alt="personal logo" width={1280} height={960} className="max-w-full h-auto hue-rotate-[60deg]" />
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <Link href="#hero"><span className="text-white text-base border-b-[1px] border-stone-200">About</span></Link>
                  <ul className="mt-2">
                    <li className="footer-link"><Link href="https://www.linkedin.com/in/ryan-mohamed-41a253189/" target="_blank" rel-="noreferrer">LinkedIn</Link></li>
                    <li className="footer-link"><Link href="https://github.com/ryanmohamed" target="_blank" rel-="noreferrer">Github</Link></li>
                  </ul>
                </li>
                <li className="my-6">
                  <span className="text-white text-base border-b-[1px] border-stone-200"><Link href="mailto:reyaznyc@gmail.com">Contact</Link></span>
                  <ul className="mt-2">
                    <li className="footer-link">+1 (347)-698-1237</li>
                    <li className="footer-link"><Link href="mailto:reyaznyc@gmail.com">reyaznyc@gmail.com</Link></li>
                  </ul>
                </li>
                <li>
                  <span className="text-white text-base border-b-[1px] border-stone-200"><Link href="https://github.com/ryanmohamed" target="_blank" rel-="noreferrer">Notable Projects</Link></span>
                  <ul className="mt-2">
                    <li className="footer-link"><Link href="https://afterschoolstartup.com" target="_blank" rel-="noreferrer">After School Startup</Link></li>
                    <li className="footer-link"><Link href="https://fitbyte.me" target="_blank" rel-="noreferrer">Fitbyte</Link></li>
                    <li className="footer-link"><Link href="https://restaurantrodeo.netlify.app" target="_blank" rel-="noreferrer">Restaurant Rodeo</Link></li>
                    <li className="footer-link"><Link href="https://github.com/ryanmohamed/stripe-openai-socket-generation" target="_blank" rel-="noreferrer">Petmatcherv2</Link></li>
                    <li className="footer-link"><Link href="https://quizitiv.netlify.app" target="_blank" rel-="noreferrer">Quizitiv</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer