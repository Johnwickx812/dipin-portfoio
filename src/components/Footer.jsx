// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Johnwickx812' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'linkedin.com/in/dipin-dev-824761345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Email', icon: FaEnvelope, href: 'mailto:dipinibl@gmail.com' },
];

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-lightest-navy">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate text-sm font-mono">
            Built with React, Tailwind CSS & Framer Motion
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-accent transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-slate text-xs font-mono">
            © {new Date().getFullYear()} John. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

