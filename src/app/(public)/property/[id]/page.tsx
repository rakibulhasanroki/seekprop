import { use } from "react";
import { properties } from "@/lib/data/properties";
import AboutProperty from "@/components/property-detail/AboutProperty";
import AmenitiesFeatures from "@/components/property-detail/AmenitiesFeatures";
import ListingManagement from "@/components/property-detail/ListingManagement";
import PropertyHero from "@/components/property-detail/PropertyHero";
import PropertyInfo from "@/components/property-detail/PropertyInfo";
import PropertyLocation from "@/components/property-detail/PropertyLocation";
import SimilarProperties from "@/components/property-detail/SimilarProperties";

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <main className="w-full py-8">
        <div className="mx-auto max-w-9/12">
          <p className="text-muted-foreground text-sm">Property not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full py-8">
      <div className="mx-auto max-w-9/12">
        <PropertyHero image={property.image} />
        <div className="flex gap-8 mt-8">
          <div className="flex-1 flex flex-col gap-8">
            <PropertyInfo property={property} />
            <AboutProperty description={property.description} />
            <AmenitiesFeatures />
            <PropertyLocation />
          </div>
          <div className="w-72 shrink-0">
            <ListingManagement />
          </div>
        </div>
        <SimilarProperties currentId={property.id} properties={properties} />
      </div>
    </main>
  );
}
