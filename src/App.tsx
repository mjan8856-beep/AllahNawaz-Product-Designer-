import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Layout, 
  Palette, 
  Code2, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ArrowUp,
  ChevronRight,
  CircleDot,
  Quote,
  Mail,
  Send,
  ExternalLink,
  MessageSquare,
  Globe,
  Settings,
  Github,
  Instagram,
  Facebook,
  Music,
  Linkedin,
  Plus,
  Minus,
  Menu,
  X,
  Activity,
  ArrowUpRight,
  Layers,
  Smartphone,
  Cpu,
  Sparkles,
  Loader2,
  Wand2
} from 'lucide-react';
import { ProjectAIGenerator } from './components/ProjectAIGenerator';
import { StrategyCommandCenter } from './components/StrategyCommandCenter';
import { generateBio } from './lib/gemini';

// --- Components ---

const ClientTicker = () => {
    const logos = ['Logitech', 'Stripe', 'Segment', 'Linear', 'Vercel', 'Arc', 'Figma', 'Framer', 'Slack', 'Notion'];
    return (
        <section className="py-12 bg-white border-y border-border overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex items-center gap-12 overflow-hidden">
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-muted whitespace-nowrap">Market Validation</span>
                <div className="relative flex-grow flex overflow-x-hidden group">
                    <motion.div 
                        className="flex whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 30, 
                            ease: "linear" 
                        }}
                    >
                        {[...logos, ...logos].map((logo, i) => (
                            <div key={i} className="mx-12 text-2xl font-bold text-heading uppercase tracking-tight opacity-20 hover:opacity-100 hover:text-brand transition-all cursor-default select-none">
                                {logo}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Navbar = ({ onViewChange, currentView }: { onViewChange: (view: string) => void, currentView: string }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Work', 'Case Studies', 'Process', 'System', 'About', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'h-[80px] bg-white/80 backdrop-blur-xl border-b border-border' : 'h-[100px] bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group cursor-pointer" aria-label="Allah Nawaz Home">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-500 shadow-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-heading uppercase leading-none">Allah Nawaz</span>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="w-1 h-1 rounded-full bg-brand animate-pulse" />
              <span className="text-[8px] font-bold text-brand uppercase tracking-[0.4em]">Institutional Design</span>
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-body">
          {navLinks.map((item, i) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-brand transition-all relative group flex items-center gap-1.5 focus:outline-none">
              <span className="text-[10px] text-muted opacity-50">0{i+1}</span>
              {item}
            </a>
          ))}
          <button 
            onClick={() => onViewChange(currentView === 'public' ? 'strategy' : 'public')}
            className={`px-4 py-2 rounded-lg border font-bold uppercase tracking-widest text-[9px] transition-all ${
              currentView === 'strategy' 
              ? 'bg-brand text-white border-brand' 
              : 'bg-brand/5 text-brand border-brand/20 hover:bg-brand hover:text-white hover:border-brand'
            }`}
          >
            {currentView === 'strategy' ? 'Exit Strategy Mode' : 'Strategy Mode'}
          </button>
        </div>

        <div className="flex items-center gap-4">
           <a href="#" className="hidden sm:inline-flex px-5 py-2 bg-heading text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-sm">
                View Spec
           </a>
           
           <button 
             className="lg:hidden w-10 h-10 flex items-center justify-center text-heading hover:bg-surface-section rounded-lg transition-colors border border-border"
             onClick={() => setMobileMenuOpen(true)}
             aria-label="Open navigation menu"
           >
             <Menu className="w-5 h-5" />
           </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[110] bg-surface lg:hidden"
          >
            <div className="flex flex-col h-full px-6 py-12">
              <div className="flex items-center justify-between mb-16 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-heading font-display tracking-tight">Allah Nawaz</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center text-heading hover:bg-zinc-900 rounded-full transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              
              <div className="flex flex-col gap-6 px-4">
                {navLinks.map((item, i) => (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-5xl font-bold text-heading hover:text-zinc-500 transition-colors font-display tracking-tighter"
                  >
                    {item}
                  </motion.a>
                ))}
                <button 
                  onClick={() => {
                    onViewChange(currentView === 'public' ? 'strategy' : 'public');
                    setMobileMenuOpen(false);
                  }}
                  className="text-2xl font-black text-brand uppercase tracking-tighter text-left mt-4"
                >
                  {currentView === 'strategy' ? 'Exit Strategy Mode' : 'Strategy Mode'}
                </button>
              </div>
              
              <div className="mt-auto pb-12 border-t border-border pt-12 px-4">
                <a href="#" className="block w-full py-5 bg-white text-black text-center rounded-full font-bold text-lg mb-8 shadow-xl">View Resume</a>
                <div className="flex justify-center flex-wrap gap-x-8 gap-y-6 text-muted">
                    <a href="https://www.linkedin.com/in/allah-nawaz-256a81286/" target="_blank" rel="noreferrer" aria-label="Connect on LinkedIn" className="hover:text-brand transition-colors"><Linkedin className="w-7 h-7" /></a>
                    <a href="https://www.behance.net/allahnawaz175" target="_blank" rel="noreferrer" aria-label="View portfolio on Behance" className="hover:text-brand transition-colors"><Globe className="w-7 h-7" /></a>
                    <a href="https://github.com/allahnawaz" target="_blank" rel="noreferrer" aria-label="Review code on GitHub" className="hover:text-brand transition-colors"><Github className="w-7 h-7" /></a>
                    <a href="https://www.instagram.com/anjan_malik_jan?igsh=djY2b3VlcnpuMjAz" target="_blank" rel="noreferrer" aria-label="Follow on Instagram" className="hover:text-brand transition-colors"><Instagram className="w-7 h-7" /></a>
                    <a href="https://www.facebook.com/share/1HAuTr1A2f/" target="_blank" rel="noreferrer" aria-label="Follow on Facebook" className="hover:text-brand transition-colors"><Facebook className="w-7 h-7" /></a>
                    <a href="https://www.tiktok.com/@anjanmalikjan?_r=1&_t=ZS-95mWouNsA2j" target="_blank" rel="noreferrer" aria-label="Follow on TikTok" className="hover:text-brand transition-colors"><Music className="w-7 h-7" /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-[100px] overflow-hidden bg-white">
    {/* Subtle Abstract Background */}
    <div className="absolute inset-0 opacity-40 pointer-events-none">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(203,213,225,0.1),transparent_70%)] blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />
    </div>

    <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full lg:py-24">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-7 flex flex-col items-start w-full">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-3 py-2 rounded-full bg-black text-white text-[8px] font-bold uppercase tracking-[0.4em] mb-12 shadow-glow"
          >
            <Activity className="w-3 h-3 text-brand" />
            Independent Design Director • Q3 2026 Protocol
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 leading-[0.8] tracking-[-0.08em] text-7xl md:text-9xl lg:text-[180px] font-black text-heading uppercase text-balance"
          >
            Digital <br className="hidden md:block" /> <span className="text-brand italic font-display lowercase tracking-tight">structures</span> <br className="hidden md:block" /> at Scale.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-body w-full max-w-2xl mb-16 leading-relaxed font-medium tracking-tight"
          >
            Architecting high-density systems for global SaaS. Specializing in market authority, logic-driven interfaces, and strategic product growth for venture-backed platforms.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-md"
          >
            <a href="#contact" className="group px-8 py-5 bg-brand text-white rounded-xl font-bold shadow-glow hover:translate-y-[-2px] transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-3">
              Initiate Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#work" className="px-8 py-5 bg-white text-heading border border-border rounded-xl font-bold hover:bg-surface-section transition-all uppercase tracking-widest text-[10px] text-center flex items-center justify-center gap-3">
              Explore Artifacts <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative group hidden lg:block"
        >
          <div className="relative rounded-card bg-surface-section border border-border p-3 shadow-card group-hover:shadow-hover transition-all duration-700">
             <div className="aspect-[4/5] rounded-sm overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-1000">
               <img 
                 src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200" 
                 alt="Allah نواز Portrait" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
             </div>
             <div className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted mb-1">Director</div>
                        <div className="text-sm font-bold text-heading">Allah Nawaz</div>
                    </div>
                    <div className="text-right">
                        <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted mb-1">Status</div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                            <span className="text-xs font-bold text-brand">Active</span>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  </header>
);

