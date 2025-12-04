import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl font-bold text-school-darkGreen mb-6">Nossa História</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Há 29 anos construindo alicerces sólidos para o futuro, com base na família, no amor e no conhecimento.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-school-green p-12 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 font-display">Mais que uma escola</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Fundada com o sonho de oferecer uma educação diferenciada em Barbacena, a "O Pequeno Polegar" cresceu sem perder sua essência: o acolhimento familiar.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Nossa missão vai além do ensino acadêmico. Buscamos formar seres humanos íntegros, solidários e felizes, respeitando a individualidade de cada aluno.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2">
                <Award className="text-school-gold" />
                <span className="font-bold">Excelência</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-school-gold" />
                <span className="font-bold">Acolhimento</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-school-gold" />
                <span className="font-bold">Segurança</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-96 md:h-auto">
            <img 
              src="https://picsum.photos/seed/schoolbuilding/800/800" 
              alt="Fachada da escola" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-school-darkGreen mb-10 text-center">Nossa Estrutura</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Parque Infantil", img: "playground" },
            { title: "Salas de Aula", img: "classroom" },
            { title: "Refeitório", img: "cafeteria" },
            { title: "Biblioteca", img: "library" },
            { title: "Laboratório de Informática", img: "computerlab" },
            { title: "Quadra Poliesportiva", img: "sports" },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
            >
              <img 
                src={`https://picsum.photos/seed/${item.img}/600/450`} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white font-bold text-xl p-6">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;