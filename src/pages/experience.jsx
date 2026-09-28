import AnimatedSection from "../components/AnimatedSection";

function Experience() {
  return (
    <main className="page experience-page">

      {}
      <AnimatedSection>
        <p className="section-label">EXPERIENCE</p>

        <h1>
          Where I've <span className="purple">worked</span>
        </h1>
      </AnimatedSection>


      {}
      <AnimatedSection delay={0.2}>
        <div className="experience-card">

          <div className="experience-header">

            {}
            <div className="experience-company">

              <div className="experience-logo">
                <img
                  src="\images\internship-logo2.png"
                  alt="HRA Groups logo"
                />
              </div>

              <div>
                <p className="experience-type">
                  INTERNSHIP
                </p>

                <h2>
                  Web Development Intern
                </h2>

                <h3>
                  HRA Groups Private Limited
                </h3>
              </div>

            </div>


            {}
            <span className="experience-date">
              2026
            </span>

          </div>


          {}
          <div className="experience-divider"></div>


          {}
          <p className="experience-description">
            Worked on web development and technology-related tasks as
            part of an internship, gaining practical experience in
            building and improving web interfaces.
          </p>


          {}
          <ul className="experience-list">

            <li>
              Applied HTML, CSS and JavaScript concepts to practical
              web development tasks.
            </li>

            <li>
              Worked on responsive layouts and user interface
              improvements.
            </li>

            <li>
              Gained experience working in a professional environment
              and collaborating on assigned tasks.
            </li>

          </ul>

        </div>
      </AnimatedSection>

    </main>
  );
}

export default Experience;