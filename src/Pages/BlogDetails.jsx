import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogs } from "./Blog";
import SectionBanner from "../Components/SectionBanner";


const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    if (!blog) navigate("/blogs");
  }, [blog, navigate]);

  if (!blog) return null;

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

      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] text-white">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[800px] object-cover rounded-lg"
        />

        <p className="mt-8 text-lg text-gray-300 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa fugit minus quae aperiam corrupti
          labore ratione. Saepe natus consectetur repellat, reprehenderit dicta quia sapiente cum, recusandae et porro facilis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio eligendi eos ut dolore, impedit amet
          ab porro debitis ratione pariatur fugit dicta delectus officia assumenda iste voluptatum. Voluptatem, ratione!
        </p>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa fugit minus quae aperiam corrupti
          labore ratione. Saepe natus consectetur repellat, reprehenderit dicta quia sapiente cum, recusandae et porro facilis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio eligendi eos ut dolore, impedit amet
          ab porro debitis ratione pariatur fugit dicta delectus officia assumenda iste voluptatum. Voluptatem, ratione!
        </p>

        <h3 className="text-5xl font-semibold pt-10 pb-4">
          Custom Listing Styles
        </h3>

        <ul className="space-y-5 list-disc ps-5 text-xl text-gray-300">
          <li>
            Far curiosity incommode now led smallness allowance.
          </li>
          <li>
            Favour bed assure son things yet.
          </li>
          <li>
            She consisted consulted elsewhere happiness.
          </li>
          <li>
            Disposing household any old the nay.
          </li>
          <li>
            Widow downs you new shade drift hopes small.
          </li>
          <li>
            Interest discretion estimating on stimulated.
          </li>
        </ul>

        <div className="bg-black mt-10 border border-lime-300 p-8 md:p-12 rounded-md relative">
          <p className="text-2xl md:text-3xl font-semibold leading-snug">
            "We are excited to serve as a design-build partner to Hollsborought County Aviation Authority on this
            important project at Tampa International Airport"
          </p>
        </div>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa fugit minus quae aperiam corrupti
          labore ratione. Saepe natus consectetur repellat, reprehenderit dicta quia sapiente cum, recusandae et porro facilis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio eligendi eos ut dolore, impedit amet
          ab porro debitis ratione pariatur fugit dicta delectus officia assumenda iste voluptatum. Voluptatem, ratione!
        </p>

        <h3 className="text-5xl font-semibold pt-10 pb-4">
          What's next ?
        </h3>

        <p className="text-lg text-gray-300 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa fugit minus quae aperiam corrupti
          labore ratione. Saepe natus consectetur repellat, reprehenderit dicta quia sapiente cum, recusandae et porro facilis.
        </p>

        <p className="text-lg text-gray-300 leading-8 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio eligendi eos ut dolore, impedit amet
          ab porro debitis ratione pariatur fugit dicta delectus officia assumenda iste voluptatum. Voluptatem, ratione!
        </p>
      </div>
    </>
  )
}

export default BlogDetails