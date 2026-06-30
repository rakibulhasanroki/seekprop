const steps = [
  { number: 1, label: "Basics" },
  { number: 2, label: "Details" },
  { number: 3, label: "Media" },
];

export default function StepIndicator({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="flex items-center mb-10">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="flex items-center flex-1 last:flex-none"
        >
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                ${
                  step.number <= currentStep
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
            >
              {step.number}
            </div>
            <span
              className={`text-xs font-medium ${
                step.number <= currentStep
                  ? "text-secondary"
                  : "text-muted-foreground"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-px mx-3 ${
                step.number < currentStep ? "bg-secondary" : "bg-border"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
