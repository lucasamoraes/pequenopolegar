import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { EducationLevelData } from '../types';
import { SCHOOL_INFO } from '../constants';

interface EducationPageProps {
  data: EducationLevelData;
}

const EducationPage: React.FC<EducationPageProps> = ({ data }) => {
  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappClean}?text=Olá, gostaria de saber mais sobre o ${data.title}`;

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-[400px] bg-school-green">
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="text-center text-white px-4">
             <motion.h1 
               initial={{ y: -20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="text-5xl font-bold mb-4 drop-shadow-lg"
             >
               {data.title}
             </motion.h1>
             <p className="text-xl bg-school-gold/90 text-school-darkGreen inline-block px-6 py-2 rounded-full font-bold shadow-md">
               {data.ageRange}
             </p>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Main Content */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-school-darkGreen mb-6">Sobre o Curso</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {data.description}
              </p>
              
              <h3 className="text-2xl font-bold text-school-green mb-6">Diferenciais e Atividades</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 bg-green-50 p-4 rounded-xl border border-green-100"
                  >
                    <CheckCircle className="text-school-green flex-shrink-0" size={24} />
                    <span className="font-semibold text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="md:w-1/3 space-y-6">
              <div className="bg-yellow-50 p-6 rounded-2xl border border-school-gold">
                <h3 className="text-xl font-bold text-school-darkGreen mb-4">Interessado?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Agende uma visita e venha conhecer nossa estrutura e proposta pedagógica de perto.
                </p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block text-center bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-colors shadow-lg"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <div className="bg-school-light p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-school-darkGreen mb-2">Horários</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>Manhã:</span>
                    <span className="font-bold">07:00 - 11:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tarde:</span>
                    <span className="font-bold">13:00 - 17:30</span>
                  </li>
                  <li className="flex justify-between border-t border-green-200 pt-2 mt-2">
                    <span>Integral:</span>
                    <span className="font-bold">07:00 - 18:00</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;