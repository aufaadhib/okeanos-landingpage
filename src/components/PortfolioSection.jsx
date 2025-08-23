import React from 'react'
import { motion } from 'motion/react';
import { useState } from 'react';
import { Calendar, ArrowRight, SquareArrowOutUpRight } from 'lucide-react';

const PortfolioSection = () => {

    const Card = ({ image, year, title, desc, category }) => {
        return (
            <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Kategori Badge */}
                    <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
                        {category}
                    </span>

                    {/* Overlay Hover */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="flex items-center gap-2 text-accent font-semibold text-lg bg-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300">
                            <SquareArrowOutUpRight className='w-5 h-5' />
                            <span>Lihat Detail</span>
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white backdrop-blur-md relative z-10 p-4">
                    <span className="text-md font-normal flex flex-row items-center gap-2"><Calendar className='h-5 w-5' />{year}</span>
                    <h3 className="mt-2 text-xl font-bold text-gray-800 group-hover:text-accent transition-opacity">{title}</h3>
                    <p className="mt-1 text-gray-600 text-sm">{desc}</p>
                    <div className='mt-4 text-sm font-medium flex flex-row items-center gap-2'>
                        <span className='px-2 border border-gray-400 rounded-lg'>Analisis</span>
                        <span className='px-2 border border-gray-400 rounded-lg'>Iso</span>
                        <span className='px-2 border border-gray-400 rounded-lg'>Lingkungan</span>
                    </div>
                    <div className="my-4 mt-6 border-t border-gray-300"></div>
                    <div className="mt-6">
                        <button className="w-full flex items-center justify-between gap-2 cursor-pointer hover:underline text-sm text-gray-800 font-medium group">
                            <span className='font-medium'>Pelajari lebih lanjut</span>
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 text-accent" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const projects = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1614308460927-5024ba2e1dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlrcm9za29wfGVufDB8fDB8fHww",
            year: "2024",
            title: "Analisis Kualitas Air Industri",
            desc: "Pengembangan metode analisis komprehensif untuk monitoring kualitas air limbah industri tekstil dengan standar internasional.",
            category: "Riset",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1633394732392-da45fcfcf4d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29zbWV0aWslMjBraW1pYXxlbnwwfHwwfHx8MA%3D%3D",
            year: "2024",
            title: "Formulasi Produk Kosmetik",
            desc: "Pengembangan formula inovatif untuk produk perawatan kulit dengan bahan aktif natural dan ramah lingkungan.",
            category: "Industri",
        },
        {
            id: 3,
            image: "https://plus.unsplash.com/premium_photo-1663047132722-024ff0ef9517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFib3JhdG9yaXVtfGVufDB8fDB8fHww",
            year: "2023",
            title: "Kurikulum Praktikum Kimia",
            desc: "Perancangan modul praktikum kimia modern untuk universitas dengan pendekatan pembelajaran berbasis proyek.",
            category: "Edukasi",
        },
        {
            id: 4,
            image: "https://plus.unsplash.com/premium_photo-1664299925798-28269ccf266d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFib3JhdG9yaXVtfGVufDB8fDB8fHww",
            year: "2023",
            title: "Pengembangan Sistem Analitik",
            desc: "Membangun sistem analitik berbasis AI untuk memprediksi tren industri dan meningkatkan efisiensi operasional.",
            category: "Pengembangan",
        },
        {
            id: 5,
            image: "https://plus.unsplash.com/premium_photo-1661628984416-946603207cfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFib3JhdG9yaXVtfGVufDB8fDB8fHww",
            year: "2025",
            title: "Optimisasi Proses Petrokimia",
            desc: "Membangun sistem analitik berbasis AI untuk memprediksi tren industri dan meningkatkan efisiensi operasional.",
            category: "Pengembangan",
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1705727210721-961cc64a6895?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            year: "2023",
            title: "Biosensor Deteksi Polutan",
            desc: "Membangun sistem analitik berbasis AI untuk memprediksi tren industri dan meningkatkan efisiensi operasional.",
            category: "Pengembangan",
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1705727210721-961cc64a6895?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            year: "2023",
            title: "Biosensor Deteksi Polutan",
            desc: "Membangun sistem analitik berbasis AI untuk memprediksi tren industri dan meningkatkan efisiensi operasional.",
            category: "Pengembangan",
        },
    ]

    const [active, setActive] = useState("Semua")
    const buttons = ["Semua", "Riset", "Industri", "Edukasi", "Pengembangan"]
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // jeda antar item
            },
        },
    };

    // Variants untuk item (tiap card)
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
    return (
        <section id="portfolio" className="py-20 lg:px-44 px-10">
            <div className='relative container mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='flex flex-col justify-center items-center'
                >
                    <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                        <span className="text-md">💼 Portfolio Kami</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Proyek & Pencapaian
                        <span className="block text-accent">Yang Membanggakan</span>
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed lg:w-1/2 text-center ">
                        Jelajahi berbagai proyek inovatif yang telah kami kerjakan bersama klien dari berbagai sektor industri kimia.
                    </p>

                    <div className='mt-10 flex flex-wrap items-center justify-center lg:gap-4 gap-2 text-lg text-muted-foreground '>
                        {buttons.map((btn) => (
                            <button
                                key={btn}
                                onClick={() => setActive(btn)}
                                className={`px-6 py-2 rounded-lg font-medium border transition-colors duration-200 cursor-pointer
                                    ${active === btn
                                        ? "bg-accent text-white border-accent"
                                        : "bg-white text-black border-gray-300 hover:bg-accent hover:text-white"
                                    }`}
                            >
                                {btn}
                            </button>
                        ))}
                    </div>

                </motion.div>

                <div className=''>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
                    >
                        {(active === "Semua"
                            ? projects.slice(0, 6)
                            : projects.filter((item) => item.category === active)
                        ).map((item, index) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card {...item} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection
