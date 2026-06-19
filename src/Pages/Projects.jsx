// import { useState } from "react"
// import SectionBanner from "../Components/SectionBanner"
// import project1 from "../assets/project-01.jpg"
// import project2 from "../assets/project-02.jpg"
// import project3 from "../assets/project-03.jpg"
// import project4 from "../assets/project-04.jpg"
// import project5 from "../assets/project-05.jpg"
// import project6 from "../assets/project-06.jpg"
// import project7 from "../assets/project-07.jpg"
// import project8 from "../assets/project-08.jpg"
// import { Link } from "react-router-dom"

// const projects = [
//   {
//     id: 1,
//     image: project1,
//     category: "Branding",
//     title: "Museums Art Concept",
//     category: "Branding",
//   },
//   {
//     id: 2,
//     image: project2,
//     category: "Marketing",
//     title: "Market Economy Graphics",
//     category: "Marketing",
//   },
//   {
//     id: 3,
//     image: project3,
//     category: "Design",
//     title: "Headphones 3D Rendering",
//     category: "Design",
//   },
//   {
//     id: 4,
//     image: project4,
//     category: "Branding",
//     title: "Product Packaging Style",
//     category: "Branding",
//   },
//   {
//     id: 5,
//     image: project5,
//     title: "Interior Design for Modern Homes",
//     description: "Creating personalized living spaces with contemporary touches.",
//     category: "Design"
//   },
//   {
//     id: 6,
//     image: project6,
//     title: "Modern Villa Project",
//     description: "Luxurious and sophisticated living with modern architectural elements.",
//     category: "Architecture"
//   },
//   {
//     id: 7,
//     image: project7,
//     title: "Professional Photography Session",
//     description: "High-quality visuals that tell compelling stories.",
//     category: "Photography"
//   },
//   {
//     id: 8,
//     image: project8,
//     title: "Modern Residential Architecture",
//     description: "Innovative housing solutions blending style and functionality.",
//     category: "Architecture"
//   }
// ];

// const categories = [
//   "All Projects",
//   "Branding",
//   "Marketing",
//   "Design",
//   "Architecture",
//   "Photography",
// ];

// const Projects = () => {

//   const [filter, setFilter] = useState("All Projects");
//   const filteredData = filter === "All Projects"
//     ? projects
//     : projects.filter(item => item.category === filter);


//   return (
//     <>
//       <SectionBanner
//         title="Our Projects"
//         subtitle="Creative studio at the intersection of art, designed technology."
//         breadcrumbs={[
//           { label: "Home", path: "/index" },
//           { label: "Our Proejcts", path: "/projects" }
//         ]}
//       />

//       <div className="py-[8%] px-[5%] xl:px-[12%] flex flex-col lg:flex-row">
//         <div className="lg:w-[25%] p-5 rounded-lg">
//           <ul className="text-gray-400 space-y-5 text-xl">
//             {categories.map((category, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() => setFilter(category)}
//                   className={`cursor-pointer hover:text-white transition-all duration-300
//                     ${filter === category ? "text-white font-semibold" : ""}
//                   `}
//                 >
//                   {category}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="lg:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-14">
//           {filteredData.map((project) => (
//             <div key={project.id} className="border-b border-gray-300/20 p-5 rounded-lg group">
//               <div className="h-[350px] w-full rounde-lg overflow-hidden mb-5">
//                 <img src={project.image} alt="" className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300" />
//               </div>

//               <Link to={`/projects/${project.id}`}>
//                 <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm">
//                   {project.category}
//                 </span>

//                 <h3 className="text-2xl text-white sm:text-3xl font-semibold mt-2 hover:text-primary duration-300 transition-all">
//                   {project.title}
//                 </h3>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>


//   )
// }

