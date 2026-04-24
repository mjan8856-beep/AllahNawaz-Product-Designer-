import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Wand2, Copy, Check, Loader2 } from 'lucide-react';
import { enhanceProjectDescription } from '../lib/gemini';

export const ProjectAIGenerator = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [input, setInput] = React.useState('');
    const [result, setResult] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [copied, setCopied] = React.useState(false);

    const handleGenerate = async () => {
        if (!input.trim()) return;
        setLoading(true);
        setResult('');
        try {
            const enhanced = await enhanceProjectDescription(input);
            setResult(enhanced);
        } catch (error) {
            console.error(error);
            setResult('Failed to generate. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(result);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            {/* Float Trigger */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-32 right-10 z-[100] w-14 h-14 bg-gradient-to-br from-brand to-brand-hover text-white rounded-full flex items-center justify-center shadow-glow border border-white/20 group"
                aria-label="Open AI Project Assistant"
            >
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 sm:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-surface/80 backdrop-blur-md"
                        />
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl glass-card border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
                            
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                                        <Wand2 className="w-6 h-6 text-brand" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-heading font-display">Project Intel AI</h3>
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-muted font-black">Professional Narrative Generator</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-white/5 transition-colors text-muted"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-[0.4em] text-brand ml-1">Project Nucleus</label>
                                    <textarea 
                                        className="w-full h-32 px-6 py-5 rounded-input border border-white/5 bg-white/[0.02] focus:border-brand focus:bg-white/[0.04] focus:shadow-glow focus:ring-2 focus:ring-brand focus:ring-offset-4 focus:ring-offset-surface text-white outline-none resize-none transition-all font-medium placeholder:text-muted/40"
                                        placeholder="e.g., I built a real-time crypto dasboard that uses AI to predict market trends with 90% accuracy..."
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                    />
                                </div>

                                <button 
                                    disabled={loading || !input.trim()}
                                    onClick={handleGenerate}
                                    className="btn-primary w-full py-5 text-xs font-black uppercase tracking-[0.4em] disabled:opacity-50 disabled:grayscale transition-all flex items-center justify-center gap-3 focus:ring-2 focus:ring-brand focus:ring-offset-4 focus:ring-offset-surface outline-none"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" /> 
                                            Synthesizing Narrative...
                                        </>
                                    ) : (
                                        <>
                                            Enhance Project AI <Sparkles className="w-4 h-4" />
                                        </>
                                    )}
                                </button>

                                <AnimatePresence>
                                    {result && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-4 pt-8 border-t border-white/5"
                                        >
                                            <div className="text-[11px] font-black uppercase tracking-[0.4em] text-muted ml-1">Refined Result</div>
                                            <div className="relative group">
                                                <div className="w-full px-6 py-6 rounded-input bg-brand/5 border border-brand/20 text-white italic leading-relaxed text-[15px]">
                                                    {result}
                                                </div>
                                                <button 
                                                    onClick={handleCopy}
                                                    className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-surface border border-brand/40 flex items-center justify-center shadow-glow text-brand hover:scale-110 active:scale-95 transition-all"
                                                    aria-label="Copy to clipboard"
                                                >
                                                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
