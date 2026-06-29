import Image from "next/image";
import { Images } from "lucide-react";

export default function PropertyHero({ image }: { image: string }) {
  return (
    <div className="relative w-full h-80 rounded-2xl overflow-hidden">
      <Image
        src={image}
        alt="Property"
        fill
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/20" />
      <button className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 text-primary text-xs font-medium px-3 py-2 rounded-xl hover:bg-white transition-colors">
        <Images size={14} />
        Show all 24 photos
      </button>
    </div>
  );
}
