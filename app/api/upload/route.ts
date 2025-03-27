import { NextRequest, NextResponse } from "next/server";
import { writeFile, unlink, mkdir } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os"; // Add this import
import { LlamaParseReader } from "llamaindex";
import { processMedicalReport } from "@/lib/groq-service";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  try {
    // Get system temp directory (works across platforms)
    const tempDir = tmpdir();
    // Create a unique filename
    const filename = `${Date.now()}-${file.name.replace(/\s/g, "-")}`;
    const filepath = join(tempDir, filename);

    // Ensure temp directory exists
    await mkdir(tempDir, { recursive: true });

    // Save file temporarily
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filepath, buffer);

    // Process the file with LlamaParseReader
    const reader = new LlamaParseReader({ resultType: "markdown" });
    const documents = await reader.loadData(filepath);

    // Delete the file after processing
    await unlink(filepath).catch(err => 
      console.error("Error deleting temp file:", err)
    );

    // Check if documents are empty
    if (!documents || documents.length === 0 || documents[0].text === "NO_CONTENT_HERE") {
      return NextResponse.json(
        { error: "No content found in the document" },
        { status: 400 }
      );
    }

    // Process the medical report
    const processedReport = await processMedicalReport(documents);
    return NextResponse.json({
      success: true,
      report: processedReport,
    });
  } catch (error) {
    console.error("Error processing file:", error);
    return NextResponse.json(
      { error: "Error processing file" },
      { status: 500 }
    );
  }
}