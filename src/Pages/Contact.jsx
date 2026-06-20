import SectionBanner from "../Components/SectionBanner"

const Contact = () => {
  return (
    <>
      <SectionBanner
        title="Contact"
        subtitle="Solving bussinnes problems everytime"
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Contact", path: "/contact" }
        ]}
      />
    </>
  )
}

export default Contact