import React from 'react'
import { motion } from 'motion/react';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Kualitas Terjamin',
      description: 'Standar internasional ISO 9001:2015 dan sertifikasi laboratorium terakreditasi'
    },
    {
      icon: Users,
      title: 'Tim Ahli',
      description: 'Didukung oleh para ahli kimia berpengalaman dan peneliti profesional'
    },
    {
      icon: Target,
      title: 'Solusi Tepat',
      description: 'Pendekatan yang disesuaikan dengan kebutuhan spesifik setiap klien'
    }
  ];

  const achievements = [
    'Sertifikasi ISO 9001:2015',
    'Akreditasi Laboratorium Nasional',
    'Pengalaman 15+ tahun',
    'Tim ahli bersertifikat internasional'
  ];
  return (
    <section id="about" className="pb-20 lg:px-44 pt-30">
      <div className="container mx-auto px-10 lg:px-1">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <span className="text-md">🏢 Tentang ChemPartner</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mitra Terpercaya untuk
                <span className="block text-primary">Kemajuan Industri Kimia</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
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
              className="grid gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Pencapaian Kami</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >


            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">A+</div>
                <div className="text-xs">Rating Klien</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection