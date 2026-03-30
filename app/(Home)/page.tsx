// app/page.tsx — no "use client" at the top
import NavBar from "../components/NavBar";
import HomeClient from "../components/HomeClient";
import { getWorks, getCountries, getSectors } from "../contentful";

export default async function Home() {
  const works = await getWorks();
  const countries = await getCountries();
  const sectors = await getSectors();
  return (
    <>
      <NavBar />
      <HomeClient sectors={sectors} works={works} countries={countries} />
    </>
  );
}
