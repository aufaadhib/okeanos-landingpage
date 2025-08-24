import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, User, Tag, RefreshCw, Eye } from 'lucide-react';
import { Card, CardContent } from './Ui/Card';
import { Button } from './Ui/VariantButton';
import { Badge } from './Ui/Badge';
import { ImageWithFallback } from './Ui/ImageWithFallback';

const NewsSection = ({ onNewsClick, onViewAllNews }) => {
  // Mock data for now
  const newsItems = [];
  const loading = false;
  const error = null;
  const fetchNews = () => { };

  // Fallback data jika tidak ada data dari Supabase
  const fallbackNewsItems = [
    {
      id: 'fallback-1',
      title: 'Terobosan Baru dalam Teknologi Katalis Hijau',
      excerpt:
        'Tim research ChemPartner berhasil mengembangkan katalis ramah lingkungan yang dapat meningkatkan efisiensi produksi hingga 40% dengan mengurangi emisi karbon.',
      content: `Penelitian yang dilakukan selama 2 tahun ini menggabungkan teknologi nanomaterial dengan prinsip kimia hijau untuk menciptakan katalis yang revolusioner. Katalis baru ini tidak hanya lebih efisien dalam proses konversi, tetapi juga significantly mengurangi dampak lingkungan.

Tim peneliti yang dipimpin oleh Dr. Sarah Rahman telah menguji katalis ini dalam berbagai kondisi operasi dan hasilnya sangat menjanjikan. Selain meningkatkan efisiensi produksi hingga 40%, katalis ini juga mampu mengurangi emisi karbon hingga 35% dibandingkan dengan katalis konvensional.

"Inovasi ini merupakan hasil dari dedikasi tim research kami dalam mengembangkan teknologi yang berkelanjutan," ujar Dr. Sarah Rahman. "Kami yakin bahwa katalis hijau ini akan membawa perubahan positif bagi industri kimia Indonesia."

Katalis ini telah melewati serangkaian tes ketat dan kini siap untuk diimplementasikan dalam skala industri. ChemPartner berencana untuk mulai memproduksi katalis ini dalam kuantitas komersial pada kuartal kedua tahun ini.

Pencapaian ini juga mendapat apresiasi dari berbagai institusi penelitian internasional dan diharapkan dapat memperkuat posisi Indonesia dalam pengembangan teknologi kimia hijau di kancah global.`,
      image:
        'https://images.unsplash.com/photo-1653241419345-3da52907f135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHJlc2VhcmNoJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1NTg1NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Inovasi',
      author: 'Dr. Sarah Rahman',
      date: '2024-01-15T00:00:00Z',
      featured: true,
      published: true,
      readTime: '5',
      views: 1250,
      tags: ['katalis', 'green-technology', 'research', 'sustainability'],
      createdAt: '2024-01-15T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z'
    },
    {
      id: 'fallback-2',
      title: 'Sertifikasi ISO 14001 untuk Laboratorium Utama',
      excerpt:
        'ChemPartner meraih sertifikasi ISO 14001:2015 sebagai komitmen terhadap manajemen lingkungan dan sustainability.',
      content: `ChemPartner dengan bangga mengumumkan pencapaian sertifikasi ISO 14001:2015 untuk laboratorium utama kami. Pencapaian ini menunjukkan dedikasi perusahaan dalam menerapkan standar internasional untuk sistem manajemen lingkungan.

Proses sertifikasi berlangsung selama 8 bulan dengan melibatkan audit ketat dari badan sertifikasi internasional. Tim kami berhasil memenuhi semua persyaratan yang mencakup pengelolaan limbah, efisiensi energi, dan pengurangan dampak lingkungan.

"Sertifikasi ISO 14001 ini bukan hanya sebuah pencapaian, tetapi juga komitmen kami untuk terus berkontribusi dalam menjaga kelestarian lingkungan," kata Ahmad Hidayat, Manager Quality Assurance.

Dengan sertifikasi ini, ChemPartner kini dapat memberikan jaminan kepada klien bahwa seluruh proses operasional telah memenuhi standar lingkungan internasional. Hal ini juga memperkuat posisi kami sebagai partner terpercaya dalam industri kimia.

Laboratorium yang tersertifikasi ini dilengkapi dengan teknologi terdepan dan sistem manajemen lingkungan yang komprehensif, memastikan bahwa setiap aktivitas penelitian dan pengembangan dilakukan dengan mempertimbangkan aspek sustainability.`,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Sertifikasi',
      author: 'Ahmad Hidayat',
      date: '2024-01-08T00:00:00Z',
      featured: false,
      published: true,
      readTime: '3',
      views: 890,
      tags: ['iso-14001', 'certification', 'environment', 'quality'],
      createdAt: '2024-01-08T00:00:00Z',
      updatedAt: '2024-01-08T00:00:00Z'
    },
    {
      id: 'fallback-3',
      title: 'Kerjasama Strategis dengan Universitas Terkemuka',
      excerpt:
        'Penandatanganan MoU dengan 5 universitas untuk program magang dan penelitian bersama dalam bidang kimia terapan.',
      content: `ChemPartner menandatangani Memorandum of Understanding (MoU) dengan lima universitas terkemuka di Indonesia untuk mengembangkan program kerjasama dalam bidang pendidikan dan penelitian kimia terapan.

Kolaborasi ini akan membuka peluang besar bagi mahasiswa untuk mendapatkan pengalaman praktis langsung di industri, sekaligus memberikan akses kepada ChemPartner terhadap talenta-talenta muda terbaik di bidang kimia.

Program kerjasama ini mencakup beberapa aspek utama: program magang reguler, penelitian bersama untuk pengembangan teknologi baru, pertukaran dosen dan praktisi industri, serta pengembangan kurikulum yang selaras dengan kebutuhan industri.

"Melalui kerjasama ini, kami berharap dapat menciptakan ekosistem yang saling menguntungkan antara dunia akademis dan industri," ungkap Prof. Diana Sari, Director of Academic Partnership.

Lima universitas yang terlibat dalam kerjasama ini adalah Institut Teknologi Bandung, Universitas Indonesia, Universitas Gadjah Mada, Institut Teknologi Sepuluh Nopember, dan Universitas Padjajaran.

Program ini direncanakan akan dimulai pada semester genap tahun akademik 2024/2025 dengan target penerima manfaat 200 mahasiswa pada tahun pertama.`,
      image:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Kerjasama',
      author: 'Prof. Diana Sari',
      date: '2024-01-02T00:00:00Z',
      featured: false,
      published: true,
      readTime: '4',
      views: 1120,
      tags: ['university', 'collaboration', 'education', 'internship'],
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z'
    },
    {
      id: 'fallback-4',
      title: 'Webinar: "Masa Depan Industri Kimia Indonesia"',
      excerpt:
        'Event virtual yang menghadirkan para ahli industri untuk membahas trend dan perkembangan terkini industri kimia nasional.',
      content: `ChemPartner berhasil menyelenggarakan webinar bertajuk "Masa Depan Industri Kimia Indonesia" yang dihadiri lebih dari 500 peserta dari berbagai kalangan industri, akademisi, dan mahasiswa.

Webinar yang berlangsung selama 3 jam ini menghadirkan speakers terkemuka dari berbagai sektor, termasuk perwakilan dari Kementerian Perindustrian, asosiasi industri kimia, dan para praktisi senior.

Materi yang dibahas meliputi tren global industri kimia, peluang dan tantangan industri kimia Indonesia, teknologi disruptif yang akan mengubah landscape industri, serta strategi pengembangan SDM untuk menghadapi Industri 4.0.

"Antusiasme peserta sangat tinggi, terlihat dari banyaknya pertanyaan interaktif dan diskusi yang mendalam," kata Tim Marketing yang mengelola acara tersebut.

Webinar ini juga menjadi platform untuk memperkenalkan inovasi-inovasi terbaru dari ChemPartner serta menjalin networking dengan berbagai stakeholder industri.

Sebagai tindak lanjut, ChemPartner berencana untuk mengadakan series webinar bulanan dengan tema-tema spesifik yang relevan dengan perkembangan industri kimia Indonesia.`,
      image:
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Event',
      author: 'Tim Marketing',
      date: '2023-12-28T00:00:00Z',
      featured: false,
      published: true,
      readTime: '2',
      views: 750,
      tags: ['webinar', 'industry', 'future', 'networking'],
      createdAt: '2023-12-28T00:00:00Z',
      updatedAt: '2023-12-28T00:00:00Z'
    },
    {
      id: 'fallback-5',
      title: 'Pengembangan Produk Ramah Lingkungan',
      excerpt:
        'Luncurkan lini produk baru dengan formula biodegradable untuk mendukung program sustainability klien.',
      content: `ChemPartner memperkenalkan lini produk terbaru yang mengusung konsep ramah lingkungan dengan formula biodegradable. Produk-produk ini dikembangkan sebagai respons terhadap meningkatnya kebutuhan industri akan solusi yang berkelanjutan.

Riset dan pengembangan produk ini telah berlangsung selama 18 bulan dengan melibatkan tim multidisiplin yang terdiri dari ahli kimia, biologi, dan teknologi lingkungan. Hasil penelitian menunjukkan bahwa produk baru ini dapat terurai secara alami dalam waktu 90 hari tanpa meninggalkan residu berbahaya.

"Produk ramah lingkungan ini merupakan wujud komitmen kami dalam mendukung program sustainability klien sekaligus berkontribusi dalam menjaga kelestarian lingkungan," ujar Dr. Michael Chen, Head of Product Development.

Lini produk baru ini terdiri dari berbagai kategori including surfaktan biodegradable, additives ramah lingkungan, dan specialty chemicals dengan formula eco-friendly. Semua produk telah lulus uji biodegradabilitas sesuai standar OECD dan EPA.

Target pasar utama untuk produk ini adalah industri consumer goods, textile, dan personal care yang semakin concerned terhadap aspek sustainability dalam supply chain mereka.

ChemPartner merencanakan untuk meluncurkan 10 varian produk dalam fase pertama dengan proyeksi pertumbuhan 25% pada segmen eco-friendly products.`,
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Produk',
      author: 'Dr. Michael Chen',
      date: '2023-12-20T00:00:00Z',
      featured: false,
      published: true,
      readTime: '6',
      views: 980,
      tags: ['eco-friendly', 'biodegradable', 'sustainability', 'product-launch'],
      createdAt: '2023-12-20T00:00:00Z',
      updatedAt: '2023-12-20T00:00:00Z'
    }
  ];

  // Transform fallback data to match NewsItem-like shape
  const transformedFallbackItems = fallbackNewsItems.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    content: item.content,
    image: item.image,
    author: item.author,
    date: item.date,
    category: item.category,
    readTime: item.readTime,
    views: item.views,
    tags: item.tags,
    createdAt: item.createdAt,
    featured: item.featured,
    published: item.published,
  }));

  // Gunakan data dari Supabase jika tersedia, fallback jika tidak
  const displayItems = newsItems.length > 0 ? newsItems : transformedFallbackItems;

  // Filter hanya berita yang published
  const publishedNews = displayItems.filter((item) =>
    newsItems.length > 0 ? item.published : true
  );

  // Pilih featured yang valid; jika tidak ada, ambil item pertama sebagai fallback
  const featuredNews =
    publishedNews.find((item) => (newsItems.length > 0 ? item.featured : item.id === 'fallback-1')) ||
    publishedNews[0] ||
    null;

  const regularNews = publishedNews.filter((item) => item.id !== featuredNews?.id);

  // Helpers
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const formatReadTime = (readTime) => {
    if (!readTime) return null;
    const n = parseInt(readTime, 10);
    return Number.isNaN(n) ? readTime : `${n} menit baca`;
  };

  const formatViews = (views) => {
    if (typeof views !== 'number') return null;
    return `${views.toLocaleString('id-ID')}× dilihat`;
  };

  const handleNewsItemClick = (item) => {
    if (!onNewsClick) return;
    const newsItem =
      newsItems.length > 0
        ? item
        : {
          id: item.id,
          title: item.title,
          excerpt: item.excerpt,
          content: item.content,
          image: item.image,
          author: item.author,
          date: item.date,
          category: item.category,
          readTime: item.readTime,
          views: item.views,
          tags: item.tags,
        };
    onNewsClick(newsItem);
  };

  // --- Featured Card (improved) ---
  const FeaturedNewsCard = ({ item }) => (
    <Card
      className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group focus-within:shadow-2xl"
      role="button"
      tabIndex={0}
      aria-label={`Buka berita utama: ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNewsItemClick(item);
        }
      }}
      onClick={() => handleNewsItemClick(item)}
    >
      <div className="p-0">
        <div className="relative">
          {/* Image with fixed, cinematic aspect ratio */}
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Rich gradient overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/0" />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />

          {/* Top badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <Badge className="bg-primary text-primary-foreground shadow-md">Berita Utama</Badge>
            <Badge variant="secondary" className="bg-white/90 text-primary backdrop-blur">
              <Tag className="h-3 w-3 mr-1" />
              {item.category}
            </Badge>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm mb-3 opacity-95">
              <span className="inline-flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                {formatDate(item.createdAt || item.date)}
              </span>
              {formatReadTime(item.readTime) && (
                <span className="inline-flex items-center">
                  <Clock className="h-4 w-4 mr-1.5" />
                  {formatReadTime(item.readTime)}
                </span>
              )}
              <span className="inline-flex items-center">
                <User className="h-4 w-4 mr-1.5" />
                {item.author}
              </span>
              {formatViews(item.views) && (
                <span className="inline-flex items-center">
                  <Eye className="h-4 w-4 mr-1.5" />
                  {formatViews(item.views)}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {item.title}
            </h3>

            <p className="text-white/90 text-sm sm:text-base line-clamp-3 mb-4 max-w-3xl">
              {item.excerpt}
            </p>

            <Button
              variant="secondary"
              size="sm"
              className="group/cta bg-white text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNewsItemClick(item);
              }}
            >
              Baca Selengkapnya
              <ArrowRight className="ml-2 h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

  if (loading) {
    return (
      <section id="berita" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Memuat berita...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-background to-accent/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <span className="text-sm">📰 Berita & Informasi</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Berita Terkini &<span className="block text-primary">Update Perusahaan</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ikuti perkembangan terbaru dari ChemPartner, mulai dari inovasi produk, pencapaian
            perusahaan, hingga insight industri kimia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News (improved) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {featuredNews && <FeaturedNewsCard item={featuredNews} />}
          </motion.div>

          {/* Regular News List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6">Berita Lainnya</h3>

            {regularNews.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="group cursor-pointer"
                onClick={() => handleNewsItemClick(item)}
              >
                <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          {formatReadTime(item.readTime) && (
                            <span className="text-xs text-muted-foreground">{formatReadTime(item.readTime)}</span>
                          )}
                        </div>

                        <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors duration-300 mb-2">
                          {item.title}
                        </h4>

                        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{item.excerpt}</p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{formatDate(item.createdAt || item.date)}</span>
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* View All News Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button
                variant="outline"
                className="w-full group hover:bg-primary hover:text-primary-foreground"
                onClick={onViewAllNews}
              >
                Lihat Semua Berita
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Berlangganan Newsletter</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Dapatkan update terbaru tentang inovasi, berita industri, dan insight eksklusif dari
                ChemPartner.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-center">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 px-6">Subscribe</Button>
              </div>

              <p className="text-xs text-muted-foreground mt-3">
                Kami menghormati privasi Anda. Unsubscribe kapan saja.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
