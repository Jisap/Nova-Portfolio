import { Link } from "react-router-dom"
import title_icon from "../assets/title_icon.svg"
import { Icon } from "@iconify/react"
import aboutLogo from "../assets/novo-about-logo.png"
import CountUp from "../Components/CountUp"
import serviceicon1 from "../assets/service-icon1.png"
import serviceicon2 from "../assets/service-icon2.png"
import serviceicon3 from "../assets/service-icon3.png"
import serviceicon4 from "../assets/service-icon4.png"
import serviceicon5 from "../assets/service-icon5.png"
import ServiceItem from "../Components/ServiceItem"

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



const About = () => {
  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3">
          About Us
          <span className="absolute hidden sm:flex top-0 right-35 w-10 h-10">
            <img
              src={title_icon}
              alt="icon"
              className="w-full h-full"
            />
          </span>
        </h2>

        <p className="border-b-2 w-full pb-10 border-gray-300">
          Creative studio at the intersection of art, designand technology.
        </p>

        <ul className="flex gap-8 py-5">
          <li>
            <Link to="/index" className="font-normal text-white text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-normal text-white text-lg">
              About us
            </Link>
          </li>
        </ul>

      </div>

      <div className="about py-[20%] xl:py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10">
        <div className="about-content w-full lg:w-[60%]">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Welcome to Nova
          </span>

          <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-10 leading-tight text-white">
            A Design Agency Delivering Success by Winning Hearts
          </h2>

          <ul className="flex xl:flex-nowrap flex-wrap gap-5 lg:gap-2">
            <li className="w-full">
              <p className="text-md sm:text-xl mt-2 text-gray-300">
                From the moment our company was founded we have helped our clients find <b>exceptional solutions for their bussinesses</b> memorable brnds and digital
                products. Our expertise grows with each year, and our accumulated experience.
              </p>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-[40%] flex justify-center items-center mt-12">
          <div className="flex items-center justify-center w-[250px] h-[250px] relative border">
            <img
              src={aboutLogo}
              alt="aboutLogo"
              className="invert brightness-0"
            />
          </div>
        </div>
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
    </>
  )
}

export default About