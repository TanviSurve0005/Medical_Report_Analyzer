import { NextRequest, NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
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
    // Save file temporarily
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replace(/\s/g, "-");
    const filepath = join("/tmp", filename);

    await writeFile(filepath, buffer);

    // Process the file with LlamaParseReader
    const reader = new LlamaParseReader({ resultType: "markdown" });
    const documents = await reader.loadData(filepath);

    // Delete the file after processing
    await unlink(filepath);

    // Process the medical report
    const processedReport = await processMedicalReport(documents);
    console.log({processedReport});

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
