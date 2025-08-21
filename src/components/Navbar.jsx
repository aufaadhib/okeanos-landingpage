import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'
import logo from '../assets/logo-utama.png'

const Navbar = () => {
  const [onScroll, setOnScroll] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Berita', href: '#berita' },
    { label: 'Kontak', href: '#kontak' },
  ]

  // lock scroll saat menu open
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => (document.body.style.overflow = "")
  }, [navbarOpen])

  // efek scroll navbar
  useEffect(() => {
    const handleScroll = () => {
      setOnScroll(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Navbar Atas */}
      <div
        className={`fixed w-full flex z-[60] justify-between h-14 md:h-20 items-center px-10 lg:px-44 duration-500 text-white border-b border-gray-500  ${onScroll ? 'bg-opacity-90 backdrop-blur-md' : 'bg-opacity-100 backdrop-blur-none'}`}
      >
        <a href="#" className="font-bold text-2xl text-black flex flex-row justify-center items-center">
          {/* <img src={logo} alt="logo" className='w-10 m-2'/> */}
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
              className="relative group text-foreground hover:text-[#0080e4] transition-colors duration-200"
            >
              {item.label}
              {/* underline animasi dari kiri ke kanan */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0080e4] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        <div className="border rounded-lg px-5 py-2 bg-[#0080e4] font-bold text-white hidden cursor-pointer lg:flex hover:bg-[#00a0ff] transition-colors duration-200">
          Hubungi Kami
        </div>

        {/* Icon menu mobile */}
        <IoMenu
          size={28}
          className="m-1 rounded-lg hover:scale-110 duration-200 bg-black border-white hover:text-cyan-950 hover:bg-black cursor-pointer lg:hidden"
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
            className="fixed top-0 right-0 w-2/3 sm:w-1/2 h-full bg-sky-900 text-white z-[70] flex flex-col p-6 space-y-6 lg:hidden shadow-lg"
          >
            {/* tombol close */}
            <div className="flex justify-end">
              <IoClose
                size={30}
                className="cursor-pointer hover:text-sky-300"
                onClick={() => setNavbarOpen(false)}
              />
            </div>

            {/* daftar menu */}
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setNavbarOpen(false)}
                className="text-lg hover:text-sky-300 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <button className="mt-auto bg-white text-sky-900 py-2 px-4 rounded-lg hover:bg-sky-200">
              Contact US
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
