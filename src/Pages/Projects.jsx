import { useState } from "react"
import SectionBanner from "../Components/SectionBanner"
import project1 from "../assets/project-01.jpg"
import project2 from "../assets/project-02.jpg"
import project3 from "../assets/project-03.jpg"
import project4 from "../assets/project-04.jpg"
import project5 from "../assets/project-05.jpg"
import project6 from "../assets/project-06.jpg"
import project7 from "../assets/project-07.jpg"
import project8 from "../assets/project-08.jpg"
import { Link } from "react-router-dom"

const projects = [
  {
    id: 1,
    image: project1,
    category: "Branding",
    title: "Museums Art Concept",
    category: "Branding",
  },
  {
    id: 2,
    image: project2,
    category: "Marketing",
    title: "Market Economy Graphics",
    category: "Marketing",
  },
  {
    id: 3,
    image: project3,
    category: "Design",
    title: "Headphones 3D Rendering",
    category: "Design",
  },
  {
    id: 4,
    image: project4,
    category: "Branding",
    title: "Product Packaging Style",
    category: "Branding",
  },
  {
    id: 5,
    image: project5,
    title: "Interior Design for Modern Homes",
    description: "Creating personalized living spaces with contemporary touches.",
    category: "Design"
  },
  {
    id: 6,
    image: project6,
    title: "Modern Villa Project",
    description: "Luxurious and sophisticated living with modern architectural elements.",
    category: "Architecture"
  },
  {
    id: 7,
    image: project7,
    title: "Professional Photography Session",
    description: "High-quality visuals that tell compelling stories.",
    category: "Photography"
  },
  {
    id: 8,
    image: project8,
    title: "Modern Residential Architecture",
    description: "Innovative housing solutions blending style and functionality.",
    category: "Architecture"
  }
];

const categories = [
  "All Projects",
  "Branding",
  "Marketing",
  "Design",
  "Architecture",
  "Photography",
];

const Projects = () => {

  const [filter, setFilter] = useState("All Projects");
  const filteredData = filter === "All Projects"
    ? projects
    : projects.filter(item => item.category === filter);


  return (
    <>
      <SectionBanner
        title="Our Projects"
        subtitle="Creative studio at the intersection of art, designed technology."
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Our Proejcts", path: "/projects" }
        ]}
      />

      <div className="py-[8%] px-[5%] xl:px-[12%] flex flex-col lg:flex-row">
        <div className="lg:w-[25%] p-5 rounded-lg">
          <ul className="text-gray-400 space-y-5 text-xl">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => setFilter(category)}
                  className={`cursor-pointer hover:text-white transition-all duration-300
                    ${filter === category ? "text-white font-semibold" : ""}
                  `}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-14">
          {filteredData.map((project) => (
            <div key={project.id} className="border-b border-gray-300/20 p-5 rounded-lg group">
              <div className="h-[350px] w-full rounde-lg overflow-hidden mb-5">
                <img src={project.image} alt="" className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300" />
              </div>

              <Link to={`/projects/${project.id}`}>
                <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm">
                  {project.category}
                </span>

                <h3 className="text-2xl text-white sm:text-3xl font-semibold mt-2 hover:text-primary duration-300 transition-all">
                  {project.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>


  )
}

export default Projects