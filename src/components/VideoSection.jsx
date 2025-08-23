import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Volume2, Maximize, ExternalLink } from 'lucide-react';

// Demo YouTube videos - replace with actual Okeanos videos
const featuredVideos = [
  {
    id: 1,
    title: 'Tutorial Peminjaman Alat di Web Teknik Kimia UAD',
    description: 'Web Laboratorium : http://labtk.myuad.id/index2.php',
    embedId: '10-gxNF6ltU', // Replace with actual video ID
    thumbnail: 'https://img.youtube.com/vi/10-gxNF6ltU/maxresdefault.jpg',
    duration: '1:49',
    category: 'Academy'
  },
  {
    id: 2,
    title: 'Implementasi 3 BKP - KSKI MBKM 2021 - Teknik Kimia UAD',
    description: 'Video Implementasi 3 BKP - KSKI MBKM 2021 - Teknik Kimia UAD.',
    embedId: 'myORujT3i5Y', // Replace with actual video ID
    thumbnail: 'https://img.youtube.com/vi/myORujT3i5Y/maxresdefault.jpg',
    duration: '08:34',
    category: 'Academy'
  },
  {
    id: 3,
    title: 'Profil Program Studi Magister Teknik Kimia Universitas Ahmad Dahlan',
    description: 'Profile program studi.',
    embedId: 'VceCU6AHiDI', // Replace with actual video ID
    thumbnail: 'https://img.youtube.com/vi/VceCU6AHiDI/maxresdefault.jpg',
    duration: '05:54',
    category: 'Academy'
  }
];

export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(featuredVideos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };

  const enterFullscreen = () => {
    const el = iframeRef.current;
    if (!el) return;

    // Standar
    if (el.requestFullscreen) return el.requestFullscreen();

    // Safari
    const anyEl = el;
    if (anyEl.webkitRequestFullscreen) return anyEl.webkitRequestFullscreen();

    // IE11 lama (jarang, tapi sekalian)
    if (anyEl.msRequestFullscreen) return anyEl.msRequestFullscreen();
  };

  const handleFullscreenClick = () => {
    // Pastikan sudah dalam mode playing (iframe sudah render)
    if (!isPlaying) {
      setIsPlaying(true);
      // Minta fullscreen setelah iframe terpasang di DOM
      setTimeout(() => enterFullscreen(), 0);
    } else {
      enterFullscreen();
    }
  };
  return (
    <section id="video" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-indigo-900/30 pointer-events-none" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, 50, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full mb-8"
          >
            <Play className="w-5 h-5 text-blue-300" />
            <span className="text-blue-300 font-semibold">Video Content</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent mb-8"
          >
            Jelajahi Konten Video Kami
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Tonton video-video edukatif dan informatif dari berbagai divisi Okeanos
            yang menghadirkan wawasan mendalam tentang industri kimia
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden text-card-foreground flex flex-col gap-6 rounded-xl border">
              <div className="relative aspect-video">
                {!isPlaying ? (
                  // Video Thumbnail with Play Button
                  <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                    <img 
                      src={selectedVideo.thumbnail} 
                      alt={selectedVideo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Play Button */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors duration-300">
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                      </div>
                    </motion.div>

                    {/* Video Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                        <h3 className="text-white font-semibold text-lg mb-2">{selectedVideo.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <span className="flex items-center gap-1">
                            <Volume2 className="w-4 h-4" />
                            {selectedVideo.duration}
                          </span>
                          <span className="px-2 py-1 bg-blue-600 rounded text-white text-xs">
                            {selectedVideo.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // YouTube Embed
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="rounded-lg"
                  />
                )}
              </div>
              
              {/* Video Description */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{selectedVideo.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{selectedVideo.description}</p>
                
                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                    <a
                    href={`https://youtu.be/${selectedVideo.embedId}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-600 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Tonton di YouTube
                    </a>
                    </div>

              </div>
            </div>
          </motion.div>

          {/* Video Playlist */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Video Terkait</h3>
            
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`cursor-pointer ${selectedVideo.id === video.id ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => handleVideoSelect(video)}
              >
                <div className="backdrop-blur-sm bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 text-card-foreground flex flex-col gap-6 rounded-xl border">
                  <div className="flex gap-4 p-4">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                      <span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                        {video.duration}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm mb-1 line-clamp-2">
                        {video.title}
                      </h4>
                      <span className="text-xs text-blue-400 font-medium">
                        {video.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* View More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-4"
            >
                <a 
                href='https://www.youtube.com/@proditeknikkimiauad7047'
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md transition-all duration-300"
                >
                Lihat Semua Video
                <ExternalLink className="w-4 h-4" />
                </a>

            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl border border-blue-500/30">
            <span className="text-blue-300 font-medium">Ikuti channel YouTube kami untuk konten terbaru</span>
                <a
                href='https://www.youtube.com/@proditeknikkimiauad7047'
                className="flex items-center px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md transition-colors duration-300"
                >
                Subscribe
                </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}