import React, { JSX, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy, FaCheck } from "react-icons/fa";

interface CodeViewerProps {
  code: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        background: "#1e1e1e",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        width: "45vw",
      }}
    >
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          border: "none",
          background: copied ? "#2ecc71" : "#2d2d2d",
          color: "white",
          padding: "6px 10px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          zIndex: 10,
        }}
      >
        {copied ? (FaCheck({}) as JSX.Element) : (FaCopy({}) as JSX.Element)}
        {copied ? "Copied" : "Copy"}
      </button>

      {/* Syntax Highlighter */}
      <SyntaxHighlighter
        language="python"
        style={materialDark}
        showLineNumbers
        customStyle={{
          margin: 0,
          padding: "20px",
          fontSize: "14px",
          // background: "rgba(97, 97, 97)", // let theme control background
          borderRadius: "10px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
