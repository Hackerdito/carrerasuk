/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const SECTIONS = [
  {
    id: 'art',
    name: 'Arquitectura, Arte y Comunicación',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
    careers: ['Comunicación', 'Diseño Gráfico Digital', 'Producción Cinematográfica', 'Arquitectura']
  },
  {
    id: 'social',
    name: 'Ciencias Sociales y Humanidades',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
    careers: ['Coaching', 'Criminología', 'Derecho', 'Pedagogía', 'Psicología']
  },
  {
    id: 'tech',
    name: 'Ingenierías y Tecnología',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    careers: ['Ingeniería en Sistemas', 'Ingeniería en Inteligencia Artificial', 'Ingeniería Industrial']
  },
  {
    id: 'business',
    name: 'Negocios, Economía y Finanzas',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    careers: ['Administración de Empresas', 'Contabilidad', 'Economía', 'Finanzas', 'Marketing Digital']
  }
];

export default function App() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const activeSection = SECTIONS.find(s => s.id === activeId) || SECTIONS[0];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans selection:bg-orange-500/30">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-16">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            ¡Escoge tu carrera e inicia este mes!
          </h1>
        </motion.header>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 md:mb-12">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveId(section.id)}
              className={`px-2 py-3 sm:px-4 sm:py-6 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-semibold transition-all duration-300 relative border flex items-center justify-center text-center min-h-[60px] sm:min-h-[100px] lg:min-h-0 ${
                activeId === section.id 
                  ? 'text-white border-orange-500 shadow-lg shadow-orange-500/20' 
                  : 'text-slate-400 border-white/10 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {activeId === section.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-orange-600 rounded-xl sm:rounded-2xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 px-1 line-clamp-2 sm:line-clamp-none leading-tight">
                {section.name}
              </span>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 md:min-h-[550px]">
            {/* Left: Image with Title Overlay */}
            <div className="relative overflow-hidden h-40 md:h-auto group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSection.id}
                  src={activeSection.image}
                  alt={activeSection.name}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {/* Gradient and Title Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-4 md:p-8">
                <motion.div
                  key={activeSection.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="inline-block px-2 py-0.5 bg-orange-600 text-[8px] md:text-[10px] font-bold uppercase tracking-widest rounded-md mb-1 md:mb-3">
                    Área de Estudio
                  </span>
                  <h2 className="text-xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                    {activeSection.id === 'business' ? (
                      <>Negocios,<br />Economía y Finanzas</>
                    ) : activeSection.name}
                  </h2>
                </motion.div>
              </div>
            </div>

            {/* Right: Careers List */}
            <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-4"
                >
                  {activeSection.careers.map((career, index) => (
                    <motion.button
                      key={career}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full group flex items-center justify-between p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 text-slate-800 hover:border-orange-500 hover:bg-orange-50/50 transition-all duration-300 text-left"
                    >
                      <span className="text-sm sm:text-lg font-medium group-hover:text-orange-600 transition-colors">
                        {career}
                      </span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </motion.button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-slate-500 text-sm"
        >
        </motion.div>
      </div>
    </div>
  );
}
