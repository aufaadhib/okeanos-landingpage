import React from 'react'
import { motion } from 'motion/react';

import { CheckCircle, Award, Users, Target, Building, Calendar, TrendingUp, Shield } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from './Ui/Card';
import { Badge } from './Ui/Badge';



const NewAboutSection = () => {
    const features = [
        {
          icon: Award,
          title: 'Kualitas Terjamin',
          description: 'Standar internasional ISO 9001:2015 dan sertifikasi laboratorium terakreditasi',
          color: 'bg-blue-500'
        },
        {
          icon: Users,
          title: 'Tim Ahli',
          description: 'Didukung oleh para ahli kimia berpengalaman dan peneliti profesional',
          color: 'bg-green-500'
        },
        {
          icon: Target,
          title: 'Solusi Tepat',
          description: 'Pendekatan yang disesuaikan dengan kebutuhan spesifik setiap klien',
          color: 'bg-purple-500'
        }
      ];
    
      const achievements = [
        { text: 'Sertifikasi ISO 9001:2015', verified: true },
        { text: 'Akreditasi Laboratorium Nasional', verified: true },
        { text: 'Pengalaman 15+ tahun', verified: true },
        { text: 'Tim ahli bersertifikat internasional', verified: true }
      ];
    
      const stats = [
        { 
          icon: TrendingUp, 
          value: '500+', 
          label: 'Proyek Selesai',
          description: 'Proyek berhasil diselesaikan dengan standar tinggi'
        },
        { 
          icon: Calendar, 
          value: '15+', 
          label: 'Tahun Pengalaman',
          description: 'Pengalaman dalam industri kimia Indonesia'
        },
        { 
          icon: Building, 
          value: '50+', 
          label: 'Klien Terpercaya',
          description: 'Perusahaan yang mempercayai layanan kami'
        },
        { 
          icon: Shield, 
          value: '99%', 
          label: 'Kepuasan Klien',
          description: 'Tingkat kepuasan berdasarkan feedback klien'
        }
      ];
  return (
    <section id="tentang" className="py-20 bg-gradient-to-bl from-accent/10 via-background to-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            🏢 Tentang ChemPartner
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mitra Terpercaya untuk
            <span className="block text-primary mt-2">Kemajuan Industri Kimia</span>
          </h2>
          
          <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
            ChemPartner hadir sebagai solusi komprehensif untuk kebutuhan industri kimia Indonesia. 
            Dengan dedikasi tinggi pada inovasi dan kualitas, kami membantu klien mencapai 
            standar internasional dalam riset, produksi, dan pengembangan produk kimia.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur">
                <CardHeader className="pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Company Info & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Visi & Misi Perusahaan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Visi</h4>
                  <p className="text-muted-foreground leading-relaxed">
                  Menjadi mitra terpercaya yang mendukung perkembangan ilmu pengetahuan dan teknologi melalui penyediaan produk dan layanan yang berkualitas serta inovatif.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Misi</h4>
                  <p className="text-muted-foreground leading-relaxed">
                  Memberikan solusi riset dan pengembangan yang inovatif, menyuplai peralatan ilmiah yang berkualitas, serta menyediakan pelatihan dan layanan profesional yang dapat meningkatkan efisiensi dan keberhasilan dalam riset dan industri.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl">Pencapaian Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 border border-green-100"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="text-sm font-medium">{achievement.text}</span>
                      {achievement.verified && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          Verified
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Statistik Perusahaan</h3>
              <p className="text-muted-foreground">Data pencapaian kami hingga saat ini</p>
            </div>

            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary/5 to-blue-50 hover:from-primary/10 hover:to-blue-100">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                          <stat.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-baseline space-x-2">
                            <span className="text-3xl font-bold text-primary">{stat.value}</span>
                            <span className="text-lg font-semibold text-foreground">{stat.label}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {stat.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NewAboutSection