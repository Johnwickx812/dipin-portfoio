import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiOutlineCode } from 'react-icons/hi';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Johnwickx812' },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/dipin-dev-824761345/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  { name: 'Email', icon: FaEnvelope, href: 'mailto:dipinibl@gmail.com' },
];

const Sidebar = ({ onLinkClick }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (onLinkClick) onLinkClick();
    }
  };

  return (
    <nav className="flex flex-col items-center gap-8 py-8 md:py-8">
      {/* Logo/Icon */}
      <motion.a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          handleClick('#hero');
          if (onLinkClick) onLinkClick();
        }}
        className="text-accent hover:text-light-slate transition-colors mb-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Home"
      >
        <HiOutlineCode className="w-6 h-6 md:w-6 md:h-6" />
      </motion.a>

      {/* Navigation Links */}
      <div className="flex flex-col gap-6">
        {navItems.map((item, index) => {
          const sectionId = item.href.substring(1);
          const isActive = activeSection === sectionId;

          return (
            <motion.button
              key={item.name}
              onClick={() => handleClick(item.href)}
              className="relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              aria-label={item.name}
            >
              <span
                className={`text-sm md:text-xs font-mono transition-colors ${
                  isActive ? 'text-accent' : 'text-slate hover:text-accent'
                }`}
              >
                {item.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent rounded-r hidden md:block"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-4 mt-auto md:mt-auto">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;

          return (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name === 'Email' ? '_self' : '_blank'}
              rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
              className="text-slate hover:text-accent transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navItems.length + index) * 0.1 }}
              aria-label={link.name}
            >
              <Icon className="w-5 h-5 md:w-5 md:h-5" />
            </motion.a>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
