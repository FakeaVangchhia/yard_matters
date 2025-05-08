
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex justify-center items-start mb-12 pt-8">
      {steps.map((step, i) => (
        <div 
          key={i} 
          className={cn(
            "step-item",
            currentStep === i && "active",
            currentStep > i && "complete"
          )}
        >
          <div className="step">
            {currentStep > i ? (
              <CheckIcon className="h-5 w-5" />
            ) : (
              i + 1
            )}
          </div>
          <p className="text-center text-sm mt-2">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
