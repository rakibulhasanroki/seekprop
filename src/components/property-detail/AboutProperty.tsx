"use client";

import { useState } from "react";

export default function AboutProperty({
  description,
}: {
  description: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold text-primary">About this property</h2>
      <p
        className={`text-sm text-muted-foreground leading-relaxed ${!expanded ? "line-clamp-4" : ""}`}
      >
        {description}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-secondary font-medium hover:underline text-left"
      >
        {expanded ? "Show less" : "Read more →"}
      </button>
    </div>
  );
}
