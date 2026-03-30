// app/page.tsx — no "use client" at the top
import NavBar from "../components/NavBar";
import HomeClient from "../components/HomeClient";
import { getEngagements } from "../contentful";
import ServicesClient from "../components/ServicesClient";

export default async function Services() {
  const engagements = await getEngagements();
 
  return (
    <>
      <ServicesClient engagementModels={engagements} />
    </>
  );
}
