import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone } from 'lucide-react';
import { SCHOOL_INFO, EDUCATION_LEVELS } from '../constants';

const Matricula: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    childAge: '',
    interest: EDUCATION_LEVELS[0].title
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Novo Interesse de Matrícula*\n\n` +
      `*Responsável:* ${formData.parentName}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Criança:* ${formData.childName} (${formData.childAge} anos)\n` +
      `*Interesse:* ${formData.interest}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${SCHOOL_INFO.whatsappClean}?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-school-darkGreen mb-4">Matrículas Abertas 2026</h1>
          <p className="text-xl text-gray-600">Garanta a vaga do seu filho na família O Pequeno Polegar.</p>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-school-green"
        >
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Nome do Responsável</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-green focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome completo"
                    value={formData.parentName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-green focus:border-transparent outline-none transition-all"
                    placeholder="(DD) 99999-9999"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">Nome da Criança</label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-green focus:border-transparent outline-none transition-all"
                    placeholder="Nome do aluno(a)"
                    value={formData.childName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">Idade da Criança</label>
                  <input
                    type="number"
                    id="childAge"
                    name="childAge"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-green focus:border-transparent outline-none transition-all"
                    placeholder="Idade em anos"
                    value={formData.childAge}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Turma de Interesse</label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-school-green focus:border-transparent outline-none transition-all bg-white"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  {EDUCATION_LEVELS.map(level => (
                    <option key={level.id} value={level.title}>{level.title}</option>
                  ))}
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-school-green text-white font-bold text-lg py-4 rounded-xl hover:bg-school-darkGreen shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  Enviar Interesse via WhatsApp
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Ao clicar, você será redirecionado para o WhatsApp da secretaria escolar.
                </p>
              </div>

            </form>
          </div>
          <div className="bg-gray-100 p-6 text-center border-t border-gray-200">
             <p className="flex items-center justify-center gap-2 text-gray-700">
               <Phone size={18} className="text-school-green" /> 
               Prefere ligar? <strong>{SCHOOL_INFO.phoneDisplay}</strong>
             </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Matricula;