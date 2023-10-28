import Project, { ProjectType } from '@/components/Project'
import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
} from 'next'

import Projects, { Categories } from '../../lib/Projects'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import Link from 'next/link'

type Repo = {
    name: string
    stargazers_count: number
}

export const getStaticPaths = (() => {
    const projectNames = Object.keys(Projects);
    console.log(projectNames)
    const paths = projectNames.map((name) => ({
        params: { project: name },
    }))
    return {
        paths: paths,
        fallback: false, // false or "blocking"
    }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
    let projectName = context?.params?.project || "AfterSchoolStartup";
    if (typeof projectName !== "string")  projectName = projectName[0];
    return { props: { project: Projects[projectName] } }
}) satisfies GetStaticProps<{
    project: ProjectType
}>

const Page: NextPageWithLayout<{ project: ProjectType }> = ({
    project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <main className="p-5">
            <Project project={project} />
        </main>
    );
}

export const getProjects = (terms: string[]) => (
    Object.entries(Projects).filter(([name, project], idx) => {
        const allSkills = project.skills.concat(project?.additionalSkills ||[]);
        const intersection = terms.filter(term => allSkills.includes(term));
        if (intersection.length > 0) return [name, project];
    })
);

const categories = Object.entries(Categories);

Page.getLayout = function getLayout(page: ReactElement) {
    return (
      <main className="relative flex md:flex-row flex-col w-full">
        <ul className="side-panel md:fixed top-[120px] left-0 z-[200]">
            {/* <div className="z-[199] absolute inset-0 bg-[url('/sssquiggly.svg')_repeat_0_0_/_50px_50px] opacity-10"></div> */}
            <div className="z-[200] relative divide-y divide-stone-300 dark:divide-stone-600">
            { categories.map(([name, terms], cIdx) => {
                return (
                    <li key={name} className={`first:pt-0 last:pb-0 py-4`}>
                        <ul>
                            <h6 className="w-4/5 mb-2">{name}</h6>
                            { getProjects(terms).map(([projectName, project], idx) => {
                                return (
                                    <Link href={`/${projectName}`} key={projectName} className="group mb-2">
                                        <li className="pr-6 text-sm group-hover:text-stone-800 dark:group-hover:text-stone-200 group-hover:underline">{project.name}</li>
                                    </Link>
                                )
                            }) }
                        </ul>
                    </li>
                );
            }) }
            </div>
        </ul>
        <div className="md:pl-[20%]">{page}</div>
      </main>
    )
}

export default Page;