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
import team1 from "../assets/team-01.png"
import team2 from "../assets/team-02.png"
import team3 from "../assets/team-03.png"
import team4 from "../assets/team-04.png"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.png"
import brand3 from "../assets/brand3.png"
import brand4 from "../assets/brand4.png"
import brand5 from "../assets/brand5.png"
import brand6 from "../assets/brand6.png"
import brand7 from "../assets/brand7.png"
import SectionBanner from "../Components/SectionBanner"

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

const members = [
  {
    id: 1,
    name: "Aarav Rao",
    role: "UI/UX Designer",
    img: team1,
    letter: "A"
  },
  {
    id: 2,
    name: "Diya mehra",
    role: "Digital Marketer",
    img: team2,
    letter: "D"
  },
  {
    id: 3,
    name: "Karan Thakor",
    role: "Full-Stacl Developer",
    img: team3,
    letter: "K"
  },
  {
    id: 4,
    name: "Sara Thomas",
    role: "Content Strategist",
    img: team4,
    letter: "S"
  },
];

const testimonials = [
  {
    id: 1,
    text: "Their high level of customer service. Always available and quick to respond. They exceeded all expectations.",
    name: "Jessica Brown",
    role: "Design Quality",
    rating: 4.5,
  },
  {
    id: 2,
    text: "Working with them was seamless. They understood our vision and brought it to life perfectly. I will work with them again.",
    name: "Mark Johnson",
    role: "Creative Director",
    rating: 5.0,
  },
  {
    id: 3,
    text: "The results speak for themselves. Our engagement increased by 300% in just one quarter. Excellent work.",
    name: "Emily Carter",
    role: "Marketing Manager",
    rating: 4.8,
  },
  {
    id: 4,
    text: "Highly recommend! Professional, fast, and the final product exceeded all expectations.",
    name: "David Wilson",
    role: "Project Lead",
    rating: 4.9,
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

const About = () => {
  return (
    <>
      <SectionBanner
        title="About Us"
        subtitle="Creative studio at the intersection of art, design and technology."
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "About us", path: "/about" },
        ]}
      />

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

      <div className="team py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="team-conten w-full lg:w-[60%] mb-10">
          <div>
            <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
              Experts Team Members
            </span>

            <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white">
              We do awesome Services for out clients.
            </h2>
          </div>
        </div>

        <div className="team-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
          {members.map((member) => (
            <div
              key={member.id}
              className="team-item relative overflow-hidden text-white border border-gray-50/20 h-[600px] md:h-[740px] group flex flex-col justify-between"
            >
              {/* Description */}
              <div className="desc p-6 md:p-8">
                <div className="mb-4">
                  <span className="block text-3xl md:text-5xl group-hover:text-black font-bold leading-tight transition-colors duration-300">
                    {member.name}
                  </span>

                  <span className="block font-semibold text-gray-100 text-sm md:text-md group-hover:text-black transition-colors duration-300">
                    {member.role}
                  </span>
                </div>

                {/* social links */}
                <div className="flex gap-3">
                  <Link
                    to="#"
                    className="border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-black transition-colors duration-300"
                  >
                    <Icon
                      icon="ri:facebook-fill"
                      width="24"
                      height="24"
                      className="group-hover:text-black transiton-transform duration-300 group-hover:scale-110"
                    />
                  </Link>

                  <Link
                    to="#"
                    className="border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-black transition-colors duration-300"
                  >
                    <Icon
                      icon="flowbite:linkedin-solid"
                      width="24"
                      height="24"
                      className="group-hover:text-black transiton-transform duration-300 group-hover:scale-110"
                    />
                  </Link>
                </div>
              </div>

              {/* Image + letter */}
              <div className="image relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto scale-100 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)]"
                />
              </div>

              <div
                className="num absolute -right-3 md:-right-5 bottom-0 text-[180px] sm:text-[220px] md:text-[300px] font-bold leading-[0.5] group-hover:text-primary pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)]"
                style={{
                  textShadow: "1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
                }}
              >
                <span>{member.letter}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="tst-content w-full lg:w-1/2 text-white">
          <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-5 leading-tight text-white">
            Testimonials
          </h2>
          <div className="font-normal text-xl flex items-center">
            4.5{" "}
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index} className="flex text-yellow-400 ml-2">
                <Icon
                  icon="material-symbols:star"
                  width="24"
                  height="24"
                  className="text-yellow-400"
                />
              </span>
            ))}
            <Icon
              icon="material-symbols:star-half"
              width="24"
              height="24"
              className="text-yellow-400"
            />{" "}
            rating from all clients
          </div>
        </div>

        <div className="w-full lg:w-1/2 border-l border-white ps-10">
          <Splide
            options={{
              type: "fade",
              rewind: true,
              autoplay: true,
              interval: 4000,
              pauseOnHover: true,
              arrows: false,
              pagination: false,
              speed: 800,
            }}
          >
            {testimonials.map((t) => (
              <SplideSlide key={t.id}>
                <div className="text-white">
                  <p className="text-white text-2xl md:text-3xl max-w-2xl leading-tight mb-6 font-medium">
                    {t.text}
                  </p>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {t.name}
                    </h3>

                    <span className="text-gray-300">
                      {t.role}
                    </span>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

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

export default About