import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react'
import { IoMenu } from 'react-icons/io5'

const Navbar = () => {
  const [onScroll, setOnScroll] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Berita', href: '#berita' },
    { label: 'Kontak', href: '#kontak' },
  ];

  useEffect(()=>{
    if(navbarOpen){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "";
    }
    return ()=>(document.body.style.overflow = "");
    },[navbarOpen]
  );

  useEffect(() => {
    const handleScroll = () => {
      setOnScroll(window.scrollY > 50); // true kalau sudah geser > 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    
    <div className={`fixed w-full flex z-[60] justify-between h-14 md:h-16 items-center px-10 lg:px-44 duration-500 text-white  ${onScroll ? "bg-gradient-to-r from-sky-600 to-sky-800 shadow-md shadow-white":"bg-gradient-to-r from-sky-600/30 to-sky-800/30"}`}>
        <a href='#' className='font-bold text-xl text-white'>Okeanos</a>
        <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>
        <div className='border rounded-lg px-2 py-1 bg-white hidden lg:flex text-cyan-950'>Contact US</div>
        <IoMenu size={24} className='m-1 rounded-lg hover:scale-110 duration-200 border-white hover:text-cyan-950 hover:bg-white cursor-pointer lg:hidden' />
          

    </div>
   
    </>
  )
}

export default Navbar