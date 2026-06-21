import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import SectionBanner from "../Components/SectionBanner"
import { initScrollAnimations } from "../animations/scroll";
import { teamMembers } from "../data/mockData";

const Team = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = initScrollAnimations(containerRef.current);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <SectionBanner
        title="Our Team"
        subtitle="Meet our creativity company family."
        breadcrumbs={[
          { label: "Home", path: "/index" },
          { label: "Team", path: "/team" },
        ]}
      />

      <div className="py-[8%] px-[12%] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 gsap-stagger-container">
        {teamMembers.map((member) => (
          <Link to={`/team/${member.id}`} key={member.id} className="gsap-stagger-item">
            <div className="text-center">
              <div className="bg-white rounded-sm overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover w-full"
                />
              </div>

              <h4 className="text-2xl text-white mt-4 font-semibold">
                {member.name}
              </h4>

              <span className="text-lg text-gray-300">
                {member.role}
              </span>
            </div>

          </Link>
        ))}
      </div>
    </div>
  )
}

export default Team