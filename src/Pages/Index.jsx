import heroVideo from "../assets/hero-video.mp4"
import title_icon from "../../public/title_icon.svg"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import ser1 from "/public/serv-icon1.png"
import ser2 from "/serv-icon2.png"
import ser3 from "/serv-icon3.png"
import { useState } from "react"


const Index = () => {

  const [activeIndex, setActiveIndex] = useState(1);

  const services = [
    { id: 1, title: "Creation", img: ser1 },
    { id: 2, title: "Websites", img: ser2 },
    { id: 3, title: "Studio", img: ser3 },
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
    </>
  )
}

export default Index