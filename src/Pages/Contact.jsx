import { Link } from "react-router-dom"
import SectionBanner from "../Components/SectionBanner"
import { Icon } from "@iconify/react"


const Contact = () => {
  return (
    <>
      <SectionBanner
        title="Contact"
        subtitle="Have ideas for your businnes? Let's build something awesome together."
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Contact", path: "/contact" }
        ]}
      />

      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-center items-start gap-10 flex-wrap lg:flex-nowrap ">
        <div className="w-full lg:w-1/2 text-white">
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
      </div>
    </>
  )
}

export default Contact