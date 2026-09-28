import AnimatedSection from "../components/AnimatedSection";

function Education() {
  return (
    <main className="page education-page">
      <AnimatedSection>
        <p className="section-label">EDUCATION</p>

        <h1>
          My academic <span className="purple">journey</span>
        </h1>
      </AnimatedSection>

      <div className="education-timeline">

        {}
        <AnimatedSection delay={0.2}>
          <div className="education-item">

            <div className="education-year">
              2008 — 2022
            </div>

            <div className="education-card">

              <div className="education-heading">

                <div className="education-logo school-logo">
                  <img
                    src="/images/school-logo.png"
                    alt="St. Jude's High School logo"
                  />
                </div>

                <div>
                  <p className="education-type">
                    SCHOOL EDUCATION
                  </p>

                  <h2>St. Jude's High School</h2>
                </div>

              </div>

              <p>
                Completed my school education at St. Jude's High School,
                building a strong academic foundation and developing an
                early interest in technology and computer science.
              </p>

            </div>
          </div>
        </AnimatedSection>


        {}
        <AnimatedSection delay={0.4}>
          <div className="education-item">

            <div className="education-year">
              2022 — 2026
            </div>

            <div className="education-card">

              <div className="education-heading">

                <div className="education-logo university-logo">
                  <img
                    src="\images\college-logo2.jpg"
                    alt="Techno India University logo"
                  />
                </div>

                <div>
                  <p className="education-type">
                    UNDERGRADUATE EDUCATION
                  </p>

                  <h2>
                    B.Tech in Computer Science & Engineering
                  </h2>

                  <h3>
                    Techno India University, Kolkata
                  </h3>
                </div>

              </div>

              <p>
                Completed my Bachelor of Technology in Computer Science
                & Engineering, where I developed my foundation in
                programming, web development, databases, software
                engineering and computer science fundamentals.
              </p>

              <div className="education-tags">
                <span>Computer Science</span>
                <span>Web Development</span>
                <span>Programming</span>
                <span>Database</span>
              </div>

            </div>
          </div>
        </AnimatedSection>

      </div>
    </main>
  );
}

export default Education;