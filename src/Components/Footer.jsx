import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import gallery1 from "../assets/post1.jpg"
import gallery2 from "../assets/post2.jpg"
import gallery3 from "../assets/post3.jpg"
import gallery4 from "../assets/post4.jpg"
import gallery5 from "../assets/post5.jpg"
import gallery6 from "../assets/post6.jpg"


const Footer = () => {

  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6
  ]

  return (
    <div className="bg-black text-gray-300 pt-10 pb-5 px-[2%] md:px-[8%] xl:px-[12%]">
      <div className="max-w-7xl mx-auto border-t border-gray-600">
        <div className="grid md:grid-cols-3 gap-10 py-15">
          <div>
            <h3 className="text-white text-2xl font-semibold mb-3">
              Information
            </h3>

            <p className="text-gray-400">
              From the moment our company was founded, we have been commited to providing our customers with high-quality products and services. We are a family-owned business based in the United States, and we have been serving our customers for over 25 years.
            </p>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-3">
              Get in Touch
            </h3>

            <p className="text-gray-400 mb-1">
              123 Main St
              Anytown, USA 12345
            </p>

            <p className="text-gray-400 mb-1">(123) 456-7890</p>

            <p className="text-gray-400 mb-1">support@email.com</p>
          </div>

          {/* Gallery */}
          <div className="flex flex-wrap gap-3 justify-start md:justify-end">
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="rounded w-[90px] h-[70px] object-cover"
              />
            ))}
          </div>
        </div>

        <hr className="borer-gray-700 mb-6" />
      </div>
    </div>
  )
}

export default Footer 