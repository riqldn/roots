// app/page.tsx — no "use client" at the top
import NavBar from "../components/NavBar"
import HomeClient from "../components/HomeClient"
import { getWorks } from "../contentful"

export default async function Home() {
  const works = await getWorks()

  return (
    <>
      <NavBar />
      <HomeClient works={works} />
    </>
  )
}