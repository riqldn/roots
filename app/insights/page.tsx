import { getAllReports } from '@/app/contentful'
import NavBar from '@/app/components/NavBar'
import Foot from '@/app/components/Foot'
import InsightClient from '@/app/components/InsightClient'

export default async function PortfolioPage() {
  const reports = await getAllReports()
  return (
    <>
      <NavBar />
      <InsightClient reports={reports} />
      <Foot />
    </>
  )
}