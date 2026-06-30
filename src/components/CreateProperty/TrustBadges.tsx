import { ShieldCheck, Zap, Headset } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Verified Network",
    description: "Your listing reaches pre-qualified high-net-worth investors.",
  },
  {
    icon: Zap,
    title: "Fast Approval",
    description:
      "Our team reviews and publishes premium listings within 24 hours.",
  },
  {
    icon: Headset,
    title: "Concierge Support",
    description:
      "Expert help available for optimizing your property presentation.",
  },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {badges.map(({ icon: Icon, title, description }) => (
        <div key={title} className="flex items-start gap-3">
          <Icon
            size={18}
            className="text-secondary shrink-0 mt-0.5"
            strokeWidth={1.5}
          />
          <div>
            <p className="text-sm font-semibold text-primary">{title}</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
