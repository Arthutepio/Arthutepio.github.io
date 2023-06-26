import HeroSection from './pages/home/hero-section'
import { HighlightedProjects } from './pages/home/highlighted-projects'
import { Knowledge } from './pages/home/knowledge'
import { WorkExperince } from './pages/home/work-experience'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Knowledge />
      <HighlightedProjects />
      <WorkExperince />
    </>
  )
}
