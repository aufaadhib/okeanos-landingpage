import React from 'react'
import { motion } from 'motion/react';
import { Beaker, Microscope, Atom } from 'lucide-react';
import Button from './Ui/Button';
import SectionEyebrow from './SectionEyebrow';
import { ImageWithSkeleton } from './Ui/ImageWithSkeleton';

const Hero = () => {
  const floatingIcons = [
    { Icon: Beaker, delay: 0.5 },
    { Icon: Microscope, delay: 0.8 },
    { Icon: Atom, delay: 1.1 },
  ];
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-16 pb-10 lg:pb-0">
      {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 via-background to-secondary/10"></div> */}
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: 0.1, 
              scale: 1, 
              rotate: 360,
              y: [0, -20, 0],
            }}
            transition={{
              delay,
              duration: 2,
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className={`absolute ${
              index === 0 ? 'top-20 right-20' : 
              index === 1 ? 'bottom-40 left-20' : 
              'top-40 left-1/3'
            }`}
          >
            <Icon className="w-24 h-24 text-primary" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10 px-8 sm:px-10 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-6">
                <SectionEyebrow>Mitra Industri Terpercaya</SectionEyebrow>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Solusi Industri
                <span className="block">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-accent"
                  >
                    Terdepan
                  </motion.span>
                </span>
                <span className="block">untuk Masa Depan</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              Kami adalah mitra terpercaya untuk kebutuhan riset, edukasi, dan pengembangan industri. 
              Dengan teknologi canggih dan tim ahli berpengalaman, kami hadir untuk mendukung inovasi Anda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button icon title={"Jelajahi Layanan"} className="bg-blue-400 text-white hover:bg-blue-500">
              </Button>
              <Button title={"Lihat Portofolio"} className="bg-primary/10 text-stone-800 border border-primary/20 hover:bg-primary/20">
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
            >
              {[
                { number: '500+', label: 'Klien Terpusat' },
                { number: '15+', label: 'Tahun Pengalaman' },
                { number: '1000+', label: 'Proyek Selesai' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                    className="text-2xl font-bold text-primary"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-4 -top-4 z-30 rounded-xl border border-border bg-card p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Beaker className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Riset & Analisis</p>
                    <p className="text-xs text-muted-foreground">99.9% Akurasi</p>
                  </div>
                </div>
              </motion.div>

              <ImageWithSkeleton
                src="/optimized/hero-section.webp"
                alt="Modern Chemistry Laboratory Research"
                wrapperClassName="aspect-[4/3] w-full rounded-2xl shadow-2xl"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -right-4 z-30 rounded-xl border border-border bg-card p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Microscope className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Pengembangan</p>
                    <p className="text-xs text-muted-foreground">ISO Certified</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
