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
    </>
  )
}

export default BlogDetails