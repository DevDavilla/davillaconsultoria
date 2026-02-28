"use client";

import React, { useState } from 'react';
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = ["Soluções", "Cases de Sucesso", "Contato"];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer relative z-50"
                >
                    <div className="absolute inset-0 bg-blue-600/20 blur-xl opacity-0 hover:opacity-100 transition duration-500 rounded-full" />
                    <Image
                        src="/consultoria-logo.png"
                        alt="Davilla Consultoria"
                        width={160}
                        height={40}
                        className="relative z-10 object-contain"
                    />
                </motion.div>

                {/* NAVEGAÇÃO DESKTOP */}
                <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                    {navLinks.map((item, index) => (
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

                {/* BOTÃO CTA DESKTOP */}
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

                {/* Menu Mobile Hamburger Button (Gira para formar um X) */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
                    aria-label="Abrir menu"
                >
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-zinc-400 rounded-full origin-center transition-all"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-6 h-0.5 bg-zinc-400 rounded-full transition-all"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-zinc-400 rounded-full origin-center transition-all"
                    />
                </motion.button>
            </div>

            {/* CONTEÚDO DO MENU MOBILE */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-2xl flex flex-col items-center py-8 gap-6 z-40"
                    >
                        {navLinks.map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase().split(' ')[0]}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                whileHover={{ scale: 1.05, color: "#fff" }}
                                className="text-zinc-400 text-lg font-medium transition-colors"
                            >
                                {item}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contato"
                            onClick={() => setIsMobileMenuOpen(false)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-zinc-950 px-8 py-3 mt-4 rounded-full font-semibold"
                        >
                            Agendar Consultoria
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}