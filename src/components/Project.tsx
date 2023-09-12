import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";

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
    github?: string,
    link: string,
    associatedWith: string[]
};

const Project = ({ project }: { project: ProjectType }) => (
    <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <h2 className="font-bebas mb-2">{project.name}</h2>
          <p className="mb-4">{project.blurb}</p>
          <ul className="list-disc list-inside mb-4">
            {project.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <div className="flex flex-wrap mb-4">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.name}-${index}`}
                className="w-1/3 h-auto rounded-lg m-1"
              />
            ))}
          </div>
          <p className="p mb-4">{project.desc}</p>
        </div>

        <div className="flex-1 md:px-4">
          {project.date && <span className="block mb-2">Date: {new Date(project.date).toDateString()}</span>}
          {project.languages.length > 0 && (
            <div>
              <strong>Languages:</strong>
              <ul className="list-disc list-inside mb-4">
                {project.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          )}
          {project.additionalSkills && project.additionalSkills.length > 0 && (
            <div>
              <strong>Additional Skills:</strong>
              <ul className="list-disc list-inside mb-4">
                {project.additionalSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
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
          {project.github && (
            <a href={project.github} className="text-accent-500 underline mb-4" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          <a href={project.link} className="text-accent-500 underline mb-4" target="_blank" rel="noopener noreferrer">
            Project Link
          </a>
          <p>Associated With:</p>
          <div className="flex flex-wrap">
            {project.associatedWith.map((assoc) => (
              <span key={assoc} className="bg-accent-100 rounded-lg p-1 m-1">
                {assoc}
              </span>
            ))}
          </div>
        </div>

      </div>
);

export default Project;