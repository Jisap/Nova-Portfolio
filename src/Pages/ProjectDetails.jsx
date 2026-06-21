import { useEffect, useRef } from "react"
import SectionBanner from "../Components/SectionBanner"
import { useParams, Link, useNavigate } from "react-router-dom"
import { initScrollAnimations } from "../animations/scroll"
import { projectsData as projects, project2, project3 } from "../data/mockData"

const ProjectDetails = () => {
  const containerRef = useRef(null);
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (containerRef.current) {
      const ctx = initScrollAnimations(containerRef.current);
      return () => ctx.revert();
    }
  }, []);

  const project = projects.find(p => p.id === Number(id))

  const relatedProjects = projects
    .filter(p => p.id !== Number(id))
    .slice(0, 4)

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-[#0a0a0a]">
        <h2 className="text-4xl font-bold text-white mb-4">Proyecto no encontrado</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          Lo sentimos, el proyecto que buscas no existe o ha sido movido.
        </p>
        <button
          onClick={() => navigate('/projects')}
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Volver a Proyectos
        </button>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <SectionBanner
        title={project.title}
        subtitle="Creative studio at the intersection of art, design & technology."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Our Projects", path: "/projects" },
          { label: project.title, path: `/project-details/${project.id}` }
        ]}
      />

      {/* 🖼️ HERO CON TÍTULO SUPERPUESTO */}
      <div className="px-4 sm:px-6 lg:px-8 gsap-fade-up">
        <div className="max-w-7xl mx-auto mt-8">
          <div className="relative w-full h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-2xl shadow-2xl group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Degradado inferior para legibilidad del texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Contenido superpuesto */}
            <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-12 w-full max-w-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <span className="inline-block text-sm md:text-base text-white/90 font-semibold tracking-wider uppercase mb-3 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
                {project.category}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-xl">
                {project.title}
              </h1>

              <p className="text-gray-200 text-base md:text-lg mt-3 max-w-xl drop-shadow-md">
                Creative studio at the intersection of art, design & technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 📝 DETALLES DEL PROYECTO */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Columna Izquierda: Descripción */}
          <div className="lg:col-span-2 space-y-6 gsap-fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About the Project</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nemo similique. Iusto, perspiciatis minus officiis porro itaque non explicabo aperiam! Iusto, porro tempora officiis officia sint at nemo rerum, doloremque consequatur est mollitia in saepe consequuntur.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nisi expedita aperiam! Dolore temporibus molestias doloremque amet. Quia eos in nisi officia tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt est voluptates tempore quam sequi, qui porro rerum minus, delectus magnam nobis inventore autem mollitia exercitationem assumenda distinctio.
            </p>

            {/* Galería secundaria opcional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="h-64 rounded-xl overflow-hidden">
                <img src={project2} alt="Detail 1" className="w-full h-full object-cover" />
              </div>
              <div className="h-64 rounded-xl overflow-hidden">
                <img src={project3} alt="Detail 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Columna Derecha: Metadata */}
          <div className="lg:col-span-1 gsap-fade-right">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 sticky top-24 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6 pb-4 border-b border-white/10">
                Project Details
              </h3>
              <div className="space-y-5">
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Client</span>
                  <p className="text-white text-lg mt-1">{project.client || "Confidential"}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Category</span>
                  <p className="text-white text-lg mt-1">{project.category}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Role</span>
                  <p className="text-white text-lg mt-1">{project.role || "Design & Development"}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Date</span>
                  <p className="text-white text-lg mt-1">{project.date || "2026"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔗 PROYECTOS RELACIONADOS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="gsap-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold">Related Projects</h2>
              <p className="text-gray-400 mt-2">Explore more of our recent work.</p>
            </div>
            <Link to="/projects" className="hidden sm:block text-primary hover:underline font-medium gsap-fade-right">
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gsap-stagger-container">
            {relatedProjects.map((item) => (
              <div key={item.id} className="border border-white/10 p-2 rounded-2xl group hover:border-white/30 transition-colors duration-300 bg-white/[0.02] gsap-stagger-item">
                <div className="h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="px-4 pb-4">
                  <Link to={`/project-details/${item.id}`} className="block group/link">
                    <span className="inline-block text-xs text-primary border border-primary/30 px-3 py-1 font-semibold rounded-full mb-3">
                      {item.category}
                    </span>

                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover/link:text-primary duration-300 transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetails