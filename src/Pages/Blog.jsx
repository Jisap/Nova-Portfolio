import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import SectionBanner from "../Components/SectionBanner"
import { initScrollAnimations } from "../animations/scroll"
import { blogsData as blogs } from "../data/mockData"

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = initScrollAnimations(containerRef.current);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <SectionBanner
        title="Our Blog"
        subtitle="The Latest Insights from Our Creative Team"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Our Blog", path: "/blogs" }
        ]}
      />

      {/* Blog */}
      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 gsap-stagger-container">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-item group flex flex-col text-white gsap-stagger-item"
          >
            <div className="blog-item group flex flex-col text-white">
              <img
                src={blog.image}
                alt={blog.title}
                className="group-hover:scale-110 transition-all duration-300"
              />
            </div>

            <div className="blog-content pt-5">
              <p className="text-lg font-semibold pb-2">
                <span className="bg-lime-300 text-black px-3 py-1 rounded-full me-3">
                  {blog.date}
                </span>

                {blog.category}
              </p>

              <Link
                to={`/blogs/${blog.id}`}
                className="text-xl font-semibold hover:text-lime-300 transition-all duration-300"
              >
                {blog.title}
              </Link>

              <p className="text-md text-gray-300 mt-3">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog