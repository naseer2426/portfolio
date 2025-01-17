import { IntroSection } from "./sections/intro"
import { MusicSection } from "./sections/music"
import { ProjectsSection } from "./sections/projects"
import { Toaster } from "@/components/ui/sonner"

function App() {

  return (
    <>
      <IntroSection />
      <ProjectsSection />
      <MusicSection />
      <Toaster />
    </>
  )
}

export default App
