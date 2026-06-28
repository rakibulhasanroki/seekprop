import { Quote } from "lucide-react";
import FAQ from "./FAQ";

export default function Testimonial() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-9/12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <div className="bg-card border border-border rounded-2xl p-6 relative">
            <Quote size={32} className="text-border absolute top-4 right-4" />
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              "SeekProp made the acquisition of our Manhattan penthouse
              incredibly smooth. Their verification process gave us the
              confidence we needed to make a quick decision on a competitive
              property."
            </p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">
                E
              </div>
              <div>
                <p className="text-sm font-semibold text-secondary">
                  Eleanor Sterling
                </p>
                <p className="text-xs text-muted-foreground">
                  Venture Partner, SF
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">
            Common Questions
          </h2>
          <FAQ />
        </div>
      </div>
    </section>
  );
}
