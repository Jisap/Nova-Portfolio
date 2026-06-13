import SectionBanner from "../Components/SectionBanner"

const Team = () => {
  return (
    <>
      <SectionBanner
        title="Our Team"
        subtitle="Meet our creativity company family."
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Team", path: "/team" },
        ]}
      />
    </>
  )
}

export default Team