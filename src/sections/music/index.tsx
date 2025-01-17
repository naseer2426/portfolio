import { FC } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import './music.css'

export const MusicSection: FC = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-indigo-950 to-trasnsparent relative p-8 flex flex-col justify-center items-center gap-8 md:gap-16">
                <div className="custom-shape-divider-top-1737139328">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <h1 className="text-4xl font-nunito font-extrabold mt-8 md:mt-24 lg:mt-32">Music</h1>
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
