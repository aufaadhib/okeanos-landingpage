import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import {
  Home,
  Info,
  FileText,
  Briefcase,
  Bell,
  Youtube,
  Boxes
} from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [onScroll, setOnScroll] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [navHeight, setNavHeight] = useState(80);
  const navRef = useRef(null);

  const navItems = useMemo(() => ([
    { label: "Beranda", target: "home", icon: Home },
    { label: "Tentang", target: "about", icon: Info },
    { label: "Layanan", target: "service", icon: Briefcase },
    { label: "Okeanos", target: "okeanos", icon: Boxes },
    { label: "Portfolio", target: "portfolio", icon: FileText },
    { label: "Berita", target: "news", icon: Bell },
    { label: "Video", target: "video", icon: Youtube },
  ]), []);

  // Lock scroll saat menu open
  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [navbarOpen]);

  // Efek scroll navbar
  useEffect(() => {
    const handleScroll = () => setOnScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync tinggi navbar (untuk offset scroll)
  useEffect(() => {
    const sync = () => {
      const h = navRef.current?.offsetHeight ?? 80;
      setNavHeight(h);
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  // ScrollSpy: deteksi section aktif
  useEffect(() => {
    const onSpy = () => {
      let current = activeSection;
      for (const item of navItems) {
        const el = document.getElementById(item.target);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const probe = navHeight + 20; // titik uji sedikit di bawah navbar
        if (rect.top <= probe && rect.bottom >= probe) {
          current = item.target;
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onSpy);
    onSpy();
    return () => window.removeEventListener("scroll", onSpy);
  }, [navItems, navHeight]); // re-evaluasi kalau tinggi navbar berubah

  // Util scroll halus tanpa mengubah URL
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar Atas */}
      <div
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-[60] duration-500 ${onScroll ? "border-b border-gray-300 bg-white" : "bg-transparent"
          }`}
      >
        <div className="mx-auto container px-8 sm:px-10 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToId("home")}
              className="font-bold text-2xl text-black flex flex-row justify-center items-center"
            >
              <img src={logo} alt="logo" className="w-36" />
              {/* Teknokeanos */}
            </button>

            {/* Menu desktop */}
            <nav className="hidden lg:flex items-center space-x-8 text-black">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.target}
                  type="button"
                  onClick={() => scrollToId(item.target)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`relative group transition-colors duration-200 cursor-pointer ${activeSection === item.target
                      ? "text-accent font-semibold"
                      : "text-foreground hover:text-accent"
                    }`}
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 ${activeSection === item.target ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </motion.button>
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
              aria-label="Buka menu"
            />
          </div>

        </div>

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
            role="dialog"
            aria-modal="true"
          >
            {/* Header logo */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center text-white font-bold text-2xl">
                Okeanos
              </div>
              {/* Tombol close */}
              <div className="flex">
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  onClick={() => setNavbarOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10"
                  aria-label="Tutup menu"
                >
                  <IoClose size={28} className="text-white" />
                </motion.button>
              </div>
            </div>

            {/* Menu items */}
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.target;
                return (
                  <button
                    key={item.target}
                    type="button"
                    onClick={() => {
                      scrollToId(item.target);
                      setNavbarOpen(false);
                    }}
                    className={`flex items-center space-x-3 text-lg p-2 rounded-md transition-colors duration-200 ${isActive
                        ? "bg-accent text-white font-semibold"
                        : "hover:bg-accent/30"
                      }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
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
