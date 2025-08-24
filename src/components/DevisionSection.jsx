import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from './Ui/VariantButton';

const divisions = [
    {
      id: 1,
      name: 'Okeanos Academy',
      shortName: 'Academy',
      description: 'Platform edukasi terdepan yang menyediakan kursus, pelatihan, dan sertifikasi profesional di bidang kimia dan industri terkait. Kami menghadirkan pembelajaran berkualitas tinggi dengan instruktur berpengalaman.',
      logo: "logo/Latar Putih - Okeanos Academy.png",
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
    <section id="division" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/30">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/30 pointer-events-none" />
    
    {/* Animated background particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
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
    
    <div className="max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full mb-8"
        >
          <Sparkles className="w-5 h-5 text-blue-300" />
          <span className="text-blue-300 font-semibold">Divisi Okeanos</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent mb-8"
        >
          Ekosistem Okeanos
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Tiga pilar utama yang membentuk ekosistem komprehensif Okeanos dalam mendukung 
          pendidikan, penelitian, dan penyebaran informasi di industri kimia
        </motion.p>
      </motion.div>

      {/* Interactive Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <div className={`aspect-square rounded-3xl bg-gradient-to-br ${divisions[selectedDivision].gradient} p-12 shadow-2xl relative overflow-hidden`}>
                {/* Logo */}
                <div className="absolute top-8 left-8 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <img 
                    src={divisions[selectedDivision].logo} 
                    alt={divisions[selectedDivision].name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Stats */}
                <div className="absolute top-8 right-8 text-right">
                  <div className="text-4xl font-bold text-white">
                    {divisions[selectedDivision].stats.number}
                  </div>
                  <div className="text-white/80 text-sm">
                    {divisions[selectedDivision].stats.label}
                  </div>
                </div>
                
                {/* Center Logo Large */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                    <img 
                      src={divisions[selectedDivision].logo} 
                      alt={divisions[selectedDivision].name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Division Name */}
                <div className="absolute bottom-8 left-8">
                  <div className="text-2xl font-bold text-white mb-2">
                    {divisions[selectedDivision].shortName}
                  </div>
                  <div className="text-white/80 text-sm">
                    Division {selectedDivision + 1} of 3
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/10 rounded-full" />
                <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-white/5 rounded-full" />
              </div>
              
              {/* Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${divisions[selectedDivision].gradient} opacity-30 rounded-3xl blur-2xl -z-10`} />
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prevDivision}
              variant="outline"
              size="icon"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
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
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
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
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${divisions[selectedDivision].gradient} text-white`}>
                <span className="font-medium">Division {selectedDivision + 1}</span>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                {divisions[selectedDivision].name}
              </h3>
              
              <p className="text-xl text-gray-300 leading-relaxed">
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
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${divisions[selectedDivision].gradient}`} />
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className={`bg-gradient-to-r ${divisions[selectedDivision].gradient} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  size="lg"
                >
                  <span>Explore {divisions[selectedDivision].shortName}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
        <div className="hidden lg:flex lg:flex-row items-center justify-between gap-8">
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
                <div className="w-16 h-16 bg-white/20 rounded-xl p-3">
                  <img 
                    src={division.logo} 
                    alt={division.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold">{division.shortName}</h4>
                  <p className="text-gray-300 text-sm">{division.stats.label}</p>
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
        className="text-center mt-20"
      >
        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Bergabung dengan Ekosistem Okeanos
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari komunitas yang mendorong inovasi dan kemajuan industri kimia
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Mulai Perjalanan Anda
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default DevisionSection