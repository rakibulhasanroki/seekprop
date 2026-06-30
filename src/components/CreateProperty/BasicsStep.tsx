import { MapPin } from "lucide-react";

export default function BasicsStep() {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-6">
      <div>
        <label className="text-xs font-medium text-secondary uppercase tracking-wide">
          Property Title
        </label>
        <input
          type="text"
          placeholder="e.g. Modern Glass Villa in Beverly Hills"
          className="w-full mt-2 px-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
        />
        <p className="text-xs text-muted-foreground mt-1.5 italic">
          Craft a compelling title to attract high-intent buyers.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-medium text-secondary uppercase tracking-wide">
            Property Type
          </label>
          <select className="w-full mt-2 px-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary">
            <option>Luxury Villa</option>
            <option>Penthouse</option>
            <option>Single Family</option>
            <option>Apartment</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-secondary uppercase tracking-wide">
            Location
          </label>
          <div className="relative mt-2">
            <MapPin
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="City, Country"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          Next Step
        </button>
      </div>
    </div>
  );
}
