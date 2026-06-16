import SectionBanner from "../Components/SectionBanner"
import serviceicon1 from "../assets/service-icon1.png"
import serviceicon2 from "../assets/service-icon2.png"
import serviceicon3 from "../assets/service-icon3.png"
import serviceicon4 from "../assets/service-icon4.png"
import serviceicon5 from "../assets/service-icon5.png"

const services = [
  {
    id: 1,
    name: "Brand Creation",
    icon: serviceicon1,
    items: [
      "Brand Strategy",
      "Visual Identity",
      "Naming",
      "Toolkits",
      "Guidelines",
    ]
  },
  {
    id: 2,
    name: "Web Campaigns",
    icon: serviceicon2,
    items: [
      "Creative Direction",
      "Concepts",
      "Copywriting",
      "Social Media",
      "Creative Strategy",
    ]
  },
  {
    id: 3,
    name: "UX/UI Design",
    icon: serviceicon3,
    items: [
      "Native and Web Apps",
      "Campaigns / Brand Sites",
      "Machine Learning / AI",
      "Brand Design",
      "Product Animation Design",
    ]
  },
]

const Services = () => {
  return (
    <>
      <SectionBanner
        title="Our Services"
        subtitle="Our values and vaulated us to the top of the industry."
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Our Services", path: "/services" }
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 py-[8%] px-[2%] md:px-[8%] xl:px-[12%] overflow-x-hidden">
        {services.map((service) => (
          <div className="ser-item border border-gray-50/20 text-center rounded-sm relative">
            <div className="image bg-primary mx-auto w-30 h-30 md:w-40 md:h-40 p-8 rounded-full transform -translate-y-8 md:-translate-y-14">
              <img
                src={service.icon}
                alt="serviceIcon"
              />
            </div>

            <div className="service-info text-white p-8 pt-0">
              <h4 className="text-4xl font-semibold pb-4">
                {service.name}
              </h4>

              <ul className="space-y-5 text-gray-300">
                {service.items.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Services