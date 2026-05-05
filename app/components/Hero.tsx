"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative isolate pt-32 md:pt-40 pb-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">

            {/* VÍDEO DE BACKGROUND */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-20 opacity-30 pointer-events-none"
            >
                {/* Certifique-se de que a extensão do arquivo seja .mp4, ou altere abaixo se for .webm, etc. */}
                <source src="/video.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>

            {/* Opcional: Uma camada escura extra caso o vídeo seja muito claro */}
            {/* <div className="absolute inset-0 bg-black/40 -z-10 pointer-events-none"></div> */}

            {/* EFEITOS DE LUZ ANIMADOS (Glows que respiram) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-blue-600/30 rounded-full blur-3xl -z-10 pointer-events-none"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1.1 }}
                transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-40 right-10 w-48 h-48 md:w-72 md:h-72 bg-indigo-600/20 rounded-full blur-3xl -z-10 pointer-events-none"
            />

            {/* Badge de entrada */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-sm text-zinc-300 mb-8 shadow-xl"
            >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Tecnologia e Negócios
            </motion.div>

            {/* Título Principal com animação de subida */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-tight text-white"
            >
                Facilite sua operação<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Sistemas feitos para escalar
                </span>
            </motion.h1>

            {/* Descrição */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 px-2"
            >
                Desenvolvemos plataformas, e-commerces e sistemas exclusivos que resolvem os gargalos administrativos. Você foca na estratégia, nosso software faz o trabalho pesado.
            </motion.p>

            {/* Botões com Hover de escala */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contato"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                >
                    Aplicar para Análise
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(39, 39, 42, 1)" }}
                    whileTap={{ scale: 0.95 }}
                    href="#solucoes"
                    className="flex items-center justify-center bg-zinc-900/80 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border border-zinc-700 transition-all"
                >
                    Ver Soluções
                </motion.a>
            </motion.div>
        </section>
    );
}