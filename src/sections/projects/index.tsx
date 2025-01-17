import { FC, useEffect, useState } from "react";
import { listPortfolioReadyProjects } from "@/api/github";
import { GithubProject } from "@/api/github";
import { toast } from "sonner"
import { Project } from "@/components/ui/project";

const LOADING_PROJECTS = 3

const ProjectsSection: FC = () => {
    const [projects, setProjects] = useState<GithubProject[]>([])
    const [loading, setLoading] = useState(true)

    const fetchProjects = async () => {
        const { data, error } = await listPortfolioReadyProjects()
        if (error) {
            toast("Failed to fetch projects", {
                description: error,
            })
            setLoading(false)
            return
        }
        setProjects(data || [])
        setLoading(false)
    }
    useEffect(() => {
        fetchProjects()
    }, [])
    return (
        <>
            <div className="p-8 flex flex-col justify-center items-center gap-8 md:gap-16">
                <h1 className="text-4xl font-nunito font-extrabold">Projects</h1>
                {!loading && projects.map((project, idx) => (
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
                {loading && Array.from({ length: LOADING_PROJECTS }).map((_, idx) => (
                    <Project
                        key={idx}
                        title=""
                        description=""
                        images={[]}
                        projectLink=""
                        githubLink=""
                        imageFirst={idx % 2 === 0}
                        loading
                    />
                ))}
            </div>
        </>
    )
}

export { ProjectsSection }
