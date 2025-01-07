import './intro.css'
import { FC } from 'react';
import me from '../../assets/Me.png'
import { Header } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import config from '@/config/config.json'

const IntroSection: FC = () => {
    const onLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/naseer-ahmed-khan-ntu/', '_blank')
    }
    return (
        <>
            <div className="h-svh flex flex-col">
                <Header />
                <div className='flex flex-col px-8 mt-8 h-full gap-12 items-center md:mt-0 md:justify-between md:flex-row md:px-16'>
                    <div className='flex gap-8 flex-col max-w-md'>
                        <div className='flex gap-4 flex-col'>
                            <SkillCaraoursel />
                            <h1 className='text-4xl md:text-5xl lg:text-6xl lg:min-w-max font-extrabold font-greeting name'>Hey! My name is<br />Naseer Ahmed Khan</h1>
                        </div>
                        <p>Hi I am noob software developer trying to learn new things. To be updated using ChatGPT in the future</p>
                        <div className='flex flex-row gap-4'>
                            <Button variant='default' onClick={onLinkedinClick}>Linkedin</Button>
                            <Button variant='outline'>Projects</Button>
                        </div>
                    </div>
                    <div className='size-56 md:size-64 lg:size-72'>
                        <img src={me} className='me'></img>
                    </div>
                </div>
            </div>
        </>

    )
}

const SkillCaraoursel: FC = () => {
    const skills = config.skills
    return (
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
                {skills.map((skill, index) => (
                    <CarouselItem key={index}>
                        <h2 className='text-accent skill'>{skill}</h2>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export {
    IntroSection,
}
