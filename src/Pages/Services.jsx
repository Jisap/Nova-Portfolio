import { Icon } from "@iconify/react"
import CountUp from "../Components/CountUp"
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
          <div className="ser-item border border-gray-50/20 text-center rounded-sm relative" key={service.id}>
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

      <div className="grid grid-cols-1 py-[8%] xl:py-[4%] sm:grid-cols-3 gap-12 px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="text-center">
          <h2 className="text-7xl sm:text-8xl font-bold leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white"
            }}
          >
            <CountUp start={0} end={23} duration={2} />
          </h2>

          <p className="text-gray-300 text-lg font-semibold mt-3">
            Team members
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-7xl sm:text-8xl font-bold leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white"
            }}
          >
            <CountUp start={0} end={99} duration={2.5} />+
          </h2>

          <p className="text-gray-300 text-lg font-semibold mt-3">
            Completed projects
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-7xl sm:text-8xl font-bold leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white"
            }}
          >
            <CountUp start={0} end={12} duration={2.8} />M
          </h2>

          <p className="text-gray-300 text-lg font-semibold mt-3">
            Lines of code
          </p>
        </div>
      </div>

      <div className="w-full py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="banner bg-cover object-bottom bg-center h-[800px] relative">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
            <div className="flex items-center justify-center w-[250px] h-[250px] relative border border-white rounded-full">
              <svg
                viewBox="0 0 300 300"
                className="absolute w-full h-full animate-[spin_20s_linear_infinite]"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                  />
                </defs>

                <text
                  fill="#fff"
                  fontSize="16"
                  fontWeight="600"
                  letterSpacing="0"
                  textLength="1000"
                >
                  <textPath href="#circlePath" staroffset="0" textLength="754" lengthAdjust="spacing">
                    - PLAY VIDEO - PLAY VIDEO - PLAY VIDEO -
                  </textPath>
                </text>
              </svg>

              <div className="border border-white rounded-[50%]">
                <div className="roudned-full p-6 flex items-center justify-center">
                  <Icon
                    icon="ri:play-fill"
                    width="70"
                    height="70"
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="flex flex-col gap-5 mt-20 relative">
          <li className="w-full flex items-start justify-between lg:flex-row flex-col">
            <span className="w-full lg:w-3xl font-semibold text-2xl text-white">
              Our Mission
            </span>

            <p className="w-full lg:w-[90%] xl:w-[80%] text-md sm:text-xl mt-2 text-gray-300">
              From the moment our company was founded we have helped our clients find exceptional
              solutions for their bussinesses memorable brands and digital products. Our expertise grows
              with each year, and our accumulated experience. helps us approach new challenges with confidence and creativity.
            </p>
          </li>
          <li className="w-full flex items-start justify-between lg:flex-row flex-col">
            <span className="w-full lg:w-3xl font-semibold text-2xl text-white">
              Our Goal
            </span>

            <p className="w-full lg:w-[90%] xl:w-[80%] text-md sm:text-xl my-2 text-gray-300">
              Our goal is to deliver amazing experiences thar make people talk, and build
              strategic value for brands, tech, entertainment, arts & culture.
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Services