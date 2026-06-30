"use client";

import { useState } from "react";
import { ListChecks } from "lucide-react";

type Property = {
  beds: number;
  baths: number;
  sqft: string;
};

const amenitiesList = [
  { id: "pool", label: "Swimming Pool", checked: true },
  { id: "smart", label: "Smart Home Sys", checked: true },
  { id: "garage", label: "Garage (2 Cars)", checked: true },
  { id: "garden", label: "Garden", checked: true },
  { id: "guest", label: "Guest House", checked: false },
  { id: "cooling", label: "Central Cooling", checked: true },
];

export default function FeaturesAmenitiesForm({
  property,
}: {
  property: Property;
}) {
  const [checks, setChecks] = useState(amenitiesList);

  const toggle = (id: string) => {
    setChecks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <ListChecks size={16} className="text-secondary" />
        <h2 className="text-sm font-bold text-primary">Features & Amenities</h2>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Bedrooms
          </label>
          <input
            type="text"
            defaultValue={property.beds}
            className="w-full mt-2 px-3 py-2 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Bathrooms
          </label>
          <input
            type="text"
            defaultValue={property.baths}
            className="w-full mt-2 px-3 py-2 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Sq Ft
          </label>
          <input
            type="text"
            defaultValue={property.sqft}
            className="w-full mt-2 px-3 py-2 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Year Built
          </label>
          <input
            type="text"
            defaultValue="2022"
            className="w-full mt-2 px-3 py-2 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {checks.map((item) => (
          <label
            key={item.id}
            className="flex items-center gap-2 text-sm text-primary cursor-pointer"
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggle(item.id)}
              className="w-4 h-4 rounded accent-secondary"
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
}
