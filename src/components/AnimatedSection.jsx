import { motion } from "motion/react";

function AnimatedSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.7,
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;