"use client";

import { useState } from "react";
import { Building2, Home, Trees, Monitor } from "lucide-react";

const categories = [
  { label: "Apartments", icon: Building2 },
  { label: "Villas", icon: Home },
  { label: "Family Homes", icon: Home },
  { label: "Land", icon: Trees },
  { label: "Office", icon: Monitor },
];

export default function Category() {
  const [active, setActive] = useState("Apartments");

  return (
    <section className="w-full py-8">
      <div className="mx-auto w-11/12 max-w-5xl">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {categories.map(({ label, icon: Icon }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl border transition-all duration-200 cursor-pointer min-w-[90px]
                  ${
                    isActive
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-border bg-background text-muted-foreground hover:border-secondary hover:text-secondary"
                  }`}
              >
                <Icon size={28} strokeWidth={1.5} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
