import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import {
  Home,
  Info,
  FileText,
  Briefcase,
  Bell,
  Mail,
  Youtube,
  Boxes
} from "lucide-react";
import logo from "../assets/logo-utama.png";

const Navbar = () => {
  const [onScroll, setOnScroll] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#service' },
    { label: 'Portfolio', href: '#portofolio' },
    { label: 'Berita', href: '#berita' },
    { label: 'Kontak', href: '#kontak' },
  ]

  // Lock scroll saat menu open
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [navbarOpen]);

  // Efek scroll navbar
  useEffect(() => {
    const handleScroll = () => {
      setOnScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy: deteksi section aktif
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      navItems.forEach((item) => {
        const id = item.href.replace("#", "");
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = id; // simpan ID, bukan href
        }
      });

      setActiveSection(current || "beranda");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);
  return (
    <>
      {/* Navbar Atas */}
      <div
        className={`fixed w-full flex z-[60] justify-between h-20 items-center px-10 lg:px-44 duration-500 ${onScroll ? "border-b border-gray-300 bg-white" : "bg-transparent"
          }`}
      >
        <a
          href="#beranda"
          className="font-bold text-2xl text-black flex flex-row justify-center items-center"
        >
          {/* <img src={logo} alt="logo" className="w-10 mr-2" /> */}
          Okeanos
        </a>

        {/* Menu desktop */}
        <nav className="hidden lg:flex items-center space-x-8 text-black">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`relative group transition-colors duration-200 ${activeSection === item.href.replace("#", "")
                ? "text-accent font-semibold"
                : "text-foreground hover:text-accent"
                }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 ${activeSection === item.href.replace("#", "")
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </motion.a>
          ))}
        </nav>

        <div className="border rounded-lg px-5 py-2 bg-primary font-bold text-white hidden cursor-pointer lg:flex hover:bg-accent transition-colors duration-200">
          Hubungi Kami
        </div>

        {/* Icon menu mobile */}
        <IoMenu
          size={28}
          className="m-1 rounded-lg hover:scale-110 duration-200 text-black cursor-pointer lg:hidden"
          onClick={() => setNavbarOpen(true)}
        />
      </div>

      {/* Sidebar mobile */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-2/3 sm:w-1/2 h-full bg-primary text-white z-[70] flex flex-col p-6 shadow-lg lg:hidden"
          >
            {/* Header logo */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center text-white font-bold text-2xl">
                {/* <img src={logo} alt="logo" className="w-10 mr-2" /> */}
                Okeanos
              </div>
              {/* Tombol close */}
              <div className="flex">
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  onClick={() => setNavbarOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10"
                >
                  <IoClose size={28} className="text-white" />
                </motion.button>
              </div>
            </div>

            {/* Menu items */}
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setNavbarOpen(false)}
                    className={`flex items-center space-x-3 text-lg p-2 rounded-md transition-colors duration-200 ${isActive
                      ? "bg-accent text-white font-semibold"
                      : "hover:bg-accent/30"
                      }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Tombol kontak */}
            <button className="mt-auto bg-white text-sky-900 py-2 px-4 rounded-lg hover:bg-accent hover:text-white font-bold transition-colors duration-200">
              Hubungi Kami
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
