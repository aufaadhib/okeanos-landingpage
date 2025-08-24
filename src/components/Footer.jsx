import { motion } from 'motion/react';
import { FlaskConical, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from './Ui/VariantButton';
import { Separator } from './Ui/Saparator';

const Footer = () => {
    const socialLinks = [
        { Icon: Facebook, href: '#', label: 'Facebook' },
        { Icon: Twitter, href: '#', label: 'Twitter' },
        { Icon: Linkedin, href: '#', label: 'LinkedIn' },
        { Icon: Instagram, href: '#', label: 'Instagram' },
      ];
    
      const quickLinks = [
        { label: 'Tentang Kami', href: '#tentang' },
        { label: 'Layanan', href: '#layanan' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Berita', href: '#berita' },
        { label: 'Karir', href: '#karir' },
        { label: 'Kontak', href: '#kontak' },
      ];
    
      const services = [
        { label: 'Analisis Laboratorium', href: '#' },
        { label: 'Konsultasi Teknis', href: '#' },
        { label: 'Penelitian & Pengembangan', href: '#' },
        { label: 'Pelatihan & Sertifikasi', href: '#' },
        { label: 'Quality Control', href: '#' },
        { label: 'Regulatory Support', href: '#' },
      ];
    
      const contactInfo = [
        {
          Icon: MapPin,
          title: 'Alamat',
          content: 'Jl. Industri Kimia No. 123\nJakarta Selatan 12345'
        },
        {
          Icon: Phone,
          title: 'Telepon',
          content: '+62 21 1234 5678\n+62 811 2345 6789'
        },
        {
          Icon: Mail,
          title: 'Email',
          content: 'info@chempartner.co.id\nsupport@chempartner.co.id'
        },
      ];
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary-foreground rounded-lg p-2">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xl font-bold">ChemPartner</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Mitra terpercaya untuk kebutuhan riset, edukasi, dan pengembangan industri kimia. 
                Berkomitmen memberikan solusi inovatif dengan standar kualitas internasional.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Navigasi Cepat</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Layanan Kami</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Hubungi Kami</h3>
              <div className="space-y-6">
                {contactInfo.map(({ Icon, title, content }) => (
                  <div key={title} className="flex items-start space-x-3">
                    <div className="bg-primary-foreground/10 p-2 rounded-lg shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">{title}</p>
                      <p className="text-primary-foreground/80 text-sm whitespace-pre-line">
                        {content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6"
              >
                <Button 
                  variant="secondary" 
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Konsultasi Gratis
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80 text-sm">
                © 2025 Okeanos. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                Designed with ❤️ for the future of chemical industry
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer