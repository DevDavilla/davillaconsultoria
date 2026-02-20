"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO com animação de brilho */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-bold tracking-tighter cursor-pointer group"
                >
                    <span className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">Davilla</span>
                    <span className="text-zinc-50 relative">
                        Consultoria.
                        <motion.span
                            className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                            variants={{
                                initial: { width: 0 },
                                hover: { width: "100%" }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </span>
                </motion.div>

                {/* NAVEGAÇÃO */}
                <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                    {["Soluções", "Cases de Sucesso", "Contato"].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase().split(' ')[0]}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index + 0.5 }}
                            className="hover:text-white transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                </nav>

                {/* BOTÃO CTA */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    href="#contato"
                    className="hidden md:flex bg-white text-zinc-950 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                    Agendar Consultoria
                </motion.a>

                {/* Menu Mobile Simples Animado */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Abrir menu"
                >
                    <span className="w-6 h-0.5 bg-zinc-400 rounded-full"></span>
                    <span className="w-6 h-0.5 bg-zinc-400 rounded-full"></span>
                    <span className="w-6 h-0.5 bg-zinc-400 rounded-full"></span>
                </motion.button>
            </div>
        </motion.header>
    );
}