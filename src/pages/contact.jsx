import AnimatedSection from "../components/AnimatedSection";

function Contact() {
  return (
    <main className="page contact-page">

      <AnimatedSection>
        <p className="section-label">CONTACT</p>

        <h1>
          Let's <span className="purple">connect</span>
        </h1>

        <p className="contact-intro">
          Have a project idea, opportunity, or just want to connect?
          I'd love to hear from you.
        </p>
      </AnimatedSection>


      <div className="contact-grid">

        {}
        <AnimatedSection delay={0.2}>
          <a
            href="mailto:ahanasarkar0411@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              <img
                src="/images/gmail-logo.jpg"
                alt="Gmail"
              />
            </div>

            <div>
              <span className="contact-label">
                EMAIL
              </span>

              <h2>
                ahanasarkar0411@gmail.com
              </h2>
            </div>

            <span className="contact-arrow">
              →
            </span>
          </a>
        </AnimatedSection>


        {}
        <AnimatedSection delay={0.35}>
          <a
            href="https://in.linkedin.com/in/its-ahana"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <img
                src="/images/linkedin-logo.webp"
                alt="LinkedIn"
              />
            </div>

            <div>
              <span className="contact-label">
                LINKEDIN
              </span>

              <h2>
                Connect with me
              </h2>
            </div>

            <span className="contact-arrow">
              →
            </span>
          </a>
        </AnimatedSection>


        {}
        <AnimatedSection delay={0.5}>
          <a
            href="https://github.com/Ahana-1234"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <img
                src="/images/github-logo.png"
                alt="GitHub"
              />
            </div>

            <div>
              <span className="contact-label">
                GITHUB
              </span>

              <h2>
                View my projects
              </h2>
            </div>

            <span className="contact-arrow">
              →
            </span>
          </a>
        </AnimatedSection>

      </div>


      {}
      <AnimatedSection delay={0.65}>
        <div className="contact-location">

          <span>📍</span>

          <div>
            <span className="contact-label">
              LOCATION
            </span>

            <p>
              Kolkata, India
            </p>
          </div>

        </div>
      </AnimatedSection>

    </main>
  );
}

export default Contact;