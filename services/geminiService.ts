
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIRecommendation = async (userGoal: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are Tekkivo AI Consultant. A user wants to build: "${userGoal}". 
      Based on Tekkivo's offerings (Templates: Next.js, Vue, WordPress, PHP; Premium Solutions: Admin panels, Lister sites), 
      recommend a stack and explain why. Be professional and persuasive.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedStack: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            suggestedSolutionType: { type: Type.STRING, description: "Either 'Template' or 'Premium Pre-made Solution'" },
            estimatedLaunchTime: { type: Type.STRING }
          },
          required: ["recommendedStack", "reasoning", "suggestedSolutionType", "estimatedLaunchTime"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Consultation Error:", error);
    return null;
  }
};
