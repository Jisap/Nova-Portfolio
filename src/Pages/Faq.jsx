import { useId, useState, useEffect, useRef } from "react";
import SectionBanner from "../Components/SectionBanner"
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { initScrollAnimations } from "../animations/scroll";
import { faqsData as faqs, brandsData as brands } from "../data/mockData";

const Faq = () => {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId(); // Genera un id único para cada faq

  useEffect(() => {
    if (containerRef.current) {
      const ctx = initScrollAnimations(containerRef.current);
      return () => ctx.revert();
    }
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <SectionBanner
        title="Client FAQs"
        subtitle="Solving bussinnes problems everytime"
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Client FAQs", path: "/faq" }
        ]}
      />

      {/* FAQs */}
      <div className="faq px-[2%] md:px-[8%] xl:px-[12%] py-[8%]">
        <div className="mb-12 max-w-2xl gsap-fade-up">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Frequently Asked
          </span>

          <h2 className="text-3xl sm:text-5xl font-semibold mt-5 leading-tight text-white">
            Answers Before You Even Ask
          </h2>
        </div>

        <div role="list" className="flex flex-col gap-4 gsap-stagger-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div
                key={index}
                role="listitem"
                className={`
                  rounded-3xl border-2 transition-colors duration-300 gsap-stagger-item
                  ${isOpen ? "border-lime-400 bg-lime-400/4" : "border-gray-300/20"}
                `}
              >
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(index)}
                    className={`
                      group w-full flex items-center gap-6 cursor-pointer
                      px-6 sm:px-8 py-6 text-left text-white
                      rounded-3xl transition-colors duration-300
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className={`
                        font-mono text-sm sm:text-base shrink-0 transition-colors duration-300
                        ${isOpen ? "text-lime-400" : "text-gray-500 group-hover:text-lime-400"}
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-base sm:text-lg font-semibold leading-snug text-white">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`
                        flex items-center justify-center w-10 h-10 rounded-full shrink-0
                        transition-transform duration-300 ease-out
                        ${isOpen
                          ? "bg-lime-400 text-black rotate-45"
                          : "bg-white/10 text-white group-hover:bg-lime-400 group-hover:text-black"
                        }
                      `}
                    >
                      <Icon icon="mdi:plus" className="text-xl" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`
                    grid transition-[grid-template-rows] duration-500 ease-in-out
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-8 pb-6 pl-13 sm:pl-15 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Get in touch */}
      <div className="py-[2%]">
        <div className="contact py-[8%] px-[2%] md:px-[8%] xl:px-[12%] h-[800px] relative">
          <div className="team-conten w-full lg:w-[60%] mb-10 flex lg:flex-row flex-col gap-10">
            <div className="w-full lg:w-1/2 gsap-fade-left">
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

            <div className="contact-image w-full lg:w-1/2 relative">
              <div className="cat-img-circle img-circle--1"></div>
              <div className="cat-img-circle img-circle--2"></div>
              <div className="cat-img-circle img-circle--3"></div>

              <ul className="text-white grid grid-cols-2 gap-10 absolute right-0 bottom-60 social-icons gsap-stagger-container">
                <li className="gsap-stagger-item">
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

                <li className="gsap-stagger-item">
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

                <li className="gsap-stagger-item">
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

                <li className="gsap-stagger-item">
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

      {/* Brand */}
      <div className="brand py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="brand-conten w-full lg:w-[60%] mb-10 gsap-fade-up">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Fantastic and Premium Clients
          </span>

          <h2 className="text-4xl md:text-3xl lg:text-6xl font-semibold sm:max-w-5xl mt-5 leading-tight text-white">
            We Have Had the Pleasure ofWorking with some Clients
          </h2>
        </div>

        <div className="brand-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gsap-stagger-container">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={brand.link}
              className="brand-item flex cursor-pointer border border-gray-50/20 p-5 relative justify-center items-center gsap-stagger-item"
            >
              <img
                src={brand.image}
                alt="Brand Image"
                className="object-contain"
              />
              <span>View Website</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq