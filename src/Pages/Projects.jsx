import SectionBanner from "../Components/SectionBanner"
import project1 from "../assets/project-01.jpg"
import project2 from "../assets/project-02.jpg"
import project3 from "../assets/project-03.jpg"
import project4 from "../assets/project-04.jpg"
import project5 from "../assets/project-05.jpg"
import project6 from "../assets/project-06.jpg"
import project7 from "../assets/project-07.jpg"
import project8 from "../assets/project-08.jpg"

const projects = [
  {
    id: 1,
    image: project1,
    category: "Branding",
    title: "Museums Art Concept",
  },
  {
    id: 2,
    image: project2,
    category: "Marketing",
    title: "Market Economy Graphics",
  },
  {
    id: 3,
    image: project3,
    category: "Design",
    title: "Headphones 3D Rendering",
  },
  {
    id: 4,
    image: project4,
    category: "Branding",
    title: "Product Packaging Style",
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

const Projects = () => {
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
    </>
  )
}

export default Projects