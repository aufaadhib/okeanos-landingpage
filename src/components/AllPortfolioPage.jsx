import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  Search,
  Filter,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from './Ui/Card';
import { Badge } from './Ui/Badge';
import { Button } from './Ui/VariantButton';

export default function AllPortfolioPage({ onBack, onPortfolioClick }) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Extended portfolio data
  const allPortfolioItems = [
    {
      id: 'fallback-1',
      title: 'Analisis Kualitas Air Industri',
      category: 'Riset',
      description: 'Pengembangan metode analisis komprehensif untuk monitoring kualitas air limbah industri tekstil dengan standar internasional.',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Analisis', 'Lingkungan', 'ISO'],
      createdAt: '2024-01-15T00:00:00Z'
    },
    {
      id: 'fallback-2',
      title: 'Formulasi Produk Kosmetik',
      category: 'Industri',
      description: 'Pengembangan formula inovatif untuk produk perawatan kulit dengan bahan aktif natural dan ramah lingkungan.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Kosmetik', 'Natural', 'R&D'],
      createdAt: '2024-01-10T00:00:00Z'
    },
    {
      id: 'fallback-3',
      title: 'Kurikulum Praktikum Kimia',
      category: 'Edukasi',
      description: 'Perancangan modul praktikum kimia modern untuk universitas dengan pendekatan pembelajaran berbasis proyek.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Edukasi', 'Praktikum', 'Modul'],
      createdAt: '2023-12-20T00:00:00Z'
    },
    {
      id: 'fallback-4',
      title: 'Optimasi Proses Petrokimia',
      category: 'Pengembangan',
      description: 'Implementasi teknologi katalisis hijau untuk meningkatkan efisiensi proses produksi di industri petrokimia.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Petrokimia', 'Katalisis', 'Efisiensi'],
      createdAt: '2023-11-15T00:00:00Z'
    },
    {
      id: 'fallback-5',
      title: 'Biosensor Deteksi Polutan',
      category: 'Riset',
      description: 'Pengembangan biosensor canggih untuk deteksi real-time polutan kimia dalam air dengan sensitivitas tinggi.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Biosensor', 'Deteksi', 'Inovasi'],
      createdAt: '2023-10-10T00:00:00Z'
    },
    {
      id: 'fallback-6',
      title: 'Sintesis Material Nano',
      category: 'Industri',
      description: 'Sintesis dan karakterisasi nanomaterial untuk aplikasi industri elektronik dengan properti unggul.',
      image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Nanomaterial', 'Elektronik', 'Sintesis'],
      createdAt: '2023-09-05T00:00:00Z'
    },
    {
      id: 'fallback-7',
      title: 'Pengolahan Limbah Farmasi',
      category: 'Lingkungan',
      description: 'Sistem pengolahan limbah farmasi dengan teknologi bioremediasi untuk mengurangi dampak lingkungan.',
      image: 'https://images.unsplash.com/photo-1559627036-cb4d363d7b00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Bioremediasi', 'Farmasi', 'Limbah'],
      createdAt: '2023-08-20T00:00:00Z'
    },
    {
      id: 'fallback-8',
      title: 'Kontrol Kualitas Pangan',
      category: 'Analisis',
      description: 'Pengembangan metode analisis cepat untuk kontrol kualitas produk pangan dengan standar HACCP.',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['HACCP', 'Pangan', 'Quality Control'],
      createdAt: '2023-07-10T00:00:00Z'
    },
    {
      id: 'fallback-9',
      title: 'Energi Terbarukan dari Biomassa',
      category: 'Energi',
      description: 'Riset konversi biomassa menjadi bioethanol dengan teknologi fermentasi enzimatis.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Biomassa', 'Bioethanol', 'Fermentasi'],
      createdAt: '2023-06-15T00:00:00Z'
    },
    {
      id: 'fallback-10',
      title: 'Smart Laboratory System',
      category: 'Teknologi',
      description: 'Implementasi sistem laboratorium pintar dengan IoT untuk monitoring real-time dan automasi proses.',
      image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['IoT', 'Automation', 'Smart Lab'],
      createdAt: '2023-05-20T00:00:00Z'
    },
    {
      id: 'fallback-11',
      title: 'Polimer Biodegradable',
      category: 'Material',
      description: 'Sintesis polimer biodegradable untuk aplikasi packaging ramah lingkungan.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Polimer', 'Biodegradable', 'Packaging'],
      createdAt: '2023-04-10T00:00:00Z'
    },
    {
      id: 'fallback-12',
      title: 'Keselamatan Kerja Laboratorium',
      category: 'Keselamatan',
      description: 'Program pelatihan dan implementasi sistem keselamatan kerja di laboratorium kimia.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Safety', 'Training', 'SOP'],
      createdAt: '2023-03-05T00:00:00Z'
    }
  ];

  const categories = [
    'Semua', 'Riset', 'Industri', 'Edukasi', 'Pengembangan',
    'Lingkungan', 'Analisis', 'Energi', 'Teknologi', 'Material', 'Keselamatan'
  ];

  // Filter portfolio items
  const filteredPortfolio = allPortfolioItems.filter(item => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      q === '' ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.technologies.some(tech => tech.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).getFullYear().toString();
    } catch {
      return '2024';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onBack}
                variant="outline"
                className="bg-white/50 backdrop-blur-sm border-gray-200/50 hover:bg-white/80"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </motion.div>

            <h1 className="lg:text-2xl font-bold text-gray-900">Semua Portfolio</h1>
            <div className="w-32 hidden lg:block"></div> {/* Spacer for centering */}
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Cari portfolio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-center text-gray-600">
            Menampilkan {filteredPortfolio.length} dari {allPortfolioItems.length} portfolio
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredPortfolio.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => onPortfolioClick && onPortfolioClick(item)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Lihat Detail
                          </Button>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-primary">
                            {item.category}
                          </Badge>
                        </div>

                        {/* Year Badge */}
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-blue-500 text-white">
                            {formatDate(item.createdAt)}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {formatDate(item.createdAt)}
                        </div>

                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground line-clamp-3">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {item.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{item.technologies.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border bottom-2">
                          <span className="text-sm text-muted-foreground">
                            Pelajari lebih lanjut
                          </span>
                          <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredPortfolio.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Filter className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada portfolio ditemukan</h3>
            <p className="text-gray-600 mb-6">Coba ubah filter atau kata kunci pencarian Anda</p>
            <Button
              onClick={() => {
                setSelectedCategory('Semua');
                setSearchQuery('');
              }}
              variant="outline"
            >
              Reset Filter
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-32 -translate-y-32" />

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Siap Memulai Proyek Anda?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Konsultasikan ide dan kebutuhan proyek Anda dengan tim expert kami
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/30 rounded-full"
            animate={{ x: [0, 100, 0], y: [0, -100, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
            style={{ left: `${20 + i * 5}%`, top: `${30 + i * 4}%` }}
          />
        ))}
      </div>
    </div>
  );
}
