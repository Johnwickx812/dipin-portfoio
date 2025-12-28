// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24"
    >
      <motion.div
        className="max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent font-mono text-sm md:text-base mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-light-slate mb-4"
        >
          DIPIN DEV.
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6"
        >
          Front-End Developer | Python-Powered Web Apps
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-slate text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
        >
          I'm a developer passionate about creating clean, intuitive user
          interfaces and building scalable web applications. Currently focused
          on React, modern JavaScript, and Python-based backend development.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.a
            href="#projects"
            className="inline-block border-2 border-accent text-accent px-8 py-4 font-mono text-sm hover:bg-accent/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Check out my work
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className="text-accent hover:text-light-slate transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-label="Scroll to about"
          >
            <HiArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

