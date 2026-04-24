import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BackButton = ({ to, label = "Back" }: { to?: string; label?: string }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outline"
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className="gap-2 rounded-xl border-border/80 bg-card hover:bg-primary-soft hover:text-primary hover:border-primary/30"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Button>
  );
};
