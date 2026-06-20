
import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { blogs } from "./Blog";
import SectionBanner from "../Components/SectionBanner";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowLeft, FaArrowRight, FaUser, FaCalendar, FaClock } from "react-icons/fa";

import post1 from "../assets/blogpost01.jpg";
import post2 from "../assets/blogpost02.jpg";
import post3 from "../assets/blogpost03.jpg";

const posts = [
  { id: 1, title: "The Power of Teamwork: Why Collaboration Matters in Design", date: "April 10, 2025", category: "Design", readTime: "5 min read", image: post1 },
  { id: 2, title: "10 Tips for Creating Outstanding Marketing Campaigns", date: "May 22, 2025", category: "Marketing", readTime: "7 min read", image: post2 },
  { id: 3, title: "Effective Copywriting Strategies for Business Growth", date: "May 15, 2025", category: "Business", readTime: "6 min read", image: post3 }
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    if (!blog) navigate("/blogs");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blog, navigate]);

  if (!blog) return null;

  // Posts relacionados (excluyendo el actual)
  const relatedPosts = posts.filter((p) => p.id !== blog.id).slice(0, 3);

  // Navegación entre posts
  const currentIndex = posts.findIndex((p) => p.id === blog.id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <>
      <SectionBanner
        title={blog.title}
        subtitle="Meet our creativity company family."
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Our Blogs", path: "/blogs" },
          { label: blog.title, path: `/blogs/${blog.id}` }
        ]}
      />

      <article className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] text-white">
        {/* Imagen hero con overlay sutil */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden group">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Metadata del post */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-400 border-b border-gray-800 pb-6">
          <span className="flex items-center gap-2">
            <FaUser className="text-lime-300" />
            <span>By <span className="text-white">Admin</span></span>
          </span>

          <span className="flex items-center gap-2">
            <FaCalendar className="text-lime-300" />
            {blog.date || "June 20, 2026"}
          </span>

          <span className="flex items-center gap-2">
            <FaClock className="text-lime-300" />
            5 min read
          </span>

          <span className="px-3 py-1 bg-lime-300/10 text-lime-300 rounded-full text-xs font-medium uppercase tracking-wide">
            {blog.category || "Design"}
          </span>
        </div>

        {/* Título grande */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 leading-tight">
          {blog.title}
        </h1>

        {/* Intro / Lead paragraph */}
        <p className="mt-8 text-xl text-gray-300 leading-9 font-light italic border-l-4 border-lime-300 pl-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa fugit minus quae aperiam corrupti
          labore ratione. Saepe natus consectetur repellat, reprehenderit dicta quia sapiente cum.
        </p>

        {/* Contenido principal */}
        <div className="mt-10 space-y-6 text-lg text-gray-300 leading-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa fugit minus quae aperiam corrupti
            labore ratione. Saepe natus consectetur repellat, reprehenderit dicta quia sapiente cum, recusandae et porro facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio eligendi eos ut dolore, impedit amet
            ab porro debitis ratione pariatur fugit dicta delectus officia assumenda iste voluptatum. Voluptatem, ratione!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa fugit minus quae aperiam corrupti
            labore ratione. Saepe natus consectetur repellat, reprehenderit dicta quia sapiente cum, recusandae et porro facilis.
          </p>

          <h3 className="text-3xl md:text-4xl font-semibold pt-6 pb-2 text-white">
            Custom Listing Styles
          </h3>

          <ul className="space-y-4 list-none ps-0">
            {[
              "Far curiosity incommode now led smallness allowance.",
              "Favour bed assure son things yet.",
              "She consisted consulted elsewhere happiness.",
              "Disposing household any old the nay.",
              "Widow downs you new shade drift hopes small.",
              "Interest discretion estimating on stimulated."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-gray-300">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-300/10 text-lime-300 flex items-center justify-center font-semibold text-sm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="pt-1">{item}</span>
              </li>
            ))}
          </ul>

          {/* Cita destacada */}
          <blockquote className="relative bg-gradient-to-br from-black to-gray-900 mt-10 border-l-4 border-lime-300 p-8 md:p-12 rounded-xl">
            <span className="absolute -top-6 left-6 text-8xl text-lime-300/30 font-serif leading-none">"</span>
            <p className="text-xl md:text-2xl font-medium leading-snug text-white relative z-10">
              We are excited to serve as a design-build partner to Hollsborought County Aviation Authority on this
              important project at Tampa International Airport.
            </p>
            <footer className="mt-4 text-sm text-gray-400">— Project Manager</footer>
          </blockquote>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa fugit minus quae aperiam corrupti
            labore ratione. Saepe natus consectetur repellat, reprehenderit dicta quia sapiente cum, recusandae et porro facilis.
          </p>

          <h3 className="text-3xl md:text-4xl font-semibold pt-6 pb-2 text-white">
            What's next?
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio eligendi eos ut dolore, impedit amet
            ab porro debitis ratione pariatur fugit dicta delectus officia assumenda iste voluptatum. Voluptatem, ratione!
          </p>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Tags:</span>
            {["Design", "Teamwork", "Creativity", "Business", "Marketing"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-gray-800 hover:bg-lime-300 hover:text-black text-gray-300 text-sm rounded-full cursor-pointer transition-colors duration-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Compartir en redes */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-800">
          <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Share this article:</span>
          <div className="flex gap-3">
            {[
              { icon: FaFacebookF, color: "hover:bg-blue-600" },
              { icon: FaTwitter, color: "hover:bg-sky-500" },
              { icon: FaLinkedinIn, color: "hover:bg-blue-700" }
            ].map(({ icon: Icon, color }, idx) => (
              <button
                key={idx}
                className={`w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center transition-all duration-300 ${color} hover:scale-110`}
              >
                <Icon size={14} />
              </button>
            ))}
          </div>
        </div>

        {/* Sección de autor */}
        <div className="mt-10 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Author"
            className="w-24 h-24 rounded-full object-cover border-2 border-lime-300"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs text-lime-300 uppercase tracking-widest font-semibold">Written by</p>
            <h4 className="text-2xl font-bold text-white mt-1">John Anderson</h4>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Senior designer with over 10 years of experience crafting meaningful digital experiences for global brands.
            </p>
          </div>
        </div>

        {/* Navegación entre posts */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              to={`/blogs/${prevPost.id}`}
              className="group flex items-center gap-4 p-5 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl transition-colors"
            >
              <FaArrowLeft className="text-lime-300 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs text-gray-400 uppercase">Previous</p>
                <p className="text-white font-semibold line-clamp-1">{prevPost.title}</p>
              </div>
            </Link>
          ) : <div />}
          {nextPost && (
            <Link
              to={`/blogs/${nextPost.id}`}
              className="group flex items-center justify-end gap-4 p-5 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl transition-colors text-right"
            >
              <div>
                <p className="text-xs text-gray-400 uppercase">Next</p>
                <p className="text-white font-semibold line-clamp-1">{nextPost.title}</p>
              </div>
              <FaArrowRight className="text-lime-300 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Posts relacionados */}
        <div className="mt-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-lime-300 text-sm uppercase tracking-widest font-semibold">Related Posts</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">You might also like</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                to={`/blogs/${post.id}`}
                key={post.id}
                className="group block bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-lime-300/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-lime-300 text-black text-xs font-bold uppercase rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white leading-snug group-hover:text-lime-300 transition-colors">
                    {post.title}
                  </h4>
                  <span className="inline-block mt-4 text-lime-300 text-sm font-semibold">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogDetails;