import HeroSection from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects '
import { Knowledge } from './components/pages/home/knowledge'
import { WorkExperince } from './components/pages/home/work-experience'

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
