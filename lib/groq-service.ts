import Groq from "groq-sdk";

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function processMedicalReport(documents: any[]) {
  // Ensure we have the parsed document content
  const documentText = documents[0]?.pageContent || "";

  try {
    // Generate a comprehensive medical report analysis
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a medical report interpreter designed to:
          1. Provide a clear, professional overview of the medical report
          2. Translate medical terminology into layman's terms
          3. Highlight potential health concerns
          4. Suggest practical lifestyle improvements
          5. Maintain a supportive and encouraging tone
          6. Provide actionable health recommendations`,
        },
        {
          role: "user",
          content: `Please analyze the following medical report and provide a comprehensive breakdown:

          Medical Report Content:
          ${documentText}

          Please structure your response with these sections:
          1. Professional Medical Overview
          2. Simplified Explanation
          3. Health Insights
          4. Potential Concerns
          5. Improvement Recommendations
          6. Lifestyle and Exercise Suggestions`,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 0.7,
      max_tokens: 1024,
    });

    // Extract the AI-generated analysis
    const reportAnalysis =
      chatCompletion.choices[0]?.message?.content || "Unable to process report";

    return {
      originalDocument: documentText,
      analysis: reportAnalysis,
    };
  } catch (error) {
    console.error("Error processing medical report:", error);
    throw new Error("Failed to analyze medical report");
  }
}
