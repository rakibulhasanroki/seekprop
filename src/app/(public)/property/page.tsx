import MarketInsights from "@/components/property/MarketInsights";
import PropertyList from "@/components/property/PropertyList";
import SearchBar from "@/components/property/SearchBar";

export default function Property() {
  return (
    <main className="w-full py-8">
      <div className="mx-auto max-w-9/12">
        <SearchBar />
        <div className="flex gap-6 mt-6">
          <div className="flex-1">
            <PropertyList />
          </div>
          <div className="w-80 shrink-0">
            <MarketInsights />
          </div>
        </div>
      </div>
    </main>
  );
}
