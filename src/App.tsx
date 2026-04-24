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
  X
} from 'lucide-react';
import { ProjectAIGenerator } from './components/ProjectAIGenerator';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Work', 'Case Studies', 'Process', 'System', 'About', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'h-[72px] bg-surface/80 backdrop-blur-md border-b border-border' : 'h-[72px] md:h-[96px] bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group cursor-pointer" aria-label="AllahNawaz Home">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center group-hover:scale-105 transition-transform">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-heading font-display">Allah Nawaz</span>
        </a>

        <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-zinc-500">
          {navLinks.map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-black transition-colors relative group py-2">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
           <a href="#" className="hidden sm:flex px-6 py-2.5 bg-black text-white rounded-full text-xs font-bold hover:bg-zinc-800 transition-all border border-black shadow-sm">
                View Resume
           </a>
           
           <button 
             className="lg:hidden w-10 h-10 flex items-center justify-center text-heading hover:bg-zinc-100 rounded-md transition-colors"
             onClick={() => setMobileMenuOpen(true)}
             aria-label="Open navigation menu"
           >
             <Menu className="w-6 h-6" />
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
              </div>
              
              <div className="mt-auto pb-12 border-t border-border pt-12 px-4">
                <a href="#" className="block w-full py-5 bg-white text-black text-center rounded-full font-bold text-lg mb-8 shadow-xl">View Resume</a>
                <div className="flex justify-center gap-10 text-muted">
                    <a href="https://www.linkedin.com/in/allah-nawaz-256a81286/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="w-7 h-7 hover:text-white transition-colors" /></a>
                    <a href="https://www.behance.net/allahnawaz175" target="_blank" rel="noreferrer" aria-label="Behance"><Globe className="w-7 h-7 hover:text-white transition-colors" /></a>
                    <a href="https://www.instagram.com/anjan_malik_jan?igsh=djY2b3VlcnpuMjAz" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="w-7 h-7 hover:text-white transition-colors" /></a>
                    <a href="https://www.facebook.com/share/1HAuTr1A2f/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook className="w-7 h-7 hover:text-white transition-colors" /></a>
                    <a href="https://www.tiktok.com/@anjanmalikjan?_r=1&_t=ZS-95mWouNsA2j" target="_blank" rel="noreferrer" aria-label="TikTok"><Music className="w-7 h-7 hover:text-white transition-colors" /></a>
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
  <header className="relative min-h-[90vh] flex items-center pt-[100px] overflow-hidden bg-surface">
    {/* Cinematic Light Leak Backgrounds */}
    <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,var(--color-brand),transparent_70%)] blur-[160px] rounded-full translate-x-1/4 -translate-y-1/4 animate-pulse" />
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,var(--color-accent),transparent_70%)] blur-[120px] rounded-full translate-x-1/3 translate-y-1/3" />
    </div>

    <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex flex-col items-start w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-card border border-border text-[11px] font-bold uppercase tracking-widest text-muted mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Product Designer & Strategy 2026
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-8 leading-[1.1] tracking-[-0.04em] font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-heading text-balance w-full"
          >
            Designing products for <br /><span className="text-zinc-700">SaaS & B2B platforms.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-2xl text-body w-full lg:max-w-xl mb-12 leading-relaxed font-medium text-pretty"
          >
            Product Designer with 2+ years of experience crafting intuitive digital products and high-impact design systems that improve usability and business outcomes. 🚀
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <a href="#work" className="w-full sm:w-auto px-12 py-5 bg-heading text-surface rounded-full font-bold shadow-2xl hover:bg-zinc-200 text-center transition-all uppercase tracking-widest text-sm">View Case Studies</a>
            <a href="#contact" className="w-full sm:w-auto px-12 py-5 bg-transparent text-heading border border-border rounded-full font-bold hover:border-white text-center transition-all uppercase tracking-widest text-sm">Contact Me</a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group hidden lg:block"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-900 to-transparent rounded-[40px] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
          <div className="relative rounded-[32px] border border-border bg-surface-card p-3 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-brand),transparent_60%)] opacity-20 pointer-events-none z-10" />
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
               alt="Portfolio Showcase" 
               className="w-full h-auto rounded-[24px] pointer-events-none group-hover:opacity-90 transition-opacity"
               referrerPolicy="no-referrer"
             />
          </div>
        </motion.div>
      </div>
    </div>
  </header>
);

