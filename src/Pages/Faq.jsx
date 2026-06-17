import SectionBanner from "../Components/SectionBanner"

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

const Faq = () => {
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
    </>
  )
}

export default Faq