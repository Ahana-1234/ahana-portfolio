import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">

      {}
      <motion.div
        className="left-section"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="hero-intro">
          Hello, I'm
        </p>

        <h1>
          <span className="purple">Ahana</span> Sarkar
        </h1>

        <p className="hero-description">
          I build clean, responsive and user-friendly
          digital experiences.
        </p>

        <div className="hero-buttons">

          <Link to="/projects" className="btn">
            View My Work
          </Link>

          <a
            href="/Ahana_Sarkar_CV.pdf"
            download
            className="btn btn-outline"
          >
            Download Resume
          </a>

        </div>

      </motion.div>


      {}
      <motion.div
        className="right-section"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2
        }}
      >

        <motion.img
          src="src\pictures\bg2.jpeg"
          alt="Developer illustration"

          animate={{
            y: [0, -12, 0]
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

      </motion.div>

    </main>
  );
}

export default Home;