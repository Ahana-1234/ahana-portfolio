import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>

      <div className="footer-content">

        {}
        <div className="footer-logo">

          <h2>
            Ahana Sarkar
          </h2>

          <p>
            Web Developer & Computer Science Graduate
          </p>

        </div>


        {}
        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/education">Education</Link>
            </li>

            <li>
              <Link to="/skills">Skills</Link>
            </li>

            <li>
              <Link to="/experience">Experience</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>

        </div>


        {}
       <div className="footer-contact">

  <h3>
    Contact
  </h3>


  {}
  <a
    href="mailto:ahanasarkar0411@gmail.com"
    className="footer-social"
  >
    <img
      src="/images/gmail-logo.jpg"
      alt="Gmail"
    />

    <span>
      ahanasarkar0411@gmail.com
    </span>
  </a>


  {}
  <a
    href="https://in.linkedin.com/in/its-ahana"
    target="_blank"
    rel="noreferrer"
    className="footer-social"
  >
    <img
      src="/images/linkedin-logo.webp"
      alt="LinkedIn"
    />

    <span>
      LinkedIn
    </span>
  </a>


  {}
  <a
    href="https://github.com/Ahana-1234"
    target="_blank"
    rel="noreferrer"
    className="footer-social"
  >
    <img
      src="/images/github-logo.png"
      alt="GitHub"
    />

    <span>
      GitHub
    </span>
  </a>


  <p>
    Kolkata, India
  </p>

</div>

      </div>


      {}
      <div className="footer-bottom">

        <p>
          © 2026 Ahana Sarkar. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;