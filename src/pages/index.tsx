import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProjectsGrid from '@/components/ProjectsGrid';

const BulletPoint = ({ className, left, ...props }: {
  className: string,
  left?: boolean
}) => {
  return (
    <div className="centered flex-col relative">

      <div className={`absolute top-0 ${ left ? "left-0" : "right-0"} aspect-video w-2/5 p-4 border-stone-600 border-2`}>
        <h4>Example</h4>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nam nostrum, a unde qui velit maxime molestias dicta beatae earum vitae similique deleniti autem doloribus pariatur. Quae quo at veritatis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nam nostrum, a unde qui velit maxime molestias dicta beatae earum vitae similique deleniti autem doloribus pariatur. Quae quo at veritatis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nam nostrum, a unde qui velit maxime molestias dicta beatae earum vitae similique deleniti autem doloribus pariatur. Quae quo at veritatis!</p>
      </div>

      <svg className={`max-w-[20px] ${className}`} viewBox="0 0 8 147" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="4" fill="#D9D9D9" stroke="none"/>
        <path d="M4 11L3.99999 146" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export default function Home() {

  return (
    <main className="min-screen-h w-full relative">

      <div className="2xl:w-96 xl:w-72 w-64 2xl:h-96 xl:h-72 h-64 rounded-full bg-accent-500/60 blur-[7.5rem] absolute top-10 lg:left-[20%] md:left-36 left-[5rem]  -z-30 ">
        <div className="2xl:w-[30rem] xl:w-[24rem] lg:w-[20rem] w-64 2xl:h-[30rem] xl:h-[24rem] lg:h-[20rem] h-64 rounded-full bg-purple-400/100 absolute top-[50%] left-[70%] -z-25"></div>
      </div>

      <Hero />
      <ProjectsGrid />
      {/* 
      <Experience />
      <Contact />
       */}
      <Footer />

    </main>
  )
}

