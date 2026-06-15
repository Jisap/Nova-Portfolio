import { Link } from "react-router-dom"
import SectionBanner from "../Components/SectionBanner"
import team1 from "../assets/team-01.png"
import team2 from "../assets/team-02.png"
import team3 from "../assets/team-03.png"
import team4 from "../assets/team-04.png"
import team5 from "../assets/team-05.jpg"
import team6 from "../assets/team-06.jpg"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

export const teamMembers = [
  {
    id: 1,
    name: "Aarav Rao",
    role: "UI/UX Designer",
    img: team1,
    age: "27 Years",
    location: "Mumbai, India",
    email: "aara@gmail.com",
    phone: "+91 8765 3234"
  },
  {
    id: 2,
    name: "Diya mehra",
    role: "Digital Marketer",
    img: team2,
    age: "28 Years",
    location: "Ahmedabad, India",
    email: "diya@gmail.com",
    phone: "+91 3256 9876"
  },
  {
    id: 3,
    name: "Karan Thakor",
    role: "Full-Stacl Developer",
    img: team3,
    age: "26 Years",
    location: "New York, USA",
    email: "karan@gmail.com",
    phone: "+91 4323 9876"
  },
  {
    id: 4,
    name: "Sara Thomas",
    role: "Content Strategist",
    img: team4,
    age: "25 Years",
    location: "Surat, India",
    email: "sara@gmail.com",
    phone: "+91 5678 2354"
  },
  {
    id: 5,
    name: "Alex Morgan",
    role: "UI/UX Designer",
    img: team5,
    age: "29 Years",
    location: "Toronto, Canada",
    email: "alex@gmail.com",
    phone: "+91 9877 4321"
  },
  {
    id: 6,
    name: "Olivia Rodriguez",
    role: "UI/UX Designer",
    img: team6,
    age: "30 Years",
    location: "London, UK",
    email: "olivia@gmail.com",
    phone: "+91 2345 5522"
  },
];

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

      <div className="py-[8%] px-[12%] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {teamMembers.map((member) => (
          <Link to={`/team/${member.id}`} key={member.id}>
            <div className="text-center">
              <div className="bg-white rounded-sm overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover w-full"
                />
              </div>

              <h4 className="text-2xl text-white mt-4 font-semibold">
                {member.name}
              </h4>

              <span className="text-lg text-gray-300">
                {member.role}
              </span>
            </div>

          </Link>
        ))}
      </div>
    </>
  )
}

export default Team