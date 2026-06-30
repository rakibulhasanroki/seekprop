import { use } from "react";
import { properties } from "@/lib/data/properties";
import AboutProperty from "@/components/property-detail/AboutProperty";
import AmenitiesFeatures from "@/components/property-detail/AmenitiesFeatures";
import ListingManagement from "@/components/property-detail/ListingManagement";
import PropertyHero from "@/components/property-detail/PropertyHero";
import PropertyInfo from "@/components/property-detail/PropertyInfo";
import PropertyLocation from "@/components/property-detail/PropertyLocation";
import SimilarProperties from "@/components/property-detail/SimilarProperties";
import EditListingHeader from "@/components/EditProperty/EditListingHeader";
import PropertyMediaForm from "@/components/EditProperty/PropertyMediaForm";
import PropertyDetailsForm from "@/components/EditProperty/PropertyDetailsForm";
import FeaturesAmenitiesForm from "@/components/EditProperty/FeaturesForm";
import LocationForm from "@/components/EditProperty/LocationForm";
import ListingSummary from "@/components/EditProperty/ListingSummary";

const isAdmin = true;

export default function PropertyDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ edit?: string }>;
}) {
  const { id } = use(params);
  const { edit } = use(searchParams);
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

  const isEditMode = edit === "true" && isAdmin;

  if (isEditMode) {
    return (
      <main className="w-full py-8">
        <div className="mx-auto max-w-9/12">
          <EditListingHeader propertyId={property.id} title={property.title} />
          <div className="flex gap-6 mt-8">
            <div className="flex-1 flex flex-col gap-6">
              <PropertyMediaForm />
              <PropertyDetailsForm property={property} />
              <FeaturesAmenitiesForm property={property} />
            </div>
            <div className="w-80 shrink-0 flex flex-col gap-6">
              <LocationForm property={property} />
              <ListingSummary listingId={property.id} />
            </div>
          </div>
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
            <ListingManagement listingId={property.id} />
          </div>
        </div>
        <SimilarProperties currentId={property.id} properties={properties} />
      </div>
    </main>
  );
}
