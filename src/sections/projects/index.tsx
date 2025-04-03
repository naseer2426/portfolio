'use client'

import { FC } from "react";
import { Project } from "@/components/ui/project";


export type GithubProject = {
    title: string;
    description: string | null;
    images?: string[];
    projectLink: string | null;
    githubLink: string;
    tags?: string[];
}

export type ListProjectsResp = {
    data?: GithubProject[];
    error?: string;
}

export type ProjectsSectionProps = {
    projects: GithubProject[]
}
const ProjectsSection: FC<ProjectsSectionProps> = (props) => {

    return (
        <>
            <div className="p-8 flex flex-col justify-center items-center gap-8 md:gap-16">
                <h1 className="text-4xl font-[family-name:var(--font-nunito)] font-bold">Projects</h1>
                {props.projects.map((project, idx) => (
                    <Project
                        key={idx}
                        title={project.title}
                        description={project.description as string}
                        images={project.images as string[]}
                        projectLink={project.projectLink}
                        githubLink={project.githubLink}
                        tags={project.tags}
                        imageFirst={idx % 2 === 0}
                    />
                ))}
            </div>
        </>
    )
}

export { ProjectsSection }
