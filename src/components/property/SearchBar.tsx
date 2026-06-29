import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 bg-background">
        <Search size={16} className="text-muted-foreground shrink-0" />
        <input
          type="text"
          placeholder="Search by city, neighborhood, or ZIP..."
          className="flex-1 text-sm outline-none bg-transparent text-foreground placeholder:text-muted-foreground"
        />
      </div>
      <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
        <SlidersHorizontal size={15} />
        Filters
      </button>
    </div>
  );
}
