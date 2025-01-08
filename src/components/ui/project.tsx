import { FC } from "react";
import githubIcon from '../../assets/github.svg'
import linkIcon from '../../assets/external-link.svg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type ProjectProps = {
    title: string
    description: string
    images: string[]
    projectLink: string | null
    githubLink: string
    tags?: string[]
    imageFirst: boolean
}
const Project: FC<ProjectProps> = (props: ProjectProps) => {
    const onGithubClick = () => {
        window.open(props.githubLink, '_blank')
    }
    const onProjectClick = () => {
        if (!props.projectLink) return
        window.open(props.projectLink, '_blank')
    }
    return (
        <div className={"h-fit w-fit md:flex" + (props.imageFirst ? "" : " md:flex-row-reverse")}>
            <div className="bg-secondary p-8 flex items-center w-fit">
                <Carousel className="max-w-2xs md:max-w-md">
                    <CarouselContent>
                        {props.images.map((imgUrl, index) => (
                            <CarouselItem key={index} className="w-fit">
                                <img src={imgUrl} className="max-w-2xs rounded-3xl md:max-w-md" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="bg-muted p-8 flex flex-col gap-8 md:max-w-md">
                <h1 className="text-2xl font-semibold font-playfair">{props.title}</h1>
                <p className="text-[#D1D5DB] font-playfair">{props.description}</p>
                <div className="flex flex-row gap-2 flex-wrap">
                    {props.tags?.map((tag, index) => (
                        <div key={index} className="bg-[#374151] text-[#D1D5DB] font-playfair p-2 rounded-3xl w-fit">{tag}</div>
                    ))}
                </div>
                <div className="flex flex-row gap-8 flex-wrap">
                    <img src={githubIcon} className="max-w-sm hover:cursor-pointer" onClick={onGithubClick}></img>
                    {props.projectLink && <img src={linkIcon} className="max-w-sm hover:cursor-pointer" onClick={onProjectClick}></img>}
                </div>
            </div>

        </div>
    )
}

export { Project }
