import React from 'react';

export default function Header() {
    return (
        <header className="fixed w-full top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tighter">
                    <span className="text-blue-500">Davilla</span> Consultoria.
                </div>

                <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                    <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
                    <a href="#cases" className="hover:text-white transition-colors">Cases de Sucesso</a>
                    <a href="#contato" className="hover:text-white transition-colors">Contato</a>
                </nav>

                <a
                    href="#contato"
                    className="hidden md:flex bg-white text-zinc-950 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
                >
                    Agendar Consultoria
                </a>

                {/* Botão Menu Mobile Simples */}
                <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Abrir menu">
                    <span className="w-6 h-0.5 bg-zinc-400 rounded-full"></span>
                    <span className="w-6 h-0.5 bg-zinc-400 rounded-full"></span>
                    <span className="w-6 h-0.5 bg-zinc-400 rounded-full"></span>
                </button>
            </div>
        </header>
    );
}