import { Icon } from "@iconify/react"
import SectionBanner from "../Components/SectionBanner"
import { Link } from "react-router-dom"


const plans = [
  {
    title: "Standard Package",
    duration: "3 Months",
    price: "$60.10",
    Icon: "solar:rocket-bold",
    recommended: false,
    features: [
      { text: "Unlimited updates", active: true },
      { text: "Custom permissions", active: true },
      { text: "Custom infraestructure", active: false },
      { text: "Custom design and features", active: false }
    ]
  },
  {
    title: "Professional Package",
    duration: "6 Months",
    price: "$120.10",
    Icon: "mdi:crown",
    recommended: true,
    features: [
      { text: "Unlimited updates", active: true },
      { text: "Custom permissions", active: true },
      { text: "Custom infraestructure", active: true },
      { text: "Custom design and features", active: false }
    ]
  },
  {
    title: "Premium Package",
    duration: "01 Year",
    price: "$230",
    Icon: "fa-solid:building",
    recommended: false,
    features: [
      { text: "Unlimited updates", active: true },
      { text: "Custom permissions", active: true },
      { text: "Custom infraestructure", active: true },
      { text: "Custom design and features", active: true }
    ]
  }
]

const Pricingplan = () => {
  return (
    <>
      <SectionBanner
        title="Pricing Plan"
        subtitle="Its helps you choose prices to maximise."
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Pricing Plans", path: "/pricingplan" }
        ]}
      />

      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {plans.map((plan, idx) => (
          <div key={idx} className={`border border-gray-50/20 rounded-lg relative ${plan.recommended ? "shadow-[0px_0px_25px_rgba(0,0,0,0.2)]" : ""}`}>
            {plan.recommended && (
              <span className="absolute -top-4 right-6 bg-white text-black text-sm py-1  px-2 rounded-sm ">
                Recommended
              </span>
            )}

            <div className="p-8 pb-12 border-b border-gray-50/20 text-white">
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{plan.duration}</p>
              <h2 className="text-4xl font-bold mt-4">{plan.price}</h2>
            </div>

            <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center absolute top-42 left-10">
              <Icon icon={plan.Icon} className="text-3xl" />
            </div>

            <ul className="px-8 mt-10 mb-8 space-y-4 text-white">
              {plan.features.map((item, i) => (
                <li key={i} className={`flex items-center gap-3 ${!item.active ? "line-through text-gray-400" : ""}`}>
                  <Icon icon="mdi:check-bold" className="text-green-500" />
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="p-6 border-t border-gray-50/20 flex justify-center">
              <Link to="/about" className="btn rounded-full w-[250px]">
                <span>Purchase Now</span>
              </Link>
            </div>
          </div>
        ))}
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
    </>


  )
}

export default Pricingplan