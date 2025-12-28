// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-light-slate mb-4 flex items-center gap-4">
          <span className="text-accent font-mono text-xl md:text-2xl">
            01.
          </span>
          <span>About Me</span>
          <span className="hidden md:block h-px bg-lightest-navy flex-1 max-w-xs"></span>
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-slate leading-relaxed"
          >
            <p>
              Hello! I'm Dipin Dev, a front-end developer ,
              passionate about crafting exceptional user experiences through
              clean, efficient code.
            </p>
            <p>
              I specialize in building responsive and high-performance web applications
              using React and modern JavaScript, with a strong focus on usability,
              accessibility, and smooth user interactions.
            </p>
            <p>
              Currently, I’m focusing on React with Python-based backend development,
              building scalable and maintainable full-stack applications. I enjoy
              solving real-world problems and turning ideas into reliable digital 
              solutions through code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="border-2 border-accent p-2 hover:bg-accent/5 transition-colors">
              <div className="bg-light-navy p-6">
                <div className="aspect-square bg-lightest-navy"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

