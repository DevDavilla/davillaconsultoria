import React from 'react';

export default function Hero() {
    return (
        <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Soluções em Tecnologia para Negócios
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
                Automatize sua operação. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Escale seu lucro.
                </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10">
                Sistemas sob medida e automações que eliminam o trabalho manual da sua empresa, devolvendo seu tempo para focar no que realmente importa: crescer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                    href="#contato"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105"
                >
                    Falar com um Especialista
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
                <a
                    href="#solucoes"
                    className="flex items-center justify-center bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 border border-zinc-800 transition-all"
                >
                    Ver Soluções
                </a>
            </div>
        </section>
    );
}