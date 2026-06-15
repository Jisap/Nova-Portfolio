import { useNavigate, useParams } from "react-router-dom";
import { teamMembers } from "./Team";
import { useEffect } from "react";
import SectionBanner from "../Components/SectionBanner";




const TeamDetails = () => {

  const { id } = useParams();
  const member = teamMembers.find((member) => member.id === parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    if (!member) navigate("/team");
  }, [member, navigate]);

  if (!member) return null;

  return (
    <SectionBanner
      title={member.name}
      subtitle="Meet our creativity company family."
      breadcrumbs={[
        { label: "Home", path: "/index" },
        { label: "Our Team", path: "/team" },
        { label: member.name, path: `/team/${member.id}` }
      ]}
    />
  )
}

export default TeamDetails