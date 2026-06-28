import { Search, Eye, FilePen, BadgeCheck, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse",
    description: "Get dedicated assistance throughout your entire journey.",
  },
  {
    icon: Eye,
    title: "View",
    description: "Book virtual tours or private in-person viewings instantly.",
  },
  {
    icon: FilePen,
    title: "Create",
    description: "Submit offers and customize your purchase requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Manage",
    description: "Finalize documentation and transition to your new home.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Explore our exclusive collections using intelligent filters.",
  },
];

export default function Journey() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-9/12">
        <h2 className="text-2xl font-bold text-primary text-center mb-12">
          The SeekProp Journey
        </h2>

        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="absolute top-6 left-[10%] right-[10%] h-px bg-border hidden md:block" />

          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center z-10">
                <step.icon
                  size={20}
                  className="text-muted-foreground"
                  strokeWidth={1.5}
                />
              </div>
              <p className="font-bold text-primary">{step.title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed ">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
