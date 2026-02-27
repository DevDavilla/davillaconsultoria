"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contato" className="py-24 max-w-4xl mx-auto px-6 text-center relative">
            {/* Brilho sutil de fundo para focar o olhar no CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-[100px] -z-10"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-bold mb-6 text-zinc-50 font-sans">
                    Pronto para modernizar sua operação?
                </h2>
                <p className="text-xl text-zinc-400 mb-10 font-sans">
                    Pare de perder tempo e dinheiro com processos manuais. Vamos desenhar a solução exata para o seu modelo de negócio.
                </p>

                <motion.a
                    href="https://wa.me/5511913289181"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(34, 197, 94, 0.3)",
                            "0 0 40px rgba(34, 197, 94, 0.6)",
                            "0 0 20px rgba(34, 197, 94, 0.3)"
                        ]
                    }}
                    transition={{
                        boxShadow: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-500 transition-all"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.031 2.012h-.033c-5.466 0-9.897 4.43-9.897 9.897 0 1.77.466 3.498 1.348 5.016L2 22l5.241-1.373a9.852 9.852 0 004.757 1.222h.032c5.465 0 9.896-4.43 9.896-9.896 0-5.468-4.431-9.898-9.896-9.898a9.943 9.943 0 00-7.005 2.905c-1.874 1.874-2.906 4.367-2.906 7.02 0 1.815.496 3.559 1.439 5.068L2 22l5.341-1.401a9.852 9.852 0 004.658 1.157h.033c5.466 0 9.896-4.431 9.896-9.898 0-5.467-4.43-9.897-9.896-9.897zm5.558 14.167c-.23.645-1.328 1.233-1.83 1.314-.462.073-.976.126-3.078-.748-2.527-1.049-4.131-3.612-4.254-3.774-.122-.164-1.016-1.35-1.016-2.576 0-1.226.634-1.83.86-2.071.218-.24.498-.328.72-.328.223 0 .445.01.637.018.23.01.54-.085.823.606.284.693.971 2.378 1.055 2.541.083.165.138.358.026.58-.112.22-.172.355-.338.547-.168.192-.352.399-.5.526-.164.14-.337.296-.145.626.192.33.52 1.488 1.291 2.419.771.93 1.144.975 1.554.41.425-.561 1.954-2.31 2.478-2.775.525-.465 1.026-.39 1.465-.213.44.177 2.784 1.312 3.262 1.553.477.24.798.361.916.562.117.202.117 1.168-.113 1.813z" clipRule="evenodd" />
                    </svg>
                    Falar com um Especialista no WhatsApp
                </motion.a>

                <p className="mt-6 text-sm text-zinc-500">
                    Atendimento direto com Thulio D'avilla.
                </p>
            </motion.div>
        </section>
    );
}