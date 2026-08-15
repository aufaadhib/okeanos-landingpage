import React from 'react';
import { motion } from 'motion/react';
import SectionEyebrow from './SectionEyebrow';
import { ImageWithSkeleton } from './Ui/ImageWithSkeleton';

const services = [
  {
    id: 1,
    title: 'Peralatan Laboratorium dan Riset',
    description: 'Penyediaan peralatan laboratorium dan instrumen pendukung untuk preparasi sampel, eksperimen, dan pengujian kimia.',
    image: '/optimized/Peralatan Eksperimen dan Riset.webp',
    features: ['Peralatan Laboratorium', 'Instrumen Pengujian', 'Kebutuhan Preparasi Sampel']
  },
  {
    id: 2,
    title: 'Bahan Kimia dan Bahan Baku',
    description: 'Penyediaan bahan kimia dan bahan baku untuk kebutuhan laboratorium, riset, pengembangan, dan proses produksi sesuai spesifikasi yang dibutuhkan.',
    image: '/optimized/Bahan Baku Berkualitas Tinggi.webp',
    features: ['Bahan Kimia untuk Riset', 'Bahan Baku Formulasi', 'Spesifikasi Produk']
  },
  {
    id: 3,
    title: 'Pelatihan Profesional dan R&D',
    description: 'Pelatihan untuk tim laboratorium, R&D, dan operasional tentang praktik kerja kimia, keselamatan, pengembangan produk, dan penanganan risiko.',
    image: '/optimized/Pelatihan Profesional.webp',
    features: ['Keselamatan Kerja Kimia', 'Metode Kerja Laboratorium', 'Pendampingan R&D']
  },
  {
    id: 4,
    title: 'Pengembangan Peralatan Eksperimental',
    description: 'Perancangan dan pembuatan peralatan eksperimen untuk mendukung proses, pengujian, atau metode riset kimia yang spesifik.',
    image: '/optimized/Pengembangan Peralatan Eksperimental.webp',
    features: ['Perancangan Sesuai Kebutuhan', 'Prototipe dan Pengujian', 'Penyesuaian Sistem Eksperimen']
  },
  {
    id: 5,
    title: 'Dokumentasi Riset dan Kekayaan Intelektual',
    description: 'Pendampingan penyusunan dokumen teknis, laporan, proposal, publikasi, serta dokumentasi hasil pengembangan di bidang kimia.',
    image: '/optimized/Layanan Publikasi dan Paten.webp',
    features: ['Dokumen Teknis', 'Proposal dan Laporan Riset', 'Dokumentasi Kekayaan Intelektual']
  },
  {
    id: 6,
    title: 'Analisis Data dan Hasil Pengujian',
    description: 'Pengolahan dan interpretasi data eksperimen untuk membantu evaluasi hasil, perbandingan metode, dan pengambilan keputusan dalam riset kimia.',
    image: '/optimized/Analisis Data.webp',
    features: ['Pengolahan Data Eksperimen', 'Interpretasi Hasil Pengujian', 'Visualisasi Data']
  }
];

const ServicesSection = () => {
  return (
    <section id="service" className="relative px-8 py-24 overflow-hidden sm:px-10 lg:px-12">
    {/* Background Elements */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30" />
    
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
          className="mb-6"
        >
          <SectionEyebrow>Layanan Kami</SectionEyebrow>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl"
        >
          Layanan Kimia untuk Riset dan Industri
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600"
        >
          PT Okeanos mendukung kebutuhan kimia melalui penyediaan peralatan dan bahan, pengembangan produk, pelatihan, serta pendampingan riset sesuai kebutuhan laboratorium dan industri.
        </motion.p>
      </motion.div>

      {/* Services List - Alternating Layout */}
      <div className="space-y-16 lg:space-y-24">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Content */}
            <div className="flex-1 space-y-4 text-center lg:space-y-6 lg:text-left">
              <motion.div
                whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 lg:space-y-4"
              >
                <div className="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-sm text-primary-foreground lg:px-4 lg:py-2 lg:text-base">
                  <span className="font-medium">0{service.id}</span>
                </div>
                
                <h3 className="px-4 text-2xl font-bold leading-tight text-gray-900 lg:text-3xl xl:text-4xl lg:px-0">
                  {service.title}
                </h3>
                
                <p className="px-4 text-base leading-relaxed text-gray-600 lg:text-lg lg:px-0">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="px-4 space-y-2 lg:space-y-3 lg:px-0">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-center justify-center gap-3 lg:justify-start"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-primary lg:h-3 lg:w-3" />
                      <span className="text-sm font-medium text-gray-700 lg:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
              </motion.div>
            </div>
            
            {/* Visual Element */}
            <div className="relative flex-1 w-full max-w-sm mx-auto lg:max-w-none">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden shadow-xl rounded-2xl lg:rounded-3xl"
              >
                <ImageWithSkeleton
                  src={service.image}
                  alt={service.title}
                  wrapperClassName="aspect-square w-full"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 px-5 py-4 text-white bg-slate-950/75 lg:px-7 lg:py-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue-200">
                    Okeanos / Layanan
                  </p>
                  <p className="mt-1 text-lg font-semibold lg:text-xl">{service.title}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 text-center lg:mt-24"
      >
        <div className="relative p-8 mx-4 overflow-hidden text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl lg:rounded-3xl lg:p-12 lg:mx-0">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-500/20 to-indigo-500/20" />
          <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 rounded-full lg:w-64 lg:h-64 bg-white/10 blur-2xl lg:blur-3xl lg:translate-x-32 lg:-translate-y-32" />
          
          <div className="relative z-10">
            <h3 className="mb-3 text-2xl font-bold lg:text-3xl xl:text-4xl lg:mb-4">
              Siap Mengoptimalkan Operasional Anda?
            </h3>
            <p className="max-w-2xl px-4 mx-auto mb-6 text-lg lg:text-xl opacity-90 lg:mb-8 lg:px-0">
              Konsultasikan kebutuhan industri kimia Anda dengan tim ahli kami
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="px-6 py-3 text-base font-semibold text-blue-600 transition-all duration-300 bg-white shadow-xl hover:bg-gray-50 lg:px-8 lg:py-4 lg:text-lg hover:shadow-2xl"
              >
                Konsultasi Gratis
                <ArrowRight className="w-4 h-4 ml-2 lg:w-5 lg:h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>*/}
    </div> 

    {/* Floating particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-300/30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        />
      ))}
    </div>
  </section>
  )
}

export default ServicesSection
