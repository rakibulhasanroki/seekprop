const stats = [
  { value: "$2.4B+", label: "Properties Sold" },
  { value: "15k+", label: "Happy Clients" },
  { value: "45+", label: "Global Cities" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "500+", label: "Verified Agents" },
];

export default function Stats() {
  return (
    <section className="w-full py-10 border-b border-border">
      <div className="mx-auto max-w-9/12 ">
        <div className="flex items-center justify-between">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-secondary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
