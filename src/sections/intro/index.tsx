"use client"

import './intro.css'
import { FC } from 'react';
import { Header } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import config from '@/config/config.json'
import Image from "next/image";
import me from '../../../public/me.png'
import Link from 'next/link'
import github from '../../../public/github.svg'
import externalLink from '../../../public/external-link.svg'
import blog from '../../../public/blog.svg'

const IntroSection: FC = () => {
    const intro = config.intro
    return (
        <>
            <div className="relative h-max md:h-svh flex flex-col bg-gradient-to-t from-indigo-950 to-trasnsparent">
                <Header />
                <div className='flex flex-col p-8 h-full gap-12 items-center md:mt-0 md:justify-between md:flex-row md:px-16 md:pb-32'>
                    <div className='flex gap-4 md:gap-8 flex-col md:max-w-md lg:max-w-lg'>
                        <div className='flex gap-4 flex-col'>
                            <SkillCaraoursel />
                            <h1 className='text-[35px] md:text-5xl lg:text-7xl lg:min-w-max font-extrabold tracking-tight name'>
                                Hey! My name is
                                <br />
                                <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent'>Naseer Ahmed Khan</span>
                            </h1>
                        </div>
                        <p className='lg:text-xl leading-relaxed text-muted-foreground'>
                            {intro}
                        </p>
                        <div className='flex flex-row gap-4'>
                            <Link href='https://www.github.com/naseer2426' target='_blank' aria-label='Open GitHub profile in new tab'>
                                <Button
                                    variant='default'
                                    className='group gap-2 bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary-foreground font-mono bg-gradient-to-r from-primary/20 to-accent/20'>
                                    <Image src={github} alt='github' className='size-4 opacity-80 group-hover:opacity-100 transition-opacity' />
                                    <span>GitHub</span>
                                </Button>
                            </Link>
                            <Link href='/blog' aria-label='View blog posts'>
                                <Button
                                    variant='outline'
                                    className='group gap-2 border-primary/40 text-foreground hover:bg-primary/10 hover:text-foreground font-mono bg-gradient-to-r from-primary/20 to-accent/20'>
                                    <Image src={blog} alt='blog' className='size-4 opacity-80 group-hover:opacity-100 transition-opacity' />
                                    <span>Blog</span>
                                </Button>
                            </Link>
                            <Link href='https://www.linkedin.com/in/naseer-ahmed-khan-ntu/' target='_blank' aria-label='Open LinkedIn profile in new tab'>
                                <Button
                                    variant='outline'
                                    className='group gap-2 border-primary/40 text-foreground hover:bg-primary/10 hover:text-foreground font-mono bg-gradient-to-r from-primary/20 to-accent/20'>
                                    <Image src={externalLink} alt='external-link' className='size-4 opacity-80 group-hover:opacity-100 transition-opacity' />
                                    <span>Connect</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-56 mb-8 md:size-64 lg:size-96'>
                        <Image src={me} alt="Me" className='me' />
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1737134801">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='h-[60px] md:h-[195px] w-3/4 md:w-full'>
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
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
                        <div className="flex h-12">
                            <h2 className='font-mono text-sm md:text-base bg-clip-text text-muted-foreground'>
                                {skill}
                            </h2>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export {
    IntroSection,
}
