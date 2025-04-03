import { FC } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import github from '../../../public/github.svg'
import externalLink from '../../../public/external-link.svg'
import Image from "next/image";

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
        <div className={"h-fit w-fit lg:flex" + (props.imageFirst ? "" : " lg:flex-row-reverse")}>
            <div className="bg-secondary p-8 flex items-center justify-center">
                <Carousel className="max-w-[70vw] sm:max-w-md">
                    <CarouselContent>
                        {props.images.map((imgUrl, index) => (
                            <CarouselItem key={index}>
                                <div className="h-full flex justify-center items-center">
                                    <Image
                                        src={imgUrl}
                                        width={500}
                                        height={500}
                                        className="sm:max-w-md rounded-2xl"
                                        alt="Project Image"
                                        unoptimized
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className={"bg-muted p-8"}>
                <div className="flex flex-col gap-8 max-w-[70vw] sm:max-w-md">
                    <h1 className="text-2xl font-semibold font-nunito">{props.title}</h1>
                    <p className="text-[#D1D5DB] font-nunito">{props.description}</p>
                    <div className="flex flex-row gap-2 flex-wrap">
                        {props.tags?.map((tag, index) => (
                            <div key={index} className="bg-[#374151] text-[#D1D5DB] font-nunito p-2 rounded-3xl w-fit">{tag}</div>
                        ))}
                    </div>
                    <div className="flex flex-row gap-8 flex-wrap">
                        <Image src={github} alt="github" className="max-w-sm hover:cursor-pointer" onClick={onGithubClick}></Image>
                        {props.projectLink && <Image src={externalLink} alt="external-link" className="max-w-sm hover:cursor-pointer" onClick={onProjectClick}></Image>}
                    </div>
                </div>
            </div>
        </div>
    )
}


export { Project }
