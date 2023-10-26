import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";

import { LazyLoadComponent } from 'react-lazy-load-image-component';

export type ProjectType = {
  name: string,
  blurb: string,
  desc: string,
  date?: Date,
  skills: string[],
  additionalSkills?: string[],
  languages: string[],
  paradigms?: string[],
  images: string[],
  videos?: string[],
  github?: string,
  link?: string,
  associatedWith: string[]
};

const AssociatedWith = ({ associatedWith }: { associatedWith: string[] }) => (
  <div className="mb-6 flex flex-col md:items-end md:text-right">
    <h5 className="project-sh text-sm">Associated With:</h5>
    <div className="flex flex-wrap">
      {associatedWith.map((assoc, idx) => {
        if (assoc === "i4software" || assoc === "thecoderschool" || assoc === "queenscollege" || assoc ==="personal") {
          return (
            <div key={idx} className="w-32 h-fit">
              <Image src={`/${assoc}.png`} alt="i4software logo" height={960} width={1280} className={`max-w-full h-auto object-cover ${assoc==="queenscollege" ? "dark:invert" : ""}`} />
            </div>
          )
        }
        return (
          <span key={assoc} className="bg-accent-100 rounded-lg p-1 m-1">
            {assoc}
          </span>
        )
      })}
    </div>
  </div>
)

const Project = ({ project }: { project: ProjectType }) => {

  const media = !project?.videos ? 
                  project.images :
                  project.videos.concat(project.images); 

  return (
    <div className="flex flex-col md:flex-row h-max">
      <div className="flex-1">
        <h2 className=" mb-2">{project.name}</h2>
        <p className="text-lg">{project.blurb}</p>

        <div className="my-4 flex space-x-4">
          {project.link && (
            <Link href={project.link} target="_blank" rel="noreferrer" className="centered w-fit space-x-2 group">
              <FaExternalLinkAlt size={15} className="transition text-stone-400 dark:text-stone-300 group-hover:text-accent-500" />
              <span className="transition text-stone-600 dark:text-stone-400 group-hover:text-accent-500">Live Deploy</span>
            </Link>
          )}
          {project.github && (
            <Link href={project.github} target="_blank" rel="noreferrer" className="centered w-fit space-x-2 group">
              <FaGithub size={17} className="transition text-stone-600 dark:text-stone-400 group-hover:text-accent-500" />
              <span className="transition text-stone-600 dark:text-stone-400 group-hover:text-accent-500">Github Repository</span>
            </Link>
          )}
        </div>

        <Carousel
          interval={6000}
          emulateTouch={true}
          infiniteLoop={true}
          autoPlay={true}
          stopOnHover={true}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          className="h-min cursor-pointer mb-10"
        >
          {media.map((video, index) => (
            <div key={index} className="aspect-video relative overflow-hidden">
              {index < (project?.videos?.length ?? 0) ? (
                <LazyLoadComponent threshold={10}>
                  <video
                    style={{ cursor: 'pointer', borderRadius: '0.5rem' }}
                    autoPlay muted loop playsInline preload="none" width="100%">
                    <source src={video} type="video/mp4" />
                  </video>
                </LazyLoadComponent>
              ) : (
                <Image src={video} alt={"img"} fill={true} objectFit="object-fit" objectPosition="top" className="max-w-full h-auto object-cover" />
              )
              }
            </div>
          ))}

        </Carousel>

        <div className="flex mb-4 space-x-4">
          <h5 className="project-sh">Languages:</h5>
          <ul className="flex flex-wrap">
            {project.languages.map((lang) => {
              const colors: Record<string, string> = {
                "TypeScript": "text-blue-700 dark:text-stone-200 border-blue-700 bg-blue-400/40",
                "JavaScript": "text-emerald-700 dark:text-stone-200 border-emerald-700 bg-emerald-400/40",
                "Ruby": "text-red-700 dark:text-stone-200 border-red-700 bg-red-400/40"
              };
              return <li key={lang} className="h-8 w-fit px-2 mb-4"><span className={`text-center border-2 p-2 w-fit h-full rounded-lg shadow-sm shadow-black/30 centered ${colors[lang] ?? colors["TypeScript"]}`}>{lang}</span></li>
            })}
          </ul>
        </div>

        {project.additionalSkills && project.additionalSkills.length > 0 && (
          <div className="mb-4 w-full md:flex hidden flex-wrap">
            <h5 className="project-sh mr-10">All Skills Used:</h5>
            {project.additionalSkills.map((skill, idx) => (
              <span key={skill} className="leading-[2rem] mr-2 text-stone-600">#{skill}{(project?.additionalSkills && idx !== project?.additionalSkills.length - 1) && ","}</span>
            ))}
          </div>
        )}

      </div>

      <div className="md:w-2/5 box-border md:px-10">

        <div className="mb-10">
          <AssociatedWith associatedWith={project.associatedWith} />
        </div>

        <div className="mb-10">
          <h5 className="project-sh mb-2">Achievements 🏆</h5>
          <p className="">{project.desc}</p>
        </div>

        <h5 className="project-sh">Skills 💪</h5>
        <ul className="list-disc list-inside mb-10">
          {project.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        {project.additionalSkills && project.additionalSkills.length > 0 && (
          <div className="mb-4 w-full md:hidden flex flex-wrap">
            <h5 className="project-sh mr-10">All Skills Used:</h5>
            {project.additionalSkills.map((skill, idx) => (
              <span key={skill} className="leading-[2rem] mr-2 text-stone-600">#{skill}{(project?.additionalSkills && idx !== project?.additionalSkills.length - 1) && ","}</span>
            ))}
          </div>
        )}

        {project.paradigms && project.paradigms.length > 0 && (
          <div>
            <strong>Paradigms:</strong>
            <ul className="list-disc list-inside mb-4">
              {project.paradigms.map((paradigm) => (
                <li key={paradigm}>{paradigm}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

    </div>
  );
};

export default Project;