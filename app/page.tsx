"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Solutions from "./components/Solutions";
import Cases from "./components/Cases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Benefits />
        <Solutions />
        <Cases />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}