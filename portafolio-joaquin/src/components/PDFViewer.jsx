export const PdfViewer = ({ title, pdfUrl, height = "800px" }) => {
  return (
    <div className="w-full rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <h3 className="text-xl font-semibold">{title}</h3>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline underline-offset-4 hover:opacity-80"
        >
          Open PDF
        </a>
      </div>

      <div className="w-full bg-muted" style={{ height }}>
        <iframe
          src={pdfUrl}
          title={title}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};