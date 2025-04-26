import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateContent = async (prompt: string) => {
    try{
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text; // return the response
    }catch (error) {
        console.error('Error calling Gemini API:', error);
        throw new Error("Failed to fetch response from Gemini API. Please check your network or API key.");
    }
}