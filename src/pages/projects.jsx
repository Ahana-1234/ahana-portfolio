import AnimatedSection from "../components/AnimatedSection";
import brainTumorImage from "../assets/brain-tumor-project.png";

function Projects() {

  const projects = [
    {
      number: "01",
      title: "Student Accommodation Website",
      description:
        "Developed a responsive student accommodation website where users can explore and view available properties through a clean and user-friendly interface.",

      image: "/images/accommodation-project.png",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "PHP",
        "MySQL"
      ]
    },

    

    {
      number: "02",
      title: "Multi-Scale Brain Tumour Detection",
      description:
        "An AI-based medical image analysis project using a hybrid approach combining Swin Transformers and CNN models for brain tumour detection.",

      image: brainTumorImage,

      technologies: [
        "Python",
        "Deep Learning",
        "CNN",
        "Swin Transformer"
      ]
    }
  ];


  return (
    <main className="page projects-page">

      {}

      <AnimatedSection>

        <p className="section-label">
          MY WORK
        </p>

        <h1>
          Projects I've <span className="purple">built</span>
        </h1>

        <p className="projects-intro">
          A selection of projects I've worked on while exploring
          web development, programming and artificial intelligence.
        </p>

      </AnimatedSection>


      {}

      <div className="projects-list">

        {projects.map((project, index) => (

          <AnimatedSection
            key={project.number}
            delay={0.15 * index}
          >

            <article className="project-card">

              {}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>


              {}

              <div className="project-content">

                <span className="project-number">
                  {project.number}
                </span>

                <h2>
                  {project.title}
                </h2>

                <p>
                  {project.description}
                </p>


                {}

                <div className="project-tags">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="project-tag"
                    >
                      {technology}
                    </span>

                  ))}

                </div>


                <div className="project-link">
                  <span>
                    Project
                  </span>

                  <span className="project-arrow">
                    →
                  </span>
                </div>

              </div>

            </article>

          </AnimatedSection>

        ))}

      </div>

    </main>
  );
}

export default Projects;