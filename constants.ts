import { EducationLevelData } from './types';

export const SCHOOL_INFO = {
  name: 'Centro Educacional O Pequeno Polegar',
  phoneDisplay: '(32) 3332-7805',
  whatsappDisplay: '(32) 98823-9439',
  whatsappClean: '5532988239439',
  address: 'R. Mendes Pímentel, 20 - São José, Barbacena - MG, 36205-024',
  instagram: 'https://www.instagram.com/opequeno_polegar',
};

export const EDUCATION_LEVELS: EducationLevelData[] = [
  {
    id: 'bercario',
    title: 'Berçário',
    slug: '/educacao/bercario',
    ageRange: '4 meses a 2 anos',
    description: 'Um ambiente seguro, acolhedor e estimulante, preparado especialmente para os primeiros passos do seu bebê. Nossa equipe especializada oferece todo o cuidado e carinho que seu filho merece.',
    features: [
      'Estímulo Sensorial e Motor',
      'Alimentação Saudável e Acompanhada',
      'Solário e Área de Lazer Segura',
      'Monitoramento Constante',
      'Higiene Rigorosa'
    ],
    image: 'https://picsum.photos/seed/baby/800/600'
  },
  {
    id: 'maternal',
    title: 'Maternal',
    slug: '/educacao/maternal',
    ageRange: '2 a 4 anos',
    description: 'No Maternal (1, 2 e 3), as crianças começam a descobrir o mundo através de atividades lúdicas, jogos e muita interação social, desenvolvendo autonomia e coordenação.',
    features: [
      'Atividades Lúdicas e Pedagógicas',
      'Iniciação Musical',
      'Artes e Criatividade',
      'Socialização e Autonomia',
      'Aulas de Psicomotricidade'
    ],
    image: 'https://picsum.photos/seed/toddler/800/600'
  },
  {
    id: 'pre-escola',
    title: 'Pré-escola',
    slug: '/educacao/pre-escola',
    ageRange: '4 a 5 anos',
    description: 'O 1º e 2º período preparam a criança para a alfabetização de forma natural e divertida. Focamos no desenvolvimento cognitivo, emocional e social.',
    features: [
      'Preparação para Alfabetização',
      'Inglês Lúdico',
      'Projetos Literários',
      'Educação Socioemocional',
      'Informática Educativa'
    ],
    image: 'https://picsum.photos/seed/preschool/800/600'
  },
  {
    id: 'fundamental',
    title: 'Fundamental 1',
    slug: '/educacao/fundamental',
    ageRange: '6 a 10 anos',
    description: 'Do 1º ao 5º ano, consolidamos o aprendizado com um ensino forte e valores humanos. Formamos cidadãos críticos, criativos e preparados para os próximos desafios.',
    features: [
      'Material Didático Atualizado',
      'Acompanhamento Pedagógico Individualizado',
      'Robótica e Informática',
      'Educação Física e Esportes',
      'Projetos Interdisciplinares'
    ],
    image: 'https://picsum.photos/seed/kids/800/600'
  }
];