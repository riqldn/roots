import { getAllWorks } from '@/app/contentful'
import NavBar from '@/app/components/NavBar'
import Foot from '@/app/components/Foot'
import PortfolioClient from '@/app/components/PortfolioClient'

export default async function PortfolioPage() {
  const works = await getAllWorks()
  return (
    <>
      <NavBar />
      <PortfolioClient works={works} />
      <Foot />
    </>
  )
}