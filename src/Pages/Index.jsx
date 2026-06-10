import heroVideo from "../assets/hero-video.mp4"
import title_icon from "../assets/title_icon.svg"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import ser1 from "../assets/serv-icon1.png"
import ser2 from "../assets/serv-icon2.png"
import ser3 from "../assets/serv-icon3.png"
import { useState } from "react"
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import project1 from "../assets/project-01.jpg"
import project2 from "../assets/project-02.jpg"
import project3 from "../assets/project-03.jpg"
import project4 from "../assets/project-04.jpg"
import team1 from "../assets/team-01.png"
import team2 from "../assets/team-02.png"
import team3 from "../assets/team-03.png"
import team4 from "../assets/team-04.png"
import CountUp from "../Components/CountUp"
import blog1 from "../assets/blog_01.jpg"
import blog2 from "../assets/blog_02.jpg"
import blog3 from "../assets/blog_03.jpg"


const Index = () => {

  const [activeIndex, setActiveIndex] = useState(1);

  const services = [
    { id: 1, title: "Creation", img: ser1 },
    { id: 2, title: "Websites", img: ser2 },
    { id: 3, title: "Studio", img: ser3 },
  ];

  const items = [
    "- Creative Direction",
    "- Machine Learning / AI",
    "- Brand Strategy",
    "- Native and Webs Apps",
  ];

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
  ];

  const members = [
    {
      id: 1,
      name: "Aarav Rao",
      role: "UI/UX Designer",
      img: team1,
      letter: "A"
    },
    {
      id: 2,
      name: "Diya mehra",
      role: "Digital Marketer",
      img: team2,
      letter: "D"
    },
    {
      id: 3,
      name: "Karan Thakor",
      role: "Full-Stacl Developer",
      img: team3,
      letter: "K"
    },
    {
      id: 4,
      name: "Sara Thomas",
      role: "Content Strategist",
      img: team4,
      letter: "S"
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Their high level of customer service. Always available and quick to respond. They exceeded all expectations.",
      name: "Jessica Brown",
      role: "Design Quality",
      rating: 4.5,
    },
    {
      id: 2,
      text: "Working with them was seamless. They understood our vision and brought it to life perfectly. I will work with them again.",
      name: "Mark Johnson",
      role: "Creative Director",
      rating: 5.0,
    },
    {
      id: 3,
      text: "The results speak for themselves. Our engagement increased by 300% in just one quarter. Excellent work.",
      name: "Emily Carter",
      role: "Marketing Manager",
      rating: 4.8,
    },
    {
      id: 4,
      text: "Highly recommend! Professional, fast, and the final product exceeded all expectations.",
      name: "David Wilson",
      role: "Project Lead",
      rating: 4.9,
    },
  ];

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
  ]


  return (
    <>
      {/* Hero */}
      <div className="h-screen w-full relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Services */}
      <div className="services grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`
              w-full text-center group rounded-full p-10 flex justify-center items-center flex-col relative service-item h-[450px] transition-all duration-300 
              ${activeIndex === index ? "active bg-primary" : "bg-transparent"}  
            `}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(1)}
          >
            <img
              src={service.img}
              alt={service.title}
              width={60}
              height={60}
              className={`
                pb-4 transition-all duration-300
                ${activeIndex === index ? "filter-none" : "invert"}
                `}
            />

            <div className={`
               service-content transition-all duration-300
               ${activeIndex === index
                ? "text-black"
                : "text-white"
              }`}
            >
              <h2 className="text-5xl font-semibold pb-6">{service.title}</h2>
              <p className="text-xl">Developing websites is about more than just looking good. It's about building systems</p>
            </div>

            {/* bubbles */}
            <div className="nova-bubble absolute bottom-[-60px] right-0 w-[142px] h-[152px] pointer-events-none">
              <div className={`
                bubble-1 w-8 h-8 rounded-full bg-pink-300 absolute transition-all duration-500  
                ${activeIndex === index
                  ? "opacity-100 bottom-0 right-0 scale-100"
                  : "opacity-0 bottom-[-20%] right-[-10%] scale-0"
                }
              `}></div>

              <div className={`
                bubble-2 w-6 h-6 rounded-full bg-blue-300 absolute transition-all duration-500 delay-100
                ${activeIndex === index
                  ? "opacity-100 bottom-[30%] left-0 scale-100"
                  : "opacity-0 bottom-[50%] left-[40%] scale-0"
                }
              `}></div>

              <div className={`
                bubble-3 w-10 h-10 rounded-full bg-green-300 absolute transition-all duration-500 delay-200
                ${activeIndex === index
                  ? "opacity-100 bottom-[63%] left-[57%] scale-100"
                  : "opacity-0 bottom-[50%] left-[40%] scale-0"
                }
              `}></div>

            </div>

          </div>
        ))}
      </div>

      {/* About */}
      <div className="about py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10">
        <div className="about-content w-full lg:w-[60%]">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Welcome to Nova
          </span>

          <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-6 leagin-tight text-white">
            A Design Agency Delivering Success by Winning Hearts
          </h2>

          <ul className="flex xl:flex-nowrap flex-wrap gap-5 lg:gap-10">
            <li className="w-full xl:w-1/2">
              <span className="font-semibold text-2xl text-white">
                Our Mission
              </span>

              <p className="text-md sm:text-xl mt-2 text-gray-300">
                From the moment our company was founded we have helped our clients find <b>exceptional solutions for their bussinesses</b> memorable brnds and digital
                products. Our expertise grows with each year, and our accumulated experience.
              </p>
            </li>

            <li className="w-full xl:w-1/2">
              <span className="font-semibold text-2xl text-white">
                Our Goal
              </span>

              <p className="text-md sm:text-xl my-2 text-gray-300">
                Our goal is to delivery amazing experiences that make people talk, and build strategic value for brands, tech, entertainament.
              </p>

              <Link to="/about" className="btn rounded-sm mt-4">
                <Icon icon="vaadin:plus" width="30" height="30" />
                <span>More About Us</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-[40%] flex justify-center items-center">
          <div className="flex items-center justify-center w-[250px] h-[250px] relative border rounded-full">
            <svg
              viewBox="0 0 300 300"
              className="absolute w-full h-full animate-[spin_20s_linear_infinite]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                />
              </defs>

              <text
                fill="#fff"
                fontSize="13"
                fontWeight="600"
                letterSpacing="4"
                textLength="1400"
              >
                <textPath href="#circlePath" staroffset="0" textLength="754" lengthAdjust="spacing">
                  YEARS OF DIGITAL SOLUTIONS EXPERIENCE • YEARS OF DIGITAL SOLUTIONS EXPERIENCE •
                </textPath>
              </text>
            </svg>

            <div className="border rounded-[50%] px-6 py-5">
              <div
                className="text-8xl font-bold text-transparent mt-5 border"
                style={{
                  WebkitTextStrokeWidth: "3px",
                  WebkitTextStrokeColor: "#fff"
                }}
              >
                14
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Splide */}
      <div className="py-[2%] flex justify-center items-center">
        <div className="w-full overflow-hidden border-t border-white border-b ">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              autoWidth: true,
              arrows: false,
              pagination: false,
              gap: "4rem",
              autoScroll: {
                speed: 1,
                pauseOnHover: true,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {items.map((text, index) => (
              <SplideSlide key={index}>
                <div
                  className="text-[10vw] font-bold uppercase whitespace-nowrap"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #fff"
                  }}
                >
                  {text}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {/* Features Projects */}
      <div className="featured py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="featured-conten w-full flex justify-between flex-col lg:flex-row lg:items-end mb-10">
          <div>
            <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
              Featured Projects
            </span>

            <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leagin-tight text-white">
              Studio Showcase
            </h2>
          </div>

          <Link to="/projects" className="btn rounded-sm mt-4 w-fit">
            <Icon icon="vaadin:plus" width="30" height="30" />
            <span>More Projects</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 text-white gap-10 w-full lg:w-[90%] xl:w-full">
          {projects.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300/20 p-5 rounded-lg group"
            >
              <div className="h-[550px] w-full rounded-lg overflow-hidden mb-5 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>

              <Link to={`/projects/${item.id}`}>
                <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm">
                  {item.category}
                </span>

                <h3 className="text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary transition-all duration-300">
                  {item.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="team py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="team-conten w-full lg:w-[60%] mb-10">
          <div>
            <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
              Experts Team Members
            </span>

            <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white">
              We do awesome Services for out clients.
            </h2>
          </div>
        </div>

        <div className="team-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
          {members.map((member) => (
            <div
              key={member.id}
              className="team-item relative overflow-hidden text-white border border-gray-50/20 h-[600px] md:h-[740px] group flex flex-col justify-between"
            >
              {/* Description */}
              <div className="desc p-6 md:p-8">
                <div className="mb-4">
                  <span className="block text-3xl md:text-5xl group-hover:text-black font-bold leading-tight transition-colors duration-300">
                    {member.name}
                  </span>

                  <span className="block font-semibold text-gray-100 text-sm md:text-md group-hover:text-black transition-colors duration-300">
                    {member.role}
                  </span>
                </div>

                {/* social links */}
                <div className="flex gap-3">
                  <Link
                    to="#"
                    className="border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-black transition-colors duration-300"
                  >
                    <Icon
                      icon="ri:facebook-fill"
                      width="24"
                      height="24"
                      className="group-hover:text-black transiton-transform duration-300 group-hover:scale-110"
                    />
                  </Link>

                  <Link
                    to="#"
                    className="border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-black transition-colors duration-300"
                  >
                    <Icon
                      icon="flowbite:linkedin-solid"
                      width="24"
                      height="24"
                      className="group-hover:text-black transiton-transform duration-300 group-hover:scale-110"
                    />
                  </Link>
                </div>
              </div>

              {/* Image + letter */}
              <div className="image relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto scale-100 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)]"
                />
              </div>

              <div
                className="num absolute -right-3 md:-right-5 bottom-0 text-[180px] sm:text-[220px] md:text-[300px] font-bold leading-[0.5] group-hover:text-primary pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)]"
                style={{
                  textShadow: "1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
                }}
              >
                <span>{member.letter}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonial py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="tst-content w-full lg:w-1/2 text-white">
          <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-5 leading-tight text-white">
            Testimonials
          </h2>
          <div className="font-normal text-xl flex items-center">
            4.5{" "}
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index} className="flex text-yellow-400 ml-2">
                <Icon
                  icon="material-symbols:star"
                  width="24"
                  height="24"
                  className="text-yellow-400"
                />
              </span>
            ))}
            <Icon
              icon="material-symbols:star-half"
              width="24"
              height="24"
              className="text-yellow-400"
            />{" "}
            rating from all clients
          </div>
        </div>

        <div className="w-full lg:w-1/2 border-l border-white ps-10">
          <Splide
            options={{
              type: "fade",
              rewind: true,
              autoplay: true,
              interval: 4000,
              pauseOnHover: true,
              arrows: false,
              pagination: false,
              speed: 800,
            }}
          >
            {testimonials.map((t) => (
              <SplideSlide key={t.id}>
                <div className="text-white">
                  <p className="text-white text-2xl md:text-3xl max-w-2xl leading-tight mb-6 font-medium">
                    {t.text}
                  </p>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {t.name}
                    </h3>

                    <span className="text-gray-300">
                      {t.role}
                    </span>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {/* Counts */}
      <div className="grid grid-cols-1 py-[8%] sm:grid-cols-3 gap-12 px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="text-center">
          <h2 className="text-7xl sm:text-8xl font-bold leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white"
            }}
          >
            <CountUp start={0} end={23} duration={2} />
          </h2>

          <p className="text-gray-300 text-lg font-semibold mt-3">
            Team members
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-7xl sm:text-8xl font-bold leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white"
            }}
          >
            <CountUp start={0} end={99} duration={2.5} />+
          </h2>

          <p className="text-gray-300 text-lg font-semibold mt-3">
            Completed projects
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-7xl sm:text-8xl font-bold leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white"
            }}
          >
            <CountUp start={0} end={12} duration={2.8} />M
          </h2>

          <p className="text-gray-300 text-lg font-semibold mt-3">
            Lines of code
          </p>
        </div>
      </div>

      {/* Get in touch */}
      <div className="py-[8%]">
        <div className="contact py-[8%] px-[2%] md:px-[8%] xl:px-[12%] h-[800px] relative">
          <div className="team-conten w-full lg:w-[60%] mb-10">
            <div>
              <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
                Get in Touch
              </span>

              <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white">
                Send Us Your Bright Ideas
              </h2>

              <Link to="/contact" className="text-primary text-3xl lg:text-5xl font-semibold">
                Info@yourcompany.com
              </Link>

              <p className="text-gray-100 text-xl pt-5">
                123 Business Avenue, Los Angeles
              </p>
            </div>

            <div className="contact-image">
              <div className="cat-img-circle img-circle--1"></div>
              <div className="cat-img-circle img-circle--2"></div>
              <div className="cat-img-circle img-circle--3"></div>

              <ul className="text-white grid grid-cols-2 gap-10 absolute right-0 bottom-60 social-icons">
                <li>
                  <Link to="/" className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center">
                    <Icon
                      icon="ri:facebook-fill"
                      width="44"
                      height="44"
                      className="text-black bg-white p-2 rounded-full"
                    />

                    <span>
                      Facebook
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center">
                    <Icon
                      icon="iconoir:instagram"
                      width="44"
                      height="44"
                      className="text-black bg-white p-2 rounded-full"
                    />

                    <span>
                      Instagram
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center">
                    <Icon
                      icon="line-md:twitter-x"
                      width="44"
                      height="44"
                      className="text-black bg-white p-2 rounded-full"
                    />

                    <span>
                      Twitter / X
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center">
                    <Icon
                      icon="ri:linkedin-fill"
                      width="44"
                      height="44"
                      className="text-black bg-white p-2 rounded-full"
                    />

                    <span>
                      Linkedin
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="blog py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="blog-conten w-full lg:w-[60%] mb-10">
          <div>
            <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
              News & Blog
            </span>

            <h2 className="text-4xl md:text-3xl lg:text-6xl font-semibold sm:max-w-5xl mt-5 leading-tight text-white">
              Insights, Thoughts, Industry Trends, Marketing Tips.
            </h2>
          </div>
        </div>

        <div className="blog-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
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



      </div>
    </>
  )
}

export default Index