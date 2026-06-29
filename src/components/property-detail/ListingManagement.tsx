import { Pencil, Trash2 } from "lucide-react";

export default function ListingManagement() {
  return (
    <div className="sticky top-24 flex flex-col gap-4">
      <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4">
        <h3 className="text-sm font-bold text-primary">Listing Management</h3>
        <p className="text-xs text-muted-foreground -mt-2">
          Manage this property listing as an admin.
        </p>

        <div className="flex flex-col gap-3 border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Listing Status</p>
            <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
              Active
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Days on Market</p>
            <p className="text-xs font-semibold text-primary">12 Days</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Inquiries</p>
            <p className="text-xs font-semibold text-primary">26 Requests</p>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          <Pencil size={14} />
          Edit Listing Details
        </button>

        <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-destructive text-destructive text-sm font-medium hover:bg-destructive/5 transition-colors">
          <Trash2 size={14} />
          Remove Property
        </button>

        <div className="flex items-center gap-3 border-t border-border pt-4">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xs shrink-0">
            J
          </div>
          <div>
            <p className="text-sm font-semibold text-primary">Julian Vance</p>
            <p className="text-xs text-muted-foreground">Lead Listing Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
