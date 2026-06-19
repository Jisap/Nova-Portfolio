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
    </>
  )
}

export default Blog