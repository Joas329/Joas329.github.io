import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { ContactPanel } from "@/components/ContactPanel";
import { PdfViewer } from "@/components/PDFViewer";

export const Transcripts = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Background />
      <Navbar />

      <main className="relative z-10">
        <section className="max-w-7xl mx-auto py-24 px-6">
          <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wide">
            Transcripts
          </h2>

          <div className="space-y-10">
            <PdfViewer
              title="York University - B.Eng. Computer Engineering"
              pdfUrl="/assets/PhilcoJoaquin_Transcript.pdf"
              height="900px"
            />

            <PdfViewer
              title="York University - Cyber Security Operations Certificate"
              pdfUrl="/assets/SCS_Report.pdf"
              height="900px"
            />
          </div>
        </section>
      </main>

      <ContactPanel />
    </div>
  );
};