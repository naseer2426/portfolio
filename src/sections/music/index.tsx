import { FC } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export const MusicSection: FC = () => {
    return (
        <>
            <div className="p-8 flex flex-col justify-center items-center gap-8 md:gap-16">
                <h1 className="text-4xl font-nunito font-extrabold">Music</h1>
                <Carousel className="w-[70vw] md:w-[60vw] lg:w-[50vw]">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <iframe src="https://www.youtube.com/embed/yPNa--zlLXI" className='aspect-video w-full h-full' />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}
