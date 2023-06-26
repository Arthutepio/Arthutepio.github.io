import HeroSection from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects '
import { Knowledge } from './components/pages/home/knowledge'
import { WorkExperince } from './components/pages/home/work-experience'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

export const metadata = {
  title: 'Home',
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
  )
}

export default async function Home() {
  const { page } = await getPageData()


  return (
    <>
      <HeroSection />
      <Knowledge />
      <HighlightedProjects />
      <WorkExperince />
    </>
  )
}
