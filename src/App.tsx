import { IntroSection } from "./sections/intro"
import { ProjectsSection } from "./sections/projects"
import { Toaster } from "@/components/ui/sonner"

function App() {

  return (
    <>
      <IntroSection />
      <ProjectsSection />
      <Toaster />
    </>
  )
}

export default App
