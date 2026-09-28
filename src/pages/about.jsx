import AnimatedSection from "../components/AnimatedSection";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="page about-page">

      {}
      <AnimatedSection>
        <p className="section-label">ABOUT ME</p>

        <h1>
          A little about <span className="purple">Ahana</span>
        </h1>
      </AnimatedSection>


      {}
      <AnimatedSection delay={0.2}>
        <div className="about-content">

          <div className="about-text">

            <h2>Who I am</h2>

            <p>
              I'm Ahana, a Computer Science graduate with a strong
              interest in web development and building digital
              experiences that are clean, responsive and easy to use.
            </p>

            <p>
              During my academic journey, I worked on a variety of
              projects that helped me understand how ideas can be
              transformed into functional applications. From building
              responsive websites to exploring deep learning and
              computer vision, I enjoy working on projects that allow
              me to learn something new.
            </p>

            <p>
              My core web development experience includes HTML, CSS,
              JavaScript, React.js, Bootstrap, PHP and MySQL. I also
              have a foundation in programming, Data Structures &
              Algorithms, Object-Oriented Programming and databases.
            </p>

            <h2>My approach</h2>

            <p>
              I believe good development is not only about writing
              code that works. It is also about creating interfaces
              that are intuitive, responsive and visually engaging.
              I enjoy paying attention to details such as layout,
              spacing, interactions and the overall user experience.
            </p>

            <p>
              I'm also interested in the intersection of web
              development and AI. My academic projects have given me
              an opportunity to explore machine learning and deep
              learning, and I'm interested in bringing those
              technologies into practical web-based applications.
            </p>

          </div>


          {}
          <div className="about-highlights">

            <div className="highlight-card">
              <h3>2026</h3>
              <p>Computer Science Graduate</p>
            </div>

            <div className="highlight-card">
              <h3>Web</h3>
              <p>Frontend & Full-Stack Foundations</p>
            </div>

            <div className="highlight-card">
              <h3>AI</h3>
              <p>Exploring AI & Deep Learning</p>
            </div>

          </div>

        </div>
      </AnimatedSection>


      {}
      <AnimatedSection delay={0.4}>
        <div className="about-cta">

          <p>
            Want to know more about my technical skills?
          </p>

          <Link to="/skills" className="btn">
            Explore My Skills
          </Link>

        </div>
      </AnimatedSection>

    </main>
  );
}

export default About;