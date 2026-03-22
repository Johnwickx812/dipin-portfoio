// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Full-Stack Development Intern',
    company: 'Softronics',
    period: 'Jun 2024 - Nov 2024',
    description: [
      'Developed responsive React.js interfaces reducing page load time by 30% through code splitting and lazy loading for 200+ daily users',
      'Built 15+ RESTful APIs with MongoDB integration handling 1,000+ requests per day',
      'Debugged frontend performance issues, identified bottlenecks, and implemented fixes',
      'Collaborated using Git workflows — feature branching, pull requests, and code reviews',
    ],
  },
  {
    title: 'Self-Directed Learning & Projects',
    company: 'Independent',
    period: '2023 - Present',
    description: [
      'Built MediNutri — AI health platform with BERT NLP, FastAPI, React/TypeScript, deployed on Vercel + Render',
      'Built Buildify — AI PC builder for Indian market with React, TypeScript, Supabase, and GPT-powered assistant',
      'Self-taught React, TypeScript, FastAPI, PostgreSQL, cloud deployment through building real projects',
      'Finalist in Debugging Competition at Nehru College of Arts & Science',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-20 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-light-slate mb-12 flex items-center gap-4">
          <span className="text-accent font-mono text-xl md:text-2xl">
            02.
          </span>
          <span>Where I've Worked</span>
          <span className="hidden md:block h-px bg-lightest-navy flex-1 max-w-xs"></span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-lightest-navy"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-4 top-2 w-4 h-4 bg-accent rounded-full border-4 border-navy"></div>

                <div className="bg-light-navy p-6 rounded hover:bg-lightest-navy transition-colors">
                  <div className="flex items-start gap-4 mb-3">
                    <FaBriefcase className="text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-light-slate">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-mono text-sm">
                        {exp.company}
                      </p>
                      <p className="text-slate text-sm mt-1">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-slate">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent mt-2">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

