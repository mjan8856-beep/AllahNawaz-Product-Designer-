import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
    Layout, 
    BookOpen, 
    Palette, 
    FileText, 
    Share2, 
    Users, 
    Container, 
    Megaphone, 
    BarChart3,
    CheckCircle2,
    ArrowRight,
    Search,
    Globe,
    Zap,
    Mail,
    Linkedin,
    Plus,
    Minus,
    ExternalLink,
    Music
} from 'lucide-react';

const sections = [
    { id: 'structure', name: '01 Brand Infrastructure', icon: Layout },
    { id: 'case-studies', name: '02 Value Validation', icon: BookOpen },
    { id: 'system', name: '03 Ecosystem Logic', icon: Palette },
    { id: 'content', name: '04 Market Narratives', icon: FileText },
    { id: 'marketing', name: '05 Growth Protocols', icon: Share2 },
    { id: 'acquisition', name: '06 Capital Sourcing', icon: Users },
    { id: 'packages', name: '07 Engagement Models', icon: Container },
    { id: 'ads', name: '08 Influence Deployment', icon: Megaphone },
    { id: 'review', name: '09 Performance Audit', icon: BarChart3 },
];

export const StrategyCommandCenter = () => {
    const [activeSection, setActiveSection] = React.useState('structure');

    return (
        <section id="command-center" className="py-24 md:py-32 bg-white overflow-hidden border-t border-border">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Sidebar Navigation */}
                    <div className="lg:w-72 shrink-0">
                        <div className="sticky top-24 space-y-10">
                            <div>
                                <div className="text-brand text-[9px] font-bold uppercase tracking-[0.3em] mb-4">Command Center</div>
                                <h2 className="text-3xl font-black text-heading uppercase tracking-tight italic font-display text-brand">Strategy.</h2>
                            </div>
                            
                            <nav className="flex flex-col gap-1">
                                {sections.map((s) => {
                                    const Icon = s.icon;
                                    const isActive = activeSection === s.id;
                                    return (
                                        <button
                                            key={s.id}
                                            onClick={() => setActiveSection(s.id)}
                                            className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all text-left group ${
                                                isActive 
                                                ? 'bg-surface-section text-brand font-bold border border-border pointer-events-none' 
                                                : 'text-muted hover:bg-slate-50'
                                            }`}
                                        >
                                            <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-brand' : 'text-muted/40 group-hover:text-brand'}`} />
                                            <span className="text-[10px] uppercase tracking-widest leading-none truncate font-bold">{s.name}</span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>

                    {/* Dynamic Content Area */}
                    <div className="flex-grow min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSection}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-surface-section rounded-card border border-border p-8 md:p-12 shadow-sm min-h-[600px] relative overflow-hidden"
                            >
                                {activeSection === 'structure' && <StructureContent />}
                                {activeSection === 'case-studies' && <CaseStudyContent />}
                                {activeSection === 'system' && <SystemContent />}
                                {activeSection === 'content' && <WebsiteContentSection />}
                                {activeSection === 'marketing' && <MarketingContent />}
                                {activeSection === 'acquisition' && <AcquisitionContent />}
                                {activeSection === 'packages' && <PackagesContent />}
                                {activeSection === 'ads' && <AdsContent />}
                                {activeSection === 'review' && <ReviewContent />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StructureContent = () => (
    <div className="space-y-10">
        <h3 className="text-3xl font-black text-heading uppercase tracking-tight italic font-display text-brand">01. Blueprint.</h3>
        <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
                <div className="text-brand text-[9px] font-bold uppercase tracking-widest border-b border-border pb-4">The Narrative Flow</div>
                <ul className="space-y-5">
                    {[
                        { step: "Hero", goal: "Instant Authority. Hook with a category-defining result." },
                        { step: "Work", goal: "Quality over Quantity. Max 4 elite case studies." },
                        { step: "Protocol", goal: "Demystify process. Show the math behind design." },
                        { step: "Proof", goal: "Social Validation. High-trust signals from founders." },
                        { step: "Gate", goal: "High-Friction Barrier. Only serious inquiries." }
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4 group">
                            <span className="text-brand font-black text-xl italic font-display opacity-40">0{i+1}</span>
                            <div>
                                <div className="text-heading font-bold uppercase text-sm tracking-tight mb-1">{item.step}</div>
                                <p className="text-body text-xs leading-relaxed">{item.goal}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm">
                <div className="text-muted text-[9px] font-bold uppercase tracking-widest mb-6 border-b border-border pb-4">Conversion Metric</div>
                <div className="text-5xl font-black text-brand mb-4 italic font-display">68%</div>
                <p className="text-body text-xs leading-relaxed uppercase tracking-widest opacity-60">Avg. increase in response rate when lead with results rather than screenshots.</p>
            </div>
        </div>
    </div>
);

const CaseStudyContent = () => (
    <div className="space-y-10">
        <h3 className="text-3xl font-black text-heading uppercase tracking-tight italic font-display text-brand">02. Validation.</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
            {['GoRook (Mobile)', 'Gym SaaS (B2B)', 'Reserva (Systems)'].map((p) => (
                <button key={p} className="px-5 py-2 rounded-lg bg-white border border-border text-heading text-[10px] font-bold uppercase tracking-wider whitespace-nowrap hover:border-brand transition-all">
                    {p}
                </button>
            ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
            {[
                { title: "Discovery", icon: Search, desc: "Inefficient roadside assistance leads to 40min+ wait times." },
                { title: "Insight", icon: Globe, desc: "Real-time tracking triggers reduce perceived wait time by 28%." },
                { title: "Protocol", icon: Zap, desc: "Unified coordination hub for drivers with biometric safety checks." }
            ].map((card, i) => (
                <div key={i} className="p-8 rounded-xl bg-white border border-border flex flex-col items-center text-center shadow-sm">
                    <card.icon className="w-8 h-8 text-brand mb-6" />
                    <h4 className="text-sm font-black text-heading uppercase tracking-tight mb-3">{card.title}</h4>
                    <p className="text-body text-xs leading-relaxed">{card.desc}</p>
                </div>
            ))}
        </div>
    </div>
);

const SystemContent = () => (
    <div className="space-y-10">
        <h3 className="text-3xl font-black text-heading uppercase tracking-tight italic font-display text-brand">03. Logic.</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-3">
                <div className="h-20 bg-brand rounded-lg flex items-end p-3 border border-border">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">Precision</span>
                </div>
                <div className="text-[9px] uppercase tracking-widest text-muted font-bold">#10B981</div>
            </div>
            <div className="space-y-3">
                <div className="h-20 bg-slate-50 rounded-lg flex items-end p-3 border border-border">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-heading">Surface</span>
                </div>
                <div className="text-[9px] uppercase tracking-widest text-muted font-bold">#F8FAFC</div>
            </div>
            <div className="space-y-3">
                <div className="h-20 bg-white rounded-lg flex items-end p-3 border border-border">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-heading">Utility</span>
                </div>
                <div className="text-[9px] uppercase tracking-widest text-muted font-bold">#FFFFFF</div>
            </div>
            <div className="space-y-3">
                <div className="h-20 bg-slate-200 rounded-lg flex items-end p-3 border border-border">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-heading">Trace</span>
                </div>
                <div className="text-[9px] uppercase tracking-widest text-muted font-bold">#E2E8F0</div>
            </div>
        </div>
        <div className="p-8 rounded-xl bg-white border border-border shadow-sm">
            <div className="text-brand text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Typography Scale</div>
            <div className="space-y-6">
                <div className="flex items-end justify-between border-b border-border pb-4">
                    <div className="text-4xl font-black text-heading uppercase tracking-tight italic font-display text-brand">Alpha / 72px</div>
                    <div className="text-muted text-[10px] font-bold uppercase tracking-widest">Display Black</div>
                </div>
                <div className="flex items-end justify-between border-b border-border pb-4">
                    <div className="text-xl font-bold text-heading uppercase tracking-tight">Beta / 32px</div>
                    <div className="text-muted text-[10px] font-bold uppercase tracking-widest">Heading Bold</div>
                </div>
                <div className="flex items-end justify-between pb-1">
                    <div className="text-sm font-medium text-body">Gamma / 18px</div>
                    <div className="text-muted text-[10px] font-bold uppercase tracking-widest">Inter Medium</div>
                </div>
            </div>
        </div>
    </div>
);

const WebsiteContentSection = () => (
    <div className="space-y-10">
        <h3 className="text-3xl font-black text-heading uppercase tracking-tight italic font-display text-brand">04. Narratives.</h3>
        <div className="space-y-6">
            {[
                { label: "Hero Copy", content: "The Architecture of Intuition: Strategic Product Design for SaaS." },
                { label: "About Statement", content: "Product Design Director focused on B2B SaaS complexity. I transform technical debt into intuitive operational value." },
                { label: "Service Hook", content: "Conversion-first product design for Series A/B ventures. Built for scale, delivered with precision." }
            ].map((item, i) => (
                <div key={i} className="group">
                    <div className="flex items-center justify-between mb-3 leading-none">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-brand">{item.label}</span>
                        <button className="p-1.5 rounded bg-white border border-border text-muted hover:text-brand transition-colors"><FileText className="w-3 h-3" /></button>
                    </div>
                    <div className="p-5 rounded-lg bg-white border border-border text-heading text-sm font-medium italic leading-relaxed group-hover:border-brand transition-all shadow-sm">
                        "{item.content}"
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const MarketingContent = () => (
    <div className="space-y-10">
        <h3 className="text-3xl font-black text-heading uppercase tracking-tight italic font-display text-brand">05. Playbook.</h3>
        <div className="grid md:grid-cols-2 gap-10">
             <div className="space-y-6">
                <div className="flex items-center gap-3 text-brand">
                    <Linkedin className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">LinkedIn Mastery</span>
                </div>
                <ul className="space-y-4">
                    {['Post 3x weekly insights on SaaS UX failures.', 'Audit Series-A landing pages publicly.', 'Connect with 10 CEOs daily with a value-drop.'].map((li, i) => (
                        <li key={i} className="flex gap-3 text-xs font-medium text-body leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                            {li}
                        </li>
                    ))}
                </ul>
             </div>
             <div className="space-y-6">
                <div className="flex items-center gap-3 text-brand">
                    <Share2 className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Channels</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-white border border-border text-center shadow-sm">
                        <div className="text-[9px] font-bold uppercase mb-2 text-muted">TikTok</div>
                        <div className="text-heading font-bold text-xs">Process Clips</div>
                    </div>
                    <div className="p-5 rounded-xl bg-white border border-border text-center shadow-sm">
                        <div className="text-[9px] font-bold uppercase mb-2 text-muted">Behance</div>
                        <div className="text-heading font-bold text-xs">Mega Studies</div>
                    </div>
                </div>
             </div>
        </div>
    </div>
);

const AcquisitionContent = () => (
    <div className="space-y-10">
        <h3 className="text-3xl font-black text-heading uppercase tracking-tight italic font-display text-brand">06. High-Ticket.</h3>
        <div className="space-y-6">
            <div className="p-8 rounded-xl bg-brand text-white shadow-lg shadow-brand/20">
                <div className="flex items-center justify-between mb-6">
                     <div className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-80">Primary Outreach Script</div>
                     <Mail className="w-5 h-5 opacity-40" />
                </div>
                <p className="text-lg font-bold leading-snug mb-6 italic">"I noticed X about your product. In GoRook, we solved this by doing Y, resulting in 20% Z. Want a 2min Loom audit?"</p>
                <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">Success Rate: 12% Conversion to Meeting</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-white border border-border shadow-sm">
                    <h4 className="text-[9px] font-bold uppercase mb-3 text-brand">Upwork Hook</h4>
                    <p className="text-xs text-body leading-relaxed">Lead with a direct question about their tech stack or user abandonment rate.</p>
                </div>
                <div className="p-6 rounded-xl bg-white border border-border shadow-sm">
                    <h4 className="text-[9px] font-bold uppercase mb-3 text-brand">Twitter/X DM</h4>
                    <p className="text-xs text-body leading-relaxed">Compliment a specific feature, then suggest a logic-based improvement.</p>
                </div>
            </div>
        </div>
    </div>
);

const PackagesContent = () => (
    <div className="space-y-10">
        <h3 className="text-3xl font-black text-heading uppercase tracking-tight italic font-display text-brand">07. Engagement.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                { title: "Landing Page", price: "$2,499", time: "1 Week" },
                { title: "MVP SPRINT", price: "$4,999", time: "2 Weeks" },
                { title: "SaaS Dashboard", price: "$7,499", time: "4 Weeks" },
                { title: "Design System", price: "$9,999", time: "5 Weeks" }
            ].map((p, i) => (
                <div key={i} className="p-8 rounded-xl bg-white border border-border flex items-center justify-between group hover:border-brand transition-all shadow-sm">
                    <div>
                        <h4 className="text-lg font-black text-heading uppercase tracking-tight mb-1">{p.title}</h4>
                        <div className="text-[9px] font-bold uppercase text-muted tracking-widest">{p.time} Delivery Cycle</div>
                    </div>
                    <div className="text-right">
                        <div className="text-brand font-black text-lg italic font-display">{p.price}+</div>
                        <div className="text-[9px] font-bold text-muted uppercase tracking-[0.2em]">Starting At</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const AdsContent = () => (
    <div className="space-y-10">
        <h3 className="text-3xl font-black text-heading uppercase tracking-tight italic font-display text-brand">08. Influence.</h3>
        
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-white border border-border space-y-5 shadow-sm">
                <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-brand" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted">LinkedIn / B2B</span>
                </div>
                <div className="space-y-3">
                    <h4 className="text-lg font-black text-heading uppercase leading-tight italic font-display text-brand">"Is your SaaS losing revenue to bad UX?"</h4>
                    <p className="text-xs text-body leading-relaxed">
                        Most startups scale their tech but ignore their interface. Technical debt in your dashboard is a silent killer.
                    </p>
                </div>
                <button className="w-full py-3 bg-heading text-white rounded-lg font-bold uppercase tracking-widest text-[9px]">Copy Script</button>
            </div>

            <div className="p-8 rounded-xl bg-white border border-border space-y-5 shadow-sm">
                <div className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-brand" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted">TikTok / Reels</span>
                </div>
                <div className="space-y-3">
                    <h4 className="text-lg font-black text-heading uppercase leading-tight italic font-display text-brand">"3 SaaS UX Hacks for 2026"</h4>
                    <p className="text-xs text-body leading-relaxed italic">
                        [Fast transition of screens]<br />
                        "Stop building dashboards that need a user manual. Your users are quitting because of friction."
                    </p>
                </div>
                <button className="w-full py-3 border border-border text-heading rounded-lg font-bold uppercase tracking-widest text-[9px]">Copy Hook</button>
            </div>
        </div>
    </div>
);

const ReviewContent = () => (
    <div className="space-y-10">
        <h3 className="text-3xl font-black text-heading uppercase tracking-tight italic font-display text-brand">09. Audit.</h3>
        <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
                {[
                    { day: "Days 1-7", task: "Architect the 4 Core Case Studies.", color: "bg-brand" },
                    { day: "Days 8-14", task: "Build the Design System Library.", color: "bg-muted" },
                    { day: "Days 15-21", task: "Launch the Portfolio deployment.", color: "bg-muted" },
                    { day: "Days 22-30", task: "Direct Outreach to Founders.", color: "bg-muted" }
                ].map((step, i) => (
                    <div key={i} className="flex gap-10 relative z-10 group">
                        <div className={`w-10 h-10 rounded-full border-2 border-white ${step.color} shrink-0 flex items-center justify-center shadow-sm`}>
                            {i === 0 && <Zap className="w-4 h-4 text-white" />}
                        </div>
                        <div className="pt-1">
                            <div className="text-brand text-[9px] font-bold uppercase tracking-widest mb-1">{step.day}</div>
                            <h4 className="text-lg font-black text-heading tracking-tight uppercase leading-none">{step.task}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
