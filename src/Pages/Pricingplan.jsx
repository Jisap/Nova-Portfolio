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
      { text: "Custom design and features", active: false }
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
    </>


  )
}

export default Pricingplan