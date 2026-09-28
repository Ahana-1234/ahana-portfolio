import AnimatedSection from "../components/AnimatedSection";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Tool: VS Code"
      ]
    },

    {
      title: "Backend & Database",
      skills: [
        "PHP",
        "MySQL",
        "SQL"
      ]
    },

    {
      title: "Programming",
      skills: [
        "C",
        "C++",
        "Java",
      ]
    },

    {
      title: "Core Concepts",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems"
      ]
    }
  ];

  return (
    <main className="page skills-page">

      <AnimatedSection>
        <p className="section-label">
          MY SKILLS
        </p>

        <h1>
          My technical <span className="purple">toolkit</span>
        </h1>
      </AnimatedSection>


      <div className="skills-grid">

        {skillGroups.map((group, index) => (

          <AnimatedSection
            key={group.title}
            delay={0.15 * index}
          >

            <div className="skill-card">

              <h2>{group.title}</h2>

              <div className="skill-list">

                {group.skills.map((skill) => (
                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </AnimatedSection>

        ))}

      </div>

    </main>
  );
}

export default Skills;