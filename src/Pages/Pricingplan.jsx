import SectionBanner from "../Components/SectionBanner"

const Pricingplan = () => {
  return (
    <>
      <SectionBanner
        title="Pricing Plan"
        subtitle="Its helps you choose prices to maximise."
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Pricing Plans", path: "/pricingplan" }
        ]}
      />
    </>
  )
}

export default Pricingplan