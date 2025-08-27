import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './Ui/VariantButton';
import { Badge } from './Ui/Badge';
import { Card, CardContent } from './Ui/Card';
import { ImageWithFallback } from './Ui/ImageWithFallback';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Search,
  Filter,
  Eye
} from 'lucide-react';

const AllNewsPage = ({ onBack, onNewsClick }) => {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Extended news data
  const allNewsItems = [
    {
      id: 'fallback-1',
      title: 'Terobosan Baru dalam Teknologi Katalis Hijau',
      excerpt: 'Tim research ChemPartner berhasil mengembangkan katalis ramah lingkungan yang dapat meningkatkan efisiensi produksi hingga 40% dengan mengurangi emisi karbon.',
      content: `Penelitian yang dilakukan selama 2 tahun ini menggabungkan teknologi nanomaterial dengan prinsip kimia hijau untuk menciptakan katalis yang revolusioner.`,
      image: 'https://images.unsplash.com/photo-1653241419345-3da52907f135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHJlc2VhcmNoJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1NTg1NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Inovasi',
      author: 'Dr. Sarah Rahman',
      date: '2024-01-15T00:00:00Z',
      readTime: '5',
      views: 1250,
      tags: ['katalis', 'green-technology', 'research', 'sustainability']
    },
    {
      id: 'fallback-2',
      title: 'Sertifikasi ISO 14001 untuk Laboratorium Utama',
      excerpt: 'ChemPartner meraih sertifikasi ISO 14001:2015 sebagai komitmen terhadap manajemen lingkungan dan sustainability.',
      content: `ChemPartner dengan bangga mengumumkan pencapaian sertifikasi ISO 14001:2015 untuk laboratorium utama kami.`,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Sertifikasi',
      author: 'Ahmad Hidayat',
      date: '2024-01-08T00:00:00Z',
      readTime: '3',
      views: 890,
      tags: ['iso-14001', 'certification', 'environment', 'quality']
    },
    {
      id: 'fallback-3',
      title: 'Kerjasama Strategis dengan Universitas Terkemuka',
      excerpt: 'Penandatanganan MoU dengan 5 universitas untuk program magang dan penelitian bersama dalam bidang kimia terapan.',
      content: `ChemPartner menandatangani Memorandum of Understanding (MoU) dengan lima universitas terkemuka di Indonesia.`,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Kerjasama',
      author: 'Prof. Diana Sari',
      date: '2024-01-02T00:00:00Z',
      readTime: '4',
      views: 1120,
      tags: ['university', 'collaboration', 'education', 'internship']
    },
    {
      id: 'fallback-4',
      title: 'Webinar: "Masa Depan Industri Kimia Indonesia"',
      excerpt: 'Event virtual yang menghadirkan para ahli industri untuk membahas trend dan perkembangan terkini industri kimia nasional.',
      content: `ChemPartner berhasil menyelenggarakan webinar bertajuk "Masa Depan Industri Kimia Indonesia".`,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Event',
      author: 'Tim Marketing',
      date: '2023-12-28T00:00:00Z',
      readTime: '2',
      views: 750,
      tags: ['webinar', 'industry', 'future', 'networking']
    },
    {
      id: 'fallback-5',
      title: 'Pengembangan Produk Ramah Lingkungan',
      excerpt: 'Luncurkan lini produk baru dengan formula biodegradable untuk mendukung program sustainability klien.',
      content: `ChemPartner memperkenalkan lini produk terbaru yang mengusung konsep ramah lingkungan.`,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Produk',
      author: 'Dr. Michael Chen',
      date: '2023-12-20T00:00:00Z',
      readTime: '6',
      views: 980,
      tags: ['eco-friendly', 'biodegradable', 'sustainability', 'product-launch']
    },
    {
      id: 'fallback-6',
      title: 'Expansion Laboratorium Regional Jawa Timur',
      excerpt: 'Pembukaan fasilitas laboratorium baru di Surabaya untuk melayani klien di wilayah Jawa Timur dengan lebih baik.',
      content: `ChemPartner membuka cabang laboratorium baru di Surabaya untuk memperluas jangkauan layanan.`,
      image: 'https://images.unsplash.com/photo-1581092795442-8d7e7ffb5bf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Ekspansi',
      author: 'Direktur Operasi',
      date: '2023-12-10T00:00:00Z',
      readTime: '4',
      views: 650,
      tags: ['expansion', 'surabaya', 'laboratory', 'service']
    },
    {
      id: 'fallback-7',
      title: 'Pelatihan K3 untuk Industri Kimia',
      excerpt: 'Program pelatihan keselamatan kerja khusus untuk industri kimia dengan sertifikasi nasional.',
      content: `Program pelatihan K3 komprehensif untuk meningkatkan standar keselamatan di industri kimia.`,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Pelatihan',
      author: 'Safety Manager',
      date: '2023-11-25T00:00:00Z',
      readTime: '5',
      views: 820,
      tags: ['safety', 'training', 'certification', 'industry']
    },
    {
      id: 'fallback-8',
      title: 'Inovasi Teknologi Analisis Air Limbah',
      excerpt: 'Pengembangan metode analisis cepat untuk monitoring real-time kualitas air limbah industri.',
      content: `Teknologi baru untuk analisis air limbah dengan akurasi tinggi dan waktu pengujian yang lebih cepat.`,
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Teknologi',
      author: 'Tim R&D',
      date: '2023-11-15T00:00:00Z',
      readTime: '7',
      views: 1050,
      tags: ['water-analysis', 'innovation', 'real-time', 'monitoring']
    }
  ];

  const categories = ['Semua', 'Inovasi', 'Sertifikasi', 'Kerjasama', 'Event', 'Produk', 'Ekspansi', 'Pelatihan', 'Teknologi'];

  // Filter news items
  const filteredNews = allNewsItems.filter(item => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      });
    } catch {
      return dateString;
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={onBack}
                variant="outline"
                className="bg-white/50 backdrop-blur-sm border-gray-200/50 hover:bg-white/80"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </motion.div>
            
            <h1 className="text-md lg:text-2xl font-bold text-gray-900">Semua Berita</h1>
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
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
            Menampilkan {filteredNews.length} dari {allNewsItems.length} berita
          </p>
        </motion.div>

        {/* News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => onNewsClick(item)}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-0">
                  <div className="relative">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-500 text-white">
                        {item.category}
                      </Badge>
                    </div>

                    {/* Views Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        <Eye className="w-3 h-3 mr-1" />
                        {item.views.toLocaleString()}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(item.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.readTime} min
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 line-clamp-3">
                      {item.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-600">{item.author}</span>
                      </div>
                      <div className="text-blue-500 group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Filter className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada berita ditemukan</h3>
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
      </main>

      {/* Floating particles for visual enhancement */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/30 rounded-full"
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
              left: `${20 + i * 5}%`,
              top: `${30 + i * 4}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AllNewsPage