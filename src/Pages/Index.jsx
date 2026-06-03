import heroVideo from "../assets/hero-video.mp4"
import title_icon from "../../public/title_icon.svg"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"



const Index = () => {
  return (
    <>
      {/* Hero */}
      <div className="h-screen w-full relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default Index