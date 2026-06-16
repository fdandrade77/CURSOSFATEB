import { Course, Testimonial } from "./types";

export const COURSES: Course[] = [
  {
    id: "terapeuta-mulheres-mentora",
    title: "Terapeuta & Mentora de Mulheres Cristãs",
    iconName: "Sparkles",
    logoEmoji: "🌸",
    description: "Formação completa de alto nível 100% online com aulas ao vivo, materiais atualizados e extensão universitária/pós-graduação para mulheres que buscam atuar com cura emocional.",
    avgSalary: "R$ 2.000 a R$ 8.000/mês",
    badgeText: "DE 6X DE R$ 150,00 POR 6X DE R$ 100,00",
    isMecRecognized: true,
    imageUrl: "/terapeutamulheres.jpeg",
    redirectUrl: "https://pay.hotmart.com/placeholder-mulheres", // Substituir pelos links reais
    extraTags: ["Matrícula GRÁTIS!", "100% Online", "Aulas Gravadas + Mentoria"]
  },
  {
    id: "terapeuta-dimensoes-alma",
    title: "Terapeuta nas Dimensões da Alma e da Mente",
    iconName: "Brain",
    logoEmoji: "🧠",
    description: "Formação profunda sobre as dimensões emocional, mental e espiritual do ser humano. Ensina como mapear traumas e guiar o paciente rumo ao autoconhecimento.",
    avgSalary: "R$ 2.500 a R$ 9.000/mês",
    badgeText: "6X DE R$ 150,00 POR R$ 69,90",
    isMecRecognized: true,
    imageUrl: "/terapeutadimalma.jpeg",
    redirectUrl: "https://pay.hotmart.com/placeholder-alma",
    extraTags: ["Formação EAD", "Aulas ao Vivo", "Neuropsicologia"]
  },
  {
    id: "terapeuta-completo",
    title: "Terapeuta Completo",
    iconName: "Leaf",
    logoEmoji: "🌿",
    description: "Formação holística essencial de capacitação técnica em ferramentas modernas de desenvolvimento humano, escuta analítica e equilíbrio emocional integral.",
    avgSalary: "R$ 3.000 a R$ 10.000/mês",
    badgeText: "SUPER BÔNUS: 100% GARANTIDO",
    isMecRecognized: true,
    imageUrl: "/terapeutacompleto.jpeg",
    redirectUrl: "https://pay.hotmart.com/placeholder-completo",
    extraTags: ["Selo de Qualidade", "Mecãnica Prática", "Duração 6 meses"]
  },
  {
    id: "terapeuta-cristao",
    title: "Terapeuta Cristão",
    iconName: "HeartHandshake",
    logoEmoji: "✝️",
    description: "Formação robusta baseada em aconselhamento cristão terapêutico e princípios bíblicos milenares aplicados ao alívio do sofrimento psicológico.",
    avgSalary: "R$ 2.500 a R$ 8.000/mês",
    badgeText: "FORMAÇÃO COMPLETA • SUPER BÔNUS",
    isMecRecognized: true,
    imageUrl: "/terapeutacristao.jpeg",
    redirectUrl: "https://pay.hotmart.com/placeholder-cristao",
    extraTags: ["Princípios Bíblicos", "Teoterapia", "Apoio Pastoral"]
  },
  {
    id: "psicanalise-freudiana",
    title: "Psicanálise Freudiana",
    iconName: "Scroll",
    logoEmoji: "📜",
    description: "Formação clássica baseada em profundidade nas teorias originais de Sigmund Freud, abordando o inconsciente, neurose, psicose e prática do divã.",
    avgSalary: "R$ 3.000 a R$ 12.000/mês",
    badgeText: "DE R$ 299,90 POR APENAS 12X",
    isMecRecognized: true,
    imageUrl: "/psicanalisefreud.jpeg",
    redirectUrl: "https://pay.hotmart.com/placeholder-freud",
    extraTags: ["Teoria Clássica", "Obras Completas", "Estudo Prático"]
  },
  {
    id: "neuropsicanalise-clinica",
    title: "Neuropsicanálise Clínica",
    iconName: "Dna",
    logoEmoji: "🧬",
    description: "A mais moderna integração interdisciplinar entre as neurociências do cérebro e a clínica clássica de psicanálise para entender dinâmicas mentais.",
    avgSalary: "R$ 4.000 a R$ 15.000/mês",
    badgeText: "12X DE R$ 299,90 POR R$ 169,00",
    isMecRecognized: true,
    imageUrl: "/neuropsi.jpeg",
    redirectUrl: "https://pay.hotmart.com/placeholder-neuropsicanalise",
    extraTags: ["Neurobiologia", "Conexão Mente-Cérebro", "Especialidade"]
  },
  {
    id: "neuroteologia",
    title: "Formação em Neuroteologia",
    iconName: "Scale",
    logoEmoji: "⛪",
    description: "O inovador estudo sobre a anatomia cerebral e neurofisiologia nas manifestações espirituais da fé, adoração e práticas meditativas sagradas.",
    avgSalary: "R$ 3.000 a R$ 10.000/mês",
    badgeText: "DE 5X DE R$ 150,00 POR 6X DE R$ 100,00",
    isMecRecognized: true,
    imageUrl: "/neuroteologia.jpeg",
    redirectUrl: "https://pay.hotmart.com/placeholder-neuroteologia",
    extraTags: ["Neurobiologia da Fé", "Estudo Científico", "Espiritualidade"]
  },
  {
    id: "psicanalise-abordagem-crista",
    title: "Psicanálise na Abordagem Cristã",
    iconName: "BookOpen",
    logoEmoji: "📖",
    description: "Alinhamento das metodologias clássicas de investigação do inconsciente com a fundamentação doutrinária cristã e acolhimento pastoral clínico.",
    avgSalary: "R$ 3.000 a R$ 10.000/mês",
    badgeText: "DE R$ 249,90 POR APENAS 12X",
    isMecRecognized: true,
    imageUrl: "/psicrista.jpeg",
    redirectUrl: "https://pay.hotmart.com/placeholder-psic-crista",
    extraTags: ["Abordagem Integral", "Clinica de Acolhimento", "Teologia"]
  },
  {
    id: "terapeuta-criancas-adolescentes",
    title: "Terapeuta Especialista em Crianças e Adolescentes",
    iconName: "Smile",
    logoEmoji: "👶",
    description: "Formação completa com ênfase máxima em saúde mental infantojuvenil, ludoterapia, diagnóstico de transtornos do desenvolvimento e apoio escolar.",
    avgSalary: "R$ 3.000 a R$ 10.000/mês",
    badgeText: "PROMOÇÃO: 6X DE R$ 100,00",
    isMecRecognized: true,
    imageUrl: "/terapeutacrianca.jpeg",
    redirectUrl: "https://pay.hotmart.com/placeholder-criancas",
    extraTags: ["Saúde Infantojuvenil", "Ludoterapia", "Extensão Universitária"]
  },
  {
    id: "terapeuta-educacao-parental",
    title: "Terapeuta Especialista em Educação e Orientação Parental",
    iconName: "Users",
    logoEmoji: "👨‍👩‍👧‍👦",
    description: "Capacitação focada em orientar e mediar conflitos na criação de filhos. Práticas de disciplina positiva, comunicação não-violenta e coaching parental.",
    avgSalary: "R$ 3.000 a R$ 10.000/mês",
    badgeText: "MEC RECONHECIDO • EXTENSÃO",
    isMecRecognized: true,
    imageUrl: "/terapeutaparental.jpeg",
    redirectUrl: "https://pay.hotmart.com/placeholder-parental",
    extraTags: ["Orientação Parental", "Disciplina Positiva", "Aulas Ao Vivo"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    text: "“Essa formação mudou minha forma de entender a mente humana e de integrar de forma equilibrada a minha fé.”",
    author: "Ana Paula S. - Terapeuta Certificada",
    emoji: "👩‍🎓"
  },
  {
    id: "t2",
    text: "“Hoje atuo ativamente como terapeuta profissional credenciado, mudando vidas e confortando dezenas de famílias todos os dias.”",
    author: "Carlos M. - Psicanalista Clínico",
    emoji: "👨‍⚕️"
  },
  {
    id: "t3",
    text: "“Conteúdo incrivelmente profundo, aulas ricas de fácil absorção e aplicação prática imediata recomendada.”",
    author: "Juliana R. - Mentora e Especialista",
    emoji: "👩‍🏫"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Certificado de Conclusão",
    description: "Emitido digitalmente com validade nacional, perfeito para atestar sua capacitação profissional técnica de prestígio."
  },
  {
    title: "Formação Profissional",
    description: "Metodologia dinâmica com forte fundamentação prática para capacitar você a clinicar com segurança desde o primeiro dia."
  },
  {
    title: "Conteúdo Completo e Atualizado",
    description: "Materiais focados nas principais abordagens científicas contemporâneas, atualizados com as exigências do mercado atual."
  }
];
