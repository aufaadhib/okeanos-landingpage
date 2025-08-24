import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import { Button } from './Ui/VariantButton';
import { Badge } from './Ui/Badge';
import { Card, CardContent } from './Ui/Card';

const PortfolioSection = ({ onPortfolioClick, onViewAllPortfolio }) => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Riset', 'Industri', 'Edukasi', 'Pengembangan'];

  // Static portfolio data
  const portfolioItems = [
    {
      id: 'fallback-1',
      title: 'Analisis Kualitas Air Industri',
      category: 'Riset',
      description:
        'Pengembangan metode analisis komprehensif untuk monitoring kualitas air limbah industri tekstil dengan standar internasional.',
      image:
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Analisis', 'Lingkungan', 'ISO'],
      createdAt: '2024-01-15T00:00:00Z',
      content: `Proyek analisis kualitas air industri ini merupakan kolaborasi strategis dengan industri tekstil terkemuka untuk mengembangkan sistem monitoring komprehensif yang memenuhi standar internasional.

Dalam proyek ini, tim kami mengembangkan metodologi analisis yang mencakup parameter fisik, kimia, dan biologis dengan akurasi tinggi. Sistem monitoring yang dikembangkan mampu mendeteksi berbagai polutan dengan sensitivitas yang sangat baik.

Implementasi teknologi spektroskopi canggih dan metode kromatografi memungkinkan analisis real-time dengan hasil yang dapat diandalkan. Tim kami juga mengintegrasikan sistem pelaporan otomatis yang memudahkan compliance terhadap regulasi lingkungan.`,
      client: 'PT. Tekstil Nusantara',
      duration: '6 bulan',
      teamSize: 8,
      challenges: [
        'Kompleksitas komposisi limbah tekstil yang bervariasi',
        'Kebutuhan akurasi tinggi dalam deteksi multi-polutan',
        'Integrasi dengan sistem existing client',
      ],
      solutions: [
        'Pengembangan metode analisis multi-parameter terintegrasi',
        'Implementasi quality control berlapis untuk akurasi optimal',
        'Customisasi sistem interface untuk kompatibilitas maksimal',
      ],
      results: [
        'Peningkatan akurasi monitoring hingga 98%',
        'Reduksi waktu analisis sebesar 60%',
        'Compliance 100% terhadap standar ISO 14001',
      ],
      images: [
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
    },
    {
      id: 'fallback-2',
      title: 'Formulasi Produk Kosmetik',
      category: 'Industri',
      description:
        'Pengembangan formula inovatif untuk produk perawatan kulit dengan bahan aktif natural dan ramah lingkungan.',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Kosmetik', 'Natural', 'R&D'],
      createdAt: '2024-01-10T00:00:00Z',
      content: `Proyek formulasi kosmetik natural ini menghadirkan inovasi dalam industri kecantikan dengan mengembangkan produk perawatan kulit yang 100% menggunakan bahan aktif alami.

Tim R&D kami melakukan riset ekstensif terhadap ekstrak tumbuhan lokal Indonesia yang memiliki khasiat dermatologi terbukti. Proses ekstraksi menggunakan teknologi superkritis untuk mempertahankan bioaktivitas optimal.

Formulasi yang dikembangkan telah melalui uji klinis komprehensif dan membuktikan efektivitas yang setara dengan produk konvensional namun dengan profil keamanan yang superior.`,
      client: 'BeautyNature Indonesia',
      duration: '8 bulan',
      teamSize: 12,
      challenges: [
        'Stabilitas bahan aktif natural dalam formulasi',
        'Konsistensi kualitas ekstrak dari bahan baku alami',
        'Regulasi kosmetik yang ketat',
      ],
      solutions: [
        'Pengembangan sistem stabilisasi berbasis enkapsulasi',
        'Implementasi quality control terintegrasi dari raw material',
        'Kerjasama dengan regulatory consultant untuk compliance',
      ],
      results: [
        'Shelf-life produk mencapai 24 bulan',
        'Efficacy test menunjukkan improvement 85% pada skin texture',
        'Mendapat sertifikasi organic dari lembaga internasional',
      ],
      images: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
    },
    {
      id: 'fallback-3',
      title: 'Kurikulum Praktikum Kimia',
      category: 'Edukasi',
      description:
        'Perancangan modul praktikum kimia modern untuk universitas dengan pendekatan pembelajaran berbasis proyek.',
      image:
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Edukasi', 'Praktikum', 'Modul'],
      createdAt: '2023-12-20T00:00:00Z',
      content: `Pengembangan kurikulum praktikum kimia modern ini bertujuan untuk meningkatkan kualitas pembelajaran mahasiswa melalui pendekatan project-based learning yang inovatif.

Kurikulum dirancang dengan integrasi teknologi digital dan eksperimen hands-on yang relevan dengan kebutuhan industri. Setiap modul dilengkapi dengan simulasi virtual dan case study real-world.

Program ini telah diimplementasikan di 15 universitas dengan feedback positif dari mahasiswa dan dosen, menciptakan learning experience yang lebih engaging dan aplikatif.`,
      client: 'Konsorsium Universitas Indonesia',
      duration: '12 bulan',
      teamSize: 15,
      challenges: [
        'Perbedaan infrastructure laboratorium antar universitas',
        'Standardisasi konten untuk multi-institusi',
        'Training dosen untuk metodologi baru',
      ],
      solutions: [
        'Pengembangan modul adaptif sesuai kapasitas lab',
        'Pembuatan standard operating procedures terintegrasi',
        'Program sertifikasi dan pelatihan komprehensif untuk dosen',
      ],
      results: [
        'Student engagement meningkat 75%',
        'Learning outcome improvement sebesar 68%',
        'Adopsi kurikulum di 15+ universitas',
      ],
    },
    {
      id: 'fallback-4',
      title: 'Optimasi Proses Petrokimia',
      category: 'Pengembangan',
      description:
        'Implementasi teknologi katalisis hijau untuk meningkatkan efisiensi proses produksi di industri petrokimia.',
      image:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Petrokimia', 'Katalisis', 'Efisiensi'],
      createdAt: '2023-11-15T00:00:00Z',
      content: `Proyek optimasi proses petrokimia ini mengimplementasikan teknologi katalisis hijau untuk mencapai efisiensi produksi yang superior dengan dampak lingkungan minimal.

Pengembangan katalis heterogen baru dengan aktivitas tinggi dan selektivitas optimal telah berhasil meningkatkan yield produksi secara signifikan. Proses yang dioptimasi juga mengurangi konsumsi energi dan waste generation.

Implementasi full-scale telah terbukti memberikan return on investment yang excellent dengan payback period kurang dari 2 tahun.`,
      client: 'PetroIndo Chemical',
      duration: '10 bulan',
      teamSize: 18,
      challenges: [
        'Scale-up dari lab scale ke industrial scale',
        'Integrasi dengan existing production line',
        'Minimalisasi downtime selama implementasi',
      ],
      solutions: [
        'Pilot plant testing untuk validasi scale-up',
        'Phased implementation dengan backup system',
        'Comprehensive risk management dan contingency planning',
      ],
      results: ['Peningkatan yield produksi 35%', 'Reduksi konsumsi energi 28%', 'ROI tercapai dalam 18 bulan'],
    },
    {
      id: 'fallback-5',
      title: 'Biosensor Deteksi Polutan',
      category: 'Riset',
      description:
        'Pengembangan biosensor canggih untuk deteksi real-time polutan kimia dalam air dengan sensitivitas tinggi.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Biosensor', 'Deteksi', 'Inovasi'],
      createdAt: '2023-10-10T00:00:00Z',
      content: `Pengembangan biosensor revolusioner ini memanfaatkan teknologi biorecognition elements untuk deteksi ultra-sensitif polutan kimia dalam media air.

Sensor yang dikembangkan menggunakan kombinasi enzyme-based recognition dengan signal transduction nanostruktur untuk mencapai limit of detection pada level parts per billion.

Prototype telah berhasil diuji pada berbagai sample air real dan menunjukkan performance yang excellent dengan interference minimal dari matrix sample.`,
      client: 'Environmental Monitoring Agency',
      duration: '14 bulan',
      teamSize: 10,
      challenges: [
        'Stabilitas enzim dalam kondisi lingkungan bervariasi',
        'Interference dari matrix sample kompleks',
        'Miniaturisasi untuk portable application',
      ],
      solutions: [
        'Enzyme immobilization dengan carrier matrix optimal',
        'Pengembangan signal processing algorithm advanced',
        'Microelectronics integration untuk portabilitas',
      ],
      results: ['Limit of detection mencapai 1 ppb', 'Response time kurang dari 30 detik', 'Stability test menunjukkan lifetime > 6 bulan'],
    },
    {
      id: 'fallback-6',
      title: 'Sintesis Material Nano',
      category: 'Industri',
      description:
        'Sintesis dan karakterisasi nanomaterial untuk aplikasi industri elektronik dengan properti unggul.',
      image:
        'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Nanomaterial', 'Elektronik', 'Sintesis'],
      createdAt: '2023-09-05T00:00:00Z',
      content: `Proyek sintesis nanomaterial ini mengembangkan material dengan properti elektronik superior untuk aplikasi dalam industri semikonduktor dan elektronik.

Metode sintesis bottom-up yang dikembangkan menghasilkan nanopartikel dengan size distribution yang sempit dan morphology yang terkontrol. Karakterisasi komprehensif menunjukkan properti elektronik yang excellent.

Material yang dihasilkan telah diaplikasikan dalam prototype device dan menunjukkan performance yang superior dibanding material konvensional.`,
      client: 'TechnoElectro Industries',
      duration: '9 bulan',
      teamSize: 12,
      challenges: [
        'Kontrol size dan morphology pada skala nanometer',
        'Reproducibility dalam large scale synthesis',
        'Karakterisasi properti elektronik akurat',
      ],
      solutions: [
        'Optimisasi parameter sintesis dengan statistical approach',
        'Scale-up methodology dengan quality control ketat',
        'Advanced characterization techniques untuk validasi',
      ],
      results: ['Size uniformity > 95%', 'Electrical conductivity meningkat 300%', 'Successful integration dalam commercial device'],
    },
  ];

  const filteredItems =
    selectedCategory === 'Semua'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).getFullYear().toString();
    } catch {
      return '2024';
    }
  };

  const handlePortfolioItemClick = (item) => {
    if (onPortfolioClick) {
      onPortfolioClick(item);
    }
  };

  return (
    <section id="portfolio" className="py-20">
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
            <span className="text-sm">💼 Portfolio Kami</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proyek & Pencapaian
            <span className="block text-primary">Yang Membanggakan</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jelajahi berbagai proyek inovatif yang telah kami kerjakan bersama klien dari berbagai sektor industri kimia.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => handlePortfolioItemClick(item)}
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
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {formatDate(item.createdAt)}
                        </div>

                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground line-clamp-3">{item.description}</p>

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

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-sm text-muted-foreground">Pelajari lebih lanjut</span>
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 group" onClick={onViewAllPortfolio}>
            Lihat Semua Portfolio
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default PortfolioSection