import React from "react";
import StyledCodeViewer from "./StyledCodeViewer";

interface CodeViewerProps {
  code: string;
}

export default function CodeViewer({ code }: CodeViewerProps) {
  return (
    <StyledCodeViewer>
      <pre>
        <code>{code}</code>
      </pre>
    </StyledCodeViewer>
  );
}
