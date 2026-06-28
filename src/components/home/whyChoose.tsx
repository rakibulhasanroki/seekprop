import { BadgeCheck, LayoutDashboard, ShieldCheck, Clock } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Listings",
    description:
      "Every property on our platform undergoes a rigorous 30-point verification process by our in-house experts.",
  },
  {
    icon: LayoutDashboard,
    title: "Easy Management",
    description:
      "A centralized dashboard to manage viewings, documents, and offers with complete transparency.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Platform",
    description:
      "Secure, encrypted transactions and a dedicated concierge team available around the clock for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to assist you at every step of your property journey.",
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full py-16 bg-primary">
      <div className="mx-auto max-w-9/12">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-primary-foreground">
            Why Choose SeekProp
          </h2>
          <p className="text-sm text-primary-foreground/60 mt-2 max-w-md">
            We combine institutional-grade data with a boutique service approach
            to redefine property acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-secondary transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Icon size={20} className="text-secondary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-primary-foreground font-semibold text-base">
                  {title}
                </h3>
                <p className="text-primary-foreground/50 text-sm mt-1 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
