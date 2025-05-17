import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "../assets/appIcon.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (id === "introduction") {
      // 对于introduction，滚动到页面顶部
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (element) {
      // 滚动到元素位置，并考虑头部导航的高度
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`Element with id "${id}" not found`);
    }

    if (isMenuOpen) setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Introduction", id: "introduction" },
    { name: "Features", id: "features" },
    { name: "Contact", id: "faq" }, // 使用原先的FAQ部分作为Contact
  ];

  return (
    <header
      className={`${
        scrolled
          ? "py-3 bg-white/95 shadow-md backdrop-blur-sm"
          : "py-5 bg-transparent"
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 lg:px-16`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoSvg} alt="Fitopia" className="h-10" />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={`#${item.id}`}
              className="text-gray-700 hover:text-orange-500 font-medium text-lg transition-colors relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </motion.a>
          ))}
          <motion.a
            href="https://apps.apple.com/us/app/pushup-everyday-fitopia/id6739538834?l"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-lg transition duration-300 shadow-md hover:shadow-orange-200/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download demo
          </motion.a>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-10 h-10 flex justify-center items-center">
            <span
              className={`absolute h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 mx-4 bg-white rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.id}`}
                  className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 font-medium text-lg transition-colors py-3 px-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="https://apps.apple.com/us/app/pushup-everyday-fitopia/id6739538834?l"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 mx-6 mt-3 rounded-lg transition duration-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Download demo
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