const ProjectCardSkeleton: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`bg-white border border-border rounded-card p-4 flex flex-col ${className || ''}`}>
        <div className="relative aspect-[16/10] bg-surface-section rounded-sm mb-6 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 animate-shimmer" />
            <Sparkles className="w-8 h-8 text-muted/10 relative z-10" />
        </div>
        <div className="px-4 flex-1 flex flex-col">
            <div className="flex justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand/20" />
                    <div className="h-2 w-20 bg-surface-section rounded animate-shimmer" />
                </div>
                <div className="h-2 w-10 bg-surface-section rounded animate-shimmer" />
            </div>
            <div className="h-8 w-3/4 bg-surface-section rounded mb-3 animate-shimmer" />
            <div className="h-4 w-full bg-surface-section rounded mb-2 animate-shimmer" />
            <div className="h-4 w-2/3 bg-surface-section rounded mb-6 animate-shimmer" />
            
            <div className="mb-6">
                <div className="h-2 w-16 bg-surface-section rounded mb-2 animate-shimmer" />
                <div className="h-6 w-24 bg-surface-section rounded animate-shimmer" />
            </div>
            
            <div className="mt-auto flex gap-2 pt-6 border-t border-border">
                <div className="h-6 w-16 bg-surface-section rounded animate-shimmer" />
                <div className="h-6 w-16 bg-surface-section rounded animate-shimmer" />
            </div>
        </div>
    </div>
);

