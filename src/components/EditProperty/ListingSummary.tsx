import { BarChart3, Archive } from "lucide-react";

export default function ListingSummary({ listingId }: { listingId: string }) {
  return (
    <div className="bg-primary rounded-2xl p-6 flex flex-col gap-4">
      <h3 className="text-sm font-bold text-secondary">Listing Summary</h3>

      <div className="flex flex-col gap-3 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-primary-foreground/50">Listing ID</span>
          <span className="text-primary-foreground font-medium">
            {listingId}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-primary-foreground/50">Visibility</span>
          <span className="text-secondary font-medium">Public</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-primary-foreground/50">Views (30d)</span>
          <span className="text-primary-foreground font-medium">1,402</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-primary-foreground/50">Status</span>
          <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
            Active
          </span>
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary-foreground/10 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/15 transition-colors">
        <BarChart3 size={14} />
        View Analytics
      </button>

      <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-destructive text-white text-sm font-medium hover:opacity-90 transition-opacity">
        <Archive size={14} />
        Archive Listing
      </button>
    </div>
  );
}
