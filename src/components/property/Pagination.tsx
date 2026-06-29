import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-2">
      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-secondary hover:text-secondary transition-colors">
        <ChevronLeft size={15} />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
        1
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground text-sm hover:border-secondary hover:text-secondary transition-colors">
        2
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground text-sm hover:border-secondary hover:text-secondary transition-colors">
        3
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-secondary hover:text-secondary transition-colors">
        <ChevronRight size={15} />
      </button>
    </div>
  );
}
