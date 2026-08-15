import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from './Ui/VariantButton';
import SectionEyebrow from './SectionEyebrow';

const divisions = [
    {
      id: 1,
      name: 'Okeanos Academy',
      shortName: 'Academy',
      description: 'Platform edukasi terdepan yang menyediakan kursus, pelatihan, dan sertifikasi profesional di bidang kimia dan industri terkait. Kami menghadirkan pembelajaran berkualitas tinggi dengan instruktur berpengalaman.',
      logo: "logo/Latar Putih - Okeanos Academy.png",
      image: '/divisions/okeanos-academy.jpg',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Kursus Online & Offline', 'Sertifikasi Profesional', 'Instruktur Ahli'],
      stats: { number: '500+', label: 'Peserta Aktif' },
      color: 'blue'
    },
    {
      id: 2,
      name: 'Okeanos Research & Development',
      shortName: 'R&D',
      description: 'Divisi riset dan pengembangan yang fokus pada inovasi teknologi kimia, pengembangan produk baru, dan solusi berkelanjutan untuk industri masa depan.',
      logo: "logo/Latar Putih- Okeanos R&D.png",
      image: '/divisions/okeanos-rnd.jpg',
      gradient: 'from-indigo-500 to-purple-500',
      features: ['Riset Inovatif', 'Pengembangan Produk', 'Solusi Berkelanjutan'],
      stats: { number: '50+', label: 'Proyek Penelitian' },
      color: 'indigo'
    },
    {
      id: 3,
      name: 'Okeanos Podcast',
      shortName: 'Podcast',
      description: 'Media informasi dan edukasi melalui podcast yang membahas tren terkini dalam industri kimia, wawancara dengan para ahli, dan diskusi mendalam tentang perkembangan teknologi.',
      logo: "logo/Latar Putih - Okeanos Podcast.png",
      image: '/divisions/okeanos-podcast.jpg',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Konten Edukatif', 'Interview Ahli', 'Tren Industri'],
      stats: { number: '10k+', label: 'Monthly Listeners' },
      color: 'purple'
    }
  ];

const DevisionSection = () => {
    const [selectedDivision, setSelectedDivision] = useState(0);

    const nextDivision = () => {
        setSelectedDivision((prev) => (prev + 1) % divisions.length);
    };

    const prevDivision = () => {
        setSelectedDivision((prev) => (prev - 1 + divisions.length) % divisions.length);
    };
  return (
    <section id="okeanos" className="relative px-8 py-24 overflow-hidden sm:px-10 lg:px-12 bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/30">
    {/* Background Elements */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/30" />
    
    {/* Animated background particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-400/30"
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
    
    <div className="relative z-10 mx-auto max-w-7xl">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <SectionEyebrow tone="dark">Divisi Okeanos</SectionEyebrow>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 text-5xl font-bold text-transparent lg:text-6xl bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text"
        >
          Ekosistem Okeanos
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-300"
        >
          Tiga pilar utama yang membentuk ekosistem komprehensif Okeanos dalam mendukung 
          pendidikan, penelitian, dan penyebaran informasi di industri kimia
        </motion.p>
      </motion.div>

      {/* Interactive Showcase */}
      <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDivision}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-800 shadow-2xl">
                <img
                  src={divisions[selectedDivision].image}
                  alt={`Aktivitas ${divisions[selectedDivision].name}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-slate-950/35" />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-slate-950/70" />

                {/* Logo */}
                <div className="absolute left-8 top-8 h-20 w-20 rounded-2xl bg-white/90 p-4">
                  <img 
                    src={divisions[selectedDivision].logo} 
                    alt={divisions[selectedDivision].name}
                    className="object-contain w-full h-full"
                  />
                </div>
                
                {/* Stats */}
                <div className="absolute text-right top-8 right-8">
                  <div className="text-4xl font-bold text-white">
                    {divisions[selectedDivision].stats.number}
                  </div>
                  <div className="text-sm text-white/80">
                    {divisions[selectedDivision].stats.label}
                  </div>
                </div>
                
                {/* Center Logo Large */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-3xl bg-white/90 p-8">
                    <img 
                      src={divisions[selectedDivision].logo} 
                      alt={divisions[selectedDivision].name}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Division Name */}
                <div className="absolute bottom-8 left-8">
                  <div className="mb-2 text-2xl font-bold text-white">
                    {divisions[selectedDivision].shortName}
                  </div>
                  <div className="text-sm text-white/80">
                    Division {selectedDivision + 1} of 3
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute w-16 h-16 rounded-full bottom-8 right-8 bg-white/10" />
                <div className="absolute w-24 h-24 rounded-full top-1/3 left-1/3 bg-white/5" />
              </div>
              
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prevDivision}
              variant="outline"
              size="icon"
              className="text-white bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {divisions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDivision(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedDivision 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextDivision}
              variant="outline"
              size="icon"
              className="text-white bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDivision}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground">
                <span className="font-medium">Divisi {selectedDivision + 1}</span>
              </div>
              
              <h3 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                {divisions[selectedDivision].name}
              </h3>
              
              <p className="text-xl leading-relaxed text-gray-300">
                {divisions[selectedDivision].description}
              </p>
              
              {/* Features */}
              <div className="space-y-4">
                {divisions[selectedDivision].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-3 w-3 rounded-full bg-blue-300" />
                    <span className="font-medium text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="border-0 bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl group"
                  size="lg"
                >
                  <span>Explore {divisions[selectedDivision].shortName}</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Timeline Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20"
      >
        <div className="items-center justify-between hidden gap-8 lg:flex lg:flex-row">
          {divisions.map((division, index) => (
            <motion.button
              key={division.id}
              onClick={() => setSelectedDivision(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 p-6 rounded-2xl transition-all duration-300 ${
                index === selectedDivision
                  ? 'bg-white/20 backdrop-blur-sm border border-white/30'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 p-3 bg-white/20 rounded-xl">
                  <img 
                    src={division.logo} 
                    alt={division.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">{division.shortName}</h4>
                  <p className="text-sm text-gray-300">{division.stats.label}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 text-center"
      >
      </motion.div>
    </div>
  </section>
  )
}

export default DevisionSection
