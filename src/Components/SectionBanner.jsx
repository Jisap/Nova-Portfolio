import { Link } from "react-router-dom"
import title_icon from "../assets/title_icon.svg"

const SectionBanner = ({ title, subtitle, breadcrumbs }) => {
    return (
        <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
            <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3">
                {title}
                <span className="absolute hidden sm:flex top-0 right-35 w-10 h-10">
                    <img src={title_icon} alt="icon" className="w-full h-full" />
                </span>
            </h2>

            {subtitle && (
                <p className="border-b-2 w-full pb-10 border-gray-300">
                    {subtitle}
                </p>
            )}

            {breadcrumbs?.length > 0 && (
                <ul className="flex gap-8 py-5">
                    {breadcrumbs.map((crumb, index) => (
                        <li key={index}>
                            <Link to={crumb.path} className="font-normal text-white text-lg">
                                {crumb.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SectionBanner