const Portfolio = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        { 
            title: "AI-Driven Scheduling Optimization", 
            type: "Logistics AI", 
            year: "2026",
            tags: ["AI/ML", "SaaS", "Logistics"],
            tech: "Predictive Scheduling",
            icon: <Smartphone className="w-6 h-6" />,
            desc: "Reduces wait times by 30% through predictive UI logic and real-time fleet synchronization protocols.",
            metric: "30% Wait Reduction",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200", 
            link: "#" 
        },
        { 
            title: "TraumaLink AI", 
            type: "AI-Driven HealthTech", 
            year: "2026",
            tags: ["AI/ML", "Clinical Dashboard", "SaaS"],
            tech: "Predictive UI Logic",
            icon: <Cpu className="w-6 h-6" />,
            desc: "Engineering a real-time triage workspace for emergency trauma registries, utilizing predictive AI to shorten critical decision windows by 38%.",
            metric: "38% Faster Triage",
            image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=1200", 
            link: "#" 
        },
        { 
            title: "GoRook Architecture", 
            type: "Logistics Optimization", 
            year: "2024",
            tags: ["Supply Chain", "SaaS", "Mobile"],
            tech: "Infrastructure Strategy",
            icon: <Smartphone className="w-6 h-6" />,
            desc: "Architecting a high-precision mobile dispatch ecosystem for roadside logistics, reducing response friction by 42% through tactical UI flows.",
            metric: "42% Friction Reduction",
            image: "https://images.unsplash.com/photo-1580674271209-40b49a5a0571?auto=format&fit=crop&q=80&w=1200", 
            link: "#" 
        },
        { 
            title: "GymMetrics Pro", 
            type: "Enterprise Analytics", 
            year: "2024",
            tags: ["FinTech", "Data Viz", "SaaS"],
            tech: "D3.js / Quantitative UI",
            icon: <BarChart3 className="w-6 h-6" />,
            desc: "Enterprise-grade fitness management suite, consolidating multi-branch liquidity data into actionable executive protocols.",
            metric: "18% Revenue Alpha",
            image: "https://images.unsplash.com/photo-1551288049-bbda4852c744?auto=format&fit=crop&q=80&w=1200", 
            link: "#" 
        },
        { 
            title: "Omni Design System", 
            type: "Product Scaling", 
            year: "2024",
            tags: ["Design Ops", "Tokens", "Framework"],
            tech: "Asset Architecture",
            icon: <Layers className="w-6 h-6" />,
            desc: "An institutional design language powering a suite of interconnected B2B products with unified token hierarchy and systemic scalability.",
            metric: "65% Dev Velocity",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200", 
            link: "#" 
        }
    ];

    return (
        <section id="work" className="py-32 md:py-48 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 text-brand mb-8">
                            <div className="w-12 h-[1px] bg-brand" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Artifact Registry</span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-black text-heading uppercase leading-[0.85] tracking-[-0.06em]">
                            Selected <br /> <span className="text-muted/10">Artifacts.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-xl text-body font-medium leading-relaxed max-w-sm tracking-tight">
                            A rigorous collection of high-density product structures and design-engineered solutions.
                        </p>
                        <div className="flex items-center gap-4">
                            <button className="px-5 py-2.5 rounded-full bg-black text-white text-[9px] font-black uppercase tracking-widest">Selected</button>
                            <button className="px-5 py-2.5 rounded-full border border-border text-muted text-[9px] font-black uppercase tracking-widest hover:border-brand transition-colors">Archive</button>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {isLoading && (
                        <div className="absolute -top-12 left-0 flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.4em] text-brand/40 animate-pulse">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            Optimizing Artifact Sequence...
                        </div>
                    )}
                    {isLoading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <ProjectCardSkeleton 
                                key={i} 
                                className={i === 0 || i === 3 ? 'lg:col-span-2' : 'lg:col-span-1'} 
                            />
                        ))
                    ) : (
                        projects.map((p, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative overflow-hidden bg-white ${i === 0 || i === 3 ? 'lg:col-span-2' : 'lg:col-span-1'} border border-border rounded-xl`}
                            >
                                <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                                    <img 
                                        src={p.image} 
                                        alt={p.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all" />
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-[8px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                                        {p.type}
                                    </div>
                                </div>
                                
                                <div className="p-10 flex flex-col h-full bg-white relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-4xl font-black text-heading uppercase leading-none tracking-tighter group-hover:text-brand transition-colors">{p.title}</h3>
                                        <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">{p.year}</span>
                                    </div>
                                    
                                    <p className="text-sm text-body leading-relaxed font-medium mb-12 max-w-md">{p.desc}</p>
                                    
                                    <div className="flex items-end justify-between mt-auto">
                                        <div className="relative group/metric overflow-hidden">
                                            <div className="text-[8px] font-bold text-brand uppercase tracking-widest mb-2 relative z-10">Primary Outcome</div>
                                            <div className="text-4xl md:text-5xl font-black text-heading italic font-display leading-none tracking-tighter relative z-10 group-hover:text-brand transition-colors duration-500">
                                                {p.metric}
                                            </div>
                                            <motion.div 
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                                className="absolute -bottom-1 left-0 w-full h-[6px] bg-brand/10 origin-left"
                                            />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex -space-x-1">
                                                {p.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="px-2 py-1 rounded bg-surface-section border border-border text-[7px] font-bold uppercase tracking-[0.1em] text-muted">{tag}</span>
                                                ))}
                                            </div>
                                            <a href={p.link} className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>

                <div className="mt-40 flex flex-col items-center">
                    <div className="text-muted text-[10px] font-bold uppercase tracking-[0.4em] mb-12">Expand Your Vision</div>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <a 
                            href="https://www.behance.net/allahnawaz175" 
                            target="_blank" 
                            rel="noreferrer"
                            className="group flex items-center gap-6 px-10 py-6 rounded-[32px] bg-white/5 border border-white/10 hover:border-brand/40 transition-all"
                        >
                            <Globe className="w-8 h-8 text-brand" />
                            <div className="text-left">
                                <div className="text-xl font-black text-heading uppercase tracking-tighter">View Behance</div>
                                <div className="text-[9px] font-bold text-muted uppercase tracking-[0.3em]">Full Case Studies</div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted group-hover:text-brand group-hover:translate-x-2 transition-all ml-4" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/allah-nawaz-256a81286/" 
                            target="_blank" 
                            rel="noreferrer"
                            className="group flex items-center gap-6 px-10 py-6 rounded-[32px] bg-white/5 border border-white/10 hover:border-brand/40 transition-all"
                        >
                            <Linkedin className="w-8 h-8 text-brand" />
                            <div className="text-left">
                                <div className="text-xl font-black text-heading uppercase tracking-tighter">View LinkedIn</div>
                                <div className="text-[9px] font-bold text-muted uppercase tracking-[0.3em]">Professional Updates</div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted group-hover:text-brand group-hover:translate-x-2 transition-all ml-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CaseStudyDeepDive = () => {
    const process = [
        { step: "01", title: "Research", desc: "User interviews and competitive analysis to identify fragmentation in automotive scheduling data flows.", color: "bg-brand/20" },
        { step: "02", title: "Ideation", desc: "Mapping the user journey from discovery to service execution with scalable service blueprints.", color: "bg-white/5" },
        { step: "03", title: "Design", desc: "Building a high-performance design system with real-time tracking and safety filters.", color: "bg-brand/20" },
        { step: "04", title: "Testing", desc: "Iterative usability sessions resulting in a 28% improvement in perceived wait times.", color: "bg-white/5" }
    ];

    const auditIssues = [
        { issue: "Cognitive Load", impact: "Critical", solution: "Progressive Disclosure Protocol" },
        { issue: "Decision Latency", impact: "High", solution: "Predictive Navigation Logic" },
        { issue: "Inertia Costs", impact: "High", solution: "Zero-Friction Transactional UX" }
    ];

    return (
        <section id="case-studies" className="bg-surface-section text-white py-32 md:py-48 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Hero Section */}
                <div className="relative mb-32 group">
                    <motion.div 
                        initial={{ opacity: 0, scale: 1.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="aspect-[21/9] rounded-[60px] overflow-hidden border border-white/10 shadow-4xl relative"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1551288049-bbda4852c744?auto=format&fit=crop&q=80&w=2500" 
                            alt="Reserva Cinematic Banner"
                            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    <div className="absolute top-8 left-8 sm:bottom-24 sm:left-24 sm:top-auto w-[calc(100%-64px)] lg:max-w-4xl">
                             <div className="text-brand text-[10px] font-black uppercase tracking-[0.8em] mb-8">Featured Case Study</div>
                             <h2 className="text-4xl sm:text-7xl md:text-[140px] font-black leading-none md:leading-[0.75] tracking-tighter text-white uppercase">Trauma <br /><span className="text-brand italic">Registry.</span></h2>
                         </div>
                    </motion.div>
                </div>

                {/* Process Section (1-col mobile, 2-col tablet, 4-col desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-48">
                    {process.map((p, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[48px] border border-white/5 bg-slate-900 group hover:border-brand/20 transition-all"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${p.color} flex items-center justify-center text-white font-black text-xs mb-8 group-hover:rotate-12 transition-transform border border-brand/20`}>
                                {p.step}
                            </div>
                            <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-white">{p.title}</h3>
                            <p className="text-zinc-400 font-medium leading-relaxed">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* UI Mockups Gallery */}
                <div className="grid lg:grid-cols-[1.5fr,1fr] gap-16 mb-48 items-center">
                    <div className="space-y-12">
                        <div className="aspect-[4/3] rounded-[60px] overflow-hidden border border-border bg-white shadow-2xl relative group">
                            <img src="https://images.unsplash.com/photo-1551288049-bbda4852c744?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Mockup 1" referrerPolicy="no-referrer" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-12 w-full">
                         <div className="w-full">
                             <h4 className="text-brand text-[10px] font-black uppercase tracking-[0.6em] mb-6">AI Infrastructure</h4>
                             <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight md:leading-[0.9] tracking-tighter uppercase text-heading">Predictive <br /><span className="text-brand italic font-display">Triage.</span></h3>
                             <p className="text-lg md:text-xl text-body font-medium leading-relaxed opacity-70 w-full lg:max-w-md">
                                Beyond aesthetics, I engineer interfaces with strict decision-logic protocols, ensuring zero-latency triage for high-stakes medical environments.
                             </p>
                         </div>
                         
                         {/* UX Audit Table */}
                         <div className="bg-white p-10 rounded-[60px] border border-border shadow-sm">
                            <h4 className="text-sm font-black uppercase tracking-widest mb-10 pb-4 border-b border-border text-heading">Logic Performance Audit</h4>
                            <div className="space-y-8">
                                {auditIssues.map((item, i) => (
                                    <div key={i} className="grid grid-cols-[1fr,auto] gap-4 items-center">
                                        <div>
                                            <div className="text-lg font-black text-heading uppercase tracking-tight">{item.issue}</div>
                                            <div className="text-[10px] text-brand font-bold uppercase tracking-widest mt-1">Protocol: {item.solution}</div>
                                        </div>
                                        <div className="px-4 py-1 rounded-full border border-brand/20 text-[10px] font-black text-brand uppercase tracking-widest">
                                            {item.impact}
                                        </div>
                                    </div>
                                ))}
                            </div>
                         </div>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center pt-24 border-t border-white/5">
                    {[
                        { val: "22%", label: "Operational Savings" },
                        { val: "40%", label: "Delivery Delay" },
                        { val: "350k", label: "Transactions" },
                        { val: "12ms", label: "System Latency" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-6xl font-black text-mint leading-none mb-4 tracking-tighter">{stat.val}</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 whitespace-nowrap">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DesignProcess = () => {
    const steps = [
        { 
            title: "Immersion", 
            subtitle: "Research & Audit", 
            desc: "Stakeholder immersion, competitive benchmarking, and UX audits to uncover core friction points and business opportunities." 
        },
        { 
            title: "Logic", 
            subtitle: "Strategy & IA", 
            desc: "Synthesizing research into robust information architectures, user flows, and product roadmaps for scalable execution." 
        },
        { 
            title: "Artifacts", 
            subtitle: "Design & Systems", 
            desc: "Crafting high-fidelity UI systems and interactive prototypes with surgical precision, motion, and accessibility baked in." 
        },
        { 
            title: "Scale", 
            subtitle: "Testing & Iteration", 
            desc: "Validating through usability sessions and heatmaps, followed by pixel-perfect documentation for seamless handoff." 
        }
    ];

    return (
        <section id="process" className="py-32 md:py-48 bg-white border-t border-border">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 text-brand mb-8">
                            <div className="w-12 h-[1px] bg-brand" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Methodology Protocol</span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-black text-heading uppercase leading-[0.85] tracking-[-0.06em]">
                            Systematic <br /> <span className="text-muted/10">Execution.</span>
                        </h2>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {steps.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="p-12 bg-surface-section border border-border group hover:bg-white hover:shadow-hover transition-all duration-700 flex flex-col min-h-[400px]"
                        >
                            <div className="text-[10px] font-black text-brand uppercase tracking-[0.4em] mb-12">0{i+1}. Protocol</div>
                            <h3 className="text-4xl font-black text-heading mb-6 uppercase tracking-tighter italic font-display group-hover:text-brand transition-colors leading-none">{step.title}</h3>
                            <p className="text-sm text-body leading-relaxed font-medium mb-12 flex-grow">{step.desc}</p>
                            
                            <div className="mt-auto flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                                <span className="text-[8px] font-bold text-muted uppercase tracking-widest">{step.subtitle}</span>
                                <ChevronRight className="w-4 h-4 text-brand" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DesignServicePackages = () => (
        <section id="services" className="py-32 md:py-48 bg-white border-t border-border">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
                    <div className="w-full lg:max-w-3xl">
                        <div className="text-brand text-[10px] font-black uppercase tracking-[0.4em] mb-8">Engagement Models</div>
                        <h2 className="text-6xl md:text-9xl font-black text-heading uppercase leading-[0.85] tracking-[-0.06em]">
                            Strategic <br /> <span className="text-muted/10">Partnership.</span>
                        </h2>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { 
                            title: "Brand Protocol", 
                            price: "3.5k", 
                            features: ["Strategic Market Audit", "Conversion UI", "Neural Asset Library", "Framer Build"],
                            popular: false
                        },
                        { 
                            title: "Executive Sprint", 
                            price: "6.5k", 
                            features: ["UX Architecture", "Rapid Prototype", "Founders Deck", "High-Density UI"],
                            popular: true
                        },
                        { 
                            title: "SaaS Ecosystem", 
                            price: "9.5k", 
                            features: ["Infra Design", "Data Viz Mapping", "Logic Hierarchy", "Dev Protocol"],
                            popular: false
                        },
                        { 
                            title: "Product Advisory", 
                            price: "5k", 
                            features: ["Weekly Strategic Sync", "UX Audit", "Growth Logic", "Team Ops"],
                            popular: false
                        }
                    ].map((pkg, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-10 border ${pkg.popular ? 'bg-black border-black shadow-glow' : 'bg-surface-section border-border'} relative flex flex-col min-h-[550px] transition-all duration-500`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-8 right-8 px-3 py-1 bg-brand text-white rounded-full text-[7px] font-black uppercase tracking-[0.1em]">Recommended</div>
                            )}
                            <h4 className={`text-4xl font-black uppercase tracking-tighter mb-2 italic font-display ${pkg.popular ? 'text-brand' : 'text-heading'}`}>{pkg.title}</h4>
                            <div className={`text-6xl font-black mb-12 tracking-tighter ${pkg.popular ? 'text-white' : 'text-heading'}`}>
                                <span className="text-xl">$</span>{pkg.price}<span className="text-[10px] uppercase tracking-widest opacity-40 ml-1 font-bold">+</span>
                            </div>
                            
                            <ul className="space-y-4 mb-16 flex-grow">
                                {pkg.features.map(f => (
                                    <li key={f} className={`flex items-start gap-3 text-[10px] font-bold uppercase tracking-[0.05em] ${pkg.popular ? 'text-white/60' : 'text-body'}`}>
                                        <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${pkg.popular ? 'bg-brand' : 'bg-muted'}`} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            
                            <a href="#contact" className={`w-full py-5 rounded-xl font-bold uppercase tracking-widest text-[9px] text-center transition-all ${pkg.popular ? 'bg-brand text-white shadow-glow hover:bg-brand/90' : 'bg-white border border-border text-heading hover:bg-slate-50'}`}>Initiate Protocol</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
);

const BioGenerator = () => {
    const [role, setRole] = React.useState('');
    const [experience, setExperience] = React.useState('');
    const [goals, setGoals] = React.useState('');
    const [generatedBio, setGeneratedBio] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleGenerate = async () => {
        if (!role || !experience || !goals) return;
        setIsLoading(true);
        try {
            const bio = await generateBio(role, experience, goals);
            setGeneratedBio(bio);
        } catch (error) {
            console.error("Generate Bio Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mt-24 p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-12 h-12 text-brand" />
            </div>
            
            <div className="relative z-10">
                <div className="text-brand text-[10px] font-black uppercase tracking-[0.6em] mb-10">AI Identity Lab</div>
                <h3 className="text-3xl md:text-5xl font-black text-heading uppercase tracking-tighter mb-12">
                    Craft Your <br /><span className="text-brand italic font-display">Neural Narrative.</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">Current Role</label>
                        <input 
                            type="text" 
                            placeholder="e.g. Lead Designer"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-brand focus:bg-brand/5 transition-all text-sm"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">Experience Level</label>
                        <input 
                            type="text" 
                            placeholder="e.g. 5+ Years"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-brand focus:bg-brand/5 transition-all text-sm"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">Primary Goals</label>
                        <input 
                            type="text" 
                            placeholder="e.g. Venture Capital"
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-brand focus:bg-brand/5 transition-all text-sm"
                        />
                    </div>
                </div>

                <button 
                    onClick={handleGenerate}
                    disabled={isLoading || !role || !experience || !goals}
                    className="w-full md:w-auto px-12 py-5 bg-brand text-black rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed group/btn"
                >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Wand2 className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />}
                    {isLoading ? 'Decrypting DNA...' : 'Generate Strategic Bio'}
                </button>

                <AnimatePresence>
                    {generatedBio && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-12 p-8 rounded-3xl bg-brand/5 border border-brand/20 relative"
                        >
                            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-black">
                                <Quote className="w-5 h-5 fill-black" />
                            </div>
                            <p className="text-xl md:text-2xl font-black text-white leading-relaxed italic font-display">
                                "{generatedBio}"
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const About = () => (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                    <div className="text-brand text-[9px] font-bold uppercase tracking-[0.3em] mb-6">Manifesto</div>
                    <h2 className="text-4xl md:text-6xl font-black text-heading leading-[1.1] tracking-tight mb-10 uppercase">Strategy <br /><span className="text-brand italic font-display">Over Skin.</span></h2>
                    
                    <div className="space-y-6 text-base md:text-xl text-body font-medium leading-relaxed w-full lg:max-w-xl">
                        <p>Allah Nawaz is a Product Director focused on high-density interface logic and scalable design architecture. He partners with ventures to turn abstract vision into tactical digital assets.</p>
                        <p>With a foundation in industrial systemic thinking, he builds products that establish market authority and drive institutional scalability.</p>
                    </div>
                    
                    <div className="mt-16 grid grid-cols-2 gap-10 border-t border-border pt-12">
                        <div className="space-y-4">
                            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted">Academic Root</h4>
                            <p className="text-lg font-black text-heading uppercase">Bachelors Degree <br /><span className="text-muted font-bold text-[10px] tracking-widest block mt-2 opacity-50 uppercase">Islamia University, IUB</span></p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted">Specializations</h4>
                            <p className="text-lg font-black text-heading uppercase">Web & IT Cert <br /><span className="text-muted font-bold text-[10px] tracking-widest block mt-2 opacity-50 uppercase">NAVTTC / TEVTA Specialist</span></p>
                        </div>
                    </div>

                    <BioGenerator />
                </div>

                <div className="order-1 lg:order-2">
                    <motion.div 
                         initial={{ opacity: 0, scale: 0.95 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                         className="relative aspect-square rounded-card overflow-hidden border border-border bg-surface-section p-2 shadow-sm group"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                            alt="Product UI Architecture" 
                            className="w-full h-full object-cover rounded-card grayscale group-hover:grayscale-0 transition-all duration-1000"
                            referrerPolicy="no-referrer"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
);

const AnimatedFigmaIcon = () => (
    <motion.svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-8 h-8"
        initial="rest"
        whileHover="hover"
    >
        <motion.path 
            d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" 
            variants={{ hover: { x: -1, transition: { duration: 0.3 } } }}
        />
        <motion.path 
            d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
            variants={{ hover: { x: 1, transition: { duration: 0.3 } } }}
        />
        <motion.path 
            d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
            variants={{ hover: { scale: 1.1, originX: 0, transition: { duration: 0.3 } } }}
        />
        <motion.path 
            d="M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9z"
            variants={{ hover: { rotate: 10, transition: { duration: 0.3 } } }}
        />
        <motion.path 
            d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
            variants={{ hover: { y: 1, transition: { duration: 0.3 } } }}
        />
    </motion.svg>
);

const AnimatedFramerIcon = () => (
    <motion.svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        className="w-8 h-8"
        initial="rest"
        whileHover="hover"
    >
        <motion.path 
            d="M5 2h14v7H5zm0 7h7l7 7H5zm7 7v7l-7-7z"
            variants={{ 
                hover: { 
                    pathLength: [0, 1],
                    transition: { duration: 0.5 }
                } 
            }}
        />
    </motion.svg>
);

const AnimatedMazeIcon = () => (
    <motion.svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        className="w-8 h-8"
        initial="rest"
        whileHover="hover"
    >
        <motion.rect 
            x="3" y="11" width="4" height="10" rx="1"
            variants={{ hover: { height: [10, 12, 10], transition: { repeat: Infinity, duration: 1 } } }}
        />
        <motion.rect 
            x="10" y="3" width="4" height="18" rx="1"
            variants={{ hover: { height: [18, 14, 18], transition: { repeat: Infinity, duration: 1.5 } } }}
        />
        <motion.rect 
            x="17" y="7" width="4" height="14" rx="1"
            variants={{ hover: { height: [14, 18, 14], transition: { repeat: Infinity, duration: 1.2 } } }}
        />
    </motion.svg>
);

const AnimatedUserTestingIcon = () => (
    <motion.svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        className="w-8 h-8"
        initial="rest"
        whileHover="hover"
    >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <motion.circle cx="8" cy="10" r="1" fill="currentColor" variants={{ hover: { opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 0.8, delay: 0 } } }} />
        <motion.circle cx="12" cy="10" r="1" fill="currentColor" variants={{ hover: { opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 0.8, delay: 0.2 } } }} />
        <motion.circle cx="16" cy="10" r="1" fill="currentColor" variants={{ hover: { opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 0.8, delay: 0.4 } } }} />
    </motion.svg>
);

const AnimatedAdobeIcon = () => (
    <motion.svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        className="w-8 h-8"
        initial="rest"
        whileHover="hover"
    >
        <motion.path 
            d="M12 4l9 16H3z"
            variants={{ hover: { pathLength: [1, 0, 1], transition: { duration: 1 } } }}
        />
        <motion.path 
            d="M9 14h6"
            variants={{ hover: { scaleX: [1, 1.5, 1], transition: { duration: 0.5 } } }}
        />
    </motion.svg>
);

const AnimatedFigJamIcon = () => (
    <motion.svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        className="w-8 h-8"
        initial="rest"
        whileHover="hover"
    >
        <motion.circle 
            cx="12" cy="12" r="10" 
            variants={{ hover: { rotate: 360, transition: { duration: 4, repeat: Infinity, ease: "linear" } } }}
        />
        <motion.path 
            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" 
            variants={{ hover: { scaleX: [1, 0.8, 1], transition: { duration: 2, repeat: Infinity } } }}
        />
        <path d="M2 12h20" />
    </motion.svg>
);

const Skills = () => {
    const skillGroups = [
        {
            category: "Core Product",
            skills: ["UX Strategy", "Product Thinking", "Design Systems", "Conversion Logic", "SAAS IA"]
        },
        {
            category: "Technical Craft",
            skills: ["High-Fidelity UI", "Prototyping", "Motion Design", "Responsive Layouts", "Accessibility (WCAG)"]
        },
        {
            category: "Technical Stack",
            skills: ["Figma (Expert)", "Framer", "Webflow", "React / Tailwind", "Git / Vercel"]
        }
    ];

    return (
        <section id="skills" className="py-32 md:py-64 bg-surface-section overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                <div className="w-full lg:max-w-4xl mb-40">
                    <div className="text-brand text-xs font-black uppercase tracking-[0.6em] mb-10">Arsenal of Logic</div>
                    <h2 className="text-6xl md:text-[120px] font-black text-heading leading-[0.8] tracking-tighter uppercase">Technical <br /><span className="text-zinc-900">Maturity.</span></h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">
                    {skillGroups.map((group, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="space-y-12"
                        >
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand border-b border-white/5 pb-6">{group.category}</h4>
                            <div className="flex flex-wrap gap-4">
                                {group.skills.map(skill => (
                                    <div key={skill} className="px-8 py-5 rounded-[24px] bg-white/5 border border-white/5 text-lg font-black text-heading hover:bg-brand hover:text-black hover:border-brand transition-all cursor-crosshair uppercase tracking-tighter">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    const jobs = [
        { 
            role: "Product Design Director", 
            company: "Strategic Partnerships / Global", 
            period: "2023 — Present", 
            desc: "Architecting core product logic and institutional design systems for VC-backed startups. Leading cross-continental teams to deploy high-precision SaaS ecosystems." 
        },
        { 
            role: "Principal UX Architect", 
            company: "Faramond Product Studio", 
            period: "2021 — 2023", 
            desc: "Directed the UI/UX transformation of complex logistics dashboards, establishing quantitative performance protocols and reducing cognitive load by 38%." 
        },
        { 
            role: "SaaS Design Lead", 
            company: "Institutional Ventures", 
            period: "2019 — 2021", 
            desc: "Focused on conversion-centric product architecture for early-stage fintech, securing market authority through rigorous visual systems and UX audits." 
        }
    ];

    return (
        <section id="experience" className="py-32 md:py-64 bg-surface overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                <div className="w-full lg:max-w-4xl mb-40">
                    <div className="text-brand text-xs font-black uppercase tracking-[0.6em] mb-10">Strategic Record</div>
                    <h2 className="text-6xl md:text-[120px] font-black text-heading leading-[0.8] tracking-tighter uppercase">Institutional <br /><span className="text-zinc-900 font-display italic">Legacy.</span></h2>
                </div>

                <div className="space-y-12">
                    {jobs.map((job, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="group grid lg:grid-cols-12 items-center gap-12 p-12 rounded-[56px] border border-white/5 hover:bg-surface-card transition-all duration-700"
                        >
                            <div className="lg:col-span-3 text-[11px] font-black uppercase tracking-[0.4em] text-brand">{job.period}</div>
                            <div className="lg:col-span-4">
                                <h3 className="text-3xl font-black text-heading group-hover:text-brand transition-colors uppercase tracking-tight">{job.role}</h3>
                                <div className="text-[10px] font-bold text-muted uppercase tracking-[0.4em] mt-3">{job.company}</div>
                            </div>
                            <div className="lg:col-span-5 text-lg text-body font-medium leading-relaxed tracking-tight text-left opacity-60 group-hover:opacity-100 transition-opacity">
                                {job.desc}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const GlobalPresence = () => (
    <section className="py-32 md:py-48 bg-surface-section overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand),transparent)] opacity-5 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="w-full">
                    <div className="text-muted text-xs font-bold uppercase tracking-[4px] mb-8">Strategic Reach</div>
                    <h2 className="text-4xl md:text-8xl font-black text-heading leading-tight md:leading-[0.8] tracking-tighter mb-12 uppercase">Global <br /><span className="text-zinc-800">Impact.</span></h2>
                    <p className="text-xl md:text-2xl text-body font-medium leading-relaxed mb-16 w-full lg:max-w-xl text-left">
                        Bridging continents through digital innovation. I collaborate with category-defining brands worldwide to architect interfaces that transcend boundaries and cultures.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-12 border-t border-border pt-16">
                        <div className="space-y-4">
                            <div className="text-3xl md:text-5xl font-black text-heading tracking-tighter decoration-brand underline decoration-4 underline-offset-8">24+</div>
                            <div className="text-[10px] uppercase font-bold tracking-[3px] text-muted">Countries Reached</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-3xl md:text-5xl font-black text-heading tracking-tighter decoration-brand underline decoration-4 underline-offset-8">03+</div>
                            <div className="text-[10px] uppercase font-bold tracking-[3px] text-muted">Primary Timezones</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-3xl md:text-5xl font-black text-heading tracking-tighter decoration-brand underline decoration-4 underline-offset-8">100%</div>
                            <div className="text-[10px] uppercase font-bold tracking-[3px] text-muted">Remote-First Workflow</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-3xl md:text-5xl font-black text-heading tracking-tighter decoration-brand underline decoration-4 underline-offset-8">02</div>
                            <div className="text-[10px] uppercase font-bold tracking-[3px] text-muted">Bilingual Design Logic</div>
                        </div>
                    </div>
                </div>

                <div className="relative aspect-square lg:aspect-auto h-full min-h-[500px]">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand),transparent_70%)] opacity-20 blur-[100px]"
                    />
                    <div className="relative h-full flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
                            {[
                                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
                                "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
                                "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800",
                                "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800"
                            ].map((img, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl relative group"
                                >
                                    <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    
    const testimonials = [
        { 
            quote: "Allah doesn't just design screens; he architects product logic. His GoRook redesign was the catalyst for our successful Seed round.", 
            author: "Marcus Thorne", 
            role: "Founder, GoRook Logistics", 
            company: "Berlin, DE" 
        },
        { 
            quote: "The strategic depth behind his design systems is extraordinary. He transformed our messy SaaS dashboard into a technical masterpiece.", 
            author: "Sarah Jenkins", 
            role: "Head of Product", 
            company: "San Francisco, US" 
        },
        { 
            quote: "Expert clinical precision in UI design. Our conversion increased by 35% after implementing the new mobile interface logic.", 
            author: "David Chen", 
            role: "CTO, HealthSync", 
            company: "Austin, TX" 
        },
        { 
            quote: "A true visionary when it comes to scalable SaaS interfaces. He understands the balance between data density and user intuition.", 
            author: "Elena Rodriguez", 
            role: "Design Lead, DataMetric", 
            company: "Madrid, ES" 
        }
    ];

    const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    React.useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, [isPaused, testimonials.length]);

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                <div className="w-full lg:max-w-2xl">
                    <div className="text-brand text-[9px] font-bold uppercase tracking-[0.3em] mb-6">Market Authority</div>
                    <h2 className="text-4xl md:text-6xl font-black text-heading leading-[1.1] tracking-tight uppercase">Strategic <br /><span className="text-muted/10 italic font-display">Endorsement.</span></h2>
                </div>
            </div>
                
                <div 
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full"
                        >
                            <div className="p-8 md:p-16 rounded-card bg-surface-section border border-border shadow-sm flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8">
                                    <Quote className="w-16 h-16 text-brand/5" />
                                </div>

                                <div className="shrink-0">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border border-border flex items-center justify-center font-bold text-brand text-3xl shadow-sm">
                                        {testimonials[activeIndex].author[0]}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <p className="text-xl md:text-3xl font-bold text-heading leading-tight tracking-tight mb-8">
                                        "{testimonials[activeIndex].quote}"
                                    </p>
                                    <div className="flex flex-col">
                                        <div className="text-lg font-bold text-heading uppercase tracking-tight">{testimonials[activeIndex].author}</div>
                                        <div className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mt-1">
                                            {testimonials[activeIndex].role} <span className="text-border mx-2">•</span> {testimonials[activeIndex].company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, i) => (
                            <button 
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-brand w-6' : 'bg-border hover:bg-muted'}`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const DesignSystem = () => {
    return (
        <section id="system" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                <div className="w-full lg:max-w-2xl">
                    <div className="text-brand text-[9px] font-bold uppercase tracking-[0.3em] mb-6">Component Architecture</div>
                    <h2 className="text-4xl md:text-6xl font-black text-heading leading-[1.1] tracking-tight uppercase">System <br /><span className="text-muted/10 italic font-display">Foundation.</span></h2>
                </div>
            </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4 p-8 rounded-card bg-surface-section border border-border">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-8">Base Swatches</div>
                        <div className="space-y-4">
                            {[
                                { name: 'Institutional Mint', hex: '#10B981', bg: 'bg-brand' },
                                { name: 'Pure Neutral', hex: '#FFFFFF', bg: 'bg-white border border-border' },
                                { name: 'Slate Foundation', hex: '#0F172A', bg: 'bg-slate-900' },
                                { name: 'Ghost Accent', hex: '#F8FAFC', bg: 'bg-slate-50 border border-border' }
                            ].map(color => (
                                <div key={color.name} className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-lg ${color.bg}`} />
                                    <div>
                                        <div className="text-xs font-bold text-heading uppercase">{color.name}</div>
                                        <div className="text-[10px] font-mono text-muted">{color.hex}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-card bg-white border border-border shadow-sm">
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-8">Interaction Model</div>
                            <div className="flex flex-wrap gap-4 items-center">
                                <button className="px-6 py-2.5 bg-brand text-white rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-sm">Primary Action</button>
                                <button className="px-6 py-2.5 bg-white text-heading border border-border rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">Secondary</button>
                                <button className="px-6 py-2.5 bg-transparent text-brand font-bold uppercase tracking-widest text-[9px] hover:underline">Ghost Link</button>
                            </div>
                        </div>

                        <div className="p-8 rounded-card bg-white border border-border shadow-sm">
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-8">Input Schemas</div>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <div className="text-[8px] font-bold uppercase tracking-[0.1em] text-muted ml-1">Field Label</div>
                                    <div className="h-10 w-full rounded-lg bg-surface-section border border-border px-4 flex items-center text-xs text-muted">Placeholder Parameter...</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded bg-brand flex items-center justify-center"><CheckCircle2 className="w-3 h-3 text-white" /></div>
                                    <span className="text-[10px] font-bold text-heading">System Verification Enabled</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 p-8 rounded-card bg-surface-section border border-border overflow-hidden">
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-8">Data Viz Architecture</div>
                            <div className="flex items-end gap-3 h-32">
                                {[40, 70, 45, 90, 65, 80, 50, 60, 85, 30].map((h, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        className="w-full bg-brand/20 rounded-t-sm relative group"
                                    >
                                        <div className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Vision = () => (
    <section className="py-24 bg-heading overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="text-brand text-[9px] font-bold uppercase tracking-[0.8em] mb-12">Director Protocol</div>
                <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight tracking-tight uppercase w-full max-w-5xl mx-auto text-balance">
                    "I architect for the institutional <span className="text-brand italic font-display">next</span>—establishing market authority through precise, high-performance design logic."
                </h2>
            </motion.div>
        </div>
    </section>
);

const TrustSignals = () => (
    <section className="py-24 bg-white border-y border-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                {[
                    { val: "Strategic", label: "Founding Partner" },
                    { val: "Portfolio", label: "VC-Backed ventures" },
                    { val: "Systemic", label: "Design Architecture" },
                    { val: "Global", label: "Scale Protocols" }
                ].map((stat, i) => (
                    <div key={i} className="space-y-4">
                        <div className="text-4xl font-black text-brand leading-none tracking-tight uppercase italic font-display">{stat.val}</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FAQ = () => {
    const faqs = [
      { q: "What's the 'Institutional' approach?", a: "It's a design methodology focused on long-term scalability, data density, and establishing market authority rather than just chasing aesthetic trends." },
      { q: "How do you handle rapid scalability?", a: "By architecting token-based design systems and modular interface schemas that allow dev teams to deploy new features in days, not months." },
      { q: "Do you collaborate with internal teams?", a: "Yes. I integrate with your engineering and product leads to ensure technical feasibility and seamless institutional handoff." },
      { q: "What is the typical engagement cycle?", a: "Strategic sprints usually span 4-8 weeks depending on complexity. Long-term advisory roles are available for Series-B+ ventures." }
    ];
  
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  
    return (
      <section id="faq" className="py-24 md:py-32 bg-surface-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="w-full">
                <div className="text-brand text-[9px] font-bold uppercase tracking-[0.3em] mb-6">Inquiry Protocol</div>
                <h2 className="text-4xl md:text-6xl font-black text-heading leading-[1.1] tracking-tight uppercase">Operational <br /><span className="text-muted/10 italic font-display">Clarity.</span></h2>
            </div>
          </div>
  
          <div className="space-y-4 w-full lg:max-w-4xl">
            {faqs.map((faq, i) => (
              <div key={i} className={`rounded-xl border transition-all duration-300 overflow-hidden ${openIndex === i ? 'bg-white border-brand/20 shadow-sm' : 'bg-white/40 border-border hover:border-muted'}`}>
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="flex-1 text-base md:text-xl font-bold text-heading uppercase tracking-tight mr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full border transition-all flex items-center justify-center ${openIndex === i ? 'bg-brand border-brand text-white rotate-45' : 'bg-transparent border-border text-muted'}`}>
                      <Plus className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-sm md:text-base text-body font-medium leading-relaxed w-full">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

const Contact = () => {
    const [status, setStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-white overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <div className="space-y-12">
                        <div>
                            <div className="text-brand text-[9px] font-bold uppercase tracking-[0.3em] mb-6">Initiation Protocol</div>
                            <h2 className="text-4xl md:text-7xl font-black text-heading leading-[1] tracking-tight uppercase mb-8">Establish <br /><span className="text-brand italic font-display">Partnership.</span></h2>
                            <p className="text-base md:text-xl text-body font-medium leading-relaxed w-full lg:max-w-xl">
                                Currently accepting select institutional engagements for Q3-Q4 2026. Specializing in high-density SaaS and complex product pivots.
                            </p>
                        </div>

                        <div className="space-y-8 pt-8 border-t border-border">
                             <div className="grid grid-cols-2 gap-8">
                                 <div>
                                     <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Direct Channel</div>
                                     <a href="mailto:allahnawazmalik175@gmail.com" className="text-sm font-bold text-heading hover:text-brand transition-colors">allahnawazmalik175@gmail.com</a>
                                 </div>
                                 <div>
                                     <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Sync Node</div>
                                     <a href="https://www.linkedin.com/in/allah-nawaz-256a81286/" className="text-sm font-bold text-heading hover:text-brand transition-colors">LinkedIn</a>
                                 </div>
                             </div>
                             <div>
                                 <button className="flex items-center gap-3 text-sm font-bold text-heading group uppercase tracking-widest">
                                     Schedule Discovery Call <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all"><ArrowRight className="w-4 h-4" /></div>
                                 </button>
                             </div>
                        </div>
                    </div>

                    <div className="bg-surface-section border border-border p-8 md:p-12 rounded-card shadow-sm">
                        {status === 'success' ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center text-brand mb-8 animate-bounce">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-heading mb-4 uppercase">Transmission Received</h3>
                                <p className="text-body text-sm max-w-xs">Protocol has been logged. Expect sync within 24 standard hours.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted ml-1">Entity Name</label>
                                            <input required type="text" placeholder="Individual or Company" className="w-full bg-white border border-border px-6 py-4 rounded-lg text-sm text-heading outline-none focus:border-brand transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted ml-1">Transmission Address</label>
                                            <input required type="email" placeholder="email@domain.com" className="w-full bg-white border border-border px-6 py-4 rounded-lg text-sm text-heading outline-none focus:border-brand transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted ml-1">Engagement Objective</label>
                                        <textarea required rows={4} placeholder="Describe the product logic or strategic need..." className="w-full bg-white border border-border px-6 py-4 rounded-lg text-sm text-heading outline-none focus:border-brand transition-all resize-none"></textarea>
                                    </div>
                                </div>
                                <button 
                                    className="w-full py-5 bg-heading text-white font-bold uppercase tracking-[0.2em] text-[10px] rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Logging Transmission...' : 'Execute Initiation'}
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FinalCTA = () => (
    <section className="py-24 md:py-32 bg-surface-section overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto relative z-10 w-full px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-8xl font-black tracking-tight text-heading mb-12 uppercase leading-none">Architecting <br /><span className="text-brand italic font-display">Success.</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-brand text-white rounded-lg font-bold shadow-sm hover:translate-y-[-2px] transition-all uppercase tracking-widest text-[10px]">Start Engagement</a>
                <a href="#work" className="w-full sm:w-auto px-10 py-5 bg-white text-heading border border-border rounded-lg font-bold hover:bg-slate-50 transition-all uppercase tracking-widest text-[10px]">View Work</a>
            </div>
      </div>
    </section>
);

const Footer = () => (
    <footer className="py-24 md:py-48 bg-white border-t border-border" role="contentinfo">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
              <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-10">
                      <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center shadow-glow">
                          <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex flex-col">
                          <span className="text-3xl font-black text-heading tracking-tighter uppercase leading-none">Allah Nawaz</span>
                          <span className="text-[10px] font-bold text-brand uppercase tracking-[0.4em] mt-1">Institutional Design</span>
                      </div>
                  </div>
                  <p className="text-body text-xl lg:max-w-md leading-relaxed mb-12 font-medium tracking-tight">Architecting the future of SaaS through algorithmic precision, high-density design systems, and tactical product strategy.</p>
                  
                  <div className="flex flex-wrap gap-4">
                      {[
                          { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/allah-nawaz-256a81286/", label: "LinkedIn" },
                          { icon: <Globe className="w-5 h-5" />, href: "https://www.behance.net/allahnawaz175", label: "Behance" },
                          { icon: <Github className="w-5 h-5" />, href: "https://github.com/allahnawaz", label: "GitHub Contributions", badge: "Live" },
                          { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/anjan_malik_jan?igsh=djY2b3VlcnpuMjAz", label: "Instagram" },
                          { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/share/1HAuTr1A2f/", label: "Facebook" },
                          { icon: <Music className="w-5 h-5" />, href: "https://www.tiktok.com/@anjanmalikjan?_r=1&_t=ZS-95mWouNsA2j", label: "TikTok" }
                      ].map((social, i) => (
                          <motion.a 
                              key={i} 
                              href={social.href} 
                              title={social.label} 
                              aria-label={i === 2 ? "Explore Allah Nawaz's code contributions on GitHub" : `Follow Allah Nawaz on ${social.label}`} 
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -4, borderColor: '#10b981', color: '#10b981', backgroundColor: 'rgba(16,185,129,0.02)' }}
                              whileTap={{ scale: 0.95 }}
                              className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted transition-all duration-300 focus:ring-2 focus:ring-brand focus:ring-offset-2 outline-none group relative"
                          >
                              {social.icon}
                              {social.badge && (
                                  <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-brand text-white text-[7px] font-black uppercase tracking-tighter rounded-full shadow-glow">
                                      {social.badge}
                                  </span>
                              )}
                          </motion.a>
                      ))}
                  </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
                  <div>
                       <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted mb-10 border-b border-border pb-4 w-fit pr-8">Expertise</h4>
                       <ul className="space-y-6">
                          {['SaaS Strategy', 'Product Design', 'Design Systems', 'Interface Logic'].map(link => (
                              <li key={link} className="group">
                                  <a href="#work" className="text-lg font-bold text-heading hover:text-brand transition-all flex items-center gap-3">
                                      <span className="w-1.5 h-1.5 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                                      {link}
                                  </a>
                              </li>
                          ))}
                       </ul>
                  </div>
                  <div>
                       <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted mb-10 border-b border-border pb-4 w-fit pr-8">Navigation</h4>
                       <ul className="space-y-6">
                          {['About', 'Work', 'Case Studies', 'Contact'].map(link => (
                              <li key={link} className="group">
                                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-lg font-bold text-heading hover:text-brand transition-all flex items-center gap-3 uppercase tracking-tight">
                                      <span className="w-1.5 h-1.5 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                                      {link}
                                  </a>
                              </li>
                          ))}
                       </ul>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                       <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted mb-10 border-b border-border pb-4 w-fit pr-8">Availability</h4>
                       <div className="space-y-6">
                           <div className="flex items-center gap-3 text-brand">
                               <div className="w-2 h-2 rounded-full bg-brand animate-pulse shadow-glow" />
                               <span className="text-sm font-black uppercase tracking-widest leading-none">Accepting Q3 Projects</span>
                           </div>
                           <p className="text-xs text-body font-medium leading-relaxed max-w-[200px]">Currently scaling venture-backed products. Strategic remote partnership only.</p>
                       </div>
                  </div>
              </div>
          </div>

          <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.6em] text-muted text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="opacity-60">© 2026 ARCHITECTED BY ALLAH NAWAZ.</div>
                  <div className="flex items-center gap-6 opacity-30 hover:opacity-100 transition-opacity">
                      <a href="#" className="hover:text-heading transition-colors">Privacy</a>
                      <a href="#" className="hover:text-heading transition-colors">Terms</a>
                      <a href="#" className="hover:text-heading transition-colors">Legal</a>
                  </div>
              </div>
              <div className="flex items-center gap-3 text-brand font-bold bg-brand/5 px-4 py-2 rounded-full border border-brand/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-glow animate-pulse" />
                  PIXEL PERFECT PROTOCOL v2.4
              </div>
          </div>
      </div>
    </footer>
);

const BackToTop = () => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const toggleVisible = () => setVisible(window.scrollY > 500);
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileHover={{ y: -4, backgroundColor: '#10b981' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[100] w-12 h-12 md:w-14 md:h-14 bg-black text-white rounded-2xl flex items-center justify-center shadow-glow border border-white/10 hover:border-brand/40 transition-colors outline-none group"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-5 h-5 md:w-6 h-6 transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 rounded-2xl bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default function App() {
  const [view, setView] = React.useState('public');

  React.useEffect(() => {
    document.title = "Allah Nawaz | Product Design Director for Startups & SaaS";
    const meta = document.createElement('meta');
    meta.name = "description";
    meta.content = "Allah Nawaz specialized in architecting high-fidelity digital products and scalable design systems for startups and SaaS ventures.";
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-body selection:bg-brand/30 selection:text-white noise-texture relative overflow-x-hidden" role="main" aria-label="Allah Nawaz Portfolio">
      <div className="fixed inset-0 dot-grid opacity-[0.05] pointer-events-none" aria-hidden="true" />
      
      <Navbar onViewChange={setView} currentView={view} />
      
      <AnimatePresence mode="wait">
        {view === 'public' ? (
          <motion.main 
            key="public"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            id="main-content" 
            className="relative z-10"
          >
            <Hero />
            <ClientTicker />
            <Portfolio />
            <DesignSystem />
            <DesignProcess />
            <DesignServicePackages />
            <FAQ />
            <About />
            <Skills />
            <Testimonials />
            <Vision />
            <TrustSignals />
            <Contact />
            <FinalCTA />
          </motion.main>
        ) : (
          <motion.div
            key="strategy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <StrategyCommandCenter />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <BackToTop />
      <ProjectAIGenerator />
    </div>
  );
}
