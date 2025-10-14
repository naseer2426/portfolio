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
        <div className={`group relative rounded-2xl h-fit w-fit lg:flex transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(117,60,170,0.3)] ${props.imageFirst ? "" : " lg:flex-row-reverse"}`}>
            {/* Hover gradient overlay from primary to accent */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/25 to-accent/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Image Section with Glass Effect */}
            <div className="relative bg-secondary/20 backdrop-blur-md p-8 flex items-center justify-center border border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-visible">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 rounded-lg"></div>
                <Carousel className="max-w-[70vw] sm:max-w-md relative z-10">
                    <CarouselContent>
                        {props.images.map((imgUrl, index) => (
                            <CarouselItem key={index}>
                                <div className="h-full flex justify-center items-center">
                                    <Image
                                        src={imgUrl}
                                        width={500}
                                        height={500}
                                        className="sm:max-w-md rounded-2xl transition-all duration-300 group-hover:shadow-lg"
                                        alt="Project Image"
                                        unoptimized
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm border-primary/30 hover:border-primary/60 hover:bg-background/95 transition-all duration-300 shadow-lg" />
                    <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm border-primary/30 hover:border-primary/60 hover:bg-background/95 transition-all duration-300 shadow-lg" />
                </Carousel>
            </div>

            {/* Content Section with Glass Effect */}
            <div className="relative bg-muted/20 backdrop-blur-md p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-accent/5 rounded-lg"></div>
                <div className="flex flex-col gap-8 max-w-[70vw] sm:max-w-md relative z-10">
                    <h1 className="text-2xl font-semibold font-nunito text-foreground group-hover:text-primary transition-colors duration-300">{props.title}</h1>
                    <p className="text-[#D1D5DB] font-nunito leading-relaxed">{props.description}</p>
                    <div className="flex flex-row gap-2 flex-wrap">
                        {props.tags?.map((tag, index) => (
                            <div
                                key={index}
                                className="w-fit rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 px-3 py-1 text-foreground/80 hover:border-primary/40 hover:bg-gradient-to-r hover:from-primary/30 hover:to-accent/30 hover:scale-105 transition-all duration-300 cursor-default"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row gap-8 flex-wrap">
                        <Image
                            src={github}
                            alt="github"
                            className="max-w-sm hover:cursor-pointer hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(117,60,170,0.5)]"
                            onClick={onGithubClick}
                        />
                        {props.projectLink && (
                            <Image
                                src={externalLink}
                                alt="external-link"
                                className="max-w-sm hover:cursor-pointer hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,245,112,0.5)]"
                                onClick={onProjectClick}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}


export { Project }
