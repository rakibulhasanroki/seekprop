import Image from "next/image";
import { Images, Upload } from "lucide-react";

const photos = [
  "/property1.png",
  "/property2.png",
  "/property3.png",
  "/property1.png",
];

export default function PropertyMediaForm() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Images size={16} className="text-secondary" />
          <h2 className="text-sm font-bold text-primary">Property Media</h2>
        </div>
        <button className="text-xs font-medium text-secondary hover:underline flex items-center gap-1">
          <Upload size={12} /> Add Photos
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="relative col-span-1 row-span-2 h-full rounded-xl overflow-hidden">
          <Image src={photos[0]} alt="Primary" fill className="object-cover" />
          <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-[10px] font-medium px-2 py-0.5 rounded-full">
            PRIMARY
          </span>
        </div>
        <div className="relative h-24 rounded-xl overflow-hidden">
          <Image src={photos[1]} alt="Photo" fill className="object-cover" />
        </div>
        <div className="relative h-24 rounded-xl overflow-hidden">
          <Image src={photos[2]} alt="Photo" fill className="object-cover" />
        </div>
        <div className="relative h-24 rounded-xl overflow-hidden">
          <Image src={photos[3]} alt="Photo" fill className="object-cover" />
        </div>
        <div className="h-24 rounded-xl border border-dashed border-border flex flex-col items-center justify-center gap-1 text-muted-foreground cursor-pointer hover:border-secondary hover:text-secondary transition-colors">
          <Upload size={16} />
          <span className="text-xs">More</span>
        </div>
      </div>
    </div>
  );
}
