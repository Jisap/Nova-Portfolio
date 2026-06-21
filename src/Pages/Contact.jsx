import { Link } from "react-router-dom"
import SectionBanner from "../Components/SectionBanner"
import { Icon } from "@iconify/react"
import { useId, useState, useEffect, useRef } from "react";
import { initScrollAnimations } from "../animations/scroll";
import { faqsData as faqs } from "../data/mockData";

const Contact = () => {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

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
        title="Contact"
        subtitle="Have ideas for your businnes? Let's build something awesome together."
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Contact", path: "/contact" }
        ]}
      />

      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-center items-start gap-10 flex-wrap lg:flex-nowrap ">
        <div className="w-full lg:w-1/2 text-white gsap-fade-left">
          <div>
            <h3 className="text-3xl font-semibold">
              Send Us a Message
            </h3>

            <p className="text-lg pb-5">
              Then let us know about it and we can see what we can do for you.
            </p>
          </div>

          <form className="text-white flex flex-col gap-5">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="number" placeholder="Phone Number" required />
            <textarea placeholder="Message" required></textarea>
            <button type="button" className="btn rounded-sm">
              <Icon icon="vaadin:plus" width="30" height="30" />
              <span>
                Send Message
              </span>
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 text-white h-[550px] rounded-2xl overflow-hidden gsap-fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10611.70186399473!2d-1.475458!3d41.6497849!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48367254f38a4091%3A0xa38d23d0c28f81b6!2sCubo%20Media!5e0!3m2!1sen!2ses!4v1750465641271!5m2!1sen!2ses"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            title="Google Maps"
            style={{
              border: 0,
            }}
          />
        </div>
      </div>

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
            const panelId = `${baseId}-panel-${index}`;    // Identificador único para el panel de la respuesta
            const buttonId = `${baseId}-button-${index}`;  // Identificador único para el botón de la pregunta

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
                    aria-expanded={isOpen}     // Indica si el panel está expandido o contraído
                    aria-controls={panelId}    // Indica qué panel se está controlando
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
    </div>
  )
}

export default Contact