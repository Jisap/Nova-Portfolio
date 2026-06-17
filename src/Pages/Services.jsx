import { Icon } from "@iconify/react"
import CountUp from "../Components/CountUp"
import SectionBanner from "../Components/SectionBanner"
import serviceicon1 from "../assets/service-icon1.png"
import serviceicon2 from "../assets/service-icon2.png"
import serviceicon3 from "../assets/service-icon3.png"
import serviceicon4 from "../assets/service-icon4.png"
import serviceicon5 from "../assets/service-icon5.png"
import ServiceItem from "../Components/ServiceItem"
import { Link } from "react-router-dom"
import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.png"
import brand3 from "../assets/brand3.png"
import brand4 from "../assets/brand4.png"
import brand5 from "../assets/brand5.png"
import brand6 from "../assets/brand6.png"
import brand7 from "../assets/brand7.png"


const servicesPage = [
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

const services = [
  {
    number: "01.",
    title: "Brand Strategy",
    description:
      "We work with you to understand your business goals and craft strategies that deliver measurable results. Our approach combines creativity, technology, and market insights to help you stand out.",
    icon: serviceicon1,
  },
  {
    number: "02.",
    title: "UI / UX Design",
    description:
      "We design intuitive interfaces and meaningful experiences that connect brands with their audiences across every touchpoint.",
    icon: serviceicon2,
  },
  {
    number: "03.",
    title: "Web Development",
    description:
      "We build fast, scalable and accessible web products using modern stacks, clean architecture and a strong attention to detail.",
    icon: serviceicon3,
  },
  {
    number: "04.",
    title: "Motion & Branding",
    description:
      "We bring brands to life through motion design, micro-interactions and visual systems crafted to feel alive and consistent.",
    icon: serviceicon4,
  },
  {
    number: "05.",
    title: "Creative Direction",
    description:
      "We guide the creative process end-to-end, aligning concept, design and storytelling with the goals of your business.",
    icon: serviceicon5,
  },

];

const brands = [
  { id: 1, image: brand1, link: "https://www.google.com" },
  { id: 2, image: brand2, link: "https://www.google.com" },
  { id: 3, image: brand3, link: "https://www.google.com" },
  { id: 4, image: brand4, link: "https://www.google.com" },
  { id: 5, image: brand5, link: "https://www.google.com" },
  { id: 6, image: brand6, link: "https://www.google.com" },
  { id: 7, image: brand7, link: "https://www.google.com" },
  { id: 8, image: brand1, link: "https://www.google.com" },
];

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
        {servicesPage.map((service) => (
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

      <div className="service py-[2%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="service-content">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            What we do
          </span>

          <h2 className="text-3xl sm:text-6xl font-semibold max-w-3xl my-10 leading-tight mt-5 text-white">
            We're a full-service agency.
          </h2>
        </div>

        <div className="flex flex-col w-full mt-8">
          {services.map((service) => (
            <ServiceItem
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>

      {/* Get in touch */}
      <div className="py-[8%]">
        <div className="contact py-[8%] px-[2%] md:px-[8%] xl:px-[12%] h-[800px] relative">
          <div className="team-conten w-full lg:w-[60%] mb-10">
            <div>
              <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
                Get in Touch
              </span>

              <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white">
                Send Us Your Bright Ideas
              </h2>

              <Link to="/contact" className="text-primary text-3xl lg:text-5xl font-semibold">
                Info@yourcompany.com
              </Link>

              <p className="text-gray-100 text-xl pt-5">
                123 Business Avenue, Los Angeles
              </p>
            </div>

            <div className="contact-image">
              <div className="cat-img-circle img-circle--1"></div>
              <div className="cat-img-circle img-circle--2"></div>
              <div className="cat-img-circle img-circle--3"></div>

              <ul className="text-white grid grid-cols-2 gap-10 absolute right-0 bottom-60 social-icons">
                <li>
                  <Link to="/" className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center">
                    <Icon
                      icon="ri:facebook-fill"
                      width="44"
                      height="44"
                      className="text-black bg-white p-2 rounded-full"
                    />

                    <span>
                      Facebook
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center">
                    <Icon
                      icon="iconoir:instagram"
                      width="44"
                      height="44"
                      className="text-black bg-white p-2 rounded-full"
                    />

                    <span>
                      Instagram
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center">
                    <Icon
                      icon="line-md:twitter-x"
                      width="44"
                      height="44"
                      className="text-black bg-white p-2 rounded-full"
                    />

                    <span>
                      Twitter / X
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center">
                    <Icon
                      icon="ri:linkedin-fill"
                      width="44"
                      height="44"
                      className="text-black bg-white p-2 rounded-full"
                    />

                    <span>
                      Linkedin
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className="brand py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="brand-conten w-full lg:w-[60%] mb-10">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Fantastic and Premium Clients
          </span>

          <h2 className="text-4xl md:text-3xl lg:text-6xl font-semibold sm:max-w-5xl mt-5 leading-tight text-white">
            We Have Had the Pleasure ofWorking with some Clients
          </h2>
        </div>

        <div className="brand-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={brand.link}
              className="brand-item flex cursor-pointer border border-gray-50/20 p-5 relative justify-center items-center"
            >
              <img
                src={brand.image}
                alt="Brand Image"
                className="object-contain"
              />
              <span>View Website</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services