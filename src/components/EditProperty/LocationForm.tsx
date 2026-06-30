import { MapPin } from "lucide-react";

type Property = {
  location: string;
};

export default function LocationForm({ property }: { property: Property }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <MapPin size={16} className="text-secondary" />
        <h2 className="text-sm font-bold text-primary">Location</h2>
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Street Address
        </label>
        <input
          type="text"
          placeholder="Street address"
          className="w-full mt-2 px-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          City
        </label>
        <input
          type="text"
          defaultValue={property.location.split(",")[0]}
          className="w-full mt-2 px-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
        />
      </div>

      <div className="w-full h-32 rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center">
        <p className="text-xs text-muted-foreground">Map placeholder</p>
      </div>

      <button className="text-xs font-medium text-secondary hover:underline text-left">
        Adjust Map Pin
      </button>
    </div>
  );
}
