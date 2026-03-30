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
