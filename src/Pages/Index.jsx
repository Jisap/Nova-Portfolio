import heroVideo from "../assets/hero-video.mp4"
import title_icon from "../../public/title_icon.svg"
import { Link, Links } from "react-router-dom"
import { Icon } from "@iconify/react"
import ser1 from "/public/serv-icon1.png"
import ser2 from "/serv-icon2.png"
import ser3 from "/serv-icon3.png"
import { useState } from "react"
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


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
                textlength="1400"
              >
                <textPath href="#circlePath" starOffset="0" textLength="754" lengthAdjust="spacing">
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
    </>
  )
}

export default Index