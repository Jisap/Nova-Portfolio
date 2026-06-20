import { Icon } from "@iconify/react";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [navBg, setNavBg] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? "" : name);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newNavBg = scrollY > 100;
      setNavBg(newNavBg);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <nav
        className={`
          navbar h-[90px] flex justify-between items-center px-[2%] md:px-[8%] xl:px-[12%] fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${navBg ? "bg-white shadow-lg text-black" : "bg-transparent text-white"}
        `}
      >
        <Link
          to="/"
          className={`
            log text-4xl font-semibold transition-all duration-500
            ${navBg ? "text-black" : "text-white"}
          `}
        >
          Nov<span className="text-primary">a.</span>
        </Link>

        <div className="cursor-pointer z-60" onClick={() => setMenuOpen(!menuOpen)}>
          <span
            className={`
              block w-10 h-0.5 transition-all duration-500 
              ${navBg ? "bg-black" : "bg-white"}
              ${menuOpen ? "rotate-45 translate-y-2" : ""}
            `}
          >

          </span>

          <span
            className={`
              block w-10 h-0.5 mt-2.5 transition-all duration-500 
              ${navBg ? "bg-black" : "bg-white"}
              ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}
            `}
          >
          </span>
        </div>
      </nav>

      <div className={`
        fixed top-0 left-0 w-full h-screen backdrop-blur-sm bg-black/90 text-white px-[2%] md:px-[8%] xl:px-[12%] 
        z-20 flex flex-col justify-center items-start transform transition-all duration-700 ease-[cubic-bezier(0.77,0,0.75,1)] origin-top
        ${menuOpen
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 -translate-y-10 pointer-events-none"
        }
        `}
      >
        <ul className="space-y-10">
          <li>
            <Link
              to="/"
              className="text-4xl lg:text-6xl font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-4xl lg:text-6xl font-bold"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("pages")}
              className="flex cursor-pointer items-center text-4xl lg:text-6xl gap-2 font-bold"
            >
              Pages
              <Icon
                icon="ri:arrow-down-s-line"
                width="40"
                hanging="40"
                className={`
                  transition-transform duration-300
                  ${openDropdown === "pages" ? "rotate-180" : ""}
                `}
              />
            </button>

            <ul
              className={`
                overflow-hidden transition-all duration-300 
                ${openDropdown === "pages"
                  ? "max-h-[400px] opacity-100 mt-3"
                  : "max-h-0 opacity-0"}
              `}
            >
              {["Team", "Services", "Pricing plan", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLocaleLowerCase().replace(/\s/g, "")}`}
                    className="block py-2 text-4xl font-semibold"
                    onClick={() => {
                      setMenuOpen(false)
                      setOpenDropdown("")
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link
              to="/projects"
              className="text-4xl lg:text-6xl font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("blogs")}
              className="flex cursor-pointer items-center text-4xl lg:text-6xl gap-2 font-bold"
            >
              Blogs
              <Icon
                icon="ri:arrow-down-s-line"
                width="40"
                hanging="40"
                className={`
                  transition-transform duration-300
                  ${openDropdown === "blogs" ? "rotate-180" : ""}
                `}
              />
            </button>

            <ul
              className={`
                overflow-hidden transition-all duration-300 
                ${openDropdown === "blogs"
                  ? "max-h-[200px] opacity-100 mt-3"
                  : "max-h-0 opacity-0"}
              `}
            >
              <li>
                <Link
                  to="/blogs"
                  className="block text-4xl font-bold"
                  onClick={() => {
                    setMenuOpen(false)
                    setOpenDropdown("")
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs/1"
                  className="block text-4xl font-bold"
                  onClick={() => {
                    setMenuOpen(false)
                    setOpenDropdown("")
                  }}
                >
                  Blog Details
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-4xl lg:text-6xl font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav