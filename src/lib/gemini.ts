import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const generateBio = async (role: string, experience: string, goals: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert executive career coach specializing in the 2026 tech landscape.
      
      Example 1 (Perfect Output):
      Input: Senior AI Architect, 10 years, Leadership roles.
      Output: Architecting the future of neural interfaces. 10+ years scaling planetary-scale AI systems for Fortune 500s. Committed to ethical AGI leadership and architectural excellence.
      
      Example 2 (Perfect Output):
      Input: Junior UX Designer, 1 year, Remote work.
      Output: User explorer of the 2026 metaverse. Crafting frictionless, emotion-driven journeys for decentralized platforms. Obsessed with micro-interactions and digital empathy.

      Create a compelling, punchy bio based on:
      Role: ${role}
      Experience: ${experience}
      Goals: ${goals}
      
      Requirements:
      - Tone: Expert, Visionary, Impact-focused.
      - Length: Under 250 characters.
      - Focus on unique value proposition.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating bio. Please verify your connection.";
  }
};

export const enhanceProjectDescription = async (description: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a high-level product marketing strategist. 
      
      Example (Perfect Output):
      Original: I made a payment app.
      Enhanced: Engineered a zero-latency FinTech ecosystem that handles 10k TPS. Focused on biometric security and radical user onboarding efficiency.

      Enhance this: "${description}".
      
      Requirements:
      - Tone: Senior-level, result-oriented.
      - Precision: Use technical verbs.
      - Length: Exactly 2 sentences.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return description;
  }
};
