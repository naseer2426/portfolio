import './intro.css'
import { FC } from 'react';
import me from '../../assets/Me.png'
import { Header } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const IntroSection: FC = () => {
    const onLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/naseer-ahmed-khan-ntu/', '_blank')
    }
    return (
        <>
            <div className="h-svh flex flex-col">
                <Header />
                <div className='flex px-8 md:px-16 h-full gap-8 flex-row items-center justify-between'>
                    <div className='flex gap-8 flex-col max-w-md'>
                        <div className='flex gap-4 flex-col'>
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                plugins={[
                                    Autoplay({
                                        delay: 1500,
                                    }),
                                ]}
                                orientation='vertical'
                            >
                                <CarouselContent className='max-h-[3rem]'>
                                    <CarouselItem>
                                        <h2 className='text-accent role'>Backend Engineer</h2>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <h2 className='text-accent role'>Frontend Engineer</h2>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <h2 className='text-accent role'>Rubik's Cube Enthusiast</h2>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <h2 className='text-accent role'>Physics Lover</h2>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <h2 className='text-accent role'>Singer</h2>
                                    </CarouselItem>
                                </CarouselContent>
                            </Carousel>
                            <h1 className='text-4xl md:text-6xl font-extrabold font-greeting name'>Hey! My name is<br />Naseer Ahmed Khan</h1>
                        </div>
                        <p>Hi I am noob software developer trying to learn new things. To be updated using ChatGPT in the future</p>
                        <div className='flex flex-row gap-4'>
                            <Button variant='default' onClick={onLinkedinClick}>Linkedin</Button>
                            <Button variant='outline'>Projects</Button>
                        </div>
                    </div>

                    <div>
                        <img src={me} className='hidden md:block md:h-[32rem] me'></img>
                    </div>
                </div>
            </div>
        </>

    )
}

export {
    IntroSection,
}
