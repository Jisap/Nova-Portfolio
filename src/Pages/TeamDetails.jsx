import { Link, useNavigate, useParams } from "react-router-dom";
import { teamMembers } from "./Team";
import { useEffect } from "react";
import SectionBanner from "../Components/SectionBanner";
import { Icon } from "@iconify/react";
import ServiceItem from "../Components/ServiceItem";
import serviceicon1 from "../assets/service-icon1.png"
import serviceicon2 from "../assets/service-icon2.png"
import serviceicon3 from "../assets/service-icon3.png"
import serviceicon4 from "../assets/service-icon4.png"
import serviceicon5 from "../assets/service-icon5.png"

const expertiseHighlights = [
  {
    text: "Far curiosity incommode now led smallness allowance.",
    icon: "mdi:certificate-outline",
  },
  {
    text: "Favour bed assure son things yet.",
    icon: "mdi:shield-check-outline",
  },
  {
    text: "She consisted consulted elsewhere happiness.",
    icon: "mdi:clipboard-check-outline",
  },
  {
    text: "Window donws you new shade drift hopes small.",
    icon: "mdi:account-hard-hat-outline",
  },
  {
    text: "Interest discretion estimating on stimulated.",
    icon: "mdi:check-decagram-outline",
  },
];

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


const TeamDetails = () => {

  const { id } = useParams();
  const member = teamMembers.find((member) => member.id === parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    if (!member) navigate("/team");
  }, [member, navigate]);

  if (!member) return null;

  return (
    <>
      <SectionBanner
        title={member.name}
        subtitle="Meet our creativity company family."
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Our Team", path: "/team" },
          { label: member.name, path: `/team/${member.id}` }
        ]}
      />

      {/* Team Info */}
      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="w-full border border-white h-auto xl:h-[600px] flex justify-between flex-col xl:flex-row items-start gap-10 xl:gap-4 relative xl:p-0 lg:p-20 sm:p-10 p-5">
          {/* El div de la imagen tiene una altura de 600px + 80px de padding = 680px, pero el padre solo tiene 600px por eso se desborda por el bottom  */}
          <div className="w-full xl:w-fit h-[600px] xl:h-full bg-white xl:p-0 m-0 xl:m-20 rounded-sm overflow-hidden">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="w-full xl:w-[60%] xl:p-20 text-white">
            <h4 className="text-5xl font-semibold">
              {member.name}
            </h4>

            <span className="text-xl text-gray-300">{member.role}</span>

            <ul>
              <li className="py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">Age</span>
                <p className="text-gray-300/80">{member.age}</p>
              </li>
              <li className="py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">Location</span>
                <p className="text-gray-300/80">{member.location}</p>
              </li>
              <li className="py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">Email</span>
                <p className="text-gray-300/80">{member.email}</p>
              </li>
              <li className="py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">Phone</span>
                <p className="text-gray-300/80">{member.phone}</p>
              </li>
            </ul>

            <div className="text-white flex items-center mt-5 gap-5">
              <Link to="https://facebook.com" className="cursor-pointer">
                <Icon
                  icon="ri-facebook-line"
                  width={24}
                  height={24}
                  className="border border-white min-w-10 min-h-10 p-1 rounded-sm"
                />
              </Link>
              <Link to="https://linkedin.com" className="cursor-pointer">
                <Icon
                  icon="flowbite:linkedin-solid"
                  width={24}
                  height={24}
                  className="border border-white min-w-10 min-h-10 p-1 rounded-sm"
                />
              </Link>
            </div>
          </div>
        </div>

        <p className="text-white pt-5 xl:pt-0 xl:mt-30 pb-4 text-sm md:text-lg">
          Our knowledgeable cost management experts understand the importance of delivering a project to meet your
          expectations in terms of cost, time, and quality. We will work with you to to find the right, flexible and
          valuable solutions. No matter what sector you operate in, or the <b>scale of your project</b>, out team have
          the experience and know-how to support you with your goals.
        </p>

        <p className="text-white text-sm md:text-lg">
          In Addition to construccion consultancy services <b> Nova is a global leader in testing</b> , inspection
          and certification (TIC) and we have more than 19+ years of experience meaning thar we also can assist you in other
          areas of your business if needed.
        </p>

        <ul className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {expertiseHighlights.map((item, index) => (
            <li
              key={index}
              className="group flex items-start gap-3 text-white/80 text-sm md:text-lg transition-colors duration-300 hover:text-white"
            >
              <Icon
                icon={item.icon}
                width={24}
                height={24}
                className="text-amber-400 mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-300"
              />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Service  */}
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

export default TeamDetails