import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Brain,
  Leaf,
  HeartHandshake,
  Scroll,
  Dna,
  Scale,
  BookOpen,
  Smile,
  Users,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Star,
  Award,
  BookOpenCheck,
  X,
  AlertCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Sparkle,
  Search,
  SlidersHorizontal,
  TrendingUp
} from "lucide-react";
import { COURSES, TESTIMONIALS, CERTIFICATIONS } from "./data";
import { Course } from "./types";

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [spotsLeft, setSpotsLeft] = useState(37);
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);
  const [timerCount, setTimerCount] = useState(600); // 10 minutes countdown for the lead modal

  // State for live purchase popups simulating live social proof
  const [liveNotification, setLiveNotification] = useState<{
    name: string;
    city: string;
    course: string;
    time: string;
  } | null>(null);

  // Seat ticking (Scarcity engine)
  useEffect(() => {
    const seatInterval = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev > 14) {
          // Programmatically simulate spots filling up slowly but keep it realistic
          const drop = Math.random() > 0.7 ? 1 : 0;
          return prev - drop;
        }
        return prev;
      });
    }, 45000); // Check every 45 secs

    return () => clearInterval(seatInterval);
  }, []);

  // Countdown timer for lead modal
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (selectedCourse && timerCount > 0) {
      timer = setInterval(() => {
        setTimerCount((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [selectedCourse, timerCount]);

  // Format timer helper
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Social Proof Engine: periodic toast showing successful registrations around Brazil
  useEffect(() => {
    const notifications = [
      { name: "Mariana S.", city: "Curitiba - PR", course: "Psicanálise na Abordagem Cristã", time: "hoje às 10:14" },
      { name: "João Pedro F.", city: "Rio de Janeiro - RJ", course: "Terapeuta Completo", time: "há 3 min" },
      { name: "Débora G.", city: "Belo Horizonte - MG", course: "Terapeuta de Mulheres e Mentora Cristã", time: "há 1 min" },
      { name: "Marcos A.", city: "Salvador - BA", course: "Neuropsicanálise Clínica", time: "há 5 min" },
      { name: "Pr. Roberto F.", city: "São Paulo - SP", course: "Terapeuta Cristão", time: "hoje às 09:48" },
      { name: "Juliana K.", city: "Porto Alegre - RS", course: "Especialista em Crianças e Adolescentes", time: "há 8 min" },
      { name: "Priscila O.", city: "Goiânia - GO", course: "Educação e Orientação Parental", time: "há 10 min" },
      { name: "Carlos Henrique M.", city: "Campinas - SP", course: "Terapeuta nas Dimensões da Alma", time: "há 12 min" }
    ];

    const displayNotification = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      setLiveNotification(notifications[randomIndex]);

      // Dismiss after 6.5 seconds
      setTimeout(() => {
        setLiveNotification(null);
      }, 6500);
    };

    // Trigger first notification after 4 seconds
    const initialTimeout = setTimeout(displayNotification, 4000);

    // Dynamic interval of 20 seconds
    const interval = setInterval(displayNotification, 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  // Dynamic Lucide design switcher according to course configuration
  const renderCourseIcon = (name: string, styles: string) => {
    switch (name) {
      case "Sparkles":
        return <Sparkles className={styles} />;
      case "Brain":
        return <Brain className={styles} />;
      case "Leaf":
        return <Leaf className={styles} />;
      case "HeartHandshake":
        return <HeartHandshake className={styles} />;
      case "Scroll":
        return <Scroll className={styles} />;
      case "Dna":
        return <Dna className={styles} />;
      case "Scale":
        return <Scale className={styles} />;
      case "BookOpen":
        return <BookOpen className={styles} />;
      case "Smile":
        return <Smile className={styles} />;
      case "Users":
        return <Users className={styles} />;
      default:
        return <GraduationCap className={styles} />;
    }
  };

  // Lead Submission
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) return;

    setModalSuccess(true);

    // Dynamically build WhatsApp message structure or redirect
    setTimeout(() => {
      const formattedPhone = leadPhone.replace(/\D/g, "");
      const msg = `Olá, meu nome é *${leadName}*. Acabei de me cadastrar para garantir minha matrícula promocional no curso *${selectedCourse?.title}*. Por favor, me passe o link especial!`;
      const encodedMsg = encodeURIComponent(msg);
      
      // Secondary fallback to standard course's direct Hotmart payment if user wants it
      // Let's open the direct redirect URL in a new window or trigger simulated success
      window.open(`https://wa.me/5512991847661?text=${encodedMsg}`, "_blank");
      
      // Reset Modal on redirect
      setModalSuccess(false);
      setSelectedCourse(null);
      setLeadName("");
      setLeadPhone("");
      setLeadEmail("");
    }, 2200);
  };

  // Quick WhatsApp Direct Button config
  const handleQuickRegister = () => {
    window.open("https://api.whatsapp.com/send/?phone=5512991847661&text=Ol%C3%A1%21+Gostaria+de+falar+com+a+Diretora+Arleana+sobre+as+matr%C3%ADculas+abertas+para+as+forma%C3%A7%C3%B5es+em+Terapia+e+Psican%C3%A1lise+da+FATEB.&type=phone_number&app_absent=0", "_blank");
  };

  // Card click handler
  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setTimerCount(600); // Reset timer to 10 mins
  };

  // Search/Filters logic
  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeFilter === "Todos") return matchesSearch;
    if (activeFilter === "Psicanálise") return matchesSearch && course.title.toLowerCase().includes("psicaná");
    if (activeFilter === "Cristã") return matchesSearch && (course.title.toLowerCase().includes("cristã") || course.title.toLowerCase().includes("cristão") || course.title.toLowerCase().includes("teologia"));
    if (activeFilter === "Infantil/Parental") return matchesSearch && (course.title.toLowerCase().includes("criança") || course.title.toLowerCase().includes("parental"));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-brand-gold selection:text-brand-blue-dark relative">
      
      {/* SOCIAL PROOF FLOAT TOAST */}
      <AnimatePresence>
        {liveNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
            className="fixed bottom-4 left-4 z-50 bg-white shadow-2xl rounded-2xl p-4 border-l-4 border-brand-gold max-w-sm flex items-start gap-3 backdrop-blur-md"
            id="live-toast-notification"
          >
            <div className="p-2 bg-brand-cream rounded-full text-brand-gold shrink-0">
              <Sparkle className="w-5 h-5 animate-spin" style={{ animationDuration: '4s' }} />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-brand-blue-dark">Nova Matrícula efetuada! 🎉</p>
              <p className="text-slate-600 mt-0.5">
                <strong className="text-slate-800">{liveNotification.name}</strong> ({liveNotification.city}) ingressou na turma de <span className="text-brand-blue-light font-medium">{liveNotification.course}</span>.
              </p>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {liveNotification.time}
              </p>
            </div>
            <button 
              onClick={() => setLiveNotification(null)}
              className="text-slate-400 hover:text-slate-600 focus:outline-none ml-2"
              aria-label="Minimizar Notificação"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WHATSAPP FLOAT FLOATER COMPONENT */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2" id="whatsapp-widget">
        <div className="bg-brand-blue-dark text-white text-xs px-3 py-1.5 rounded-full shadow-lg font-medium border border-brand-blue-light whitespace-nowrap animate-bounce">
          Dúvidas? Fale com Diretora Arleana 💬
        </div>
        <button
          onClick={handleQuickRegister}
          className="w-16 h-16 bg-[#25d366] hover:bg-[#128c7e] rounded-full flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 focus:outline-none relative group animate-pulse-glow"
          aria-label="Chamar no WhatsApp"
        >
          <MessageSquare className="w-8 h-8 fill-white text-[#25d366]" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-bold text-white">
            1
          </span>
        </button>
      </div>

      {/* 1. HERO SECTION WITH FATEB MATRIX AND TEXT WATERMARK */}
      <section 
        className="relative bg-brand-blue-dark text-white pt-20 pb-24 overflow-hidden" 
        id="hero-section"
      >
        {/* Glowing circle and blur accents reflecting original image */}
        <div className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(255,255,255,0.01)_1.5px,transparent_1.5px)] bg-[size:30px_30px] opacity-40" />

        {/* Huge italic background brand watermark from the original layout 'Matrículas Abertas' */}
        <div className="absolute inset-x-0 top-12 flex justify-center select-none pointer-events-none opacity-5 overflow-hidden z-0">
          <span className="font-serif italic text-8xl md:text-9xl tracking-[0.2em] font-extrabold text-white text-center leading-none">
            MATRÍCULAS ABERTAS
          </span>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          
          {/* Logo Brand Frame */}
          <div className="mb-6 inline-flex flex-col items-center">
            <span className="font-display text-4xl md:text-5xl font-extrabold tracking-widest text-brand-gold flex items-center gap-2">
              <Award className="w-10 h-10 text-brand-gold animate-pulse" /> FATEB
            </span>
            <span className="text-sm uppercase tracking-[0.35em] text-cyan-200/90 font-medium mt-1">
              Instituto de Formação Acadêmica
            </span>
          </div>

          <p className="text-xl md:text-2xl font-serif text-slate-200 max-w-2xl mx-auto italic mb-8">
            Formação profissional acadêmica credenciada nas áreas de:
          </p>

          {/* Value Badges List from Original */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto mb-12">
            {[
              { label: "Terapia", color: "from-pink-500/20 to-pink-500/10 border-pink-500/40 text-pink-200" },
              { label: "Psicanálise", color: "from-purple-500/20 to-purple-500/10 border-purple-500/40 text-purple-200" },
              { label: "Desenvolvimento Humano", color: "from-emerald-500/20 to-emerald-500/10 border-emerald-500/40 text-emerald-200" },
              { label: "Aconselhamento Cristão", color: "from-amber-500/20 to-amber-500/10 border-amber-500/40 text-amber-200" }
            ].map((field, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-2 px-4 py-2 rounded-full border bg-gradient-to-r ${field.color} shadow-sm backdrop-blur-sm`}
              >
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-semibold text-sm md:text-base">{field.label}</span>
              </div>
            ))}
          </div>

          {/* Master CTA Button Call to action */}
          <div className="inline-block relative">
            <button
              onClick={() => {
                const element = document.getElementById("available-courses");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-brand-gold text-[#09172f] text-base md:text-lg font-display font-extrabold px-8 py-4.5 rounded-full shadow-2xl hover:bg-brand-gold-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none flex items-center gap-3 uppercase tracking-wider cursor-pointer z-10 animate-pulse-glow"
            >
              <GraduationCap className="w-6 h-6 shrink-0 text-brand-blue-dark" />
              <span>Iniciar minha formação agora</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Urgency Counter indicator */}
            <p className="text-xs text-slate-300 mt-4 flex items-center justify-center gap-1.5 font-medium">
              <span className="inline-block w-2.5 h-2.5 bg-red-500 rounded-full animate-ping mr-1"></span>
              Aproveite valores promocionais da última turma do semestre. Restam <strong className="text-white bg-red-600 px-1.5 py-0.5 rounded">{spotsLeft} vagas</strong>.
            </p>
          </div>

        </div>
      </section>

      {/* 2. TRUST SECTIONS (Se você está pensando em mudar de vida...) */}
      <section className="bg-white py-12 border-b border-light" id="trust-factors">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-2xl transition">
            <div className="p-3 bg-brand-cream text-brand-gold rounded-xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-brand-blue-dark">Metodologia Aprovada</h3>
              <p className="text-sm text-slate-600 mt-1">Nossos cursos são validados e estruturados para você começar a atuar imediatamente.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-2xl transition">
            <div className="p-3 bg-brand-cream text-brand-gold rounded-xl shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-brand-blue-dark">Alta Demanda</h3>
              <p className="text-sm text-slate-600 mt-1">O mercado de saúde mental e psicanálise cresce a cada ano com excelentes retornos financeiros.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-2xl transition">
            <div className="p-3 bg-brand-cream text-brand-gold rounded-xl shrink-0">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-brand-blue-dark">Suporte Integral</h3>
              <p className="text-sm text-slate-600 mt-1">Conversas e mentorias diretas com suporte de quem já trilhou o caminho de sucesso profissional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSES CORE DIRECTORY */}
      <section className="py-20 bg-slate-50/80" id="available-courses">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 bg-brand-cream border border-brand-gold/30 text-brand-gold text-xs font-semibold tracking-wider uppercase rounded-full mb-3">
              Catálogo de Especializações
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-blue-dark tracking-tight">
              🎓 Cursos Disponíveis
            </h2>
            <p className="text-slate-600 mt-3 md:text-lg">
              Escolha a formação ideal para transformar seu futuro profissional, obter independência financeira e impactar milhares de vidas.
            </p>
          </div>

          {/* Search, filters, and dynamic layout options */}
          <div className="bg-white rounded-3xl p-5 shadow-xl border border-slate-100 max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Qual curso deseja procurar?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-100 focus:bg-white focus:ring-2 focus:ring-brand-gold border-0 focus:outline-none text-sm transition-all"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center">
              {["Todos", "Psicanálise", "Cristã", "Infantil/Parental"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === filter
                      ? "bg-brand-blue-dark text-white shadow-md shadow-brand-blue-dark/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout of Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 scroll-mt-20">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div
                  key={course.id}
                  id={`course-card-${course.id}`}
                  className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-md flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  {/* Image banner with overlay */}
                  <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-50 flex items-center justify-center p-3 border-b border-slate-100">
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Live MEC badge overlay */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      <span className="bg-amber-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded bg-brand-gold tracking-wide rounded-md uppercase border border-amber-400">
                        MEC
                      </span>
                      <span className="bg-[#112344] text-white text-[10px] sm:text-[10px] px-2 py-1 rounded-md font-semibold font-display shadow-sm uppercase">
                        100% EAD
                      </span>
                    </div>
                  </div>

                  {/* Card Content body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    
                    <div>
                      {/* Dynamic Promocional tag/badge */}
                      <div className="mb-2.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 bg-amber-50 border border-amber-200/50 px-2.5 py-1 rounded-lg inline-block">
                          {course.badgeText}
                        </span>
                      </div>
                      {/* Course Title and emoji */}
                      <h3 className="font-display font-extrabold text-base text-slate-800 tracking-tight leading-tight mb-2 group-hover:text-brand-blue-med transition-colors flex items-start gap-1.5 min-h-[48px]">
                        <span className="text-xl inline-block mt-0.5 shrink-0">{course.logoEmoji}</span>
                        <span>{course.title}</span>
                      </h3>

                      {/* Course Short Description */}
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4">
                        {course.description}
                      </p>
                    </div>

                    <div>
                      {/* Dynamic highlights list */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {course.extraTags?.slice(0, 2).map((tag, i) => (
                          <span key={i} className="bg-slate-100 text-[#09172f] text-[9px] font-bold px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Target/Average Salary Box mirroring the image aesthetics */}
                      <div className="bg-[#fdf9f2] border border-amber-200 rounded-2xl p-3 mb-4 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-amber-800 flex items-center justify-center gap-1">
                          💰 Média Salarial Estimada:
                        </p>
                        <p className="text-sm font-black text-amber-700 mt-1">
                          {course.avgSalary}
                        </p>
                      </div>

                      {/* Complete Course CTA button */}
                      <button
                        onClick={() => handleCourseClick(course)}
                        className="w-full bg-[#dfab22] hover:bg-[#c49419] text-brand-blue-dark font-display font-extrabold text-xs py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer uppercase tracking-wider"
                      >
                        {renderCourseIcon(course.iconName, "w-4 h-4 text-brand-blue-dark")}
                        <span>Acessar Curso</span>
                        <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>

                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center bg-white rounded-3xl p-8 border border-dashed border-slate-200">
                <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-600 font-semibold text-lg">Nenhum curso encontrado no momento</p>
                <p className="text-slate-400 text-sm mt-1">Tente remover ou alterar seus termos de pesquisa.</p>
                <button
                  onClick={() => { setSearchTerm(""); setActiveFilter("Todos"); }}
                  className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-700"
                >
                  Limpar Pesquisa
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 4. DEPOIMENTOS DE ALUNOS (Mirroring original dark blue testimonials banner) */}
      <section className="bg-brand-blue-dark text-white py-20 relative overflow-hidden" id="testimonials">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-brand-gold text-xs font-semibold tracking-wider uppercase rounded-full mb-3">
              <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" /> Alunos Formados
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white flex items-center justify-center gap-2">
              ⭐ Depoimentos de Alunos
            </h2>
            <p className="text-slate-300 mt-2 text-sm md:text-base">
              Veja a opinião de quem confiou nas formações da FATEB para alavancar a carreira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-brand-blue-med/55 border border-brand-blue-light rounded-3xl p-8 shadow-xl backdrop-blur-sm flex flex-col justify-between hover:shadow-2xl transition hover:border-brand-gold/45 group"
                id={`testimonial-${testimonial.id}`}
              >
                <div>
                  <div className="text-4xl mb-4 text-brand-gold">{testimonial.emoji}</div>
                  <p className="text-slate-200 text-sm italic font-serif leading-relaxed line-clamp-4">
                    {testimonial.text}
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-brand-blue-light">
                  <h4 className="font-display font-extrabold text-sm text-brand-gold group-hover:text-amber-300 transition-colors">
                    {testimonial.author}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Aluno(a) Graduado(a)</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. VAGAS LIMITADAS - SCARCITY SYSTEM */}
      <section className="py-16 bg-white border-b border-slate-100" id="limited-spots">
        <div className="max-w-3xl mx-auto px-4 text-center">
          
          <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold tracking-wider uppercase rounded-full mb-3">
            Garanta Sua Oportunidade
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-blue-dark tracking-tight">
            ⏳ Vagas Limitadas
          </h2>
          <p className="text-slate-500 mt-2 text-sm max-w-lg mx-auto">
            Garantimos o preço promocional de lote apenas enquanto houver vagas disponíveis no servidor. A próxima turma está quase completa!
          </p>

          {/* Animated custom progress bar */}
          <div className="mt-8 bg-slate-100 h-6.5 rounded-full p-1 overflow-hidden relative border border-slate-200 flex items-center shadow-inner">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${((50 - spotsLeft) / 50) * 100}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#e5b23e] to-[#dfab22] rounded-full shadow-lg relative overflow-hidden"
              style={{ minWidth: "15%" }}
            >
              {/* Stripe animation overlay */}
              <div 
                className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[size:15px_15px] opacity-100 animate-[pulse_1.5s_infinite]" 
              />
            </motion.div>
            <span className="absolute right-4 font-display font-extrabold text-[10px] text-slate-700 tracking-wider">
              {Math.round(((50 - spotsLeft) / 50) * 100)}% PREENCHIDO
            </span>
          </div>

          <p className="mt-4 text-slate-700 font-display text-lg">
            Vagas disponíveis restantes: <strong className="text-red-600 font-black text-2xl animate-pulse">{spotsLeft}</strong> de 50
          </p>

        </div>
      </section>

      {/* 6. CERTIFICAÇÃO RECONHECIDA */}
      <section className="py-20 bg-brand-cream border-y border-brand-gold/10" id="recognized-certification">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold tracking-wider uppercase rounded-full mb-3">
              Validação Nacional
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-[#09172f] tracking-tight">
              📜 Certificação Reconhecida
            </h2>
            <p className="text-slate-600 mt-2 text-sm pb-11">
              Todos os nossos cursos conferem diplomas legais, válidos e estruturados conforme exigências científicas nacionais.
            </p>
          </div>

          {/* Cards block for value props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="bg-white border border-[#dfab22]/20 rounded-3xl p-8 hover:shadow-xl transition-all flex flex-col items-center text-center shadow-sm relative group hover:border-[#dfab22]"
              >
                <div className="w-14 h-14 bg-brand-cream text-[#dfab22] rounded-full flex items-center justify-center mb-6 shadow-sm shrink-0 font-bold text-xl group-hover:scale-110 duration-200">
                  ✓
                </div>
                <h3 className="font-display font-bold text-lg text-brand-blue-dark mb-3">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FOOTER & FINAL INTENSE CONVERSION ACCENT */}
      <footer className="bg-brand-blue-dark text-white pt-24 pb-16 relative overflow-hidden" id="footer-cta">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight mb-4 max-w-3xl mx-auto">
            Transforme sua Vida Profissional
          </h2>
          
          <p className="text-slate-300 md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Não perca esta oportunidade. As vagas da tabela de desconto são extremamente limitadas e a próxima turma começa em breve!
          </p>

          {/* Big pulsing footer CTA button */}
          <div className="inline-block relative mb-12">
            <button
              onClick={() => {
                const element = document.getElementById("available-courses");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-brand-gold hover:bg-brand-gold-hover text-[#09172f] text-base md:text-xl font-display font-extrabold px-12 py-5 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 uppercase tracking-wider animate-pulse-glow cursor-pointer"
            >
              <Sparkles className="w-6 h-6 animate-spin shrink-0 text-brand-blue-dark" style={{ animationDuration: '6s' }} />
              <span>Quero Me Matricular Agora</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="border-t border-white/10 pt-10 mt-4 flex flex-col items-center gap-4">
            
            {/* Phone/WhatsApp credentials frame */}
            <a
              href="https://wa.me/5512991847661?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20forma%C3%A7%C3%B5es%20da%20FATEB!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-brand-blue-med hover:bg-brand-blue-light border border-brand-blue-light/50 rounded-2xl px-6 py-3.5 text-sm font-semibold text-brand-gold transition duration-200"
            >
              <Phone className="w-5 h-5 text-brand-gold shrink-0 animation-pulse mr-1" />
              <span>(12) 99184-7661 — Diretora Arleana | FATEB Educacional</span>
            </a>

            <p className="text-xs text-slate-500 max-w-md mt-4">
              © {new Date().getFullYear()} FATEB — Todos os direitos reservados. 
              <br />
              Atividade Educacional Profissionalizante Credenciada de Extensão Universitária Privada.
            </p>
          </div>

        </div>
      </footer>

      {/* LEAD ACQUISITION AND REGISTRATION INTERACTIVE MODAL */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-xl w-full border border-slate-100 flex flex-col max-h-[90vh]"
              id="course-modal"
            >
              
              {/* Header block with course graphics */}
              <div className="bg-brand-blue-dark text-white p-6 relative">
                <button
                  onClick={() => { setSelectedCourse(null); setModalSuccess(false); }}
                  className="absolute top-4 right-4 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full focus:outline-none transition-colors"
                  aria-label="Modal fechar"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{selectedCourse.logoEmoji}</span>
                  <span className="bg-brand-gold text-brand-blue-dark font-extrabold text-[9px] px-2 py-0.5 rounded uppercase font-display tracking-widest">
                    vaga pré-reservada
                  </span>
                </div>
                <h3 className="font-display font-black text-xl md:text-2xl tracking-tight leading-tight pr-6">
                  {selectedCourse.title}
                </h3>
                <p className="text-xs text-cyan-200 mt-1">
                  Matrículas Abertas de Extensão Profissionalizante FATEB
                </p>
              </div>

              {/* Success Screen inside modal */}
              {modalSuccess ? (
                <div className="p-8 text-center flex-1 overflow-y-auto flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-[#25d366]/10 text-[#25d366] rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-display font-extrabold text-2xl text-slate-900 mb-2">
                    Inscrição Iniciada com Sucesso!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Parabéns por dar este próximo passo! Você está sendo redirecionado para o WhatsApp oficial da diretora <strong className="text-slate-800">Arleana</strong> para liberar o seu cupom especial na Hotmart.
                  </p>
                  
                  {/* Realtime progress simulation */}
                  <div className="flex items-center gap-2 text-brand-gold text-xs font-bold bg-brand-cream border border-brand-gold/30 px-4 py-2 rounded-xl">
                    <Sparkles className="w-4 h-4 animate-spin text-brand-gold" />
                    <span>Carregando Chat Seguro da Diretora FATEB...</span>
                  </div>
                </div>
              ) : (
                <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                  
                  {/* Urgent 10 min bonus countdown header */}
                  <div className="bg-amber-50 rounded-2xl border border-amber-200 p-4 mb-6 flex items-center justify-between gap-4">
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-5 h-5 text-amber-700 mt-0.5 shrink-0 animate-pulse" />
                      <div>
                        <p className="text-xs font-black text-amber-900 uppercase tracking-wide">
                          Bônus de Lançamento Ativo:
                        </p>
                        <p className="text-slate-600 text-[11px] mt-0.5 leading-tight">
                          Preencha os dados em até 10 minutos para obter matrícula com 50% de desconto.
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#dfab22] text-[#09172f] font-mono font-bold text-sm px-3 py-1.5 rounded-lg border border-yellow-500 shadow-sm shrink-0">
                      {formatTime(timerCount)}
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Ao preencher os dados abaixo, nossa equipe de suporte acadêmico FATEB receberá sua intenção e chamará você imediatamente no WhatsApp para liberar as credenciais de acesso, e-books bônus e o link especial da Hotmart.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    
                    <div>
                      <label className="block text-slate-700 font-display font-bold text-xs uppercase tracking-wide mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Ana Maria Silva"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm transition"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-display font-bold text-xs uppercase tracking-wide mb-1.5">
                        Seu WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (11) 99999-9999"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm transition"
                      />
                      <p className="text-[10px] text-slate-400 mt-1">
                        🔒 Garantimos a privacidade de seus dados conforme a LGPD.
                      </p>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-display font-bold text-xs uppercase tracking-wide mb-1.5">
                        Seu Melhor E-mail (Opcional)
                      </label>
                      <input
                        type="email"
                        placeholder="Ex: ana@exemplo.com"
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm transition"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full mt-4 bg-[#25d366] hover:bg-[#128c7e] text-white font-display font-extrabold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-wider cursor-pointer"
                    >
                      <MessageSquare className="w-5 h-5 fill-white text-[#25d366]" />
                      <span>Garantir minha vaga promocional</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>

                  </form>

                  {/* Direct Link Alternative link */}
                  <div className="text-center mt-6 pt-5 border-t border-slate-100">
                    <p className="text-xs text-slate-400">
                      Prefere pular o formulário e matricular diretamente na Hotmart?
                    </p>
                    <a
                      href={selectedCourse.redirectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-brand-blue-med hover:text-brand-gold font-bold text-xs transition duration-200 uppercase tracking-widest"
                    >
                      <span>Ir direto para pagamento seguro</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
