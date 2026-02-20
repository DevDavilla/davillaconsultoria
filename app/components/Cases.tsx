import React from 'react';

export default function Cases() {
    return (
        <section id="cases" className="py-24 bg-zinc-900/50 border-y border-zinc-800">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-zinc-50">O que os donos dizem na prática</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Depoimento 1 */}
                    <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative">
                        <svg className="w-8 h-8 text-blue-500/20 absolute top-6 right-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        <p className="text-zinc-300 mb-6 leading-relaxed relative z-10">
                            "Cara, o sistema ficou muito bom. Ajudou demais a organizar aqui a loja, a gente tava perdendo muito tempo anotando tudo no papel e perdendo histórico. Valeu mesmo!"
                        </p>
                        <div>
                            <p className="font-semibold text-white">Matheus</p>
                            <p className="text-sm text-zinc-500">Óticas Greece</p>
                        </div>
                    </div>

                    {/* Depoimento 2 */}
                    <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative">
                        <svg className="w-8 h-8 text-blue-500/20 absolute top-6 right-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        <p className="text-zinc-300 mb-6 leading-relaxed relative z-10">
                            "Thulio, o site novo tá vendendo super bem. Os clientes elogiam bastante que tá fácil de achar os iphones e finalizar a compra rápido. Obrigada!"
                        </p>
                        <div>
                            <p className="font-semibold text-white">Ana S.</p>
                            <p className="text-sm text-zinc-500">iPhones PRO Store</p>
                        </div>
                    </div>

                    {/* Depoimento 3 */}
                    <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative">
                        <svg className="w-8 h-8 text-blue-500/20 absolute top-6 right-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        <p className="text-zinc-300 mb-6 leading-relaxed relative z-10">
                            "Irmão, o sistema de reservas salvou a nossa vida nesse fim de semana kkkk. Acabou aquela confusão no whatsapp e erro em lista VIP. Tamo junto!"
                        </p>
                        <div>
                            <p className="font-semibold text-white">Luis R.</p>
                            <p className="text-sm text-zinc-500">UPBAR ESPETO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}