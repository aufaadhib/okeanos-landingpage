import React from 'react';
import { motion } from 'motion/react';
import { 
  FlaskConical, 
  Package, 
  GraduationCap, 
  Wrench, 
  FileText, 
  BarChart3 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Peralatan Eksperimen dan Riset',
    description: 'Kami menyediakan berbagai peralatan ilmiah yang dirancang khusus untuk kebutuhan riset dan eksperimen, memungkinkan hasil penelitian yang lebih cepat dan akurat.',
    icon: FlaskConical,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Bahan Baku Berkualitas Tinggi',
    description: 'Kami menyuplai bahan baku untuk industri farmasi dan gizi dengan kualitas terbaik, mendukung pengembangan produk kesehatan yang memenuhi standar global.',
    icon: Package,
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: 3,
    title: 'Pelatihan Profesional dan R&D',
    description: 'Menyediakan pelatihan R&D, pelatihan bisnis, serta pelatihan keselamatan industri, seperti penanganan bahan kimia, ledakan debu (dust explosion), K3, dan lainnya.',
    icon: GraduationCap,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 4,
    title: 'Pengembangan Peralatan Eksperimental',
    description: 'Kami merancang dan mengembangkan peralatan eksperimental yang disesuaikan dengan kebutuhan riset spesifik, meningkatkan efisiensi dan akurasi dalam penelitian.',
    icon: Wrench,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    title: 'Layanan Publikasi dan Paten',
    description: 'Kami membantu dalam pembuatan dokumen ilmiah seperti paper, proposal penelitian, serta pengurusan hak cipta dan desain industri.',
    icon: FileText,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 6,
    title: 'Analisis Data',
    description: 'Kami menyediakan layanan analisis data untuk mendukung riset dan pengembangan lebih lanjut, memberikan wawasan yang lebih mendalam dan relevan bagi klien.',
    icon: BarChart3,
    gradient: 'from-rose-500 to-orange-500'
  }
];

export function ServicesSection() {
  return (
    <section id="layanan" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-700 text-sm font-medium">Layanan Kami</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Solusi Terpadu untuk Industri Kimia
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Kami menghadirkan layanan komprehensif untuk mendukung riset, edukasi, dan pengembangan industri kimia dengan standar kualitas internasional
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group"
            >
              <div className="h-full shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/70 backdrop-blur-sm hover:bg-white/90 overflow-hidden text-card-foreground flex flex-col gap-6 rounded-xl border">
                <div className="p-8 relative px-6 [&:last-child]:pb-6 h-full">
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                  >
                    <service.icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-xl group-hover:from-blue-200/30 group-hover:to-indigo-200/30 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-lg group-hover:from-purple-200/30 group-hover:to-pink-200/30 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <span className="font-semibold">Konsultasi Layanan</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300/30 rounded-full"
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
  );
}