export default function MarketInsights() {
  return (
    <div className="flex flex-col gap-4 sticky top-24">
      <div className="bg-primary rounded-2xl p-5 flex flex-col gap-4">
        <div>
          <h3 className="text-base font-bold text-primary-foreground">
            Market Insights
          </h3>
          <p className="text-xs text-primary-foreground/50 mt-1 leading-relaxed">
            Get exclusive access to off-market listings and weekly real estate
            analysis.
          </p>
        </div>
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm outline-none"
        />
        <button className="w-full py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          Subscribe Now
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4">
        <h3 className="text-sm font-bold text-primary uppercase tracking-wide">
          Regional Trends
        </h3>
        <div>
          <p className="text-xs text-muted-foreground">Median Sale Price</p>
          <div className="flex items-center justify-between mt-1">
            <span className="text-2xl font-bold text-primary">$4.2M</span>
            <span className="text-xs text-secondary font-medium">+12% →</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
          <div>
            <p className="text-xs text-muted-foreground">Days on Market</p>
            <p className="text-lg font-bold text-primary mt-1">14 Days</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Price / Sqft</p>
            <p className="text-lg font-bold text-primary mt-1">$2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}
