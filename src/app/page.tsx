import { GithubProject, listPortfolioReadyProjects } from "@/api/github";
import { fetchPlaylistVideos } from "@/api/youtube";
import { IntroSection } from "@/sections/intro";
import { MusicSection } from "@/sections/music";
import { ProjectsSection } from "@/sections/projects";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Naseer's Portfolio",
  description: 'Hey there I am Naseer! My portfolio houses some of my favorite projects! Enjoy!',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
  keywords: [
    'Naseer',
    'Naseer Ahmed Khan',
    'Portfolio',
    'Projects',
    'Youtube',
    'Github',
    'Software Engineer',
    'Developer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Developer',
    'Software Engineer'
  ],
}

type HomeData = {
  projects: GithubProject[]
  videoIds: string[]
}

export async function fetchHomeData(): Promise<HomeData> {
  const projects = await listPortfolioReadyProjects()
  const videoIds = await fetchPlaylistVideos()
  return {
    projects: projects.data || [],
    videoIds: videoIds
  }
}

export default async function Home() {
  const { projects, videoIds } = await fetchHomeData()
  return (
    <>
      <IntroSection />
      <ProjectsSection projects={projects} />
      <MusicSection videoIds={videoIds} />
    </>

  );
}
