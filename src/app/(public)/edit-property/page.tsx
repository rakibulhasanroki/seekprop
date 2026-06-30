import BasicsStep from "@/components/CreateProperty/BasicsStep";
import CreateListingHeader from "@/components/CreateProperty/CreateListingHeader";
import StepIndicator from "@/components/CreateProperty/StepIndicator";
import TrustBadges from "@/components/CreateProperty/TrustBadges";

export default function CreatePropertyPage() {
  return (
    <main className="w-full py-10">
      <div className="mx-auto max-w-9/12">
        <CreateListingHeader />
        <StepIndicator currentStep={1} />
        <BasicsStep />
        <TrustBadges />
      </div>
    </main>
  );
}
