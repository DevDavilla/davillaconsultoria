"use client";

import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export default function Benefits() {
    return (
        <section className="py-20 bg-zinc-900/50 border-y border-zinc-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

                {/* Benefício 1 */}
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                    className="flex flex-col items-start gap-4"
                >
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-blue-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-50">Recupere seu Tempo</h3>
                    <p className="text-zinc-400 leading-relaxed">Deixe que sistemas inteligentes façam o trabalho repetitivo. Chega de planilhas confusas e controle manual.</p>
                </motion.div>

                {/* Benefício 2 */}
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-start gap-4"
                >
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-blue-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-50">Gestão Baseada em Dados</h3>
                    <p className="text-zinc-400 leading-relaxed">Tenha o controle total do seu negócio na palma da mão com dashboards intuitivos e relatórios em tempo real.</p>
                </motion.div>

                {/* Benefício 3 */}
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-start gap-4"
                >
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-blue-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-50">Experiência do Cliente</h3>
                    <p className="text-zinc-400 leading-relaxed">Ofereça um atendimento rápido e moderno, aumentando a fidelização e o valor percebido da sua marca.</p>
                </motion.div>

            </div>
        </section>
    );
}