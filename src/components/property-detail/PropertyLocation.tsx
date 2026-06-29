import { ExternalLink } from "lucide-react";

export default function PropertyLocation() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-primary">Location</h2>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-secondary font-medium flex items-center gap-1 hover:underline"
        >
          Get Directions <ExternalLink size={13} />
        </a>
      </div>
      <div className="w-full h-52 rounded-2xl overflow-hidden border border-border bg-muted flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Map placeholder</p>
      </div>
    </div>
  );
}
