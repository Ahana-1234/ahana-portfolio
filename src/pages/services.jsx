import AnimatedSection from "../components/AnimatedSection";

function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Building responsive and user-friendly websites using modern web technologies with a focus on clean structure and functionality."
    },

    {
      number: "02",
      title: "Frontend Development",
      description:
        "Creating interactive interfaces using JavaScript, React.js and Bootstrap with attention to usability and responsive layouts."
    },

    {
      number: "03",
      title: "Website Design",
      description:
        "Designing clean and modern web layouts with thoughtful spacing, typography, visual hierarchy and user experience."
    },

    {
      number: "04",
      title: "Website Maintenance",
      description:
        "Improving existing websites, fixing layout issues and making pages more consistent, responsive and user-friendly."
    }
  ];

  return (
    <main className="page services-page">

      <AnimatedSection>
        <p className="section-label">
          WHAT I DO
        </p>

        <h1>
          Services I can <span className="purple">offer</span>
        </h1>
      </AnimatedSection>


      <div className="services-grid">

        {services.map((service, index) => (

          <AnimatedSection
            key={service.number}
            delay={0.15 * index}
          >

            <div className="service-card">

              <span className="service-number">
                {service.number}
              </span>

              <h2>
                {service.title}
              </h2>

              <p>
                {service.description}
              </p>

              <span className="service-arrow">
                →
              </span>

            </div>

          </AnimatedSection>

        ))}

      </div>

    </main>
  );
}

export default Services;