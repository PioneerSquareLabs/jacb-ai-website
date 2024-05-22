import React from "react";

const PaperPage: React.FC = () => {
  return (
    <div className="w-full">
      <iframe
        src="assets/pdfs/jacob-whitepaper.pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Just Another AI Paper: Presenting JACoB, A Workflow-Driven
        Approach to Integrating LLMs into Software Engineering"
      />
    </div>
  );
};

export default PaperPage;
