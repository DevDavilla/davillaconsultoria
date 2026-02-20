import React from 'react';

export default function Solutions() {
    return (
        <section id="solucoes" className="py-24 max-w-7xl mx-auto px-6">
            <div className="mb-16 md:text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-50">Soluções que entregam resultado</h2>
                <p className="text-zinc-400 text-lg">Não vendemos sites. Construímos ativos digitais para sua empresa.</p>
            </div>

            <div className="flex flex-col gap-12">
                {/* DESTAQUE: ReservasClub */}
                <div className="grid md:grid-cols-2 gap-8 items-center bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 rounded-3xl">
                    <div className="order-2 md:order-1">
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
                            SaaS Exclusivo
                        </div>
                        <h3 className="text-3xl font-bold mb-4 text-zinc-50">ReservasClub</h3>
                        <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                            O fim do caos no WhatsApp para Bares e Baladas. Um sistema completo que automatiza reservas, listas VIP, validação por QR Code e controle de portaria em tempo real.
                        </p>
                        <ul className="flex flex-col gap-3 mb-8">
                            <li className="flex items-center gap-3 text-zinc-300">
                                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                Auto-atendimento para clientes
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                Confirmação automática
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                Painel de gestão de ocupação
                            </li>
                        </ul>
                        <button className="text-white font-semibold flex items-center gap-2 hover:text-blue-400 transition-colors">
                            Conhecer a solução
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>
                    <div className="order-1 md:order-2 bg-zinc-800/50 aspect-video rounded-xl border border-zinc-700 flex flex-col items-center justify-center text-zinc-500 overflow-hidden relative group">
                        <svg className="w-12 h-12 mb-2 text-zinc-600 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-sm font-medium">Vídeo Demo ReservasClub</span>
                        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* E-commerce */}
                    <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors">
                        <h3 className="text-2xl font-bold mb-3 text-zinc-50">E-commerce de Alta Conversão</h3>
                        <p className="text-zinc-400 mb-6">
                            Plataformas completas e otimizadas para vendas. Exemplo: <strong className="text-zinc-300">iPhones Pro Store</strong>. Foco em usabilidade, checkout rápido e gestão simplificada de estoque.
                        </p>
                        <button className="text-blue-400 font-semibold hover:text-blue-300 text-sm flex items-center gap-2">
                            Ver detalhes <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>

                    {/* Gestão PWA */}
                    <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors">
                        <h3 className="text-2xl font-bold mb-3 text-zinc-50">Sistemas de Gestão (PWA)</h3>
                        <p className="text-zinc-400 mb-6">
                            Soluções sob medida para operações diárias, como o sistema desenvolvido para a <strong className="text-zinc-300">Óticas Greece</strong>. Acesso rápido via celular ou computador sem precisar de lojas de app.
                        </p>
                        <button className="text-blue-400 font-semibold hover:text-blue-300 text-sm flex items-center gap-2">
                            Ver detalhes <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}