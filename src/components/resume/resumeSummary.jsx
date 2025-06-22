function ResumeSummary({ summary }) {
  const defaultText =
    "Computer Science Junior with experience in full-stack development, computer vision, and microservices deployed in the cloud, seeking internship opportunities in summer 2025.";

  // optional debug
  console.log("ResumeSummary summary:", summary);

  return (
    <div className="resume-summary-container">
      <p className="resume-summary resume-header">
        <strong>Summary</strong>
      </p>
      <div className="resume-summary-info">
        <p
          dangerouslySetInnerHTML={{
            __html:
              summary && summary.trim() !== ""
                ? summary
                : defaultText,
          }}
        />
      </div>
    </div>
  );
}

export default ResumeSummary;
