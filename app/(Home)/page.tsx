// app/page.tsx — no "use client" at the top
import NavBar from "../components/NavBar";
import HomeClient from "../components/HomeClient";
import { getWorks, getCountries, getSectors, getReports } from "../contentful";

export const revalidate = 60;

export default async function Home() {
  const works = await getWorks();
  const countries = await getCountries();
  const sectors = await getSectors();
  const reports = await getReports()
  return (
    <>
      <NavBar />
      <HomeClient reports={reports} sectors={sectors} works={works} countries={countries} />
    </>
  );
}
