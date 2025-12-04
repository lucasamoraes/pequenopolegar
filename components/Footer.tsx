import React from 'react';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-school-darkGreen text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-school-gold font-display">O Pequeno Polegar</h3>
            <p className="text-green-100">
              Há 29 anos educando com amor, formando cidadãos e construindo o futuro de nossas crianças.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href={SCHOOL_INFO.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-school-gold hover:text-school-darkGreen transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-school-gold font-display">Contato</h3>
            <div className="space-y-3 text-green-50">
              <div className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-1" size={18} />
                <p>{SCHOOL_INFO.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <div className="flex flex-col">
                  <span>{SCHOOL_INFO.phoneDisplay}</span>
                  <span>{SCHOOL_INFO.whatsappDisplay}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-school-gold font-display">Links Rápidos</h3>
            <ul className="space-y-2 text-green-100">
              <li><Link to="/a-escola" className="hover:text-school-gold transition-colors">A Escola</Link></li>
              <li><Link to="/matricula" className="hover:text-school-gold transition-colors">Matrícula 2026</Link></li>
              <li><Link to="/educacao/bercario" className="hover:text-school-gold transition-colors">Berçário</Link></li>
              <li><Link to="/educacao/fundamental" className="hover:text-school-gold transition-colors">Ensino Fundamental</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 text-center text-green-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Centro Educacional O Pequeno Polegar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;