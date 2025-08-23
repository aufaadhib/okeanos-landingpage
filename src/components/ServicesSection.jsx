import React from 'react';
import { motion } from 'motion/react';
import { 
  FlaskConical, 
  Package, 
  GraduationCap, 
  Wrench, 
  FileText, 
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { Button } from './Ui/VariantButton';

const services = [
  {
    id: 1,
    title: 'Peralatan Eksperimen dan Riset',
    description: 'Kami menyediakan berbagai peralatan ilmiah yang dirancang khusus untuk kebutuhan riset dan eksperimen, memungkinkan hasil penelitian yang lebih cepat dan akurat.',
    icon: FlaskConical,
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Peralatan Laboratorium Modern', 'Instrumen Analitik Presisi', 'Alat Ukur Berkualitas Tinggi']
  },
  {
    id: 2,
    title: 'Bahan Baku Berkualitas Tinggi',
    description: 'Kami menyuplai bahan baku untuk industri farmasi dan gizi dengan kualitas terbaik, mendukung pengembangan produk kesehatan yang memenuhi standar global.',
    icon: Package,
    gradient: 'from-indigo-500 to-purple-500',
    features: ['Sertifikasi Internasional', 'Kontrol Kualitas Ketat', 'Supply Chain Terpercaya']
  },
  {
    id: 3,
    title: 'Pelatihan Profesional dan R&D',
    description: 'Menyediakan pelatihan R&D, pelatihan bisnis, serta pelatihan keselamatan industri, seperti penanganan bahan kimia, ledakan debu (dust explosion), K3, dan lainnya.',
    icon: GraduationCap,
    gradient: 'from-purple-500 to-pink-500',
    features: ['Program Sertifikasi', 'Instruktur Berpengalaman', 'Kurikulum Terupdate']
  },
  {
    id: 4,
    title: 'Pengembangan Peralatan Eksperimental',
    description: 'Kami merancang dan mengembangkan peralatan eksperimental yang disesuaikan dengan kebutuhan riset spesifik, meningkatkan efisiensi dan akurasi dalam penelitian.',
    icon: Wrench,
    gradient: 'from-pink-500 to-red-500',
    features: ['Custom Design', 'Teknologi Terdepan', 'Support Berkelanjutan']
  },
  {
    id: 5,
    title: 'Layanan Publikasi dan Paten',
    description: 'Kami membantu dalam pembuatan dokumen ilmiah seperti paper, proposal penelitian, serta pengurusan hak cipta dan desain industri.',
    icon: FileText,
    gradient: 'from-red-500 to-orange-500',
    features: ['Konsultasi Legal', 'Dokumentasi Profesional', 'Proses Cepat & Akurat']
  },
  {
    id: 6,
    title: 'Analisis Data',
    description: 'Kami menyediakan layanan analisis data untuk mendukung riset dan pengembangan lebih lanjut, memberikan wawasan yang lebih mendalam dan relevan bagi klien.',
    icon: BarChart3,
    gradient: 'from-orange-500 to-yellow-500',
    features: ['Machine Learning', 'Statistical Analysis', 'Data Visualization']
  }
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 pointer-events-none" />
    
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 rounded-full mb-6"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-blue-700 text-md font-medium">Layanan Kami</span>
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
            <div className="flex-1 space-y-4 lg:space-y-6 text-center lg:text-left">
              <motion.div
                whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 lg:space-y-4"
              >
                <div className={`inline-flex items-center gap-2 lg:gap-3 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm lg:text-base`}>
                  <service.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="font-medium">0{service.id}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight px-4 lg:px-0">
                  {service.title}
                </h3>
                
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed px-4 lg:px-0">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 lg:space-y-3 px-4 lg:px-0">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-center gap-3 justify-center lg:justify-start"
                    >
                      <div className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-sm lg:text-base text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-2 lg:pt-4"
                >
                  <Button 
                    className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-sm lg:text-base`}
                    size="lg"
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Visual Element */}
            <div className="flex-1 relative w-full max-w-sm lg:max-w-none mx-auto hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className={`w-full aspect-square rounded-2xl lg:rounded-3xl bg-gradient-to-br ${service.gradient} p-8 lg:p-12 shadow-2xl relative overflow-hidden`}>
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-20 h-20 lg:w-32 lg:h-32 text-white/20" />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 lg:top-8 lg:right-8 w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  
                  {/* Decorative circles */}
                  <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 w-16 h-16 lg:w-24 lg:h-24 bg-white/10 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 lg:w-40 lg:h-40 bg-white/5 rounded-full" />
                  
                  {/* Stats or Number */}
                  <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 text-right">
                    <div className="text-2xl lg:text-3xl font-bold text-white">0{service.id}</div>
                    <div className="text-white/80 text-xs lg:text-sm">Service</div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-2 lg:-inset-4 bg-gradient-to-r ${service.gradient} opacity-20 rounded-2xl lg:rounded-3xl blur-xl lg:blur-2xl -z-10`} />
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
        className="text-center mt-16 lg:mt-24"
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden mx-4 lg:mx-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-32 lg:w-64 lg:h-64 bg-white/10 rounded-full blur-2xl lg:blur-3xl transform translate-x-16 lg:translate-x-32 -translate-y-16 lg:-translate-y-32" />
          
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4">
              Siap Mengoptimalkan Operasional Anda?
            </h3>
            <p className="text-lg lg:text-xl opacity-90 mb-6 lg:mb-8 max-w-2xl mx-auto px-4 lg:px-0">
              Konsultasikan kebutuhan industri kimia Anda dengan tim ahli kami
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Konsultasi Gratis
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
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
  )
}

export default ServicesSection