import { NextResponse } from "next/server";

// The strict identity of your AI
const SYSTEM_PROMPT = `You are the exclusive AI Concierge for Xpandify, a high-end boutique digital agency and atelier based in London, founded by Benyamin Saeidian. 
Your tone is incredibly elegant, sophisticated, minimalist, and highly professional. You speak as a representative of Xpandify.
Your services include: Bespoke Web Design, Headless E-Commerce, Immersive Web Applications, Digital Branding & Identity, and Next-Gen AI Integration.
Rules:
1. Never break character.
2. Keep responses brief, luxurious, and highly concise (maximum 2-3 short sentences).
3. Do not use emojis, except for an occasional ✨ if appropriate.
4. If asked about pricing, politely state that Xpandify crafts bespoke solutions and invite them to submit an inquiry via the Contact page.`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "AI configuration missing." }, { status: 500 });
    }

    // Format the conversation history for Google Gemini's API
    const contents = history.map((msg: any) => ({
      role: msg.role === "ai" ? "model" : "user",
      parts: [{ text: msg.content }]
    }));
    contents.push({ role: "user", parts: [{ text: message }] });

    // Direct fetch to Gemini 1.5 Flash (fastest, cheapest, highest performance for chat)
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: contents,
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to fetch AI response");
    }

    const aiMessage = data.candidates[0].content.parts[0].text;

    return NextResponse.json({ reply: aiMessage });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ reply: "I apologize, but our systems are currently undergoing maintenance. Please reach out via hello@xpandify.co.uk." }, { status: 500 });
  }
}
