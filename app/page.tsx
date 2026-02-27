"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Solutions from "./components/Solutions";
import Cases from "./components/Cases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  // Barra de progresso de leitura no topo (detalhe premium)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Barra de progresso sutil */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-60"
        style={{ scaleX }}
      />

      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <Hero />

        {/* Adicionando um espaçamento visual entre seções para as animações respirarem */}
        <div className="flex flex-col gap-2">
          <Benefits />
          <Solutions />
          <Cases />
          <Contact />
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}