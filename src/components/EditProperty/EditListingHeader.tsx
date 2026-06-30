import Link from "next/link";
import { Save } from "lucide-react";

export default function EditListingHeader({
  propertyId,
  title,
}: {
  propertyId: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">
        <Link href="/dashboard" className="hover:text-secondary">
          Dashboard
        </Link>
        {" / "}
        <Link href="/browse" className="hover:text-secondary">
          My Listings
        </Link>
        {" / "}
        Edit Listing
      </p>

      <div className="flex items-start justify-between mt-2">
        <div>
          <h1 className="text-2xl font-bold text-primary">
            Edit Property Listing
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Modify the details for your {title} listing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/property/${propertyId}`}
            className="px-4 py-2 rounded-xl border border-border text-sm font-medium text-primary hover:bg-muted transition-colors"
          >
            Cancel
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            <Save size={15} />
            Update Listing
          </button>
        </div>
      </div>
    </div>
  );
}
