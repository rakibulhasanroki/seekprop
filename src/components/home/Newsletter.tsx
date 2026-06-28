export default function Newsletter() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-9/12">
        <div className="bg-secondary rounded-3xl px-8 py-14 flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-bold text-secondary-foreground">
            Stay Ahead of the Market
          </h2>
          <p className="text-secondary-foreground/70 text-sm max-w-lg">
            Subscribe to receive early access to off-market listings and curated
            quarterly market reports.
          </p>
          <div className="flex items-center gap-3 mt-2 w-full max-w-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-xl bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40 text-sm outline-none focus:border-secondary-foreground/50"
            />
            <button className="px-5 py-2.5 rounded-xl bg-secondary-foreground text-secondary text-sm font-medium hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
