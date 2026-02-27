"use client";

import React, { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Solutions() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.load(); // Isso força o vídeo a voltar para o "poster" inicial
        }
    };

    return (
        <section id="solucoes" className="py-24 relative overflow-hidden">
            {/* Imagem de Background com Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07] grayscale"
                    style={{ backgroundImage: "url('/banner-bg.png')" }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-transparent to-zinc-950" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-50 font-sans">
                        Soluções que entregam resultado
                    </h2>
                    <p className="text-zinc-400 text-lg font-sans">
                        Não vendemos sites. Construímos ativos digitais para sua empresa.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col gap-12"
                >
                    {/* DESTAQUE: ReservasClub */}
                    <motion.div
                        variants={cardVariants}
                        className="grid md:grid-cols-2 gap-8 items-center bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-8 md:p-12 rounded-3xl"
                    >
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
                                SaaS Exclusivo
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-zinc-50 font-sans">ReservasClub</h3>
                            <p className="text-zinc-400 text-lg mb-6 leading-relaxed font-sans">
                                O fim do caos no WhatsApp para Bares e Baladas. Um sistema completo que automatiza reservas, listas VIP e controle de portaria em tempo real.
                            </p>
                            <ul className="flex flex-col gap-3 mb-8">
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    Auto-atendimento para clientes
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    Confirmação automática pix
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    Painel de gestão de ocupação
                                </li>
                            </ul>
                            <motion.a
                                href="#contato"
                                whileHover={{ x: 5 }}
                                className="text-white font-semibold flex items-center gap-2 hover:text-blue-400 transition-colors font-sans"
                            >
                                Solicitar demonstração
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </motion.a>
                        </div>

                        {/* Player Interativo de Vídeo */}
                        <div
                            className="order-1 md:order-2 bg-zinc-800/50 aspect-video rounded-xl border border-zinc-700 flex flex-col items-center justify-center text-zinc-500 overflow-hidden relative group cursor-pointer shadow-xl"
                            onClick={togglePlay}
                        >
                            <video
                                ref={videoRef}
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isPlaying ? 'opacity-100 scale-100' : 'opacity-60 group-hover:opacity-80 scale-105'}`}
                                poster="/reservasclub.png"
                                muted
                                playsInline
                                onEnded={handleVideoEnd}
                            >

                                <source src="https://res.cloudinary.com/duwarlswe/video/upload/v1772214284/reservas-demo_tcbft9.mp4" type="video/mp4" />
                            </video>

                            {/* Botão overlay que some quando está tocando */}
                            <div className={`relative z-10 flex flex-col items-center pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                                <div className="bg-zinc-900/80 backdrop-blur-sm p-4 rounded-full mb-3 text-white/80 group-hover:text-blue-500 group-hover:scale-110 transition-all border border-zinc-700/50">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Assistir demonstração</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* E-commerce */}
                        <motion.div variants={cardVariants} className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-3 text-zinc-50 font-sans">E-commerce de Alta Conversão</h3>
                            <p className="text-zinc-400 mb-0 font-sans">
                                Plataformas completas e otimizadas para vendas. Foco em usabilidade, checkout rápido e gestão simplificada de estoque para empresas de eletrônicos e varejo.
                            </p>
                        </motion.div>

                        {/* Gestão PWA */}
                        <motion.div variants={cardVariants} className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-3 text-zinc-50 font-sans">Sistemas de Gestão (PWA)</h3>
                            <p className="text-zinc-400 mb-0 font-sans">
                                Soluções sob medida para operações diárias. Acesso rápido via celular ou computador para controle de estoque, ordens de serviço e histórico de clientes.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}