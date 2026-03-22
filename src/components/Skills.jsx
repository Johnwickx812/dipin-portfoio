// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Shadcn/UI', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Node.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'SQLite', 'Python'],
  },
  {
    category: 'Tools & Cloud',
    skills: ['Git/GitHub', 'Vercel', 'Render', 'AWS (S3, EC2)', 'CI/CD', 'Postman', 'Supabase'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
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
            04.
          </span>
          <span>Skills & Technologies</span>
          <span className="hidden md:block h-px bg-lightest-navy flex-1 max-w-xs"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-light-navy p-6 rounded-lg hover:bg-lightest-navy transition-colors"
            >
              <h3 className="text-xl font-semibold text-light-slate mb-4 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.2 + skillIndex * 0.05,
                    }}
                    className="px-4 py-2 bg-lightest-navy text-accent font-mono text-sm rounded hover:bg-accent hover:text-navy transition-colors cursor-default"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