const Portfolio = () => {
    const projects = [
        { 
            title: "AI Influencer Platform", 
            type: "SaaS / AI", 
            year: "2024",
            tags: ["SaaS", "AI", "Marketing"],
            desc: "Complete interface design for creator discovery and campaign management analytics.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", 
            link: "#" 
        },
        { 
            title: "Conectly SaaS", 
            type: "B2B SaaS", 
            year: "2024",
            tags: ["B2B", "Communication", "Web App"],
            desc: "Restructured IA and responsive prototypes to reduce workflow abandonment.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200", 
            link: "#" 
        },
        { 
            title: "Prime Estimation", 
            type: "Web Application", 
            year: "2023",
            tags: ["Construction", "UI Design", "Workflow"],
            desc: "Simplified data entry workflows and intuitive UI for non-technical construction teams.",
            image: "https://images.unsplash.com/photo-1503387762-592dea58ef4e?auto=format&fit=crop&q=80&w=1200", 
            link: "#" 
        },
        { 
            title: "Shine Well Redesign", 
            type: "Product Redesign", 
            year: "2024",
            tags: ["Redesign", "Accessibility", "UI System"],
            desc: "Complete visual overhaul improving accessibility, typography, and component consistency.",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200", 
            link: "#" 
        }
    ];

    return (
        <section id="work" className="py-32 md:py-48 bg-surface-section overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                <div className="w-full lg:max-w-2xl mb-32">
                    <div className="text-muted text-xs font-bold uppercase tracking-[4px] mb-6">Selected Work</div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-heading leading-none md:leading-[0.9] tracking-tighter text-balance uppercase">Category defining <br /><span className="text-zinc-800">projects.</span></h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-32">
                    {projects.map((p, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border border-zinc-100 bg-zinc-50 shadow-sm mb-10 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4">
                                <img 
                                    src={p.image} 
                                    alt={p.title} 
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted">
                                    <span>{p.type}</span>
                                    <span className="w-1 h-1 rounded-full bg-zinc-800" />
                                    <span>{p.year}</span>
                                </div>
                                <h3 className="text-4xl font-black text-heading group-hover:tracking-tight transition-all">{p.title}</h3>
                                <p className="text-xl text-body leading-relaxed font-medium w-full lg:max-w-lg text-left text-pretty">{p.desc}</p>
                                
                                <div className="flex flex-wrap gap-2 pt-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                   {p.tags.map(tag => (
                                     <span key={tag} className="px-5 py-2 bg-surface-card rounded-full text-[10px] font-bold uppercase tracking-widest border border-border text-muted hover:border-brand hover:text-brand transition-colors">{tag}</span>
                                   ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CaseStudyDeepDive = () => {
    const process = [
        { step: "01", title: "Research", desc: "User interviews and competitive analysis to identify fragmentation in influencer data workflows.", color: "bg-mint" },
        { step: "02", title: "Ideation", desc: "Mapping the user journey from discovery to campaign execution with scalable service blueprints.", color: "bg-zinc-100" },
        { step: "03", title: "Design", desc: "Building a high-performance design system with real-time analytics and creator filters.", color: "bg-mint" },
        { step: "04", title: "Testing", desc: "Iterative usability sessions resulting in a 35% improvement in task completion rates.", color: "bg-zinc-100" }
    ];

    const auditIssues = [
        { issue: "Discovery Friction", impact: "High", solution: "Unified Filter Engine" },
        { issue: "Fragmented Data", impact: "Medium", solution: "Dynamic Dashboard V2" },
        { issue: "Onboarding Drop", impact: "High", solution: "Step-by-Step Wizard" }
    ];

    return (
        <section id="case-studies" className="bg-charcoal text-white py-32 md:py-48 overflow-hidden">
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
                            alt="Lumina Cinematic Banner"
                            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                        <div className="absolute top-8 left-8 sm:bottom-16 sm:left-16 sm:top-auto w-[calc(100%-64px)] lg:max-w-2xl">
                             <div className="text-mint-dark text-[10px] font-black uppercase tracking-[6px] mb-6">Case Study Alpha</div>
                             <h2 className="text-3xl sm:text-6xl md:text-[100px] font-black leading-tight md:leading-[0.8] tracking-tighter text-white text-balance uppercase">Lumina <br /><span className="text-mint">AI Systems.</span></h2>
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
                            className="p-10 rounded-[48px] border border-white/5 bg-charcoal-light group hover:border-mint/20 transition-all"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${p.color} flex items-center justify-center text-charcoal font-black text-xs mb-8 group-hover:rotate-12 transition-transform`}>
                                {p.step}
                            </div>
                            <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{p.title}</h3>
                            <p className="text-zinc-500 font-medium leading-relaxed text-pretty">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* UI Mockups Gallery */}
                <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 mb-48">
                    <div className="space-y-12">
                        <div className="aspect-[4/3] rounded-[60px] overflow-hidden border border-white/5 bg-charcoal-light">
                            <img src="https://images.unsplash.com/photo-1551288049-bbda4852c744?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Mockup 1" referrerPolicy="no-referrer" />
                        </div>
                        <div className="grid grid-cols-2 gap-12">
                            <div className="aspect-square rounded-[60px] overflow-hidden border border-white/5 bg-charcoal-light">
                                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Mockup 2" referrerPolicy="no-referrer" />
                            </div>
                            <div className="aspect-square rounded-[60px] overflow-hidden border border-white/5 bg-charcoal-light">
                                <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Mockup 3" referrerPolicy="no-referrer" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-12">
                         <div className="max-w-md">
                             <h4 className="text-[10px] font-bold uppercase tracking-widest text-mint-dark mb-6">Interaction Specs</h4>
                             <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight md:leading-[0.9] tracking-tighter">Cinematic <br />Execution.</h3>
                             <p className="text-xl text-zinc-400 font-medium leading-tight">Every interaction is architected with visceral feedback loops and performance-optimized motion systems.</p>
                         </div>
                         
                         {/* UX Audit Table */}
                         <div className="mt-12 bg-charcoal-light p-10 rounded-[48px] border border-white/5">
                            <h4 className="text-sm font-black uppercase tracking-widest mb-10 pb-4 border-b border-white/10">UX Performance Audit</h4>
                            <div className="space-y-8">
                                {auditIssues.map((item, i) => (
                                    <div key={i} className="grid grid-cols-[1fr,auto] gap-4 items-center">
                                        <div>
                                            <div className="text-lg font-black text-white">{item.issue}</div>
                                            <div className="text-[10px] text-mint-dark font-bold uppercase tracking-widest mt-1">Solution: {item.solution}</div>
                                        </div>
                                        <div className="px-4 py-1 rounded-full border border-mint/20 text-[10px] font-black text-mint uppercase tracking-widest">
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
            title: "Discover", 
            subtitle: "Empathy & Research", 
            desc: "Deep immersion into user needs through interviews, surveys, and stakeholder workshops to define the target problem space." 
        },
        { 
            title: "Define", 
            subtitle: "Strategy & IA", 
            desc: "Synthesizing research into actionable insights, user personas, and a scalable information architecture for clear product logic." 
        },
        { 
            title: "Design", 
            subtitle: "Execution & Craft", 
            desc: "Iterative high-fidelity UI systems and interactive prototypes built with surgical precision and motion in mind." 
        },
        { 
            title: "Deliver", 
            subtitle: "Testing & Handoff", 
            desc: "Rigorous usability testing followed by pixel-perfect documentation to ensure seamless engineering implementation and quality." 
        }
    ];

    return (
        <section id="process" className="py-32 md:py-48 bg-surface-section">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32 w-full">
                    <div className="w-full lg:max-w-2xl">
                        <div className="text-muted text-xs font-bold uppercase tracking-[4px] mb-6">Methodology</div>
                        <h2 className="text-5xl md:text-8xl font-black text-heading leading-tight tracking-tighter uppercase">The Design <br /><span className="text-zinc-800">Process.</span></h2>
                    </div>
                    <p className="text-xl text-body font-medium w-full lg:max-w-sm leading-snug">A systematic approach to solving complex problems through logic, research, and visual clarity.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="p-10 md:p-12 rounded-[48px] bg-surface-card border border-border group relative hover:shadow-3xl transition-all duration-700 h-full flex flex-col"
                        >
                            <div className="text-[12px] font-black text-surface bg-heading w-14 h-14 rounded-[20px] flex items-center justify-center mb-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                                0{i + 1}
                            </div>
                            <h3 className="text-3xl font-black text-heading mb-2 tracking-tighter uppercase">{step.title}</h3>
                            <div className="text-[10px] font-bold text-muted uppercase tracking-[4px] mb-8">{step.subtitle}</div>
                            <p className="text-lg text-body font-medium leading-relaxed tracking-tight mt-auto text-left text-pretty">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DesignSystem = () => {
    const colors = [
        { name: "Neutral 950", hex: "#050505", label: "Heading / Primary Text" },
        { name: "Neutral 500", hex: "#71717A", label: "Body / Secondary Text" },
        { name: "Neutral 100", hex: "#09090B", label: "Background / Surface" },
        { name: "Accent", hex: "#10B981", label: "Core Global CTA" }
    ];

    const typography = [
        { tag: "H1", font: "Outfit", size: "128px", weight: "Black", letterSpacing: "-0.05em" },
        { tag: "Body", font: "Inter", size: "20px", weight: "Medium", letterSpacing: "Normal" }
    ];

    return (
        <section id="system" className="py-32 md:py-48 bg-surface border-t border-border">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                <div className="w-full lg:max-w-2xl mb-32">
                    <div className="text-muted text-xs font-bold uppercase tracking-[4px] mb-6">Technical Foundation</div>
                    <h2 className="text-5xl md:text-8xl font-black text-heading leading-tight tracking-tighter uppercase">Design <br /><span className="text-zinc-800">System.</span></h2>
                </div>

                <div className="grid lg:grid-cols-[1fr,2fr] gap-24 items-start">
                    <div className="space-y-16">
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-heading border-b border-white pb-4 mb-10">Color Theory (Monochrome)</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {colors.map(c => (
                                    <div key={c.name} className="group">
                                        <div 
                                            className="h-32 rounded-3xl mb-4 border border-border shadow-sm transition-transform group-hover:scale-[1.02]" 
                                            style={{ backgroundColor: c.hex }} 
                                        />
                                        <div className="text-xs font-black text-heading uppercase mb-1">{c.name}</div>
                                        <div className="text-[10px] text-muted font-bold uppercase tracking-widest">{c.hex}</div>
                                        <div className="text-[10px] text-muted mt-2 font-medium">{c.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-heading border-b border-white pb-4 mb-10">Grid & Spacing</h4>
                            <div className="p-8 bg-surface-section rounded-3xl border border-border flex items-center justify-center gap-1">
                                {[4, 8, 16, 24, 32, 48, 64].map(s => (
                                    <div key={s} className="bg-white/10 border border-white/5 flex items-center justify-center text-[8px] font-bold text-white/40" style={{ width: s, height: s }}>
                                        {s}
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-muted font-medium mt-6 leading-relaxed">Built on a strict 8px atomic grid system to ensure mathematical consistency across all responsive breakpoints.</p>
                        </div>
                    </div>

                    <div className="bg-surface-section rounded-[60px] p-12 md:p-24 border border-border">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-heading border-b border-white pb-4 mb-20">Typography Scale</h4>
                        <div className="space-y-24">
                            {typography.map(t => (
                                <div key={t.tag} className="group">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-[10px] font-black uppercase tracking-[4px] text-muted group-hover:text-heading transition-colors">{t.tag} Architecture</span>
                                        <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{t.font} / {t.weight} / {t.size}</span>
                                    </div>
                                    <div 
                                        className="text-heading transition-all duration-700 group-hover:tracking-normal"
                                        style={{ 
                                            fontFamily: t.font === "Outfit" ? "'Outfit', sans-serif" : "'Inter', sans-serif",
                                            fontSize: "clamp(2rem, 10vw, " + t.size + ")",
                                            fontWeight: t.weight === "Black" ? 900 : 500,
                                            letterSpacing: t.letterSpacing,
                                            lineHeight: 1
                                        }}
                                    >
                                        The quick brown fox jumps over the lazy dog.
                                    </div>
                                </div>
                            ))}

                            <div className="pt-20 border-t border-border">
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                                    {["Thin", "Light", "Regular", "Medium", "Bold", "Black"].map(w => (
                                        <div key={w} className="space-y-4">
                                            <div className="text-[48px] font-black text-zinc-800 leading-none">Aa</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-muted">{w} 100-900</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const About = () => (
    <section id="about" className="py-32 md:py-48 bg-surface overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1 w-full">
                   <div className="text-muted text-xs font-bold uppercase tracking-[4px] mb-8">The Designer</div>
                   <h2 className="text-4xl md:text-7xl font-black text-heading leading-tight md:leading-[0.9] tracking-tighter mb-12 text-balance uppercase">Scaling products with <br /><span className="text-zinc-800">strategic design.</span></h2>
                   
                   <div className="space-y-8 text-xl md:text-2xl text-body font-medium leading-relaxed tracking-tight w-full lg:max-w-2xl text-left text-pretty">
                       <p>
                         I am a strategic Product Designer with experience delivering end-to-end product design across SaaS platforms, B2B tools, and marketing products. I work closely with product managers and engineers to transform complex ideas into intuitive user experiences.
                       </p>
                       <p>
                         My focus is on Product Thinking, UX Strategy, Scalable Design Systems, and Conversion-focused interfaces. I enjoy solving complex problems and creating products that are both usable and impactful.
                       </p>
                   </div>
                   
                   <div className="mt-20 grid grid-cols-2 gap-16 border-t border-border pt-16">
                       <div className="space-y-4">
                           <h4 className="text-[10px] font-bold uppercase tracking-widest text-heading border-b border-heading pb-2 inline-block">Education</h4>
                           <p className="text-lg font-black text-heading">Associate Degree <br /><span className="text-muted font-medium text-sm">Islamia University of Bahawalpur</span></p>
                       </div>
                       <div className="space-y-4">
                           <h4 className="text-[10px] font-bold uppercase tracking-widest text-heading border-b border-heading pb-2 inline-block">Certs</h4>
                           <p className="text-lg font-black text-heading">Web & IT Specialist <br /><span className="text-muted font-medium text-sm">NAVTTC / TEVTA</span></p>
                       </div>
                   </div>
                </div>

                <div className="order-1 lg:order-2">
                   <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-[4/5] rounded-[60px] overflow-hidden border border-border bg-surface-card p-2 shadow-2xl"
                   >
                       <img 
                           src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200" 
                           alt="Product UI Architecture" 
                           className="w-full h-full object-cover rounded-[52px] grayscale hover:grayscale-0 transition-all duration-1000 shadow-inner"
                           referrerPolicy="no-referrer"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-surface/20 to-transparent pointer-events-none" />
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
    const coreCompetencies = [
        "Product Thinking", "UX Strategy", "End-to-End Product Design", 
        "User Research", "Information Architecture", "Interaction Design",
        "Usability Testing", "A/B Testing", "WCAG Accessibility", 
        "Design Tokens", "Cross-functional Collaboration"
    ];
    
    const tools = [
        { name: "Figma", icon: <AnimatedFigmaIcon />, category: "Design" },
        { name: "Framer", icon: <AnimatedFramerIcon />, category: "Prototyping" },
        { name: "Maze", icon: <AnimatedMazeIcon />, category: "Research" },
        { name: "UserTesting", icon: <AnimatedUserTestingIcon />, category: "Testing" },
        { name: "Adobe CC", icon: <AnimatedAdobeIcon />, category: "Visual" },
        { name: "FigJam", icon: <AnimatedFigJamIcon />, category: "Strategy" }
    ];

    return (
        <section id="skills" className="py-32 md:py-48 bg-surface overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32 w-full">
                    <div className="w-full lg:max-w-2xl">
                        <div className="text-muted text-xs font-bold uppercase tracking-[4px] mb-6">Expertise</div>
                        <h2 className="text-5xl md:text-8xl font-black text-heading leading-tight tracking-tighter uppercase">Skills & <br /><span className="text-zinc-800">Tools.</span></h2>
                    </div>
                    <p className="text-xl text-body font-medium w-full lg:max-w-sm leading-snug">Bridging the gap between user psychology and technical execution using industry-leading software.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-16 lg:gap-24 items-start">
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-heading border-b border-white pb-4 mb-12">Core Competencies</h4>
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            {coreCompetencies.map((skill, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-surface-card border border-border text-base md:text-lg font-black text-heading hover:bg-heading hover:text-surface hover:-translate-y-1 transition-all cursor-default"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-heading border-b border-white pb-4 mb-12">Software Stack</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {tools.map((t, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 md:p-8 bg-surface-card rounded-[32px] border border-border group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                                >
                                    <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-surface border border-border flex items-center justify-center text-muted group-hover:text-brand-light group-hover:scale-110 transition-all duration-500 mb-6 md:mb-8 shadow-sm">
                                        {t.icon}
                                    </div>
                                    <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">{t.category}</div>
                                    <h3 className="text-lg md:text-xl font-black text-heading">{t.name}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Experience = () => (
    <section className="py-32 md:py-48 bg-surface-section text-body overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <div className="w-full lg:max-w-2xl mb-32">
                <div className="text-muted text-xs font-bold uppercase tracking-[4px] mb-6">Career Timeline</div>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight md:leading-[0.9] text-heading uppercase">Experience <br /><span className="text-zinc-800 italic">History.</span></h2>
            </div>
            
            <div className="divide-y divide-border">
                {[
                    { 
                        role: "Freelance Product Designer", 
                        company: "Global SaaS & E-commerce", 
                        period: "2024 — Present",
                        desc: "Designed complete product experiences for 8+ clients. Built scalable component-based design systems and delivered developer-ready Figma prototypes."
                    },
                    { 
                        role: "Product Designer", 
                        company: "T-Tech Solutions", 
                        period: "2025",
                        desc: "Led product design for multiple web and mobile features. Collaborated with engineers and PMs while contributing to the company design system."
                    },
                    { 
                        role: "UI/UX Designer", 
                        company: "Profituned Marketing", 
                        period: "2024 — 2025",
                        desc: "Redesigned landing pages and dashboards to improve usability. Conducted A/B testing and built a shared component library."
                    }
                ].map((job, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-8 md:gap-12 group hover:bg-surface-card transition-all px-4 md:px-8 -mx-4 md:-mx-8 rounded-3xl"
                    >
                        <div className="space-y-2">
                            <div className="text-muted font-bold uppercase tracking-widest text-[9px] md:text-[10px]">{job.period}</div>
                            <h3 className="text-2xl md:text-3xl font-black text-heading">{job.company}</h3>
                        </div>
                        <div className="space-y-4 md:space-y-6 w-full">
                            <h4 className="text-xl md:text-2xl font-black text-heading uppercase tracking-tight">{job.role}</h4>
                            <p className="text-base md:text-lg text-body font-medium leading-relaxed w-full lg:max-w-2xl text-left text-pretty">{job.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const GlobalPresence = () => (
    <section className="py-32 md:py-48 bg-surface-section overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand),transparent)] opacity-5 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="w-full">
                    <div className="text-muted text-xs font-bold uppercase tracking-[4px] mb-8">Strategic Reach</div>
                    <h2 className="text-4xl md:text-8xl font-black text-heading leading-tight md:leading-[0.8] tracking-tighter mb-12 uppercase">Global <br /><span className="text-zinc-800">Impact.</span></h2>
                    <p className="text-xl md:text-2xl text-body font-medium leading-relaxed mb-16 w-full lg:max-w-xl text-left text-pretty">
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
    const list = [
        { name: "Sarah Chen", role: "Design Lead @ Vercel", quote: "Allah brings a rare combination of strategic thinking and pixel-perfect execution. One of the best product designers I've worked with.", rating: 5 },
        { name: "Marcus Thorne", role: "Founder @ Linear", quote: "The attention to detail in the system architecture was world-class. It significantly accelerated our engineering team's output.", rating: 5 },
        { name: "Elena Ricci", role: "Product Manager @ Airbnb", quote: "A true visual storyteller. The ability to transform complex user flows into intuitive interfaces is unmatched.", rating: 5 },
        { name: "David K. Zhang", role: "Tech Lead @ Stripe", quote: "His contribution to our B2B interface logic was pivotal. He understands the intersection of aesthetics and business goals perfectly.", rating: 5 },
        { name: "Jessica Low", role: "VP Product @ Coinbase", quote: "Working with Allah was a seamless experience. He delivers high-fidelity prototypes that clarify complex crypto dynamics instantly.", rating: 5 },
        { name: "Arjun Mehta", role: "Sr. Designer @ Google", quote: "An absolute powerhouse of Product Thinking. Allah doesn't just design screens; he designs meaningful end-to-end user journeys.", rating: 5 }
    ];

    return (
        <section id="testimonials" className="py-32 md:py-48 bg-surface overflow-hidden">
             <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                <div className="w-full lg:max-w-2xl mb-32">
                    <div className="text-muted text-xs font-bold uppercase tracking-[4px] mb-6">Social Proof</div>
                    <h2 className="text-4xl md:text-7xl font-black text-heading leading-tight tracking-tighter text-balance uppercase">Loved by teams <br /><span className="text-zinc-800">worldwide.</span></h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {list.map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="p-10 md:p-12 rounded-[48px] bg-surface-card border border-border shadow-sm group hover:border-brand/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-10">
                                <Quote className="w-8 h-8 text-white/10" />
                                <div className="flex gap-1">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-xl md:text-2xl text-heading font-medium tracking-tight mb-12 leading-relaxed italic text-pretty">"{item.quote}"</p>
                            <div className="flex items-center gap-6 border-t border-border pt-10 mt-auto">
                                <div className="w-14 h-14 rounded-full bg-surface-section flex items-center justify-center font-bold text-heading border border-border uppercase">{item.name[0]}</div>
                                <div>
                                    <div className="font-black text-heading text-lg leading-none mb-1">{item.name}</div>
                                    <div className="text-[10px] text-muted font-bold uppercase tracking-[2px]">{item.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => (
    <section id="contact" className="py-32 md:py-48 bg-surface border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-24 items-center">
                <div className="w-full">
                    <div className="text-muted text-xs font-bold uppercase tracking-[4px] mb-8">Get In Touch</div>
                    <h2 className="text-4xl md:text-8xl font-black text-heading mb-12 leading-tight md:leading-[0.9] tracking-tighter uppercase">Let's build <br /> something <span className="text-zinc-800">extraordinary.</span></h2>
                    
                    <div className="flex flex-wrap gap-12 mt-20 w-full">
                        <div className="space-y-4 w-full md:w-auto">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted">Email Me</h4>
                            <a href="mailto:allahnawazmalik175@gmail.com" className="text-2xl md:text-4xl font-black text-heading hover:text-brand transition-colors underline decoration-1 underline-offset-8">allahnawazmalik175@gmail.com</a>
                        </div>
                        <div className="space-y-4 w-full md:w-auto">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted">WhatsApp</h4>
                            <a href="https://wa.me/923055742436" className="text-2xl md:text-4xl font-black text-heading hover:text-brand transition-colors uppercase italic tracking-tighter">+92 305 5742436</a>
                        </div>
                    </div>
                    <div className="mt-16 text-muted text-[10px] font-black uppercase tracking-[4px] flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                        Islamabad, Pakistan
                    </div>
                </div>

                <div className="flex flex-col gap-8 w-full">
                   <div className="p-10 md:p-12 bg-surface-card rounded-[48px] border border-border w-full">
                      <h4 className="text-xs font-black uppercase tracking-widest text-heading mb-10 pb-4 border-b border-border">Social platforms</h4>
                      <div className="space-y-6">
                        {[
                            { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/allah-nawaz-256a81286/" },
                            { name: "Behance", icon: <Globe className="w-5 h-5" />, href: "https://www.behance.net/allahnawaz175" },
                            { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "#" },
                            { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/anjan_malik_jan?igsh=djY2b3VlcnpuMjAz" },
                            { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/share/1HAuTr1A2f/" },
                            { name: "TikTok", icon: <Music className="w-5 h-5" />, href: "https://www.tiktok.com/@anjanmalikjan?_r=1&_t=ZS-95mWouNsA2j" }
                        ].map((s, i) => (
                            <a key={i} href={s.href} className="group flex items-center justify-between p-5 bg-surface rounded-2xl border border-border hover:border-brand transition-all w-full">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-surface-section flex items-center justify-center text-muted group-hover:text-heading transition-colors">
                                        {s.icon}
                                    </div>
                                    <span className="text-lg font-black text-heading tracking-tight">{s.name}</span>
                                </div>
                                <ArrowRight className="w-6 h-6 text-zinc-800 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                            </a>
                        ))}
                      </div>
                   </div>
                </div>
            </div>
        </div>
    </section>
);

const FinalCTA = () => (
    <section className="py-32 md:py-56 bg-surface-section overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand),transparent)] opacity-10" />
      <div className="max-w-[1440px] mx-auto relative z-10 w-full px-6 md:px-12">
          <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
          >
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-16 leading-tight md:leading-[0.8]">Have a project <br /> in mind?</h2>
              <p className="text-zinc-400 text-xl md:text-3xl mb-20 max-w-3xl mx-auto leading-tight font-medium">Let's architect category-defining <br className="hidden md:block" /> digital experiences together.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <a href="#contact" className="w-full sm:w-auto px-8 sm:px-16 py-8 bg-white text-black rounded-[24px] font-black hover:scale-105 active:scale-95 transition-all shadow-2xl text-xl uppercase tracking-widest text-center">Start a Project</a>
                  <a href="#work" className="w-full sm:w-auto px-8 sm:px-16 py-8 bg-zinc-900 text-white rounded-[24px] font-black border border-zinc-800 hover:bg-zinc-800 transition-all text-xl uppercase tracking-widest text-center">View Work</a>
              </div>
          </motion.div>
      </div>
    </section>
);

const Footer = () => (
    <footer className="py-24 md:py-32 bg-surface-section border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-24">
              <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-10">
                      <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center">
                          <Zap className="w-5 h-5 text-black" />
                      </div>
                      <span className="text-2xl font-black text-heading tracking-tighter uppercase">Allah Nawaz</span>
                  </div>
                  <p className="text-body text-lg w-full lg:max-w-md leading-relaxed mb-12 font-medium tracking-tight text-pretty">Designing meaningful digital products through research, strategy, and scalable design systems for the next generation of SaaS.</p>
                  <div className="flex flex-wrap gap-6">
                      {[
                          { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/allah-nawaz-256a81286/" },
                          { icon: <Globe className="w-6 h-6" />, href: "https://www.behance.net/allahnawaz175" },
                          { icon: <Github className="w-6 h-6" />, href: "#" },
                          { icon: <Instagram className="w-6 h-6" />, href: "https://www.instagram.com/anjan_malik_jan?igsh=djY2b3VlcnpuMjAz" },
                          { icon: <Facebook className="w-6 h-6" />, href: "https://www.facebook.com/share/1HAuTr1A2f/" },
                          { icon: <Music className="w-6 h-6" />, href: "https://www.tiktok.com/@anjanmalikjan?_r=1&_t=ZS-95mWouNsA2j" }
                      ].map((social, i) => (
                          <a key={i} href={social.href} className="w-14 h-14 rounded-2xl border border-border flex items-center justify-center text-muted hover:text-white hover:border-white transition-all">
                              {social.icon}
                          </a>
                      ))}
                  </div>
              </div>
              <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-[4px] text-muted mb-8">Expertise</h4>
                   <ul className="space-y-6 text-lg font-black text-heading">
                      {['SaaS Strategy', 'Product Design', 'Design Systems', 'Interface Logic'].map(link => (
                          <li key={link} className="hover:translate-x-2 transition-transform cursor-pointer w-fit leading-none">{link}</li>
                      ))}
                   </ul>
              </div>
              <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-[4px] text-muted mb-8">Navigation</h4>
                   <ul className="space-y-6 text-lg font-black text-heading">
                      {['About', 'Work', 'Case Studies', 'Contact'].map(link => (
                          <li key={link} className="hover:translate-x-2 transition-transform cursor-pointer w-fit leading-none uppercase">{link}</li>
                      ))}
                   </ul>
              </div>
          </div>
          <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold uppercase tracking-[3px] text-muted text-center md:text-left">
              <div>© 2026 ALLAH NAWAZ. ALL RIGHTS RESERVED.</div>
              <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  AVAILABLE FOR NEW PROJECTS
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-12 right-12 z-[100] w-16 h-16 bg-black text-white rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all outline-none focus:ring-4 focus:ring-zinc-200"
                    aria-label="Back to top"
                >
                    <ChevronDown className="w-8 h-8 rotate-180" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-body selection:bg-brand/30 selection:text-white noise-texture relative overflow-x-hidden">
      <div className="fixed inset-0 dot-grid opacity-[0.05] pointer-events-none" aria-hidden="true" />
      
      <Navbar />
      
      <main id="main-content" className="relative z-10">
        <Hero />
        <Portfolio />
        <CaseStudyDeepDive />
        <DesignProcess />
        <DesignSystem />
        <About />
        <Skills />
        <Experience />
        <GlobalPresence />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
      <BackToTop />
      <ProjectAIGenerator />
    </div>
  );
}
