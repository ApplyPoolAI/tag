import React from "react";
import "../../style/content.css";

export default function Privacy() {
  return (
    <section className="h-screen bg-red-300">
      <iframe
        src="https://applypool.ai/"
        title="Embedded Website"
        width="100%"
        height="100%"
        sandbox="allow-same-origin allow-scripts"
        allow="fullscreen"
      ></iframe>
    </section>
  );
}
