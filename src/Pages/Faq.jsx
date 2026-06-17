import { useId, useState } from "react";
import SectionBanner from "../Components/SectionBanner"
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.png"
import brand3 from "../assets/brand3.png"
import brand4 from "../assets/brand4.png"
import brand5 from "../assets/brand5.png"
import brand6 from "../assets/brand6.png"
import brand7 from "../assets/brand7.png"

const faqs = [
  {
    question: "What services does Nova provide?",
    answer: "Nova offers comprehensive creative and digital solutions, including branding, UI/UX design, web design, marketing strategy, content creation, and digital product development."
  },
  {
    question: "Can Nova help build a brand from scratch?",
    answer: "Yes. We guide businesses through the entire branding process, from research and positioning to visual identity, messaging, and brand guidelines."
  },
  {
    question: "Do you work with startups and established companies?",
    answer: "Absolutely. We collaborate with startups, growing businesses, and established organizations, tailoring our approach to each client's goals and stage of growth."
  },
  {
    question: "What is your UI/UX design process?",
    answer: "Our process includes discovery, research, wireframing, prototyping, user testing, and interface design to create intuitive and engaging digital experiences."
  },
  {
    question: "Can Nova redesign an existing website or product?",
    answer: "Yes. We can audit your current digital presence, identify opportunities for improvement, and deliver a modernized design focused on usability, performance, and brand consistency."
  },
  {
    question: "Do you provide marketing services after the design phase?",
    answer: "Yes. We offer ongoing marketing support, including digital campaigns, content strategy, social media management, SEO, and performance optimization."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. Smaller projects may take a few weeks, while full branding and digital transformation projects can span several months."
  },
  {
    question: "How do we get started with Nova?",
    answer: "Simply contact our team to schedule a discovery call. We'll discuss your goals, evaluate your needs, and create a customized strategy to help your business grow."
  }
];

const brands = [
  { id: 1, image: brand1, link: "https://www.google.com" },
  { id: 2, image: brand2, link: "https://www.google.com" },
  { id: 3, image: brand3, link: "https://www.google.com" },
  { id: 4, image: brand4, link: "https://www.google.com" },
  { id: 5, image: brand5, link: "https://www.google.com" },
  { id: 6, image: brand6, link: "https://www.google.com" },
  { id: 7, image: brand7, link: "https://www.google.com" },
  { id: 8, image: brand1, link: "https://www.google.com" },
];

const Faq = () => {

  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId(); // Genera un id único para cada faq
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <SectionBanner
        title="Client FAQs"
        subtitle="Solving bussinnes problems everytime"
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Client FAQs", path: "/faq" }
        ]}
      />

      {/* FAQs Original */}
      {/* <div className="faq px-[2%] md:px-[8%] xl:px-[12%] py-[8%]">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden transition-all duration-500 mb-5">
            <button
              onClick={() => toggleFAQ(index)}
              className={`
                w-full flex items-center cursor-pointer justify-between px-8 py-6 text-lg font-semibold border-2 rounded-full transition-all duration-700
                ${openIndex === index
                  ? "bg-lime-400 border-lime-400 text-black"
                  : "border-gray-300 text-white hover:border-lime-300"
                }   
              `}
            >
              <span>{faq.question}</span>
              <span className={`
                flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-700
                ${openIndex === index
                  ? "bg-black text-white rotate-180"
                  : "bg-gray-100 text-black"
                }
                `}
              >
                <Icon icon={
                  openIndex === index
                    ? "mdi:chevron-up"
                    : "mdi:chevron-down"
                } className="text-xl"
                />
              </span>
            </button>

            <div className={`
              overflow-hidden transition-all duration-700 ease-in-out
              ${openIndex === index
                ? "max-h-60 opacity-100 mt-4"
                : "max-h-o opacity-0"
              }  
            `}
            >
              <p className="px-8 pb-4 text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      {/* FAQs */}
      <div className="faq px-[2%] md:px-[8%] xl:px-[12%] py-[8%]">
        <div className="mb-12 max-w-2xl">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Frequently Asked
          </span>

          <h2 className="text-3xl sm:text-5xl font-semibold mt-5 leading-tight text-white">
            Answers Before You Even Ask
          </h2>
        </div>

        <div role="list" className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div
                key={index}
                role="listitem"
                className={`
                  rounded-3xl border-2 transition-colors duration-300
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

      {/* Brand */}
      <div className="brand py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="brand-conten w-full lg:w-[60%] mb-10">
          <span className="text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Fantastic and Premium Clients
          </span>

          <h2 className="text-4xl md:text-3xl lg:text-6xl font-semibold sm:max-w-5xl mt-5 leading-tight text-white">
            We Have Had the Pleasure ofWorking with some Clients
          </h2>
        </div>

        <div className="brand-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={brand.link}
              className="brand-item flex cursor-pointer border border-gray-50/20 p-5 relative justify-center items-center"
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
    </>
  )
}

export default Faq