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
              Hello! I'm Dipin Dev, a Full-Stack Developer from Palakkad, Kerala, passionate about 
              building real-world web applications that solve actual problems.
            </p>
            <p>
              I specialize in React and FastAPI, with hands-on experience building and deploying 
              scalable full-stack applications. I enjoy debugging, understanding how systems work, 
              and turning ideas into working products.
            </p>
            <p>
              Currently in my final year of BCA at Akshaya College, Bharathiar University. 
              I'm actively looking for full-stack or frontend developer roles where I can 
              contribute, grow, and build things that matter.
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

