import React from 'react';

export default function Hero() {
    return (
        <section className="relative isolate pt-32 md:pt-40 pb-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">

            {/* EFEITOS DE LUZ NO FUNDO (Isolate na section evita que fiquem atrás do fundo da página) */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-blue-600/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute top-40 right-10 w-48 h-48 md:w-72 md:h-72 bg-indigo-600/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 text-sm text-zinc-300 mb-8 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Sua solução com tecnologia
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-tight text-white">
                Facilite sua operação.<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
                    Sistemas feitos para escalar.
                </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 px-2">
                Desenvolvemos plataformas, e-commerces e sistemas exclusivos que resolvem os gargalos administrativos. Você foca na estratégia, nosso software faz o trabalho pesado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
                <a
                    href="#contato"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                >
                    Falar com um Especialista
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
                <a
                    href="#solucoes"
                    className="flex items-center justify-center bg-zinc-900/80 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 border border-zinc-700 transition-all"
                >
                    Ver Soluções
                </a>
            </div>
        </section>
    );
}