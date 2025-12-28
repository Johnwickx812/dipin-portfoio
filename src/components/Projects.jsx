import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description:
      'A responsive weather application that displays current conditions and forecasts. Integrates with weather APIs and features interactive charts and maps.',
    tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Social Media Dashboard',
    description:
      'A comprehensive dashboard for managing social media accounts with analytics, scheduling, and engagement tracking. Built with React and RESTful APIs.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-light-slate mb-12 flex items-center gap-4">
          <span className="text-accent font-mono text-xl md:text-2xl">
            03.
          </span>
          <span>Some Things I've Built</span>
          <span className="hidden md:block h-px bg-lightest-navy flex-1 max-w-xs"></span>
        </h2>

        <div className="space-y-24">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid md:grid-cols-12 gap-6 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image Placeholder */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-light-navy rounded-lg overflow-hidden border border-lightest-navy">
                      <div className="aspect-video bg-lightest-navy"></div>
                    </div>
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div
                  className={`md:col-span-5 ${
                    index % 2 === 1 ? 'md:order-1 md:text-right' : ''
                  }`}
                >
                  <p className="text-accent font-mono text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold text-light-slate mb-4">
                    {project.title}
                  </h3>
                  <div className="bg-light-navy p-6 rounded-lg mb-4">
                    <p className="text-slate leading-relaxed">{project.description}</p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-3 mb-4 ${
                      index % 2 === 1 ? 'md:justify-end' : ''
                    }`}
                  >
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-slate font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 ? 'md:justify-end' : ''
                    }`}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-accent transition-colors"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-accent transition-colors"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

