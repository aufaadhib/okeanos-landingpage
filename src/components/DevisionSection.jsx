import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Ui/VariantButton';
import SectionEyebrow from './SectionEyebrow';
import { ImageWithSkeleton } from './Ui/ImageWithSkeleton';

const divisions = [
    {
      id: 1,
      name: 'Okeanos Academy',
      shortName: 'Academy',
      description: 'Platform edukasi terdepan yang menyediakan kursus, pelatihan, dan sertifikasi profesional di bidang kimia dan industri terkait. Kami menghadirkan pembelajaran berkualitas tinggi dengan instruktur berpengalaman.',
      logo: "logo/Latar Putih - Okeanos Academy.png",
      image: '/optimized/okeanos-academy.webp',
      features: ['Kursus Online & Offline', 'Sertifikasi Profesional', 'Instruktur Ahli'],
      stats: { number: '500+', label: 'Peserta Aktif' },
    },
    {
      id: 2,
      name: 'Okeanos Research & Development',
      shortName: 'R&D',
      description: 'Divisi riset dan pengembangan yang fokus pada inovasi teknologi kimia, pengembangan produk baru, dan solusi berkelanjutan untuk industri masa depan.',
      logo: "logo/Latar Putih- Okeanos R&D.png",
      image: '/optimized/okeanos-rnd.webp',
      features: ['Riset Inovatif', 'Pengembangan Produk', 'Solusi Berkelanjutan'],
      stats: { number: '50+', label: 'Proyek Penelitian' },
    },
    {
      id: 3,
      name: 'Okeanos Podcast',
      shortName: 'Podcast',
      description: 'Media informasi dan edukasi melalui podcast yang membahas tren terkini dalam industri kimia, wawancara dengan para ahli, dan diskusi mendalam tentang perkembangan teknologi.',
      logo: "logo/Latar Putih - Okeanos Podcast.png",
      image: '/optimized/okeanos-podcast.webp',
      features: ['Konten Edukatif', 'Interview Ahli', 'Tren Industri'],
      stats: { number: '10k+', label: 'Monthly Listeners' },
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
    <section id="okeanos" className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
    
    <div className="relative z-10 mx-auto max-w-7xl">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-14 text-center lg:mb-20"
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
          className="mb-6 text-4xl font-bold text-white lg:text-6xl"
        >
          Ekosistem Okeanos
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-300 lg:text-xl"
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
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-900 shadow-2xl lg:rounded-3xl">
                <ImageWithSkeleton
                  src={divisions[selectedDivision].image}
                  alt={`Aktivitas ${divisions[selectedDivision].name}`}
                  wrapperClassName="absolute inset-0"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div aria-hidden="true" className="absolute inset-0 z-20 bg-slate-950/35" />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-20 h-28 bg-slate-950/70" />

                {/* Stats */}
                <div className="absolute right-8 top-8 z-30 text-right">
                  <div className="text-4xl font-bold text-white">
                    {divisions[selectedDivision].stats.number}
                  </div>
                  <div className="text-sm text-white/80">
                    {divisions[selectedDivision].stats.label}
                  </div>
                </div>
                
                {/* Center Logo Large */}
                <div className="absolute inset-0 z-30 flex items-center justify-center">
                  <div className="h-40 w-40 rounded-3xl bg-white/60 p-8 backdrop-blur-sm lg:h-48 lg:w-48 lg:p-10">
                    <img 
                      src={`/${divisions[selectedDivision].logo}`} 
                      alt={divisions[selectedDivision].name}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Division Name */}
                <div className="absolute bottom-8 left-8 z-30">
                  <div className="mb-2 text-2xl font-bold text-white">
                    {divisions[selectedDivision].shortName}
                  </div>
                  <div className="text-sm text-white/80">
                    Division {selectedDivision + 1} of 3
                  </div>
                </div>
                
              </div>
              
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button
              aria-label="Divisi sebelumnya"
              onClick={prevDivision}
              variant="outline"
              size="icon"
              className="border-slate-700 bg-slate-900 text-white hover:bg-blue-700"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center gap-1">
              {divisions.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  aria-label={`Tampilkan ${divisions[index].name}`}
                  onClick={() => setSelectedDivision(index)}
                  className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 motion-reduce:transition-none ${
                      index === selectedDivision ? 'bg-blue-400' : 'bg-slate-600 hover:bg-slate-400'
                    }`}
                  />
                </button>
              ))}
            </div>
            
            <Button
              aria-label="Divisi berikutnya"
              onClick={nextDivision}
              variant="outline"
              size="icon"
              className="border-slate-700 bg-slate-900 text-white hover:bg-blue-700"
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
          className="space-y-6"
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
              <div className="border-l-2 border-blue-400 pl-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
                Divisi {selectedDivision + 1}
              </div>
              
              <h3 className="text-3xl font-bold leading-tight text-white lg:text-5xl">
                {divisions[selectedDivision].name}
              </h3>
              
              <p className="text-lg leading-relaxed text-slate-300 lg:text-xl">
                {divisions[selectedDivision].description}
              </p>
              
              {/* Features */}
              <div className="space-y-3 border-l border-slate-700 pl-5">
                {divisions[selectedDivision].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="border-b border-slate-800 pb-3 text-slate-200 last:border-b-0 last:pb-0"
                  >
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
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
        className="mt-14 border-t border-slate-800 pt-8 lg:mt-20"
      >
        <div className="hidden items-stretch justify-between gap-4 lg:flex lg:flex-row">
          {divisions.map((division, index) => (
            <motion.button
              key={division.id}
              type="button"
              onClick={() => setSelectedDivision(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 border p-5 text-left transition-colors duration-200 motion-reduce:transition-none ${
                index === selectedDivision
                  ? 'border-blue-400 bg-blue-700 text-white'
                  : 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
                  Pilar {division.id}
                </p>
                <h4 className="font-semibold">{division.shortName}</h4>
                <p className="mt-1 text-sm opacity-80">{division.stats.label}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default DevisionSection
