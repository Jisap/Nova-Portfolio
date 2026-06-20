import { Link } from "react-router-dom"
import SectionBanner from "../Components/SectionBanner"
import blog1 from "../assets/blog_01.jpg"
import blog2 from "../assets/blog_02.jpg"
import blog3 from "../assets/blog_03.jpg"
import blog4 from "../assets/blog_04.jpg"
import blog5 from "../assets/blog_05.jpg"
import blog6 from "../assets/blog_06.jpg"


const blogs = [
  {
    id: 1,
    date: "April 10, 2025",
    category: "Art",
    title: "Play to your Strength and Supercharge your Business",
    description: "Ambleton: Behind the Branding",
    image: blog1,
  },
  {
    id: 2,
    date: "May 22, 2025",
    category: "Marketing",
    title: "5 steps to Create an Outstanding Marketing Plan",
    description: "Ambleton: Behing the Branding of High Calgary's Community Mos innovative company",
    image: blog2,
  },
  {
    id: 3,
    date: "May 15, 2025",
    category: "Copywriting",
    title: "10 Content Proofreading Tips to Catch More Avoidable Errors",
    description: "Ambleton: The Most Important Element in Ad Creating",
    image: blog3,
  },
  {
    id: 4,
    date: "April 10, 2025",
    category: "Design",
    title: "Why Your Business Needs a Website",
    description: "Ambleton: The Power of Visual Branding",
    image: blog4,
  },
  {
    id: 5,
    date: "May 22, 2025",
    category: "Strategy",
    title: "Why Your Content Strategy Needs a Refresh",
    description: "Ambleton: The Competitive Edge",
    image: blog5,
  },
  {
    id: 6,
    date: "May 15, 2025",
    category: "Creativity",
    title: "Unlocking Your Creative Potential: A Guide",
    description: "Ambleton: Embracing Innovation",
    image: blog6,
  },
];

const Blog = () => {
  return (
    <>
      <SectionBanner
        title="Our Blog"
        subtitle="The Latest Insights from Our Creative Team"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Our Blog", path: "/blog" }
        ]}
      />

      {/* Blog */}
      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-item group flex flex-col text-white"
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
                to={`/blog/${blog.id}`}
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
    </>
  )
}

export default Blog