// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto flex items-center"
    >
      <motion.div
        className="w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-mono text-sm md:text-base mb-4">
          05. What's Next?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">
          Get In Touch
        </h2>
        <p className="text-slate text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm actively looking for full-time developer roles.
          My college ends April 2026 and I'm ready to contribute from day one.
          If you think I'd be a good fit or just want to connect, my inbox is open.
        </p>
        <motion.a
          href="mailto:dipinibl@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-accent text-accent px-8 py-4 font-mono text-sm hover:bg-accent/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;

