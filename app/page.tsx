import HeroSection from './pages/home/hero-section'
import { HighlightedProjects } from './pages/home/highlighted-projects'
import { Knowledge } from './pages/home/knowledge'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Knowledge />
      <HighlightedProjects />
    </>
  )
}
