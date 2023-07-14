import HeroSection from './pages/home/hero-section'
import { HighlightedProjects } from './pages/home/highlighted-projects '
import { Knowledge } from './pages/home/knowledge'
import { WorkExperince } from './pages/home/work-experience'
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
          iconSvg
          url
        }
        knownTechs(first: 20) {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
      }
    }
  `


  return fetchHygraphQuery(
    query,
    60 * 60 * 24
  )
}

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <Knowledge techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperince experience={workExperiences} />
    </>
  )
}
