import { Check } from "lucide-react";

export const Stepper = ({
  steps,
  current,
}: {
  steps: string[];
  current: number; // 1-based
}) => (
  <div className="container-page py-8">
    <div className="flex items-center justify-between max-w-4xl mx-auto">
      {steps.map((label, i) => {
        const idx = i + 1;
        const done = idx < current;
        const active = idx === current;
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2 min-w-0">
              <div
                className={`grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition-all ${
                  done
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : active
                    ? "bg-primary text-primary-foreground shadow-glow scale-110"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {done ? <Check className="h-5 w-5" /> : idx}
              </div>
              <div
                className={`text-xs font-medium whitespace-nowrap ${
                  active || done ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 mb-6 rounded-full ${
                  done ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  </div>
);
