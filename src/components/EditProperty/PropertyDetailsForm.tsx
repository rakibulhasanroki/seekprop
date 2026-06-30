import { Info } from "lucide-react";

type Property = {
  title: string;
  price: string;
  type: string;
  description: string;
};

export default function PropertyDetailsForm({
  property,
}: {
  property: Property;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Info size={16} className="text-secondary" />
        <h2 className="text-sm font-bold text-primary">Property Details</h2>
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Listing Title
        </label>
        <input
          type="text"
          defaultValue={property.title}
          className="w-full mt-2 px-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Listing Price ($)
          </label>
          <input
            type="text"
            defaultValue={property.price.replace(/[^0-9]/g, "")}
            className="w-full mt-2 px-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Property Type
          </label>
          <select
            defaultValue={property.type}
            className="w-full mt-2 px-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary"
          >
            <option>Villa</option>
            <option>Penthouse</option>
            <option>Single Family</option>
            <option>Apartment</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Description
        </label>
        <textarea
          rows={4}
          defaultValue={property.description}
          className="w-full mt-2 px-4 py-2.5 rounded-xl border border-border bg-background text-sm outline-none focus:border-secondary resize-none"
        />
      </div>
    </div>
  );
}
