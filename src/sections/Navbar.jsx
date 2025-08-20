import React, { useState, useEffect } from 'react'
import { motion } from "motion/react"

function Navigation({ activeSection }) {
  const scrollToSection = (id, isExternal) => {
    if (isExternal) {
      window.location.href = `/${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experiences" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
    { id: "resume", label: "Resume", isExternal: true },
  ];

  return (
    <ul className="nav-ul">
      {links.map((link) => (
        <li key={link.id} className="nav-li">
          <button
            className={`nav-link ${
              activeSection === link.id ? "text-white font-bold" : "text-neutral-400"
            }`}
            onClick={() => scrollToSection(link.id, link.isExternal)}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "experience", "reviews", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <a href="/" className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>
            Yash Raj Singh
          </a>
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              className='w-6 h-6'
              alt='toggle'
            />
          </button>
          <nav className='hidden sm:flex'>
            <Navigation activeSection={activeSection} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className='block overflow-hidden text-center sm:hidden'
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className='pb-5'>
            <Navigation activeSection={activeSection} />
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;