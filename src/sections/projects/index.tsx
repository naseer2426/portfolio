import { FC, useEffect, useState } from "react";
import { listPortfolioReadyProjects } from "@/api/github";
import { GithubProject } from "@/api/github";
import { toast } from "sonner"
import { Project } from "@/components/ui/project";

const ProjectsSection: FC = () => {
    const [projects, setProjects] = useState<GithubProject[]>([])
    const fetchProjects = async () => {
        const { data, error } = await listPortfolioReadyProjects()
        if (error) {
            toast("Failed to fetch projects", {
                description: error,
            })
            return
        }
        setProjects(data || [])
    }
    useEffect(() => {
        fetchProjects()
    }, [])
    return (
        <>
            <div className="p-8 flex flex-col justify-center items-center gap-8 md:gap-16">
                <h1 className="text-4xl font-playfair font-extrabold">Projects</h1>
                {projects.map((project, idx) => (
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
