import { FC, useState } from "react";
import githubIcon from '../../assets/github.svg'
import linkIcon from '../../assets/external-link.svg'
import { Skeleton } from "@/components/ui/skeleton"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const DEFAULT_LOADING_TAGS = 5

type ProjectProps = {
    title: string
    description: string
    images: string[]
    projectLink: string | null
    githubLink: string
    tags?: string[]
    imageFirst: boolean
    loading?: boolean
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
                        {!props.loading && props.images.map((imgUrl, index) => (
                            <CarouselItem key={index}>
                                <div className="h-full flex justify-center items-center">
                                    <Image
                                        src={imgUrl}
                                        className="sm:max-w-md rounded-2xl"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                        {props.loading && <CarouselItem>
                            <div>
                                <Skeleton className="h-[25vh] w-[50vw] md:w-[40vw] lg:w-[30vw] rounded-2xl" />
                            </div>
                        </CarouselItem>}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className={"bg-muted p-8" + (props.loading ? " hidden" : "")}>
                <div className="flex flex-col gap-8 max-w-[70vw] sm:max-w-md">
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
            <div className={"bg-muted p-8" + (props.loading ? "" : " hidden")}>
                <div className="flex flex-col gap-8 max-w-[70vw] sm:max-w-md">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-[7vh] w-full" />
                    <div className="flex flex-row gap-2 flex-wrap">
                        {Array.from({ length: DEFAULT_LOADING_TAGS }).map((_, idx) => (
                            <Skeleton key={idx} className="h-8 w-[10vw] md:w-[5vw] ld:w-[2vw] rounded-3xl" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

type ImageProps = {
    src: string
    className?: string
}
const Image: FC<ImageProps> = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <>
            <Skeleton
                className={"h-[25vh] w-[50vw] md:w-[40vw] lg:w-[30vw] rounded-3xl" + (imageLoaded ? " hidden" : "")}
            />
            <img
                src={props.src}
                className={props.className as string + (imageLoaded ? "" : " hidden")}
                onLoad={() => {
                    setImageLoaded(true)
                }}
            />
        </>
    )
}

export { Project }
