import { getAllReports } from '@/app/contentful'
import NavBar from '@/app/components/NavBar'
import Foot from '@/app/components/Foot'
import ReportClient from '@/app/components/ReportClient'

export default async function PortfolioPage() {
  const reports = await getAllReports()
  return (
    <>
      <NavBar />
      <ReportClient reports={reports} />
      <Foot />
    </>
  )
}