import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  ExternalLink, 
  Share2, 
  BookmarkPlus,
  CheckCircle,
  Target,
  Users,
  Award
} from 'lucide-react';
import { ImageWithFallback } from './Ui/ImageWithFallback';
import { Button } from './Ui/VariantButton';
import { Badge } from './Ui/Badge';

export function PortfolioDetailPage({ portfolioItem, onBack }) {
  const formattedDate = new Date(portfolioItem.createdAt).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long'
  });

  // Extended portfolio data for detail view
  const extendedData = {
    client: portfolioItem.client || 'PT. Industri Modern',
    duration: portfolioItem.duration || '6 bulan',
    team: portfolioItem.team || ['Dr. Sarah Rahman', 'Ahmad Hidayat', 'Prof. Diana Sari'],
    challenges: portfolioItem.challenges || [
      'Mencapai efisiensi optimal dengan batasan teknologi yang ada',
      'Memenuhi standar lingkungan yang ketat',
      'Mengintegrasikan sistem baru dengan infrastruktur existing'
    ],
    solutions: portfolioItem.solutions || [
      'Implementasi teknologi inovatif dengan pendekatan bertahap',
      'Pengembangan protokol khusus untuk compliance',
      'Desain sistem modular yang mudah diintegrasikan'
    ],
    results: portfolioItem.results || [
      'Peningkatan efisiensi produksi sebesar 40%',
      'Reduksi limbah hingga 35%',
      'Sertifikasi ISO 14001 berhasil diperoleh'
    ],
    testimonial: portfolioItem.testimonial || {
      text: "Kerjasama dengan ChemPartner sangat memuaskan. Tim mereka profesional dan mampu memberikan solusi inovatif yang sesuai dengan kebutuhan industri kami.",
      author: "Budi Santoso",
      position: "Direktur Operasional"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={onBack}
                variant="outline"
                className="bg-white/50 backdrop-blur-sm border-gray-200/50 hover:bg-white/80"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Portfolio
              </Button>
            </motion.div>
            
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="icon" className="bg-white/50 backdrop-blur-sm border-gray-200/50">
                  <BookmarkPlus className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="icon" className="bg-white/50 backdrop-blur-sm border-gray-200/50">
                  <Share2 className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={portfolioItem.image}
              alt={portfolioItem.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="mb-4">
                <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 px-4 py-2">
                  {portfolioItem.category}
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {portfolioItem.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {portfolioItem.description}
              </p>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-blue-500" />
                Tantangan Proyek
              </h2>
              <ul className="space-y-3">
                {extendedData.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-700">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                Solusi yang Diterapkan
              </h2>
              <ul className="space-y-3">
                {extendedData.solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-500" />
                Hasil yang Dicapai
              </h2>
              <ul className="space-y-3">
                {extendedData.results.map((result, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{result}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="text-4xl text-blue-500 mb-4">"</div>
              <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                {extendedData.testimonial.text}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {extendedData.testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{extendedData.testimonial.author}</div>
                  <div className="text-gray-600">{extendedData.testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Proyek</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Klien</div>
                  <div className="font-semibold text-gray-900">{extendedData.client}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500 mb-1">Durasi</div>
                  <div className="font-semibold text-gray-900">{extendedData.duration}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500 mb-1 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Tanggal Selesai
                  </div>
                  <div className="font-semibold text-gray-900">{formattedDate}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Tim Proyek
                  </div>
                  <div className="space-y-1">
                    {extendedData.team.map((member, index) => (
                      <div key={index} className="text-sm text-gray-700">{member}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">Teknologi</div>
                  <div className="flex flex-wrap gap-1">
                    {portfolioItem.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Konsultasi Proyek Serupa
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Tertarik dengan Proyek Serupa?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Konsultasikan kebutuhan proyek Anda dengan tim ahli kami
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Mulai Konsultasi
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/30 rounded-full"
            animate={{ x: [0, 100, 0], y: [0, -100, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
            style={{ left: `${20 + i * 4}%`, top: `${30 + i * 3}%` }}
          />
        ))}
      </div>
    </div>
  );
}
