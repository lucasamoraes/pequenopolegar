import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Languages, Clock, Accessibility, Users, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const highlights = [
    { icon: <Languages size={32} />, title: "Inglês e Informática", desc: "Educação bilíngue e tecnologia desde cedo." },
    { icon: <Clock size={32} />, title: "Período Integral", desc: "Opção para pais que precisam de apoio o dia todo." },
    { icon: <Accessibility size={32} />, title: "Acessibilidade Total", desc: "Escola adaptada e inclusiva para todos." },
    { icon: <Users size={32} />, title: "Equipe Especializada", desc: "Profissionais formados e apaixonados por educação." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-school-green overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/schoolkids/1920/1080" 
            alt="Crianças felizes na escola" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-school-darkGreen/80 to-school-green/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-school-gold text-school-darkGreen font-bold px-4 py-1 rounded-full mb-6 text-sm uppercase tracking-wider shadow-lg">
              Matrículas Abertas 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg leading-tight">
              Há 29 anos, somos mais que uma escola, somos uma família!
            </h1>
            <p className="text-lg md:text-2xl mb-10 text-green-50 font-light">
              Berçário, Maternal, Pré-escola e Fundamental 1 com muito amor, tradição e acessibilidade para todos.
            </p>
            <Link 
              to="/a-escola"
              className="inline-flex items-center gap-2 bg-white text-school-green text-lg font-bold px-8 py-4 rounded-full shadow-xl hover:bg-school-gold hover:text-school-darkGreen hover:scale-105 transition-all duration-300"
            >
              Conheça Nossa Proposta <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Decorative Wave at Bottom */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-school-darkGreen mb-4">Por que escolher o Pequeno Polegar?</h2>
            <div className="w-24 h-2 bg-school-gold mx-auto rounded-full"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-school-light p-8 rounded-2xl border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-school-green">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full bg-school-gold rounded-3xl -z-0"></div>
                <img 
                  src="https://picsum.photos/seed/reading/600/400" 
                  alt="Professora lendo para alunos" 
                  className="rounded-3xl shadow-lg relative z-10 w-full" 
                />
             </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-school-darkGreen mb-6">Educação com afeto e qualidade</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Acreditamos que a escola deve ser uma extensão do lar. Por isso, criamos um ambiente onde cada criança é única e recebe atenção especial para desenvolver seus potenciais.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Nossa metodologia une a tradição de quase 30 anos com práticas modernas de ensino, garantindo uma formação completa.
            </p>
            <Link to="/matricula" className="text-school-green font-bold text-lg hover:underline underline-offset-4 decoration-2 decoration-school-gold">
              Saiba como matricular seu filho &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;