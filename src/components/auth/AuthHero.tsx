import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthHero() {
  return (
    <div className="relative hidden md:flex w-1/2 flex-col justify-between p-10">
      <Image
        src="/hero.png"
        alt="Property"
        fill
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative z-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
        >
          <ArrowLeft size={15} />
          Back to site
        </Link>
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white leading-tight">
          Unlock Premium <br /> Property Intelligence.
        </h2>
        <p className="text-sm text-white/70 mt-3 max-w-sm leading-relaxed">
          Join an exclusive community of investors and homeowners leveraging
          data-driven insights to find their next masterpiece.
        </p>
      </div>
    </div>
  );
}