// export default Projects

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
  { id: 1, image: project1, category: "Branding", title: "Museums Art Concept" },
  { id: 2, image: project2, category: "Marketing", title: "Market Economy Graphics" },
  { id: 3, image: project3, category: "Design", title: "Headphones 3D Rendering" },
  { id: 4, image: project4, category: "Branding", title: "Product Packaging Style" },
  { id: 5, image: project5, category: "Design", title: "Interior Design for Modern Homes" },
  { id: 6, image: project6, category: "Architecture", title: "Modern Villa Project" },
  { id: 7, image: project7, category: "Photography", title: "Professional Photography Session" },
  { id: 8, image: project8, category: "Architecture", title: "Modern Residential Architecture" },
  { id: 9, image: project1, category: "Photography", title: "Especial Creation" },
  { id: 10, image: project2, category: "Marketing", title: "Branding Style Project" },

]

const categories = ["All Projects", "Branding", "Marketing", "Design", "Architecture", "Photography"]

const categoryCounts = categories.reduce((acc, cat) => {
  acc[cat] = cat === "All Projects"
    ? projects.length
    : projects.filter(p => p.category === cat).length
  return acc
}, {})

const Projects = () => {
  const [filter, setFilter] = useState("All Projects")
  const [hoveredId, setHoveredId] = useState(null)

  const filteredData = filter === "All Projects"
    ? projects
    : projects.filter(item => item.category === filter)

  return (
    <>
      <SectionBanner
        title="Our Projects"
        subtitle="Creative studio at the intersection of art, design & technology."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Our Projects", path: "/projects" }
        ]}
      />

      <div className="py-[6%] px-[5%] xl:px-[12%]">

        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-2">Portfolio</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold text-white">Selected Work</h2>
            <span className="text-gray-500 text-sm">{filteredData.length} project{filteredData.length !== 1 ? 's' : ''}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar */}
          <aside className="lg:w-[180px] flex-shrink-0">
            <p className="text-[10px] tracking-[0.12em] uppercase text-gray-600 mb-5">Filter by</p>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setFilter(category)}
                    className={`
                      w-full text-left flex items-center justify-between
                      py-2.5 border-b border-white/5 text-sm transition-all duration-200
                      ${filter === category
                        ? "text-white font-medium"
                        : "text-gray-500 hover:text-gray-300"
                      }
                    `}
                  >
                    <span className="flex items-center gap-2">
                      {filter === category && (
                        <span className="w-1 h-1 rounded-full bg-white inline-block" />
                      )}
                      {category}
                    </span>
                    <span className="text-xs text-gray-600">{categoryCounts[category]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {filteredData.map((project, index) => {
              const isLarge = project.id === 5 && filter === "All Projects"         // Si el elemento es el proyecto 5 y el filtro es "All Projects", ocupa 2 columnas

              // Cuántas columnas ocupan los elementos anteriores mod 2
              const colsBefore = filteredData.slice(0, index).reduce((acc, p) => {  // Recorremos los elementos anteriores
                const span = (p.id === 5 && filter === "All Projects") ? 2 : 1      // Suma cuántas columnas ocupan (2 si es el proyecto 5, 1 si es normal).
                return (acc + span) % 2                                             // Acumulamos el número de columnas que ocupan los elementos anteriores y obtenemos el modulo -> 0(empieza a la izquierda) o 1(empieza a la derecha)
              }, 0)
              const isLast = index === filteredData.length - 1                      // Verificamos si es el último elemento
              const isAlone = isLast && colsBefore === 0 && !isLarge                // Si es el último elemento y  empieza en la columna 0 (izquierda), y no es el proyecto grande, significa que no hay otro elemento a su lado en la fila. Visualmente quedaría un espacio vacío a su derecha.

              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className={`group block bg-black ${isLarge || isAlone ? "md:col-span-2" : ""}`} // Si es grande o está solo, ocupa 2 columnas, si no, ocupa 1
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${isLarge ? "h-[380px]" : "h-[280px]"}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-6">
                      <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-[10px] tracking-widest uppercase text-white/70 block mb-1">
                          {project.category}
                        </span>
                        <span className="text-white font-medium text-lg">{project.title}</span>
                      </div>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="px-5 py-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] tracking-[0.1em] uppercase text-gray-600 mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-white text-sm font-medium leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-lg flex-shrink-0 ml-4">
                      →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects