import {
  Wifi,
  Car,
  Waves,
  Dumbbell,
  Shield,
  Wine,
  Tv,
  Flame,
} from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Fiber WiFi" },
  { icon: Car, label: "4 Car Garage" },
  { icon: Waves, label: "Infinity Pool" },
  { icon: Dumbbell, label: "Private Gym" },
  { icon: Shield, label: "Security System" },
  { icon: Wine, label: "Wine Cellar" },
  { icon: Tv, label: "Home Theater" },
  { icon: Flame, label: "Spa & Sauna" },
];

export default function AmenitiesFeatures() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-primary">Amenities & Features</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {amenities.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-3"
          >
            <Icon
              size={15}
              className="text-secondary shrink-0"
              strokeWidth={1.5}
            />
            <span className="text-sm text-primary">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
